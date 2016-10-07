package main

import (
    "net/http"
    "github.com/gorilla/mux"
    "website/handlers"
    "log"
    "fmt"
    "os"
)

func main() {
    port := "8000"
    if os.Getenv("PORT") != "" {
        port = os.Getenv("PORT")
    }

    r := mux.NewRouter()
    r.Handle("/", &handlers.HomeHandler{})

    fmt.Printf("Running on port %s\n", port)

    log.Fatal(http.ListenAndServe(":8000", r))
}