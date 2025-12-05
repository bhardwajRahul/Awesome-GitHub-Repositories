# Static Website for Awesome GitHub Repositories

This folder contains the static website for the Awesome GitHub Repositories project, hosted on GitHub Pages.

## Structure

```
docs/
├── index.html           # Home page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # Main JavaScript (search, filter)
├── pages/
│   ├── explore.html    # Browse and filter repos
│   ├── about.html      # About the project
│   ├── contribute.html # Contribution guidelines
│   └── contact.html    # Contact & FAQ
└── data/
    └── repositories.json # Repository database
```

## How to Use

1. **Home Page** (`index.html`) - Browse featured categories
2. **Explore** (`pages/explore.html`) - Search and filter all repositories
3. **About** (`pages/about.html`) - Learn about the project
4. **Contribute** (`pages/contribute.html`) - Follow guidelines to add repos
5. **Contact** (`pages/contact.html`) - Get in touch or FAQ

## Hosting with GitHub Pages

This site is automatically hosted on GitHub Pages at:
https://avinash201199.github.io/Awesome-GitHub-Repositories/

### Enable GitHub Pages

1. Go to repository settings
2. Scroll to "GitHub Pages"
3. Set source to "Deploy from a branch"
4. Select `main` branch and `/docs` folder
5. Save

The site will be live in a few minutes!

## Repository JSON Schema

Add repositories to `docs/data/repositories.json` with this structure:

```json
{
  "id": "unique-id",
  "name": "Repository Name",
  "owner": "owner-username",
  "url": "https://github.com/owner/repo",
  "description": "Brief description (max 120 chars)",
  "category": "Category Name",
  "stars": 1234,
  "language": "JavaScript",
  "verified": false
}
```

### Valid Categories

- Machine Learning
- Web Development
- DevOps
- Data Science
- Security
- Education
- Tools
- Mobile
- Game Development

## Features

✅ Search repositories by name/description/owner
✅ Filter by category
✅ Responsive design (mobile-friendly)
✅ Zero dependencies (vanilla HTML/CSS/JS)
✅ Fast loading
✅ SEO friendly

## Development

No build process needed! Just edit files and commit.

For local testing:
```bash
# Start a simple HTTP server
python3 -m http.server 8000
# Visit http://localhost:8000/docs
```

## License

MIT - See LICENSE file in the root directory
