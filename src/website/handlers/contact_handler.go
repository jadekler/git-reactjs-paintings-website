package handlers

import (
    "net/http"
    "html/template"
)

type ContactHandler struct{}

func (h *ContactHandler) ServeHTTP(resp http.ResponseWriter, req *http.Request) {
    p := page{
        title: "not needed",
    }
    templates := template.Must(template.ParseFiles("templates/layout.html", "templates/contact.html"))
    templates.ExecuteTemplate(resp, "base", p)
}