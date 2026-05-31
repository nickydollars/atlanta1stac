# Nicky Dollars - Professional 1st AC Portfolio Site

## What's Been Built

A professional, responsive portfolio website for Nick Montalvo (Nicky Dollars) featuring:

✅ **Hero Section** with professional stats and CTA
✅ **Featured Work** showcase with major productions
✅ **Video Gallery** with 5 embedded trailers
✅ **Full IMDB Filmography** (39 credits) with filtering
✅ **About Section** with bio
✅ **Contact Form** and info section
✅ **Smooth scrolling** and professional animations
✅ **Fully responsive** design

## What Still Needs Your Input

### 1. Photos (marked as placeholders in code)
- **Hero photo**: Professional shot of you working or headshot
- **About photo**: Another professional image

### 2. Bio Text
Current placeholder bio is in the About section. You can:
- Keep it as is (it's pretty good!)
- Customize it to your voice
- Add more personal details

### 3. Contact Information
Currently shows `[INSERT EMAIL]` and `[INSERT PHONE]`
- Add your professional email
- Add your phone number
- Optional: Add LinkedIn, Instagram links

## How to Deploy to Firebase

### First Time Setup:

1. **Install Firebase CLI** (if you haven't already):
```bash
npm install -g firebase-tools
```

2. **Login to Firebase**:
```bash
firebase login
```

3. **Initialize Firebase** (in the nickydollars-site folder):
```bash
cd /home/claude/nickydollars-site
firebase init hosting
```

Select:
- Use existing project or create new one
- Public directory: `.` (current directory)
- Single-page app: Yes
- Don't overwrite index.html

4. **Deploy**:
```bash
firebase deploy --only hosting
```

### To Update Later:

Just run from the nickydollars-site folder:
```bash
firebase deploy --only hosting
```

## To Add Photos:

1. Add your photos to the folder (e.g., `hero-photo.jpg`, `about-photo.jpg`)
2. Update the HTML in index.html:

Replace this:
```html
<div class="photo-placeholder">
    <p>Professional photo here</p>
</div>
```

With this:
```html
<img src="hero-photo.jpg" alt="Nick Montalvo">
```

## To Update Contact Info:

In `index.html`, find the Contact section and replace:
- `[INSERT EMAIL]` with your email
- `[INSERT PHONE]` with your phone number

## To Update Bio:

In `index.html`, find the About section and edit the text inside `<div class="bio-placeholder">`.

## Features Included:

- ✅ Smooth scroll navigation
- ✅ IMDB credits filterable by type (Features, TV, TV Movies)
- ✅ Embedded YouTube trailers
- ✅ Contact form (ready for backend integration)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Professional color scheme and typography
- ✅ Hover effects and animations

## Next Steps to Make it Live:

1. Add your photos
2. Add your contact info
3. Customize bio if desired
4. Deploy to Firebase
5. Connect to nickydollars.com domain in Firebase Hosting settings

That's it! You'll have a professional portfolio site live.
