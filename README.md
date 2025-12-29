Site vitrine one page (français) pour **NFZI Talent** — consultant en recrutement freelance (Île-de-France).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact (service tiers)

Le formulaire envoie les données directement vers un service tiers (Formspree, Getform, Basin, etc.) : aucun backend applicatif n’est requis.

- Copier [.env.example](.env.example) vers `.env.local`
- Renseigner `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`

La page one-page est dans `src/app/page.tsx`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Déploiement

Déploiement recommandé : Vercel (ou tout hébergeur compatible Next.js).
