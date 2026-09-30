package models

type SocialLink struct {
	Platform string
	URL      string
}

type Project struct {
	Title        string
	Description  string
	Type         string // "Internal" or "Personal"
	Technologies []string
	SourceURL    string
}

type Article struct {
	Title    string
	Platform string
	URL      string
	Date     string
}

type Experience struct {
	Role         string
	Company      string
	Timeline     string
	BulletPoints []string
}

type SystemData struct {
	Name        string
	Title       string
	Bio         string
	PhotoPath   string
	ResumePath  string
	Socials     []SocialLink
	Skills      []string
	ChemSkills  []string
	CheMania    []string
	Hobbies     []string
	WorkHistory []Experience
	Projects    []Project
	Articles    []Article
}
