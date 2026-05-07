# YourWebsayt

Premium, conversion-focused creative agency website built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and `next/image`.

## Scripts

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm run start
```

## Main editable content

- Branding and contact info: `data/site.ts`
- Homepage trust / service data: `data/home.ts`
- Services: `data/services.ts`
- Portfolio projects: `data/portfolio.ts`
- Packages: `data/pricing.ts`
- Studio story and team: `data/team.ts`
- Multi-page storytelling and qualification content: `data/experience.ts`
- Design tokens and global visual system: `app/globals.css`, `styles/utilities.css`

## Notes

- Contact form validates fields on the client and opens a prefilled WhatsApp message.
- All visible copy is in Azerbaijani and stored in typed files for future localization.
- Project thumbnails are SVG assets inside `public/images/projects/`.
