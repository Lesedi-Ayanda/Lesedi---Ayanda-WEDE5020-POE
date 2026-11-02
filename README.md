# Sisonke Food Bank Website

## Student Name
Lesedi Mogadime

## Student Number
ST10502023

## Module
WEDE5020 - Web Development (Introduction)

## Lecturer
S Mahamo

## Live Website
https://sisonkefoodbank.netlify.app

## Project Overview
This project is a website built for Sisonke Food Bank, a hypothetical non-profit organisation dedicated to fighting hunger in the community. The organisation collects food donations and serves warm meals to individuals and families facing food insecurity. The project was completed in three parts: Part 1 built the semantic HTML foundation, Part 2 added CSS styling and responsive design, and Part 3 added JavaScript functionality, search engine optimisation (SEO), validated forms and deployment.

## Website Goal
To create a functional, informative, and easy-to-navigate website that raises awareness of Sisonke Food Bank's work, encourages visitors to volunteer or become sponsors, and provides clear contact information for both community members seeking support and those wanting to give it.

## Target Audience
- Individuals and families in the community who need food assistance.
- Potential volunteers looking to give their time.
- Potential donors and corporate sponsors wanting to support the cause.

## Website Pages
| Page | Description |
|---|---|
| `index.html` | Home page - introduction, hero images, overview of services, call to action, and an FAQ accordion |
| `about.html` | History, mission, vision, team, and a photo gallery with lightbox |
| `services.html` | Searchable, filterable and sortable list of programmes, built dynamically with JavaScript |
| `enquiry.html` | Validated enquiry form for volunteering, sponsorship or donating, with an instant availability/cost response |
| `contact.html` | Contact details, interactive map of two branches, and a validated contact form that compiles an email |
| `sitemap.html` | Human-readable list of all site pages |

