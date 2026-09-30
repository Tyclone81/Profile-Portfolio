package http

import (
	"html/template"
	"net/http"
	"profile-portfolio/internal/data"
)

func ServeHome() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" {
			http.Error(w, "404 Page Not Found", http.StatusNotFound)
			return
		}

		portfolioData := data.GetAccountRegistry()

		tmpl, err := template.ParseFiles("ui/templates/layout.html")
		if err != nil {
			http.Error(w, "Internal Template Error: "+err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		_ = tmpl.Execute(w, portfolioData)
	}
}
