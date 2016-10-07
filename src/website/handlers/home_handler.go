package handlers

import (
    "net/http"
    "html/template"
)

type HomeHandler struct{}

type page struct {
    title string
}

func (h *HomeHandler) ServeHTTP(resp http.ResponseWriter, req *http.Request) {
    p := page{
        title: "Hanna Schulz Photography",
    }
    templates := template.Must(template.ParseFiles("templates/layout.html", "templates/home.html"))
    templates.ExecuteTemplate(resp, "base", p)
}