package handlers

import (
    "net/http"
    "html/template"
)

type CardsHandler struct{}

func (h *CardsHandler) ServeHTTP(resp http.ResponseWriter, req *http.Request) {
    p := page{
        title: "not needed",
    }
    templates := template.Must(template.ParseFiles("templates/layout.html", "templates/cards.html"))
    templates.ExecuteTemplate(resp, "base", p)
}