package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

// serve starts fib-server
func serve() {
	fmt.Println("Starting fibonacci server...")

	router := newRouter()
	log.Fatal(http.ListenAndServe(":8080", router))
}

func newRouter() *httprouter.Router {
	router := httprouter.New()

	router.GET("/api", Timeout(Index, 10))
	router.GET("/api/hello/:name", Timeout(Hello, 10))
	router.GET("/api/fibonacci/:numDigits", Timeout(Fibonacci, 10))

	return router
}

func main() {
	serve()
}
