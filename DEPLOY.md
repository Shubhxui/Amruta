# Deploying Amruta to Cloudflare Pages

This is a **static Astro site** — it builds to a `dist/` folder of plain HTML/CSS/JS
with no server or database. Cloudflare Pages hosts it for **free**, with unlimited
bandwidth, free HTTPS, and fast delivery across India.

Repo: <https://github.com/Shubhxui/Amruta.git>

---

## 1. Push the code to GitHub

Already initialised and committed locally. To publish:

```bash
git remote add origin https://github.com/Shubhxui/Amruta.git   # (done by setup)
git push -u origin main
```

Every future change is one commit + push away:

```bash
git add -A
git commit -m "Update content"
git push
```

## 2. Connect Cloudflare Pages (one time)

1. Sign in at <https://dash.cloudflare.com> (create a free account if needed).
2. Go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Authorise GitHub and pick the **Amruta** repo.
4. Set the build settings:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable (recommended):** `NODE_VERSION = 22`
     (the repo also pins this via `.nvmrc`)
5. Click **Save and Deploy**.

In ~1 minute the site is live at `https://amruta.pages.dev` (or similar).
**Every push to `main` now auto-deploys**, and pull requests get their own preview URL.

## 3. Add the custom domain

1. In the Pages project → **Custom domains → Set up a custom domain**.
2. Enter the domain, e.g. `amrutamaternityhospital.com` (and `www.`).
3. Follow the DNS instructions:
   - If the domain is **registered/managed on Cloudflare**, it's automatic.
   - If it's elsewhere (GoDaddy/Hostinger/etc.), add the **CNAME** record they show.
4. SSL/HTTPS is issued automatically — no extra step.

Don't have a domain yet? Register one (~₹800–1,200/yr) at Namecheap, GoDaddy,
Hostinger, or Cloudflare Registrar, then do step 3.

---

## Updating the website later

| To change… | Edit |
|------------|------|
| Text, services, doctors, FAQs, contact info | `src/data/site.ts` |
| Photos | replace files in `public/images/` (keep the same names) |
| Colours / fonts / logo | `src/styles/global.css`, `src/components/Logo.astro` |

Then `git add -A && git commit -m "…" && git push` — Cloudflare rebuilds automatically.

## Optional: email appointment notifications
The appointment form currently opens a pre-filled **WhatsApp** message (no backend).
If you'd prefer requests by email, add a form service like
[Formspree](https://formspree.io) or move to Netlify Forms — a small change to
`src/components/Contact.astro`, no rebuild of the rest of the site needed.
