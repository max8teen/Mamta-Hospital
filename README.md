# Mamta Hospital — Website

Built with Vite + React. Mobile-first, fully responsive.

## Run locally
```
npm install
npm run dev
```

## Build for production
```
npm run build
```
Output goes to `dist/`.

## Deploy on Vercel
1. Push this whole folder to a GitHub repo (root level — don't nest it inside a subfolder).
2. Import the repo in Vercel.
3. Framework Preset: **Vite** (should auto-detect).
4. Leave Build Command, Output Directory, and Install Command all OFF/default — Vite's
   defaults (`vite build`, `dist`, `npm install`) are correct. Do not manually
   override Output Directory to `.` — that was a mistake from an earlier version
   of this project and will break the deploy.
5. Deploy.

## Adding real photos
There are three placeholder boxes right now (each says "Add ___ photo here"):
1. Hero photo — doctor with patient (`src/components/HeroSection.jsx`)
2. Why Choose Us photo — dental/clinic shot (`src/components/WhyChooseUsSection.jsx`)
3. Dr. Mamta's photo — circular headshot (`src/components/DoctorSection.jsx`)

To swap a placeholder for a real photo:
1. Drop the image file into `src/assets/` (e.g. `src/assets/hero-doctor.jpg`).
2. In the relevant component, add at the top:
   `import heroPhoto from '../assets/hero-doctor.jpg';`
3. Replace the placeholder `<div className="hero-photo-placeholder">...</div>`
   with `<img src={heroPhoto} alt="Doctor consulting a patient at Mamta Hospital" />`

Use real, properly licensed photos only — either the hospital's own photos
(best for trust and SEO) or photos you have a license to use.

## Editing content
All text (phone numbers, address, services, doctor bio, etc.) lives in
`src/data/content.js` — edit there instead of hunting through components.
