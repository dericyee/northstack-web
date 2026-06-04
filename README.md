# Northstack

Marketing site for **Northstack** — a studio that helps established companies
become AI-native before their competitors do.

Built on the premise of Sequoia's
[*Services: The New Software*](https://sequoiacap.com/article/services-the-new-software/):
for every \$1 spent on software, ~\$6 is spent on services. The companies that
capture that \$6 with AI-native tooling — at software margins — pull away from
the ones that don't.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- No CSS framework — a single hand-written design system in `app/globals.css`
- Contact form leads are written to **Airtable**

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in AIRTABLE_API_KEY
npm run dev                  # http://localhost:3000
```

## Leads → Airtable

The contact form posts to `app/api/lead/route.ts`, which writes a row to the
Airtable base **"Northstack — Leads"**.

1. Create a Personal Access Token at <https://airtable.com/create/tokens> with
   the **`data.records:write`** scope and access to the leads base.
2. Put it in `.env.local`:

   ```
   AIRTABLE_API_KEY=pat_xxxxxxxx
   AIRTABLE_BASE_ID=appoQAyt0FaRRf9YM
   AIRTABLE_TABLE_NAME=Leads
   ```

The base/table IDs above are pre-created. The route validates input, blocks
bots with a honeypot, and degrades gracefully (clear error) if the key is
missing.

## Project structure

```
app/
  layout.tsx          # metadata, fonts, favicon
  page.tsx            # the full single-page site
  globals.css         # the entire design system
  api/lead/route.ts   # form handler → Airtable
components/
  ContactForm.tsx     # the "Let's chat" form (client)
  Enhance.tsx         # scroll-reveal + nav state (client)
```

## Editing the brand

The name "Northstack" and copy live in `app/page.tsx` and `app/layout.tsx`.
Colors and spacing are CSS variables at the top of `app/globals.css`.

## Deploying

Deploy on any Node host (Vercel recommended — zero config for Next.js).
Set the `AIRTABLE_*` environment variables in the host's dashboard.

## Pages

- `/` — the main single-page site
- `/about` — about Deric Yee (founder of Sigma School) and the Northstack story

## A note on the Sequoia content

Sequoia's site blocks scraping/hotlinking (and this build environment's network
is allowlisted), so:

- The "\$1 software : \$6 services" visual is an **original recreation** in
  Northstack's style.
- The "blog screenshot" in the *Why now* section is a **styled, readable
  preview** showing a short excerpt, clearly attributed and linked to the
  original essay — no copyrighted page image is embedded. To use a real
  screenshot instead, drop a PNG into `public/` and swap the `.browser-frame`
  block in `app/page.tsx` for an `<img>`.
