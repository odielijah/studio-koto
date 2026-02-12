# Koto Landing Page Clone
This is a project where I recreated the Studio Koto website. I wanted to turn it into a high-quality portfolio landing page that shows off what I can do with animations and clean code. In summary, this project serves as a showcase of modern front-end engineering, focusing on fluid animations, responsiveness, and an amazing UI.

I built it as a single-page application (SPA) to show how I can turn a professional design into a fast, smooth, and fully working website.

[Live Demo](https://studio-koto-odielijah.netlify.app/)

## Technologies
- `React + Vite`
- `Tailwind CSS`
- `Framer Motion`
- `React Router`
- `Swiper.js`
- `Netlify`

## Key Features
- *Interactive Hero* - I built a "hover-to-reveal" system where hovering over specific underlined text triggers a beautiful display of category-specific images and videos.

- *Custom Page Transitions* - Moving between sections feels connected and smooth rather than jumping abruptly.

- *Interactive Custom Cursor* - A unique cursor that changes its look based on what you are hovering over (like "Read" or "View" modes).

- *Page Loader* - A custom entrance animation that ensures a great first impression when the site loads.

- *Smooth Scrolling Feed* - Motion-heavy effects that feel natural and organic as the user explores the content feed.

## Project Architecture
- *State-Driven Interactions* - In the `HeroSection`, I used React state to track which "pack" of images should be visible.

- *App Wrapper* - I used a `PageLoader` and `TransitionProvider` as top-level components to wrap the entire site in a consistent animated experience.

- *Centralized Routing* - All pages (Home, Work, About, Careers, and Contact) are managed in a single `Routes` file for easy navigation.

- *Mobile Optimization* - I implemented custom logic to detect screen size and change how the hover-effects and sliders behave on touch devices.

- *Component-Based Layout* - The `Header` and `Footer` stay constant across pages, while the main section dynamically swaps out content.

- *Global Styles* - Styling is handled through Tailwind CSS and a central index file to maintain a consistent look.

## Technical Challenges & Solutions
#### 1. Interactive "Hover-to-Reveal" Logic
- *The Challenge:* Making a system where hovering over text reveals a specific "pack" of images and videos without making the UI feel cluttered.
- *The Solution:* I used React state to track the "Active Pack." When a user hovers over a category, the state updates to trigger a beautiful overlay of assets. I also added logic to detect mobile devices so this feature switches to a clean "toggle" mode for touch screens.

#### 2. Building a Responsive Koto Slider
- *The Challenge:* Creating a slider that feels high-end and keeps its focus even when the screen size changes.
- *The Solution:* Using Swiper.js, I implemented a "centered" layout. I wrote a custom function to calculate the opacity of slides based on their distance from the center. This ensures that the middle project always stands out, while the side projects fade away smoothly.

#### 3. Creating the Auto-Scrolling Team List
- *The Challenge:* Making two separate components—a vertical name list and a photo display—work together in perfect sync.
- *The Solution:* I built a coordinated system where a vertical Swiper list auto-plays through names. I used a "listener" to detect when the name changes, which then triggers a synchronized fade animation on the team photo. This creates a professional, hands-free "member showcase" effect.

## 4. Combining CSS and Tailwind
- *The Challenge:** Managing complex animations that Tailwind alone can't handle while keeping the styling organized.
- **The Solution:* I used a hybrid approach. I used Tailwind CSS for the layout, spacing, and colors to keep development fast. For the complex, custom motion effects (like the Hero overlays and Swiper custom navigation), I wrote focused CSS files to gain pixel-perfect control over the design.

## How to 


