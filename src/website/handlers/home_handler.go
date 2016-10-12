package handlers

import (
    "net/http"
    "html/template"
)

type HomeHandler struct{}

func (h *HomeHandler) ServeHTTP(resp http.ResponseWriter, req *http.Request) {
    p := page{
        title: "not needed",
    }
    templates := template.Must(template.ParseFiles("templates/layout.html", "templates/home.html"))
    templates.ExecuteTemplate(resp, "base", p)
}