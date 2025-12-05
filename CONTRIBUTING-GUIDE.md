# Contributing to Awesome GitHub Repositories

Thank you for your interest in contributing! We welcome contributions from developers worldwide. This guide will help you add repositories to our collection.

## What to Contribute

- **New repositories** - Share awesome open-source projects you've discovered
- **Bug fixes** - Report and fix dead links or incorrect information
- **Documentation** - Improve guides and contribution guidelines
- **Improvements** - Suggest better ways to organize or present repositories

## Before You Start

- Check if the repository already exists in our collection
- Ensure the repository is **public** and **actively maintained**
- The project should have meaningful content and good documentation
- Verify you can access the GitHub repository

## How to Contribute (Step-by-Step)

### 1. Fork the Repository

Visit [Awesome-GitHub-Repositories](https://github.com/avinash201199/Awesome-GitHub-Repositories) and click the "Fork" button.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/Awesome-GitHub-Repositories.git
cd Awesome-GitHub-Repositories
```

### 3. Create a Feature Branch

```bash
git checkout -b add/repository-name
```

### 4. Edit `docs/data/repositories.json`

Add your repository entry to the JSON file. Follow this exact structure:

```json
{
  "id": "51",
  "name": "Repository Name",
  "owner": "owner-username",
  "url": "https://github.com/owner/repo",
  "description": "Brief description (max 120 characters)",
  "category": "Category Name",
  "stars": 1000,
  "language": "Programming Language",
  "verified": false
}
```

### 5. Validate Your JSON

Ensure your JSON is valid:

```bash
python -m json.tool docs/data/repositories.json
```

Or use `jq`:

```bash
jq . docs/data/repositories.json
```

### 6. Commit Your Changes

```bash
git add docs/data/repositories.json
git commit -m "Add: Repository Name by owner-username"
```

### 7. Push to Your Fork

```bash
git push origin add/repository-name
```

### 8. Open a Pull Request

1. Go to the original repository
2. Click "New Pull Request"
3. Select your branch
4. Add a clear title: `Add: Repository Name`
5. Include repository details in the description
6. Submit the PR

## Requirements & Guidelines

### Code Quality

- ✅ Repository must be public
- ✅ Repository should be actively maintained
- ✅ Code should follow good practices
- ✅ Documentation should be clear

### Submission Requirements

- **One repository per PR** - Keep submissions focused
- **Accurate descriptions** - Keep descriptions under 120 characters
- **Canonical URLs** - Use the direct GitHub repository URL
- **Correct category** - Use an existing category from the list below
- **No duplicates** - Check if the repo already exists
- **Valid JSON** - Ensure JSON syntax is correct

### Prohibited Content

- ❌ Commercial spam or self-promotion without merit
- ❌ Repositories with no meaningful content
- ❌ Abandoned/inactive projects
- ❌ Private repositories
- ❌ Duplicate submissions

## Categories

Choose one of these existing categories:

- Machine Learning
- Web Development
- DevOps
- Data Science
- Education
- Tools
- Security
- Mobile
- Game Development

**New categories** - Open an issue first to propose new categories

## JSON Field Reference

| Field | Type | Required | Example |
|-------|------|----------|---------|
| `id` | string | Yes | "51" |
| `name` | string | Yes | "React" |
| `owner` | string | Yes | "facebook" |
| `url` | string | Yes | "https://github.com/facebook/react" |
| `description` | string | Yes | "UI library for building components" |
| `category` | string | Yes | "Web Development" |
| `stars` | number | Yes | 220000 |
| `language` | string | Yes | "JavaScript" |
| `verified` | boolean | Yes | false |

## Review Process

1. **Initial Response**: Within 7 days
2. **Feedback**: If changes needed, we'll comment on your PR
3. **Approval**: Once approved, your PR will be merged
4. **Verification**: Maintainers may update `verified` status

## Tips for Success

- ✓ Write clear, concise descriptions
- ✓ Check the repository stars on GitHub
- ✓ Verify the owner/repo names are correct
- ✓ Use the correct programming language
- ✓ Test your JSON locally before submitting
- ✓ Include why you think the repo is awesome in your PR description

## Questions?

- 📧 Open an issue: [GitHub Issues](https://github.com/avinash201199/Awesome-GitHub-Repositories/issues)
- 💬 Start a discussion: [GitHub Discussions](https://github.com/avinash201199/Awesome-GitHub-Repositories/discussions)
- 🐦 Tweet at us: [@AvinashSingh_20](https://twitter.com/AvinashSingh_20)

## Code of Conduct

By contributing, you agree to:
- Be respectful and inclusive
- No harassment or discrimination
- Focus on improving the project
- Report violations responsibly

Thank you for helping build this resource! 🚀
