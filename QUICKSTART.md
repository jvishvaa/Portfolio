# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
cd portfolio-nextjs
npm install
```

## Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 3: Customize Content

### Update Your Information

1. **Profile Image** - `components/Hero.tsx` line 95
   - Replace the Google profile image URL with your own

2. **Name & Title** - `components/Hero.tsx` lines 32-38
   ```tsx
   <h1>Hey, I'm <span>Your Name</span></h1>
   <h2>Your Job Title</h2>
   ```

3. **Bio** - `components/Hero.tsx` lines 43-47 & `components/About.tsx`

4. **Location** - `components/Hero.tsx` line 54

5. **Experience Years** - `components/Hero.tsx` line 62

### Add Your Work Experience

Edit `components/Experience.tsx` - Update the `experiences` array (line 5)

```typescript
const experiences = [
  {
    company: 'Your Company',
    role: 'Your Role',
    period: '2023 - Present',
    description: 'What you did...',
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
    logo: '🏢' // Use emoji or update to use images
  }
]
```

### Add Your Projects

Edit `components/Portfolio.tsx` - Update the `projects` array (line 9)

```typescript
const projects = [
  {
    id: 1,
    title: 'Project Name',
    category: 'Mobile', // or 'Web', 'Dashboard', 'Research'
    description: 'Project description',
    tags: ['React', 'TypeScript', 'Design'],
    metrics: '100+ Users' // or conversion %, rating, etc.
  }
]
```

### Update Contact Info

Edit `components/Contact.tsx`:
- Email address (line 145)
- Social media links (lines 220-245)

### Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  accent: '#YOUR_COLOR',        // Main brand color
  'accent-hover': '#YOUR_COLOR', // Hover state
  // ... other colors
}
```

## Step 4: Build for Production

```bash
npm run build
npm start
```

## Step 5: Deploy

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Deploy!

### Option 2: Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect repository
4. Build: `npm run build`
5. Deploy!

## 🎨 Customization Tips

### Change Fonts
Edit `app/globals.css` line 5:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

### Add Real Images
1. Place images in `/public/images/`
2. Update image paths in components
3. Or use external URLs (currently configured in `next.config.js`)

### Make Contact Form Work
Add email service integration:
- **EmailJS**: Free, easy setup
- **Formspree**: Simple form backend
- **SendGrid**: Professional email API

Update `handleSubmit` in `components/Contact.tsx`

## 📱 Mobile Testing

Test on different devices:
```bash
# Get your local IP
ipconfig getifaddr en0  # macOS
hostname -I  # Linux

# Access from mobile: http://YOUR_IP:3000
```

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Build errors?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**TypeScript errors?**
Most errors are just warnings and won't prevent the site from running.

## ✅ Final Checklist

- [ ] Updated name and title
- [ ] Changed profile image
- [ ] Added work experience
- [ ] Added projects
- [ ] Updated contact information
- [ ] Changed colors to match brand
- [ ] Tested on mobile
- [ ] Built successfully
- [ ] Deployed to hosting

---

**Need help?** Check the full README.md for detailed documentation.
