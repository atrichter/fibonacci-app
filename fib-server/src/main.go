package main

import (
  "fmt"
  "github.com/julienschmidt/httprouter"
  "net/http"
  "log"
  "strconv"
)

func enableCors(w *http.ResponseWriter) {
  (*w).Header().Set("Access-Control-Allow-Origin", "*")
  (*w).Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func Index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
  fmt.Fprint(w, "Welcome!\n")
}

func Hello(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
  fmt.Fprintf(w, "hello, %s!\n", ps.ByName("name"))
}

func Fibonacci(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
  if numDigits, err := strconv.Atoi(ps.ByName("numDigits")); err == nil {
    num1 := int64(0)
    num2 := int64(1)
    nextNum := int64(0)

    for i := 1; i <= numDigits; i++ {
      if(i == 1) {
        fmt.Fprintf(w, "%d", num1)
        continue
      }

      if(i == 2) {
        fmt.Fprintf(w, ", %d", num2)
        continue
      }

      nextNum = num1 + num2
      num1 = num2
      num2 = nextNum

      fmt.Fprintf(w, ", %d", nextNum)
    }
  }

  // add headers to allow cors
  enableCors(&w)
}

func main() {
  router := httprouter.New()
  router.GET("/api", Index)
  router.GET("/api/hello/:name", Hello)
  router.GET("/api/fibonacci/:numDigits", Fibonacci)
  log.Fatal(http.ListenAndServe(":8080", router))
}