## Features
- Consistent header, navigation, and footer across all pages.
- Semantic HTML5 structure (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Enquiry form with volunteer/sponsorship/donation options.
- Contact form and an interactive map of both branches.
- `sitemap.html` and `sitemap.xml` for navigation and search engines.
- Original, relevant images with descriptive `alt` text.
- **(Part 2)** External stylesheet applied consistently across every page.
- **(Part 2)** Warm, branded colour scheme and typography.
- **(Part 2)** Responsive card-grid layout for Services and Contact.
- **(Part 2)** Interactive states (`:hover`, `:focus`, `:active`) on buttons, links, and form fields.
- **(Part 2)** Fully responsive layout with breakpoints for tablet and mobile.
- **(Part 3)** Accordion (FAQ), gallery lightbox, scroll-reveal animations and CSS transitions.
- **(Part 3)** Interactive Leaflet map with pop-ups, "fly to branch" buttons and a "find my nearest branch" feature.
- **(Part 3)** Dynamic services list with live search, category filter and sorting.
- **(Part 3)** JavaScript form validation with clear error messages, AJAX submission and a processed response.
- **(Part 3)** On-page and local SEO, `robots.txt`, `sitemap.xml`, structured data, security and page-speed improvements.
- **(Part 3)** Deployed on a free hosting platform.

## Folder Structure
```
sisonkefoodbank/
├── index.html                 Home page
├── about.html                 About page + gallery lightbox
├── services.html              Services page (dynamic, searchable)
├── enquiry.html               Enquiry form
├── contact.html               Contact page + interactive map + contact form
├── sitemap.html               Human-readable sitemap
├── sitemap.xml                XML sitemap for search engines
├── robots.txt                 Crawler instructions
├── screenshots/               Desktop/tablet/mobile screenshot evidence (Part 2)
├── _headers                   Security headers (used by Netlify)
├── README.md                  Project documentation
├── css/
│   └── style.css              External stylesheet (Part 2 + Part 3 additions)
├── js/
│   ├── main.js                Accordion, scroll-reveal animation, share links (all pages)
│   ├── lightbox.js            Gallery lightbox (about.html)
│   ├── services.js            Dynamic services, search, filter, sort (services.html)
│   ├── map.js                 Leaflet map and nearest-branch finder (contact.html)
│   ├── validation.js          Shared form validation rules and error handling
│   ├── enquiry.js             Enquiry form logic + AJAX + response (enquiry.html)
│   └── contact.js             Contact form logic + email compilation (contact.html)
└── images/
    ├── donated-food-pile.jpg                       (+ -thumb version)
    ├── volunteers-sorting-food-donations.jpg       (+ -thumb version)
    ├── packed-food-parcels.jpg                     (+ -thumb version)
    └── favicon.svg
```

## Technologies Used
- HTML5 (semantic structure and content)
- CSS3 (external stylesheet, Flexbox, Grid, media queries, transitions, animations)
- JavaScript (vanilla JS: DOM manipulation, events, Fetch API/AJAX, form validation)
- Leaflet 1.9.4 with CARTO basemap tiles built from OpenStreetMap data, and an Esri backup (interactive maps)
- JSON-LD structured data (schema.org) for local SEO
- Git and GitHub for version control
- Netlify (free hosting/deployment)

## Part 2: CSS Styling and Responsive Design
An external stylesheet (`css/style.css`) is linked in every page. Key decisions:

- **Colour scheme:** Deep green (`#2f5233`) and warm orange (`#e85d24`) on a warm cream background (`#fff8f0`), reflecting the organisation's warm, community-focused identity.
- **Typography:** Poppins/Segoe UI for headings, Open Sans/Arial for body text, using `rem` units throughout for scalability.
- **Layout:** Flexbox is used for the header/navigation and hero image row; CSS Grid (`auto-fit`/`minmax`) is used for the responsive card grid on Services and Contact.
- **Visual styling:** Cards use `border`, `border-radius`, and `box-shadow` for depth; buttons use rounded pill shapes with hover/active states.
- **Pseudo-classes:** `:hover` and `:focus` are used on links, nav items, buttons, and form fields; `:active` is used on buttons for tactile feedback.
- **Responsive design:** Two breakpoints are used:
  - `@media (max-width: 768px)` - tablet: tightens spacing, reduces heading sizes, adjusts card grid minimum width.
  - `@media (max-width: 480px)` - mobile: switches navigation to a single column, stacks hero images, switches the card grid to one column.
- **Responsive images:** All images use `max-width: 100%` and `height: auto` so they scale within their container at every screen size.

### Screenshot Evidence (Desktop / Tablet / Mobile)
Screenshots for all five pages at three screen sizes (desktop 1440px, tablet 768px, mobile 390px) are included in the `screenshots/` folder submitted alongside this repository, confirming the layout adapts correctly at each breakpoint.

## Part 3: Enhancing Functionality and SEO

### JavaScript functionality
| Feature | Where | How it works |
|---|---|---|
| Accordion | `index.html` (FAQ) | Buttons toggle panels; only one is open at a time; `aria-expanded` keeps it accessible (`js/main.js`). |
| Gallery lightbox | `about.html` | Thumbnails open the full image in a native `<dialog>` with previous/next buttons, arrow keys, Esc, click-outside to close and an "image X of Y" counter (`js/lightbox.js`). |
| Animations and transitions | All pages | Sections fade and slide in as they scroll into view (IntersectionObserver); CSS transitions on accordion, gallery hover, buttons and lightbox. Disabled automatically for visitors who prefer reduced motion. |
| Interactive map | `contact.html` | Leaflet map with a marker and pop-up for each branch, buttons that fly to a branch, and a "Find my nearest branch" button that uses the browser location and the haversine formula (`js/map.js`). |
| Dynamic content and search | `services.html` | Service cards are created from a JavaScript array using `createElement`; live search, category filter, sort (A-Z, Z-A, category), result count, "no results" message and reset button (`js/services.js`). A `<noscript>` fallback lists the services without JavaScript. |
| Advanced DOM manipulation | Throughout | Elements are created, shown/hidden and updated with `createElement`, `textContent`, `hidden`, class toggling and event handling. `textContent` (never `innerHTML`) is used for user-supplied text so it cannot inject HTML. |

### Forms and validation
**enquiry.html** (volunteer / sponsor / donate)
- Extra fields appear depending on the enquiry type: a start date for volunteers, number of families for sponsors, donation type for donors.
- Validation: full name (letters only, 2-60 characters), email format, South African phone number (`0XXXXXXXXX` or `+27XXXXXXXXX`), required dropdowns, date not in the past and within 12 months, whole number of families between 1 and 50, message 10-500 characters with a live character counter.
- Errors appear next to each field, the first invalid field receives focus, and errors clear as soon as they are corrected.
- **AJAX:** once valid, the data is sent with `fetch()` (POST, JSON) without reloading the page; a 10-second timeout and an error message handle network failures while keeping the visitor's answers.
- **Processed response:** volunteers see whether their chosen day is available (Sundays move to the next Monday) and the shift times; sponsors see the monthly and yearly cost (families x R450) and their sponsor level; donors see drop-off times and accepted items.

**contact.html** (general message)
- Collects name, email, optional phone, message type and message, with the same validation rules.
- Once valid, the details are compiled into an email (To / Subject / Body) shown as a preview. The visitor presses "Open in my email app", which opens a `mailto:` link addressed to the recipient stated in `js/contact.js` (`RECIPIENT`). A "Copy email text" button is also provided.

> The enquiry form posts to JSONPlaceholder (`https://jsonplaceholder.typicode.com/posts`), a free testing service that echoes the data back. In a real deployment this address would be replaced by a form service such as Formspree or Netlify Forms.

### SEO (search engine optimisation)
| Technique | Implementation |
|---|---|
| Keyword research | Target keywords: *food bank Pretoria*, *soup kitchen Pretoria*, *donate food*, *volunteer Pretoria*, *Mamelodi food bank*, *food parcels*. These are used naturally in titles, headings, body text, alt text and file names. |
| Title tags | A unique, descriptive title on every page (e.g. "Contact Us - Pretoria and Mamelodi Branches \| Sisonke Food Bank"). |
| Meta descriptions | A unique description of about 150 characters on every page. |
| Meta keywords | A page-specific `keywords` meta tag on every page. |
| Header tags | Exactly one `<h1>` per page, followed by logical `<h2>` / `<h3>` headings. The site name in the header is a link, not an `<h1>`, so each page's `<h1>` describes that page. |
| Image optimisation | Descriptive file names (`donated-food-pile.jpg`, `volunteers-sorting-food-donations.jpg`, `packed-food-parcels.jpg`), meaningful `alt` text, width/height attributes, and compressed copies (the original 4032 x 2268 photo was about 2-3 MB; the site copy is about 250 KB). |
| URL structure | Short, lowercase, descriptive file names (`services.html`, `enquiry.html`, `contact.html`) and a `<link rel="canonical">` on every page. |
| Internal linking | Body text links between pages (home to about, services, contact and enquiry; services cards to enquiry; FAQ answers to relevant pages), plus the footer sitemap link. |
| Mobile-friendliness | Viewport meta tag and responsive layout (Part 2), tested at tablet and mobile sizes with no horizontal scrolling. |
| Local SEO | JSON-LD structured data (schema.org `NGO`) listing both branches with address, phone and map coordinates; branch names and areas (Pretoria Central, Mamelodi) in headings and titles; interactive map with directions links. |
| robots.txt | Allows all pages to be crawled and points to the sitemap. |
| sitemap.xml | Lists every page with `lastmod`, `changefreq` and `priority`. |
| Social media | Open Graph and Twitter Card tags so shared links show a title, description and image; "Share this page" links (Facebook, X, WhatsApp) in every footer. |

**Off-page SEO plan (backlinks and local listings):** these cannot be built into the code, so they are planned as next steps for the organisation: (1) create a Google Business Profile for each branch; (2) list the organisation in South African NPO and food-bank directories such as the Gauteng food bank network and community noticeboards; (3) ask partner schools, businesses and churches that host food drives to link to the website; (4) share news and photos from food drives on Facebook and WhatsApp communities using the share links.

### Page speed
- Images resized and compressed; thumbnails used in the gallery; `loading="lazy"` on images below the fold and `fetchpriority="high"` on the main hero image.
- Width and height set on images so the page does not jump while loading.
- All scripts use `defer`, so they never block the page from appearing; each page loads only the scripts it needs.
- Fonts load with `display=swap` and `preconnect`.
- Leaflet is only loaded on the contact page.

### Security
- A Content-Security-Policy `<meta>` tag limits scripts, styles, images and network requests to the sources the site actually uses.
- User input is displayed with `textContent`, never `innerHTML`, which prevents cross-site scripting (XSS).
- External links use `rel="noopener noreferrer"`; a strict `Referrer-Policy` is set.
- `_headers` adds `X-Content-Type-Options`, `X-Frame-Options` (blocks clickjacking), `Referrer-Policy` and `Permissions-Policy` when hosted on Netlify.
- Forms are validated on the client; in a production system the same checks must also be repeated on the server.
- The site is served over HTTPS automatically by Netlify.

### Accessibility
Skip-to-content link, visible keyboard focus, `aria-current` on the active page, labelled form fields with `aria-describedby` error messages, `role="alert"` / `aria-live` for validation and results, keyboard-operable accordion and lightbox, and `prefers-reduced-motion` support.

### Testing
The finished site was opened from local files and tested in a Chromium browser at desktop (1280px), tablet (768px) and mobile (390px) widths. Automated checks confirmed: no JavaScript or Content-Security-Policy errors on any page, one `<h1>` and complete SEO tags per page, no horizontal scrolling at tablet or mobile size, accordion and lightbox behaviour (including keyboard use), search/filter/sort results, every form validation message, all three enquiry responses, the network-failure message, the map markers and pop-ups, and the compiled email link.

### Deployment
1. Push the project to the GitHub repository (the `index.html` file must be in the root of the repository).
2. Sign in at https://app.netlify.com and choose **Add new site > Import an existing project**, then select the GitHub repository. Leave the build command empty and set the publish directory to the repository root.
3. After the first deploy, rename the site (Site configuration > Change site name) to `sisonkefoodbank`, giving `https://sisonkefoodbank.netlify.app`.
4. If the final address is different, replace `https://sisonkefoodbank.netlify.app` in the `<link rel="canonical">` and Open Graph tags on each page, in `sitemap.xml` and in `robots.txt`, then commit and push again.
5. Open every page on the live site and check the links, images, map and forms. Paste the live address into the **Live Website** section above and submit the same address with the GitHub link on the LMS.
GitHub Pages is an alternative: Settings > Pages > deploy from the `main` branch root.

## Timeline
| Week | Task |
|---|---|
| Week 1 | Project planning, target audience, and proposal approval |
| Week 2 | Research and content gathering |
| Week 3 | Build HTML structure and content for all pages (Part 1) |
| Week 4 | Review, proofread, validate HTML, submit Part 1 |
| Week 5 | Apply Part 1 feedback; build external stylesheet and base styles (Part 2) |
| Week 6 | Apply layout, typography, and visual styling (Part 2) |
| Week 7 | Implement responsive breakpoints and test across devices; submit Part 2 |
| Week 8 | Apply Part 2 feedback; build accordion, gallery lightbox, animations and dynamic services search (Part 3) |
| Week 9 | Build interactive map and validated enquiry/contact forms; apply on-page SEO (Part 3) |
| Week 10 | Add robots.txt, sitemap.xml, security and speed improvements; test; deploy to Netlify; submit Part 3 |

## Vision
A community where every family has reliable access to nutritious food, and where Sisonke Food Bank is a trusted, easily accessible resource for both those in need and those who want to help.

## References

**HTML/CSS guidance**
[1] W3Schools, "HTML Tutorial," W3Schools. [Online]. Available: https://www.w3schools.com/html/. 14 Aug 2026.

[2] MDN Web Docs, "CSS: Cascading Style Sheets," Mozilla. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/CSS. 16 Sep 2026.

[3] MDN Web Docs, "Using CSS media queries," Mozilla. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries. 16 Sep 2026.

**Images**
[4] Nico Smith, "Food stack collection," Unsplash. [Online]. Available: https://unsplash.com/photos/assorted-plastic-pack-and-plastic-pack-lot-PTv-B97DHNI. 14 Aug 2026.

[5] Joel Muniz, "Canned food Donations," Unsplash. [Online]. Available: https://unsplash.com/photos/volunteers-sorting-canned-food-donations-3k3l2brxmwQ. 14 Aug 2026

**Fonts**
[6] Google Fonts, "Poppins," Google. [Online]. Available: https://fonts.google.com/specimen/Poppins. 14 Aug 2026.

[7] Google Fonts, "Open Sans," Google. [Online]. Available: https://fonts.google.com/specimen/Open+Sans. 14 Aug 2026.

**Tools used**
[8] Google, "Google Maps," Google. [Online]. Available: https://www.google.com/maps. 14 Aug 2026.


**JavaScript, forms and maps (Part 3)**
[9] MDN Web Docs, "JavaScript Guide," Mozilla. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide. 20 Oct 2026.

[10] MDN Web Docs, "Using the Fetch API," Mozilla. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch. 20 Oct 2026.

[11] MDN Web Docs, "Client-side form validation," Mozilla. [Online]. Available: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation. 20 Oct 2026.

[12] MDN Web Docs, "<dialog>: The Dialog element," Mozilla. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog. 20 Oct 2026.

[13] MDN Web Docs, "Intersection Observer API," Mozilla. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API. 20 Oct 2026.

[14] V. Agafonkin, "Leaflet: an open-source JavaScript library for interactive maps." [Online]. Available: https://leafletjs.com/. 20 Oct 2026.

[15] OpenStreetMap contributors, "OpenStreetMap." [Online]. Available: https://www.openstreetmap.org/copyright. 20 Oct 2026.

[16] Typicode, "JSONPlaceholder - Free fake and reliable API for testing and prototyping." [Online]. Available: https://jsonplaceholder.typicode.com/. 20 Oct 2026.

**SEO and security (Part 3)**
[17] Google Search Central, "SEO Starter Guide," Google. [Online]. Available: https://developers.google.com/search/docs/fundamentals/seo-starter-guide. 20 Oct 2026.

[18] Google Search Central, "Build and submit a sitemap," Google. [Online]. Available: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap. 20 Oct 2026.

[19] Google Search Central, "Introduction to robots.txt," Google. [Online]. Available: https://developers.google.com/search/docs/crawling-indexing/robots/intro. 20 Oct 2026.

[20] Schema.org, "NGO." [Online]. Available: https://schema.org/NGO. 20 Oct 2026.

[21] The Open Graph protocol, "Open Graph protocol." [Online]. Available: https://ogp.me/. 20 Oct 2026.

[22] MDN Web Docs, "Content-Security-Policy (CSP)," Mozilla. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP. 20 Oct 2026.

**Deployment (Part 3)**
[23] Netlify, "Netlify Docs: Deploy sites." [Online]. Available: https://docs.netlify.com/. 20 Oct 2026.

[25] CARTO, "CARTO Basemaps and attributions." [Online]. Available: https://carto.com/attributions. 29 Oct 2026.

## Changelog

### Part 1 - Building the Foundation
- 14 Aug 2026 - Created initial HTML structure for all 5 pages (index, about, services, enquir, contact).
- 14 Aug 2026 - Established file and folder structure (css/, js/, images/).
- 14 Aug 2026 - Added consistent navigation and semantic HTML tags across all pages.
- 14 Aug 2026 - Wrote and added original content for Sisonke Food Bank (mission, vision, services, team).
- 14 Aug 2026 - Added `sitemap.html` and `sitemap.xml`.
- 14 Aug 2026 - Added real images with descriptive alt text to `index.html`.
- 14 Aug 2026 - Added two Google Maps embeds and full contact details to `contact.html`.

### Part 1 - Feedback Corrections

- 16 Sep 2026 - Added missing siteap
- 16 Sep 2026 - Fixed and added missing a design aesthetic

### Part 2 - Designing the Visuals: CSS Styling and Responsive Design
- 16 Sep 2026 - Created external stylesheet `css/style.css` and linked it to all pages.
- 16 Sep 2026 - Applied base styles: CSS reset, font family, font size, colour scheme, margin/padding.
- 16 Sep 2026 - Applied typography styles to headings and body text.
- 16 Sep 2026 - Built layout structure using Flexbox (header/nav) and CSS Grid (card layouts).
- 16 Sep 2026 - Applied visual styling: colours, borders, box-shadows on cards, buttons, and forms.
- 16 Sep 2026 - Added interactive pseudo-classes (`:hover`, `:focus`, `:active`) to links, nav, buttons, and form fields.
- 16 Sep 2026 - Implemented responsive breakpoints at 768px (tablet) and 480px (mobile).
- 16 Sep 2026- Adjusted layout, typography, navigation, and images for tablet and mobile screens.
- 16 Sep 2026 - Captured and added screenshot evidence for desktop, tablet, and mobile views.

### Part 3 - Feedback Corrections (from Part 2)

- 2 Nov 2026 - Correct formatting

### Part 3 - Enhancing Functionality and SEO
- 20 Oct 2026 - Created `js/` files and linked them with `defer` on the pages that need them; `js/main.js` loads on every page.
- 20 Oct 2026 - Added an FAQ accordion to `index.html` (one panel open at a time, `aria-expanded`, animated open/close).
- 20 Oct 2026 - Added a photo gallery with a lightbox (native `<dialog>`, previous/next, arrow keys, Esc, counter) to `about.html`.
- 20 Oct 2026 - Added scroll-reveal animations and CSS transitions; added `prefers-reduced-motion` support.
- 20 Oct 2026 - Replaced the static Google Maps iframes on `contact.html` with an interactive Leaflet map: two markers with pop-ups, branch buttons and a "find my nearest branch" feature. Kept "Get directions" links for each branch.
- 29 Oct 2026 - Fixed the interactive map showing "Access blocked" (403) tiles: the free OpenStreetMap tile server blocks visitors who open the site from a local file, so `js/map.js` now loads CARTO basemap tiles (OpenStreetMap data) with an automatic Esri backup if the first source fails; updated the Content-Security-Policy to allow these tile servers and the map attribution.
- 20 Oct 2026 - Rebuilt `services.html` so the services are created dynamically from a JavaScript array (6 services) with live search, category filter, sorting, result count and a `<noscript>` fallback.
- 20 Oct 2026 - Rebuilt the enquiry form (`enquiry.html`, `js/enquiry.js`): conditional fields, JavaScript validation with error messages, AJAX submission with `fetch`, and a processed response showing availability and cost.
- 20 Oct 2026 - Rebuilt the contact form (`contact.html`, `js/contact.js`): validation, then the details are compiled into an email preview with an "Open in my email app" `mailto:` link to the recipient stated in the code.
- 20 Oct 2026 - Created `js/validation.js` with shared rules (name, email, South African phone, date, number range, message length, dropdowns) and a live character counter.
- 20 Oct 2026 - Fixed a validation bug found in testing: after a failed submit, errors on dropdown fields did not clear until the field lost focus; all fields now re-check live after a submit attempt.
- 20 Oct 2026 - SEO: wrote unique title tags, meta descriptions and meta keywords for every page; added canonical links and Open Graph/Twitter tags.
- 20 Oct 2026 - SEO: changed the header site name from an `<h1>` to a link so each page has exactly one descriptive `<h1>`; converted the first heading on every page to `<h1>`.
- 20 Oct 2026 - SEO: renamed images to descriptive names (`donated-food-pile.jpg`, `volunteers-sorting-food-donations.jpg`, `packed-food-parcels.jpg`), rewrote alt text and added width/height; removed unused duplicate images (`food-bank-1.jpg`, `food-bank-33.jpg`).
- 20 Oct 2026 - SEO: added internal links in body text, JSON-LD structured data for both branches (local SEO), and "Share this page" links in the footer.
- 20 Oct 2026 - SEO: added `robots.txt` and updated `sitemap.xml` with `lastmod`, `changefreq` and `priority`; updated `sitemap.html`.
- 20 Oct 2026 - Page speed: compressed images (about 2-3 MB originals reduced to about 250 KB), created thumbnails for the gallery, added lazy loading, `fetchpriority` on the hero image and `defer` on all scripts; loaded the Google Fonts that the stylesheet already referenced (with `preconnect` and `display=swap`).
- 20 Oct 2026 - Security: added a Content-Security-Policy and referrer policy, `rel="noopener noreferrer"` on external links, safe DOM updates with `textContent`, and a Netlify `_headers` file.
- 20 Oct 2026 - Accessibility: added a skip link, `aria-current` on the active nav link, visible focus styles, `aria-live` regions and labelled error messages.
- 20 Oct 2026 - Extended `css/style.css` (section 6) for the new components, with responsive adjustments at the 768px and 480px breakpoints; made both hero images full-width on mobile.
- 20 Oct 2026 - Tested all pages at desktop, tablet and mobile sizes: no JavaScript errors, no horizontal scrolling, all forms, search, lightbox, accordion and map behaviours working.
- 2 Nov 2026 - Deployed the website to Netlify: https://sisonkefoodbank.netlify.app
- 2 Nov 2026 - Updated README with Part 3 documentation, changelog and references.
