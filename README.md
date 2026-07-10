# KartikeOS '98 — Retro Desktop Portfolio

A portfolio for **Kartike Dutta** styled as a **Windows 98 desktop**, inspired by
[adamclambert.com](https://www.adamclambert.com/). Built with plain **HTML, CSS & JavaScript** —
no frameworks, no build step, no dependencies. Ready for GitHub Pages.

## The experience

1. **Boot screen** → animated loading bar
2. **Login screen** → type anything and hit *Enter* (the door's open)
3. **Desktop** → double-click icons (single-tap on mobile) to open windows:
   - 📁 About Me · 🧰 Skills · 💼 Experience · 🗂️ Projects · 🎓 Education · 📇 Contact
   - 🔗 LinkedIn (opens external) · 🗑️ Recycle Bin (easter egg)
4. **Windows** are draggable, focusable, minimizable and closable
5. **Taskbar** shows open windows + a live clock
6. **Start menu** with all sections + *Shut Down* (safe-to-turn-off screen)

## Files

| File | Purpose |
|------|---------|
| `index.html` | Boot / login / desktop / taskbar markup |
| `styles.css` | Full Windows 98 look (bevels, title bars, buttons) |
| `script.js`  | Window manager + all content (edit the `WINDOWS` object to update text) |

## Run locally

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Add KartikeOS retro portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

Then **Settings → Pages → Source: `main` / root**. Live at
`https://<username>.github.io/<repo>/`. Name the repo `<username>.github.io`
to serve it at the root domain.
