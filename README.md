# agentx labs website

The website for agentx labs, built with [Eleventy](https://www.11ty.dev/) and published on GitHub Pages. Every push to `main` rebuilds and republishes the site automatically (see the **Actions** tab).

## Publish a new blog post

1. Copy `templates/use-case-post.md` into `src/blog/posts/`.
2. Rename it `YYYY-MM-DD-short-title.md`. The part after the date becomes the web address, for example `/blog/short-title/`.
3. Fill in the four lines at the top (`title`, `excerpt`, `date`, `industry`) and write the post in Markdown.
4. Commit to `main`. The post is live a minute or two later.

You can do all of this in the browser on github.com: open `src/blog/posts`, choose **Add file → Create new file**, paste, and commit.

To keep a post unpublished while you work on it, add `draft: true` to the top lines.

## Change site details

`src/_data/site.json` holds the contact email, the booking link and the LinkedIn link.

- `booking_url`: paste a Calendly, Cal.com or similar link and every "Book a call" button uses it. While it's empty, the buttons open an email instead.
- `linkedin_url`: when filled in, a LinkedIn link appears in the footer.

Page text lives in `src/index.njk` (home page). Colours and fonts are at the top of `src/assets/site.css`.

## Custom domain (agentx-labs.com)

1. `src/static/CNAME` holds the domain (`agentx-labs.com`). To switch domains later, change that line and `url` in `src/_data/site.json`.
2. At your domain registrar, add these DNS records:
   - `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`
   - a `CNAME` record for `www` pointing to `<your-github-username>.github.io`
3. In the repo, go to **Settings → Pages**, enter `agentx-labs.com` as the custom domain, and tick **Enforce HTTPS** once it becomes available. DNS can take up to a day to update.

## Run it on your computer (optional)

```
npm install
npm start
```

Then open http://localhost:8080.
