
# Portfolio React Client

This React client is designed to work with the [Portfolio API](git@github.com:benjaminfkile/portfolio-v5-api.git) backend to deliver a dynamic, media-rich portfolio website.

Feel free to use this client alongside the API repo to build your own portfolio site!

---

## Overview

The app fetches portfolio content from the API and renders sections including About, Skills, Portfolio projects, Timeline, Contact, and Footer. It handles media playback for videos and provides interactive UI elements like modals for portfolio details.

---

## Component Structure and Relationships

### `App`

- Top-level class component managing main state (`apiResponse`) which holds all portfolio content fetched from the API.
- Calls API endpoint `/api/portfolio-content` on mount.
- Conditionally renders the main site sections or an API error message.

### Sections

Each corresponds to a major portfolio section, receiving data via props from `App`'s fetched content.

- **`About`**  
  Renders the About Me text.

- **`Skills`**  
  Displays a grid of skills using multiple `SkillItem` components.

- **`Portfolio`**  
  Shows portfolio projects as clickable items using `PortfolioItem`.  
  Also includes matching `PortfolioItemModal` components for expanded project views.

- **`Timeline`**  
  Renders a timeline of career or project milestones.

- **`Contact`**  
  Shows contact information including phone and email.

- **`Footer`**  
  Displays footer text and social media links.

### UI Components

- **`SkillItem`**  
  Displays an individual skill icon, title, and description.

- **`PortfolioItem`**  
  Shows a portfolio project’s image or video thumbnail.  
  Plays videos with dynamic playback rates and supports vertical flipping.

- **`PortfolioItemModal`**  
  Modal dialog providing detailed project info, tech icons, media playback, description, and links.

- **`APIError`**  
  Simple error display when API fetch fails.

- **`MainLoader`** & **`FancyLoader`**  
  Loading spinners used to indicate loading state (currently commented out in `App`).

- **`NavMenu`**  
  Responsive navigation menu linking to page sections and collapsing on mobile.

- **`Header` & `HeaderBackground`**  
  Render the page header with interactive background animations powered by `hblService`.

---

## Utilities and State Management

- **`mutator`**  
  Utility function to immutably update component state by setting or toggling keys.

- **`handlePlaybackRate`**  
  Adjusts HTML5 video playback speed dynamically, retrying if video element not yet loaded.

---

## How to Run

1. Clone this repo.

2. Run:

   ```bash
   npm install
   npm start
   ```

3. Make sure `.env` contains:

   ```
   REACT_APP_API_URL=http://localhost:<API_PORT>
   REACT_APP_HEARTBEAT_INTERVAL=15000
   ```

4. The app will fetch portfolio content from the backend API and render it dynamically.

---

## Notes

- The client expects the API server from [portfolio-v5-api](git@github.com:benjaminfkile/portfolio-v5-api.git) to be running and accessible.
- Media files (images/videos) stream through the API from AWS S3.
- The project uses Bootstrap for layout/styling and some jQuery for header animations.
- Feel free to customize and extend both the API and this client to suit your personal portfolio needs.