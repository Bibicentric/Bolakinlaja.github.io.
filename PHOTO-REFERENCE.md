# Photo Management Reference - Quick Look

This is a quick reference guide for managing photos in your portfolio. For detailed instructions, see [ADDING-PHOTOS-GUIDE.md](ADDING-PHOTOS-GUIDE.md).

## 📁 File Structure

```
Bolakinlaja.github.io/
├── images/                          # 👈 PUT ALL PHOTOS HERE
│   ├── Image (14).jpg              # Current profile photo
│   ├── Bowie State  T-Mobile 08.2025.jpeg  # Project photo
│   └── [your-photos-here]          # Add new photos
│
├── index.html                       # Home page (has profile photo)
├── about.html                       # About page (has profile + project photos)
├── projects.html                    # Projects listing
├── projects/                        # Individual project folders
│   ├── blue-roof/
│   │   └── index.html              # Use ../../images/ to reference photos
│   ├── cda-match-program/
│   │   └── index.html
│   └── ...
│
├── README.md                        # Main documentation
└── ADDING-PHOTOS-GUIDE.md          # Detailed photo guide
```

## 🎯 Common Tasks - Copy & Paste Ready

### 1. Change Profile Photo (Home & About Pages)

**File:** `index.html` (line 20) and `about.html` (line 609)

```html
<!-- BEFORE -->
<img src="images/Image (14).jpg" alt="Bolametiren Akinlaja">

<!-- AFTER - Change the filename -->
<img src="images/your-new-photo.jpg" alt="Bolametiren Akinlaja">
```

### 2. Add a Centered Photo to Any Page

```html
<div style="text-align: center; margin: 2rem 0;">
  <img src="images/your-photo.jpg" alt="Description" 
       style="max-width: 600px; width: 100%; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
</div>
```

### 3. Add a Photo Gallery (2-3 photos side by side)

```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <img src="images/photo1.jpg" alt="Photo 1" style="width: 100%; border-radius: 0.8rem;">
  <img src="images/photo2.jpg" alt="Photo 2" style="width: 100%; border-radius: 0.8rem;">
  <img src="images/photo3.jpg" alt="Photo 3" style="width: 100%; border-radius: 0.8rem;">
</div>
```

### 4. Add Photo with Caption

```html
<figure style="margin: 2rem 0;">
  <img src="images/your-photo.jpg" alt="Description" 
       style="width: 100%; max-width: 700px; border-radius: 1rem;">
  <figcaption style="text-align: center; margin-top: 0.8rem; color: #666; font-style: italic;">
    Your caption text here
  </figcaption>
</figure>
```

### 5. Add Full-Width Banner Photo

```html
<img src="images/banner.jpg" alt="Description" 
     style="width: 100%; height: 300px; object-fit: cover; border-radius: 1rem; margin: 2rem 0;">
```

### 6. Add Photo from Project Subfolder

When editing files in `projects/your-project/index.html`, use `../../images/`:

```html
<img src="../../images/your-photo.jpg" alt="Project screenshot" 
     style="width: 100%; max-width: 800px; border-radius: 1rem;">
```

## 📍 Current Photo Locations

| File | Line | Element | Purpose |
|------|------|---------|---------|
| `index.html` | 20 | `<img src="images/Image (14).jpg">` | Header profile photo |
| `about.html` | 609 | `<img src="images/Image (14).jpg">` | About page header |
| `about.html` | 744 | `<img src="images/Bowie State  T-Mobile...">` | T-Mobile project |
| `about.html` | 751 | `<img src="images/Image (14).jpg">` | Middle Gates project |
| `_layouts/default.html` | varies | `<img src="{{ site.baseurl }}/images/...">` | Jekyll template |

## ✅ Checklist Before Adding Photos

- [ ] Photo is saved in the `images/` folder
- [ ] Filename has no spaces (use hyphens: `my-photo.jpg`)
- [ ] File size is under 500KB (compress if needed)
- [ ] Appropriate dimensions (profile: 400-800px square, projects: 1200px wide max)
- [ ] File format is `.jpg` for photos or `.png` for logos
- [ ] Alt text is descriptive and meaningful

## 🔧 Image Optimization Tools

Before adding large images, compress them:

- **Squoosh** - https://squoosh.app/ (Google's free tool)
- **TinyPNG** - https://tinypng.com/ (PNG and JPG compression)
- **ImageOptim** - https://imageoptim.com/ (Mac app)
- **JPEG Optimizer** - Built into most photo editors

**Target file sizes:**
- Profile photos: 50-150 KB
- Project photos: 100-300 KB
- Banner images: 200-400 KB

## 🎨 Responsive Image Styles

These styles make images look good on all devices:

```html
<!-- Full width, responsive -->
<img src="images/photo.jpg" alt="Description" 
     style="width: 100%; height: auto; border-radius: 1rem;">

<!-- Max width with centering -->
<img src="images/photo.jpg" alt="Description" 
     style="display: block; margin: 0 auto; max-width: 600px; width: 100%; border-radius: 1rem;">

<!-- Square crop (for profile photos) -->
<img src="images/photo.jpg" alt="Description" 
     style="width: 300px; height: 300px; object-fit: cover; border-radius: 50%;">

<!-- With shadow effect -->
<img src="images/photo.jpg" alt="Description" 
     style="width: 100%; border-radius: 1rem; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
```

## 🚨 Troubleshooting

**Photo not showing?**
1. Check filename spelling (case-sensitive!)
2. Ensure photo is in `images/` folder
3. Refresh browser (Ctrl+F5 or Cmd+Shift+R)
4. Check browser console for errors (F12)

**Photo loads slowly?**
1. Compress the image file
2. Resize to appropriate dimensions
3. Convert to JPEG format

**Photo looks blurry?**
1. Use higher resolution source
2. Ensure not upscaling small images
3. Check compression quality

**Photo doesn't fit properly?**
1. Add `object-fit: cover;` style
2. Adjust width/height values
3. Use responsive styles shown above

## 📚 Learn More

- **Full Guide:** [ADDING-PHOTOS-GUIDE.md](ADDING-PHOTOS-GUIDE.md)
- **Main Docs:** [README.md](README.md)
- **HTML/CSS:** https://www.w3schools.com/html/html_images.asp

## 💡 Pro Tips

1. **Always include alt text** - It helps with accessibility and SEO
2. **Use descriptive filenames** - `conference-2024.jpg` not `IMG_1234.jpg`
3. **Test on mobile** - Resize browser to check responsive behavior
4. **Backup originals** - Keep high-res versions before compressing
5. **Consistency** - Use similar styling for photos throughout the site

---

**Need help?** Open an issue or check the detailed guide in [ADDING-PHOTOS-GUIDE.md](ADDING-PHOTOS-GUIDE.md)
