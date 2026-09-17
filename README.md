# Sisonke Food Bank Website

## Student Name
Lesedi Mogadime

## Student Number
ST10502023

## Module
WEDE020

## Lecturer
S Mahamo

## Project Overview
This project is a website built for Sisonke Food Bank, a hypothetical non-profit organisation dedicated to fighting hunger in the community. The organisation collects food donations and serves warm meals to individuals and families facing food insecurity. The project was completed in two parts: Part 1 built the semantic HTML foundation, and Part 2 added CSS styling and responsive design for desktop, tablet, and mobile.

## Website Goal
To create a functional, informative, and easy-to-navigate website that raises awareness of Sisonke Food Bank's work, encourages visitors to volunteer or become sponsors, and provides clear contact information for both community members seeking support and those wanting to give it.

## Target Audience
- Individuals and families in the community who need food assistance.
- Potential volunteers looking to give their time.
- Potential donors and corporate sponsors wanting to support the cause.

## Website Pages
| Page | Description |
|---|---|
| `index.html` | Home page - introduction to Sisonke Food Bank, hero images, overview of services, call to action |
| `about.html` | History, mission, vision, and team behind the organisation |
| `services.html` | Programmes offered: food distribution, elderly support, emergency food assistance |
| `enquiry.html` | Enquiry form for volunteering, sponsorship, or donating |
| `contact.html` | Contact details, embedded maps for two locations, and a general contact form |
| `sitemap.html` | Human-readable list of all site pages |

## Features
- Consistent header, navigation, and footer across all pages.
- Semantic HTML5 structure (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Enquiry form with volunteer/sponsorship/donation options.
- Contact form and two embedded location maps.
- `sitemap.html` and `sitemap.xml` for navigation and search engines.
- Original, relevant images with descriptive `alt` text.
- **(Part 2)** External stylesheet applied consistently across every page.
- **(Part 2)** Warm, branded colour scheme and typography.
- **(Part 2)** Responsive card-grid layout for Services and Contact.
- **(Part 2)** Interactive states (`:hover`, `:focus`, `:active`) on buttons, links, and form fields.
- **(Part 2)** Fully responsive layout with breakpoints for tablet and mobile.

## Folder Structure
```
WEBDEV/
├── index.html            Home page
├── about.html             About page
├── services.html          Services page
├── enquiry.html           Enquiry page
├── contact.html           Contact page
├── sitemap.html            Human-readable sitemap
├── sitemap.xml             XML sitemap for search engines
├── css/
│   └── style.css            External stylesheet (Part 2)
├── images/
│   ├── food-bank.jpg
│   ├── food-bank-1.jpg
│   ├── food-bank-3.jpg
│   ├── food-bank-22.jpg
│   └── food-bank-33.jpg
└── js/                      Reserved for future interactivity
```

## Technologies Used
- HTML5 (semantic structure and content)
- CSS3 (external stylesheet, Flexbox, Grid, media queries)
- Git and GitHub for version control

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


## Changelog

### Part 1 - Building the Foundation
- 14 Aug 2026 - Created initial HTML structure for all 5 pages (index, about, services, enquiry, contact).
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
