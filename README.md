# Yi Yang Research Group Website Template

This is a responsive static website template for a high-energy physics group.
It works on desktop and mobile.

Most updates happen in one file:
- `assets/js/content.js`

## Important

You do **not** need to write HTML for normal updates.

`assets/js/content.js` is:
- not HTML
- not a visual drag-and-drop editor
- closer to filling in a structured form

You mainly edit:
- names
- text paragraphs
- links
- paper entries
- member lists
- member paper lists
- map locations
- photo file paths
- homepage affiliation cards

## What is included

- Homepage with a high-energy physics hero image
- Latest paper / news panel
- Homepage affiliation icon cards for institutional links
- Dedicated lab overview section
- PI profile section with photo area
- Experiment cards (STAR, ATLAS, AMS, ePIC, and more)
- Group members grouped by stage, each with a photo area
- Member cards that can show student paper titles and clickable links
- Searchable publications list
- Interactive world map for students and alumni
- Contact section

## Fastest way to update content

Open `assets/js/content.js` and edit:
- `meta` for site title and footer
- `hero` for homepage text
- `homeAffiliations` for homepage icon links to institutes
- `labIntro` for the lab introduction section
- `profile` for PI information and photo
- `latestNews` for the newest paper or announcement
- `experiments` for collaborations
- `members` for undergraduate / master's / PhD / postdoc / alumni lists, photos, and paper lists
- `publications` for papers
- `mapLocations` for the world map
- `contact` for links and address

You usually do **not** need to edit `index.html`.

## How to add photos

- PI photo: put the file in `assets/img/`
  - example: `assets/img/yi-yang.jpg`
- Member photos: put files in `assets/img/members/`
  - example: `assets/img/members/alice-chen.jpg`
- Then update the `photo` field in `assets/js/content.js`

If a photo path is missing or wrong, the site shows a placeholder image automatically.

## How to add student papers under a member

Example:

```js
{
  name: 'Alice Chen',
  photo: 'assets/img/members/alice-chen.jpg',
  topic: 'Detector simulation',
  years: '2025-present',
  note: 'PhD student',
  papers: [
    { title: 'First paper title' },
    { title: 'Second paper title', url: 'https://example.org/paper' }
  ]
}
```

If `url` is filled with a real link, the title becomes clickable.
If `url` is empty, the title is shown as plain text.

## How to add more institution icon links on the homepage

Edit `homeAffiliations` in `assets/js/content.js`.

Example:

```js
{
  icon: 'plus',
  label: 'Another Institution',
  subtitle: 'Official site',
  url: 'https://example.edu/'
}
```

There is already one reserved placeholder card for future joint appointments.

## Easiest editing workflow on GitHub

1. Upload this folder to a GitHub repository.
2. Open `assets/js/content.js` on GitHub.
3. Click the pencil icon.
4. Change the text or photo path.
5. Commit the change.
6. GitHub Pages will update the site.

## Local preview

Option 1:
- double-click `index.html`

Option 2 (better):
- open a terminal in this folder
- run `python -m http.server 8000`
- open `http://localhost:8000`

## Folder structure

- `index.html` - main page
- `assets/css/styles.css` - design and responsive layout
- `assets/js/content.js` - main content file you should update
- `assets/js/app.js` - rendering logic
- `assets/img/hero-hep.svg` - homepage image
- `assets/img/profile-placeholder.svg` - placeholder for PI photo
- `assets/img/member-placeholder.svg` - placeholder for member photos

## Recommended hosting

For this project, the best fit is:
- **GitHub Pages** for hosting
- GitHub repository for version control and easy editing

See `DEPLOYMENT_GUIDE.md` and `QUICK_EDIT_GUIDE_zh.md`.
