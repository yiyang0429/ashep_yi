# Deployment Guide

## Recommended choice: GitHub Pages

This template is a static website.
That makes GitHub Pages a very good fit because it is simple, stable, and easy to update through GitHub.

## Basic deployment workflow

1. Create a GitHub repository.
2. Upload all files in this folder.
3. Go to **Settings → Pages**.
4. Set the publishing source to your main branch and the root folder.
5. Save.
6. GitHub will publish the site.

## Default URL patterns

If your repository is a normal project repository:
- `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`

If your repository name is exactly:
- `YOUR-USERNAME.github.io`

then the site URL becomes:
- `https://YOUR-USERNAME.github.io/`

## Custom domain later

When you are ready, you can connect your own domain in **Settings → Pages**.
Then add the matching DNS record at your domain provider.

Typical examples:
- subdomain: `hep.example.org`
- lab domain: `group.yourlab.org`
- institutional subdomain if your institution supports it

## Good GitHub workflow for this site

### Simple
Edit only:
- `assets/js/content.js`

### Better long-term
Store everything in GitHub so you can:
- track changes
- roll back mistakes
- let students help update the site
- keep a clean publication history

## Files you will usually edit

- `assets/js/content.js`
- photos in `assets/img/` and `assets/img/members/`

## Files you usually do not need to edit

- `index.html`
- `assets/js/app.js`
- `assets/css/styles.css`

## Practical advice for the domain name

A good first step is:
1. launch on the default GitHub Pages URL first
2. make sure the content is complete
3. connect the custom domain afterward

That reduces setup friction and lets you review the site before touching DNS.
