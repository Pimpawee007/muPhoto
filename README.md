# MU Photo Club — Website Prototype

Multi-page static prototype based on the supplied wireframes. No backend or Instagram integration yet.

## Run locally

From this folder:

```bash
python -m http.server 8000
```

Visit http://localhost:8000 (do not open the HTML files directly via file:// because ES modules require a web server).

## Pages
- `index.html` — Home + Instagram profile preview
- `activity.html` — Announcements and Recent Activity, with filters
- `announcement-detail.html?id=first-focus` — Announcement detail
- `activity-detail.html?id=first-focus` — Activity recap and image viewer
- `photos.html` — Albums grouped by year, horizontal scrolling
- `album.html?id=first-focus` — Art gallery / masonry images and lightbox
- `contact.html` — Contact

## Structure
- `css/style.css` — Shared responsive design
- `js/data.js` — Sample data, replace with API response later
- `js/main.js` — Shared UI and interactions
- `assets/sample.jpg` — Provided WYJ_1786.JPG, repeated as a placeholder
- `assets/logo.png` — Provided black nocap.png

## Before production
- Confirm actual Instagram username and replace `instagramUrl` in `js/data.js`.
- Replace placeholder dates, descriptions, photo collections and links with real content.
- Replace placeholder social links, email, and Open Chat URL.
- Instagram stats and posts currently are *not* fetched; connect an authorized Creator account through a backend later.
- Admin dashboard, authentication, storage, and API are deliberately not included yet. Plan separate admin app with secure backend and a shared database.
