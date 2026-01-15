# Quick Start Guide: Adding Photos to Your Portfolio

This guide will help you add photos to your portfolio website in just a few simple steps.

## 🚀 Quick Start (5 Minutes)

### Step 1: Add Your Photo to the Images Folder

1. Find your photo file on your computer
2. Navigate to the `images/` folder in your portfolio
3. Copy your photo into this folder
4. Rename it to something simple (no spaces!), like: `my-photo.jpg`

### Step 2: Update Your Profile Photo

Open `index.html` in a text editor and find this line (around line 20):

```html
<img src="images/Image (14).jpg" alt="Bolametiren Akinlaja">
```

Change it to:

```html
<img src="images/my-photo.jpg" alt="Bolametiren Akinlaja">
```

Do the same thing in `about.html` (around line 609).

### Step 3: View Your Changes

Open `index.html` in your web browser to see your new photo!

---

## 📸 Common Tasks

### Change Your Header Photo (Home & About Pages)

**Files to edit:** `index.html` and `about.html`

1. Add your photo to `images/` folder
2. Find the line with `<img src="images/...`
3. Replace the filename with your new photo

**Example:**
```html
<!-- Before -->
<img src="images/Image (14).jpg" alt="Bolametiren Akinlaja">

<!-- After -->
<img src="images/new-headshot.jpg" alt="Bolametiren Akinlaja">
```

### Add a Photo to Your About Page

Open `about.html` and add this code where you want the photo:

```html
<div style="margin: 2rem 0;">
  <img src="images/your-photo.jpg" alt="Description of photo" 
       style="width: 100%; max-width: 600px; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
</div>
```

### Add Multiple Photos (Gallery Style)

Add this code to any HTML page:

```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <img src="images/photo1.jpg" alt="Photo 1" style="width: 100%; border-radius: 0.5rem;">
  <img src="images/photo2.jpg" alt="Photo 2" style="width: 100%; border-radius: 0.5rem;">
  <img src="images/photo3.jpg" alt="Photo 3" style="width: 100%; border-radius: 0.5rem;">
</div>
```

### Add a Photo to a Project Page

1. Navigate to `projects/your-project-name/index.html`
2. Add this code where you want the image:

```html
<img src="../../images/project-photo.jpg" alt="Project screenshot" 
     style="width: 100%; max-width: 800px; border-radius: 1rem; margin: 2rem 0;">
```

Note: Use `../../images/` (two dots) because project files are in subfolders.

---

## 💡 Tips & Best Practices

### Image Size & Format

- **Profile photos**: Square format (400x400 to 800x800 pixels)
- **Project photos**: Landscape format (1200px width maximum)
- **File size**: Keep under 500KB for faster loading
- **Format**: Use `.jpg` for photos, `.png` for logos/graphics

### Optimize Your Images (Before Adding)

Too-large images slow down your site! Compress them first:

1. Visit [Squoosh.app](https://squoosh.app/) or [TinyPNG.com](https://tinypng.com/)
2. Upload your photo
3. Download the compressed version
4. Use that version in your portfolio

### File Naming Tips

✅ **Good names:**
- `headshot-2024.jpg`
- `project-demo.jpg`
- `team-photo.jpg`

❌ **Avoid:**
- `My Photo.jpg` (spaces)
- `IMG_1234.jpg` (not descriptive)
- `photo copy (2).jpg` (confusing)

### Don't Forget Alt Text!

Always include descriptive alt text for accessibility:

```html
<!-- Good alt text -->
<img src="images/conference.jpg" alt="Speaking at AI Innovation Conference 2024">

<!-- Bad alt text -->
<img src="images/conference.jpg" alt="image">
```

---

## 🔍 Troubleshooting

### My photo doesn't show up

**Check these things:**
1. Is the photo in the `images/` folder?
2. Did you spell the filename exactly right (including capitals)?
3. Did you save the HTML file after editing?
4. Try refreshing your browser (press F5 or Cmd+R)

### My photo looks stretched or squashed

Add this to your image tag:
```html
style="width: 100%; height: auto; object-fit: cover;"
```

### Photo is too big and loads slowly

1. Open your photo in an image editor
2. Resize it to a smaller width (800-1200px)
3. Export as JPEG with 80% quality
4. Or use [Squoosh.app](https://squoosh.app/) to compress it

---

## 📍 Where Photos Are Currently Used

| Page | Location | Purpose | File Path |
|------|----------|---------|-----------|
| Home | Header | Profile photo | `index.html` line 20 |
| About | Header | Profile photo | `about.html` line 609 |
| About | Experience section | T-Mobile project | `about.html` line 744 |
| About | Experience section | Middle Gates (placeholder) | `about.html` line 751 |

---

## 🎨 Photo Layout Examples

### Centered Single Photo
```html
<div style="text-align: center; margin: 2rem 0;">
  <img src="images/photo.jpg" alt="Description" 
       style="max-width: 600px; width: 100%; border-radius: 1rem;">
</div>
```

### Side-by-Side Photos
```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0;">
  <img src="images/photo1.jpg" alt="Photo 1" style="width: 100%; border-radius: 1rem;">
  <img src="images/photo2.jpg" alt="Photo 2" style="width: 100%; border-radius: 1rem;">
</div>
```

### Photo with Caption
```html
<figure style="margin: 2rem 0;">
  <img src="images/photo.jpg" alt="Description" 
       style="width: 100%; border-radius: 1rem;">
  <figcaption style="text-align: center; margin-top: 0.5rem; color: #666; font-style: italic;">
    Caption text goes here
  </figcaption>
</figure>
```

### Full-Width Banner Photo
```html
<img src="images/banner.jpg" alt="Description" 
     style="width: 100%; height: 400px; object-fit: cover; border-radius: 1rem; margin: 2rem 0;">
```

---

## 📱 Testing Checklist

After adding photos, check:

- [ ] Photo appears on the page
- [ ] Photo looks clear (not blurry)
- [ ] Photo loads quickly (not too big)
- [ ] Photo looks good on mobile (resize browser)
- [ ] Alt text describes the image
- [ ] No broken image icons

---

## 🤝 Need More Help?

- Check the main [README.md](README.md) for detailed documentation
- Look at existing pages for examples
- Review current images in the `images/` folder to see naming conventions

**Remember:** Start small! Add one photo, test it, then add more. You can always edit and improve later.
