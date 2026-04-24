# Intro to DevOps Deployment Website

This is a simple static website created for practicing DevOps deployment concepts.

## Files Included

- `index.html` - Main HTML structure
- `styles.css` - CSS styling for the website
- `script.js` - Simple JavaScript for interactivity
- `README.md` - This file

## How to Deploy

### Option 1: Static Web Server (Simple)
You can deploy this website using any static web server:

#### Using Python (built-in)
```bash
# Navigate to this directory
python -m http.server 8000
```
Then visit http://localhost:8000 in your browser

#### Using Node.js (http-server)
```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Run the server
http-server
```

### Option 2: Cloud Deployment Options
For DevOps practice, you might consider deploying to:

- **GitHub Pages**: Push this repository to GitHub and enable GitHub Pages
- **Netlify**: Connect your GitHub repo or drag-and-drop the folder
- **Vercel**: Similar to Netlify for static sites
- **AWS S3**: Upload to an S3 bucket configured for static website hosting
- **Azure Static Web Apps**: Deploy directly from GitHub
- **Firebase Hosting**: Deploy using Firebase CLI

### Option 3: Containerized Deployment (Docker)
Create a Dockerfile:
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

Then build and run:
```bash
docker build -t devops-website .
docker run -p 8080:80 devops-website
```

## Learning Objectives
By deploying this website, you can practice:
- File transfer methods (FTP, SCP, rsync)
- Web server configuration (nginx, apache)
- CI/CD pipelines
- Environment management
- Monitoring and logging
- Rollback procedures
- Infrastructure as Code concepts

## Customization
Feel free to modify the content, styling, or functionality to match your learning goals!