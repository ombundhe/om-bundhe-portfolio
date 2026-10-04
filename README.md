# Om Bundhe — Portfolio

A responsive React + CSS portfolio built with Vite.

## Requirements
- Node.js 20 or newer (Node.js 22 LTS recommended)
- npm

## Run locally
1. Extract the ZIP file.
2. Open the `om_bundhe_portfolio` folder in VS Code.
3. Open the integrated terminal and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL shown by Vite (usually `http://localhost:5173`).

## Edit, add, or remove projects
Open `src/App.jsx` and find the `const projects = [...]` array near the top.

Each project has these fields:
- `number`: project order label (01, 02, 03, ...)
- `title`: project name
- `category`: project type
- `description`: short project summary
- `tech`: array of technologies
- `github`: public repository URL, or `''` if unavailable
- `demo`: live website URL, or `''` if unavailable
- `icon`: one of the imported Lucide icon components

### Add a project
Copy one project object inside the array, change its details, and give it the next number. Keep a comma between objects.

### Remove a project
Delete that project's entire object, including its comma as appropriate.

### Update a project
Change the relevant field values. Ensure the project description and technologies match what you actually built. Do not add private or unverified URLs.

## Other personalization
- Check the phone number, email, profile URLs, and project URLs in `src/App.jsx`.
- Add your resume PDF to `public/resume.pdf`; the View Resume link uses this filename.
- Review education and certification details before publishing.

## Build for deployment
```bash
npm run build
npm run preview
```
The production website is generated in `dist/`.

## Deploy
Import the project repository into Vercel or Netlify. Use `npm run build` as the build command and `dist` as the output directory.

## Stack
React, Vite, CSS, Lucide React icons.
