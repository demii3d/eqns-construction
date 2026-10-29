# EQNS website

React + TypeScript + Vite + Tailwind CSS v4 + React Router. Framer Motion for subtle motion, Lucide for icons.

    npm install
    npm run dev        # development
    npm run build      # typecheck + production build (emits dist/sitemap.xml)
    npm run preview    # serve the production build

## Where to edit
- `src/data/site.ts`: contact details, social URLs, legal details (empty = hidden)
- `src/data/services.ts`: the seven services and their pages
- `src/data/content.ts`, `navigation.ts`, `seo.ts`, `images.ts`: copy, menus, metadata, photography
- `src/styles/index.css`: design tokens (colours, type, spacing, buttons, fields)

## Environment (.env.example)
- `VITE_SITE_URL`: production origin for canonical URLs and sitemap
- `VITE_ENQUIRY_ENDPOINT`: JSON POST endpoint for the enquiry form. Without it the form never claims delivery (dev: labelled preview; production: "not accepting enquiries yet").
Also update the Sitemap line in `public/robots.txt`.

## Notes
Photographs in `public/images` are Unsplash stock images illustrating themes only; they do not depict EQNS projects. Privacy and Cookie pages are draft structures marked noindex and need owner/legal review.
