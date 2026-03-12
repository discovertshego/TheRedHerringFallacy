# The Red Herring Fallacy — Site Setup

## File Structure

```
red-herring-fallacy/
├── index.html          ← Homepage (edit this to update featured content)
├── archive.html        ← All posts (duplicate cards from index)
├── podcast.html        ← Podcast page
├── about.html          ← About page
├── css/
│   └── style.css       ← All styling — touch only if you want design changes
├── js/
│   └── main.js         ← Interactivity
└── posts/
    └── template.html   ← Copy this for every new article
```

---

## How to Publish a New Article

1. **Copy** `posts/template.html` and rename it: `posts/my-article-title.html`
2. **Edit** the new file:
   - Change the `<title>` in the `<head>`
   - Update `.article-category` (Essay / Analysis / Interview / etc.)
   - Update `.article-title` and `.article-subtitle`
   - Update the `.article-meta` (author, date, read time)
   - Replace the cover placeholder with an `<img>` tag
   - Write your article content inside `.article-body`
3. **Add a card** on `index.html` by copying an existing `.post-card` block and updating the title, excerpt, and link to your new file
4. **Push to GitHub** — your changes go live automatically

---

## How to Add Content Types

### Embed a YouTube/Vimeo Video
Inside your article, paste:
```html
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:2rem 0;">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID"
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
    allowfullscreen></iframe>
</div>
```

### Embed a Podcast (Spotify / Buzzsprout / Anchor)
Get the embed code from your podcast host and paste it inside:
```html
<div style="margin:2rem 0;">
  PASTE_EMBED_CODE_HERE
</div>
```

### Add a Pull Quote
```html
<blockquote>
  "Your quote here."
  <cite>— Attribution</cite>
</blockquote>
```

### Add an Image with Caption
```html
<figure style="margin:2.5rem 0;">
  <img src="../images/filename.jpg" alt="Description" style="width:100%;display:block;" />
  <figcaption style="font-family:'IBM Plex Mono',monospace;font-size:0.72rem;color:#888078;margin-top:0.5rem;">
    Caption text here.
  </figcaption>
</figure>
```

### Mark a Post as Subscriber-Only
Add the locked card style to the post card on index.html:
```html
<article class="post-card post-card--locked">
```
And link the "Unlock" button to your subscribe section.

---

## Deploying to GitHub Pages

1. Create a free account at [github.com](https://github.com)
2. Create a new repository called `red-herring-fallacy` (or any name)
3. Upload all files (drag & drop in the GitHub interface)
4. Go to **Settings → Pages → Source → main branch → /root**
5. Your site will be live at: `https://yourusername.github.io/red-herring-fallacy`

### Custom Domain (optional)
If you buy a domain (e.g. `redherringfallacy.com`):
1. Add a file called `CNAME` to the root with just your domain name inside
2. Point your domain's DNS to GitHub Pages (instructions in GitHub's docs)

---

## Collecting Subscribers

For now the subscribe form is visual only. To actually collect emails, pick one:

- **[Mailchimp](https://mailchimp.com)** — free up to 500 subscribers, replace the form action with your Mailchimp embed URL
- **[Buttondown](https://buttondown.email)** — built for newsletters, very simple, free up to 100
- **[Substack](https://substack.com)** — you can run Substack AND this site simultaneously, just link to your Substack subscribe page

---

## Colours (to change the palette)

Edit the `:root` block at the top of `css/style.css`:
```css
:root {
  --red: #D7000F;       /* main accent */
  --black: #0A0A0A;     /* background */
  --white: #F5F0EB;     /* text */
}
```
