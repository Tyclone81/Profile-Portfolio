package http_test

import (
	"bytes"
	"html/template"
	"testing"

	"profile-portfolio/internal/data"
)

func TestTemplate(t *testing.T) {
	tmpl, err := template.ParseFiles("../../../ui/templates/layout.html")
	if err != nil {
		t.Fatalf("Parse error: %v", err)
	}
	var buf bytes.Buffer
	err = tmpl.Execute(&buf, data.GetAccountRegistry())
	if err != nil {
		t.Fatalf("Execute error: %v", err)
	}
}
