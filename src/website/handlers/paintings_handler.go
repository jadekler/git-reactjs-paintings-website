package handlers

import (
    "net/http"
    "html/template"
)

type PaintingsHandler struct{}

func (h *PaintingsHandler) ServeHTTP(resp http.ResponseWriter, req *http.Request) {
    p := page{
        title: "not needed",
    }
    templates := template.Must(template.ParseFiles("templates/layout.html", "templates/paintings.html"))
    templates.ExecuteTemplate(resp, "base", p)
}