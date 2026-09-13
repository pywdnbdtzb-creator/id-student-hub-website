# ID Student Hub — Website Project

A static website for the Interior Design & Architecture Student Resource Hub.
No backend, no build step, no dependency on Claude or any Anthropic product —
it's plain HTML, CSS and JavaScript that runs in any browser and on any static
host.

## Folder structure

```
id-student-hub/
├── index.html            ← the whole site (one page, all sections)
├── vercel.json           ← deployment config for Vercel
├── README.md             ← this file
└── assets/
    ├── styles.css        ← all visual design (colors, fonts, layout)
    ├── content.js         ← ALL editable text/content — edit this one
    └── app.js             ← site behavior (nav, search, filters, forms)
```

That's the complete project. Every file above is required — download the
whole `id-student-hub` folder (or the zip containing it), keep the folder
structure exactly as-is, and the `assets/` subfolder must stay next to
`index.html`.

## How it works

`index.html` loads `assets/styles.css` for design, then loads
`assets/content.js` followed by `assets/app.js` at the bottom of the page.
Nothing is fetched from Claude, Anthropic, or any artifact-only API — the
only external resource is Google Fonts (a normal public font CDN), which
you can also remove or self-host later if you want the site to work fully
offline.

## Editing content (no coding required)

Open `assets/content.js` in any text editor (Notepad, VS Code, even a
GitHub web edit). The top of the file has a full editing guide. In short:

- Every book, software tool, faculty member, FAQ, etc. is one
  `{ ... }` block in a list like `const BOOKS = [ ... ]`.
- Copy a block to add an entry, delete a block to remove one, or just
  change the text inside the quotes to edit one.
- Save the file with the same name (`content.js`) and re-deploy (see below).

You should not need to touch `index.html`, `styles.css`, or `app.js` for
routine content updates — only `content.js`.

## Testing locally before you deploy

You can just double-click `index.html` and it will open in your browser.
For the closest match to how it'll behave once hosted, serve it from a
local server instead of opening the file directly:

```bash
cd id-student-hub
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

(Any static server works — `npx serve`, VS Code's "Live Server" extension,
etc. This step is optional but recommended.)

## Deploying to Vercel

**Option A — no coding, drag and drop (fastest):**
1. Go to https://vercel.com and sign in (a free account is enough).
2. Click "Add New… → Project", then choose "Upload" / drag the
   `id-student-hub` folder in.
3. Vercel will detect it as a static site — click Deploy.
4. You'll get a live URL (e.g. `id-student-hub.vercel.app`) immediately.

**Option B — with a GitHub repository (best for ongoing edits):**
1. Create a new GitHub repository and upload these files to it, keeping
   the folder structure above.
2. In Vercel, click "Add New… → Project" and import that GitHub repo.
3. Leave the build settings as default (no framework, no build command) —
   `vercel.json` already tells Vercel this is a static site.
4. Click Deploy. Every future push to the repo will auto-deploy an update,
   which is the easiest way for a non-programmer to publish edits: edit
   `content.js` directly on GitHub's website, commit, and the live site
   updates automatically within a minute or two.

**Option C — Vercel CLI (for developers):**
```bash
npm i -g vercel
cd id-student-hub
vercel        # deploy a preview
vercel --prod # deploy to production
```

## Custom domain

Once deployed, Vercel's project settings let you attach a custom domain
(e.g. `idstudenthub.org`) under Settings → Domains, with instructions for
updating your domain's DNS records.

## About the forms

The "Recommend a resource" and faculty submission forms currently just
show an on-page confirmation message — they don't send the data anywhere,
since there's no backend. To actually collect submissions, the simplest
options once you're ready are a form service like Formspree or Getform
(paste their endpoint into the `<form>` tag in `index.html`) or a small
serverless function if you're comfortable with more setup. Ask a developer
(or Claude) to wire this up when you're ready.
