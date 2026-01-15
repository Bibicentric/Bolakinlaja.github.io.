# Bolametiren Akinlaja - Portfolio Site

A modern, multi-page portfolio website showcasing professional experience in Program Management, Data Analytics, and Workforce Development.

## 📸 Adding Photos to Your Portfolio

**Quick Start:** See [PHOTO-REFERENCE.md](PHOTO-REFERENCE.md) for copy-paste ready examples

**Detailed Guide:** See [ADDING-PHOTOS-GUIDE.md](ADDING-PHOTOS-GUIDE.md) for step-by-step instructions

**TL;DR:** 
1. Add your photo to the `images/` folder
2. Edit the HTML file and change the image filename
3. View in browser to see your changes

## Structure

- **index.html** - Home page with welcome message and quick links
- **about.html** - About Me page with professional background
- **projects.html** - Featured projects showcase
- **skills.html** - Skills and technologies
- **contact.html** - Contact form and contact information

## Local Testing

To view the site locally:

1. Open `index.html` in your web browser, or
2. Run a local server:
   ```bash
   python3 -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`

## How to Add Photos to Your Portfolio

### 1. Directory Structure

All images should be placed in the `images/` directory:
```
images/
├── Image (14).jpg          # Profile photo (currently used)
├── Bowie State  T-Mobile 08.2025.jpeg  # Example project photo
└── [your-new-photo.jpg]    # Add your photos here
```

### 2. Adding Your Profile Photo

To update your profile photo on the **Home** and **About** pages:

1. Add your new photo to the `images/` directory
2. Open `index.html` and find line 20:
   ```html
   <img src="images/Image (14).jpg" alt="Bolametiren Akinlaja">
   ```
3. Replace `Image (14).jpg` with your new photo filename:
   ```html
   <img src="images/your-photo.jpg" alt="Bolametiren Akinlaja">
   ```
4. Repeat the same change in `about.html` (line 609)

### 3. Adding Photos to Project Pages

To add photos to projects in the **About** page or project sections:

**Example in about.html (around line 868-870):**
```html
<div class="experience-image">
  <img src="images/your-project-photo.jpg" alt="Project Name" 
       style="width: 100%; border-radius: 1.5rem; box-shadow: var(--shadow-lg);">
</div>
```

### 4. Adding Photos to Individual Project Pages

For project detail pages (in the `projects/` directory):

1. Navigate to the specific project folder (e.g., `projects/blue-roof/`)
2. Open the `index.html` file in that folder
3. Add an image tag where you want the photo:
   ```html
   <img src="../../images/your-photo.jpg" alt="Project description" 
        style="width: 100%; max-width: 800px; border-radius: 1rem;">
   ```
   Note: Use `../../images/` to reference images from project subdirectories

### 5. Best Practices for Images

- **File Format**: Use `.jpg` for photos, `.png` for graphics with transparency
- **File Size**: Optimize images to be under 500KB for faster loading
  - Use online tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- **Image Dimensions**: 
  - Profile photos: 400x400px to 800x800px (square)
  - Project photos: 1200px width maximum
- **File Naming**: Use descriptive names without spaces (use hyphens instead)
  - Good: `project-demo-2024.jpg`
  - Avoid: `My Photo 2024.jpg`

### 6. Adding a Photo Gallery

To create a simple photo gallery in any page:

```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <img src="images/photo1.jpg" alt="Description 1" style="width: 100%; border-radius: 1rem;">
  <img src="images/photo2.jpg" alt="Description 2" style="width: 100%; border-radius: 1rem;">
  <img src="images/photo3.jpg" alt="Description 3" style="width: 100%; border-radius: 1rem;">
</div>
```

### 7. Quick Reference: Common Image Locations

| Location | File | Line # | Purpose |
|----------|------|--------|---------|
| Header photo (Home) | `index.html` | 20 | Main profile photo |
| Header photo (About) | `about.html` | 609 | About page profile |
| Project photo 1 | `about.html` | 744 | T-Mobile Curiosity Lab |
| Project photo 2 | `about.html` | 751 | Middle Gates (uses profile photo as placeholder) |

### 8. Testing Your Changes

After adding images:
1. Open the HTML file in your browser (or use `python3 -m http.server 8000`)
2. Check that images load correctly
3. Verify images look good on mobile (resize your browser window)
4. Ensure alt text is descriptive for accessibility

## Technologies

- HTML5
- CSS3 (custom responsive stylesheet)
- Font Awesome icons

## License

Based on HTML5 UP template. Free for personal and commercial use.
