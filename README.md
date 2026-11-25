# Anagha George portfolio

A single-page portfolio for a Master of Pharmaceutical Science graduate seeking QC Analyst, Laboratory Analyst or Quality Assurance roles. The hero draws an HPLC chromatogram trace on load, and the content leads with the validated thesis assay.

## Technology stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- Google Fonts (Newsreader, Instrument Sans) via `next/font`

No API keys or environment variables are needed.

## Run locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. The first run downloads the fonts, so it needs an internet connection.

To check a production build: `npm run build && npm start`.

## Customize the content

- **All text** is in `data/content.js`: profile, hero numbers, about, thesis project, coursework, experience, skills, education.
- **CV file**: replace `public/Anagha_George_CV.pdf` with a new PDF of the same name.
- **Colours**: edit the CSS variables at the top of `app/globals.css` (light and `.dark` values).
- **Section order**: edit `app/page.jsx`.
- **Privacy**: `data/content.js` includes the phone number from the CV. Delete the `phone` line and the Phone row in `components/Contact.jsx` to remove it.

## Structure

```
app/          layout, page, global styles
components/   one component per section, plus Chromatogram and ThemeToggle
data/         content.js (all editable content)
public/       CV PDF
```

## Deploy

Push to GitHub and import the repo into Vercel or Netlify. No configuration is needed.
