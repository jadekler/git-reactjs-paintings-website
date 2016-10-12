package handlers

import (
    "net/http"
    "html/template"
)

type CustomWorksHandler struct{}

func (h *CustomWorksHandler) ServeHTTP(resp http.ResponseWriter, req *http.Request) {
    p := page{
        title: "not needed",
    }
    templates := template.Must(template.ParseFiles("templates/layout.html", "templates/custom_works.html"))
    templates.ExecuteTemplate(resp, "base", p)
}