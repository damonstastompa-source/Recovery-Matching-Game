# Recovery Match

A mobile-friendly recovery-themed matching game designed for GitHub Pages.

## What's included

- **4×4, 6×6, and 8×8** boards
- **100+ recovery terms and concepts**
- Selectable decks:
  - Mixed
  - Recovery Basics
  - Steps
  - Spiritual Principles
  - Emotions & Patterns
  - Fellowship & Service
  - Recovery Language
- Randomized games
- Timer
- Score and streak system
- Best score saved separately for each board/deck combination
- Study Mode for the selected deck
- Responsive mobile/desktop UI
- No backend, build system, or dependencies

## Publish on GitHub Pages

Upload `index.html`, `style.css`, and `app.js` to a repository, then:

**Settings → Pages → Deploy from a branch → main → / (root) → Save**

## Add or edit terms

At the top of `app.js`, each term has this format:

```js
["Term", "Plain-language definition", "Deck Name"],
```

The board automatically selects the number of pairs needed for the selected grid.

## Important content note

The definitions are intentionally written as original, plain-language educational descriptions rather than quotations from recovery literature. This makes the game easier to expand and avoids presenting paraphrases as official literature wording.
