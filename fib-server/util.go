package main

import (
	"net/http"
	"time"

	"github.com/julienschmidt/httprouter"
)

// Timeout applies a specified timeout to a web request call
func Timeout(handler func(http.ResponseWriter, *http.Request, httprouter.Params), timeoutSecs int) func(http.ResponseWriter, *http.Request, httprouter.Params) {
	return func(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
		http.TimeoutHandler(newRouterConverter(p, handler), time.Second*time.Duration(timeoutSecs), "timed out").ServeHTTP(w, r)
	}
}

type httprouterConverter struct {
	p       httprouter.Params
	handler func(http.ResponseWriter, *http.Request, httprouter.Params)
}

func newRouterConverter(p httprouter.Params, handler func(http.ResponseWriter, *http.Request, httprouter.Params)) *httprouterConverter {
	return &httprouterConverter{p, handler}
}

func (c *httprouterConverter) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	c.handler(enableCors(w), r, c.p)
}

// Add headers to allow cors
func enableCors(w http.ResponseWriter) http.ResponseWriter {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	return w
}
