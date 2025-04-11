# Pet Conveyor Belt Frontend – Web Interface for RoboTurtle

## Solution Overview:
This frontend web application is the visual companion to the RoboTurtle backend service. Designed to highlight and display images shared in the Rainbow_turtle1 Discord server, it acts as the primary user interface seeing the pet photos submitted by community members. It is intentionally built to only show the conveyor belt of images without any background so that it can be displayed on OBS and therefore on twitch streams. It is built with HTML, CSS, and JavaScript as a standard and simple website. The site communicates directly with the backend API to dynamically fetch and present user-generated content in as smooth and  responsive a way as possible.  
The application is designed with performance, security, and simplicity in mind, making use of lightweight code, image rendering optimizations, and clean UI/UX design to create a scrolling slideshow of images.

## Project Aim & Objectives

### Main Goal:
To provide an effective, well designed and functional frontend experience for displaying images submitted to the RoboTurtle bot.  
Backend repo: https://github.com/Rainbow-Turtle1/roboturtle-bot/tree/master

### Key Objectives
- Fetch images securely from the RoboTurtle API.
- Display these images in an infinitely looping conveyor  belt like slideshow.
- Maintain a lightweight and responsive design.
- Minimize client-side dependencies to maintain performance.
- Ensure all the images are scaled to the same height to allow for differences in image dimensions

## Enterprise Considerations

### Performance
- Uses image proxy technique to improve cross-origin image loading and reduce broken images.
- Fetches a designated number of images on request (30).

### Scalability
- Frontend makes paginated requests to handle large image sets.
- Static assets allow fast delivery via CDN or standard static hosting.

### Security
- No API keys or credentials in frontend code.
- API calls are made using HTTPS only.
- Frontend handles public access only, with no write operations.

### Deployment
- Hosted on Fasthosts, deployed via FileZilla.
- Static files include HTML, CSS, JS, and canvas render logic.
- Served from a subpath under a root domain for embedding in OBS.

## Installation & Usage Instructions

### Prerequisites
- FTP/SFTP access to your web server (e.g. Fasthosts)
- A modern web browser
- (Optional) Node.js for local testing

### Setup Steps
Clone the repository:
```
git clone https://github.com/Rainbow-Turtle1/PetConveyerbeltSite.git
```

Open index.html directly in your browser to test.  
(Optional) Run with a static server like Live Server or use:
```npx serve```

## Deployment Instructions
Use FileZilla to upload the following to your server:
- index.html
- script.js
- style.css

Ensure these files are placed in the correct public directory.  
Note: Do not upload node_modules or unnecessary development files.

## Feature Overview

### Image Slideshow Viewer  
**Purpose:** Renders a full-width slideshow of Discord-submitted pet photos.

**Location:**  
index.html: Layout and canvas structure.  
script.js: Handles image fetching and canvas rendering.  
style.css: Styling for responsive layout.

**Behavior:**  
Images are fetched from the RoboTurtle API.  
Images are drawn to the canvas using drawImage().  
The slideshow scrolls images from right to left continuously.

### Image Proxy Support  
**Purpose:** Prevents CORS issues and improves reliability of Discord CDN images.

**Logic:**  
Images are requested through the backend proxy (/api/image-proxy?url=).  
This allows expired or insecure URLs to still be fetched server-side.

### Responsive Canvas Design  
**Purpose:** Ensures the display adapts to various screen sizes.  
I used JavaScript to adjust canvas dimensions and Scaled images to consistent height for alignment.

## Known Issues & Future Enhancements
Expired URLs: Discord-hosted images may expire. Future iterations may store images in permanent cloud storage.  
No manual scroll/pause: Current slideshow is auto-scrolling only.  
No user customization: Could add options for speed, image spacing, or transition effects.  
Limited error recovery: Adding fallback images or icons would improve UX for failed fetches. Alternatively requesting the bot fetch teh image again could allow the system to be much more robust. 

## References
MDN Web Docs – Core documentation for HTML5, JavaScript, and the Canvas API.  
https://developer.mozilla.org/

HTML5 Canvas API – Used to draw and animate images for the slideshow.  
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

Discord CDN & CORS Documentation – Helped understand how to work around Discord image URL limitations.  
https://discord.com/developers/docs

FileZilla – Used to deploy the frontend via FTP to Fasthosts.  
https://filezilla-project.org/

Fasthosts – Hosting provider where the frontend site is deployed.  
https://www.fasthosts.co.uk/

VS Code Live Server – Optional tool used during local development for quick testing.  
https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
