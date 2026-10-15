# Prakash Sharma — Developer & Creator Portfolio

A responsive game-inspired portfolio built with React, Vite, and CSS.

## Requirements
- Node.js 20.19+ or 22.12+ recommended
- npm
- A modern browser

## Run locally
1. Extract the ZIP file.
2. Open the `prakash-portfolio` folder in VS Code.
3. Open a terminal in that folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL Vite prints (usually `http://localhost:5173`).

## Create a production build
```bash
npm run build
npm run preview
```
The production output will be in `dist/`.

## Personalize before publishing
Open `src/main.jsx` and update:
- `GITHUB` and `EMAIL` near the top.
- The `projects` array: replace descriptions and add real demo/repository URLs.
- Add real screenshots or video thumbnails when you have them. The current project artwork is CSS-generated placeholder art, not screenshots of completed games.
- Update skill labels to match your current level and experience.
- Add other links (YouTube, Discord, LinkedIn, itch.io) if you want them displayed.

## Hosting later
- **Vercel:** import the GitHub repository; framework Vite, build command `npm run build`, output directory `dist`.
- **GitHub Pages:** possible with Vite; configure the correct `base` path if deploying to a project subpath.

## Notes
- Contact links use `mailto:`. There is no backend contact form.
- Google Fonts are loaded from Google Fonts when online; system fallbacks are provided.
- No fabricated employment history or client testimonials are included.
