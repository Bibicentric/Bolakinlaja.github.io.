# Portfolio Images Guide

This folder contains all images used throughout the portfolio website.

## Folder Structure

### `/images/` (Root)
Main portfolio images:
- `Image (14).jpg` - Professional headshot
- `Bowie State T-Mobile 08.2025.jpeg` - AfroTech conference photo

### `/images/projects/`
Project-specific images showcasing work and achievements:
- Add high-quality images of your projects here
- Recommended size: 1200x800px or 16:9 aspect ratio
- Format: JPEG or PNG
- Keep file sizes under 500KB for optimal loading

### `/images/gallery/`
Event and milestone photos for the photo gallery section:
- Conference presentations
- Team collaborations
- Workshop and training sessions
- Award ceremonies
- Community events

### `/images/profile/`
Professional photos and headshots:
- Profile pictures
- Team photos
- Professional portraits

## Image Guidelines

### Quality Standards
- **Resolution**: Minimum 1920x1080px for full-width images
- **Format**: JPEG for photos, PNG for graphics with transparency
- **File Size**: Optimize to under 500KB per image
- **Aspect Ratios**: 
  - Hero images: 16:9
  - Project cards: 4:3 or 16:9
  - Profile photos: 1:1 (square)

### Naming Convention
Use descriptive, lowercase names with hyphens:
- ✅ Good: `afrotech-2025-presentation.jpg`
- ✅ Good: `cda-match-program-launch.jpg`
- ❌ Avoid: `IMG_1234.jpg`
- ❌ Avoid: `My Photo.jpg`

### Accessibility
Always include descriptive alt text in HTML:
```html
<img src="images/project-name.jpg" alt="Descriptive text about the image">
```

## Adding New Images

1. **Optimize** your images before uploading using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - Adobe Photoshop Export for Web

2. **Place** in the appropriate subfolder

3. **Update** HTML files with the image path:
   ```html
   <img src="images/projects/your-image.jpg" alt="Description">
   ```

4. **Test** locally to ensure images display correctly

## Current Images Usage

| Image | Used In | Description |
|-------|---------|-------------|
| `Bowie State T-Mobile 08.2025.jpeg` | index.html, about.html, projects.html | AfroTech conference at T-Mobile Curiosity Lab |
| `Image (14).jpg` | index.html (header), about.html | Professional headshot |

## Tips for Best Visual Impact

1. **Consistency**: Use similar styles and tones across project images
2. **Action Shots**: Include photos of you presenting, collaborating, or teaching
3. **Before/After**: Show transformation in project work
4. **Team Photos**: Highlight collaborative achievements
5. **Variety**: Mix professional photos with candid moments
6. **Authenticity**: Use real photos that represent your actual work

## Photo Ideas to Add

- [ ] Workshop facilitation photos
- [ ] Conference presentation slides with you presenting
- [ ] Team collaboration sessions
- [ ] Lab/workspace photos showing your environment
- [ ] Student engagement moments
- [ ] Partnership signing or milestone celebrations
- [ ] Community event participation
- [ ] Award or recognition ceremonies
- [ ] Behind-the-scenes project development
- [ ] Data visualization screenshots from your projects

Remember: High-quality, authentic images significantly enhance the visual appeal and credibility of your portfolio!
