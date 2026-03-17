# Portfolio Website - Next.js

A modern, fully responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Inspired by professional portfolio designs with enhanced animations and user experience.

## ✨ Features

### Core Features
- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Type-Safe** - Built with TypeScript for robust code
- **Performance Optimized** - Fast loading times with Next.js App Router
- **SEO Friendly** - Optimized meta tags and structure

### Sections
1. **Hero Section**
   - Eye-catching introduction with profile card
   - Open to work badge
   - Location and experience indicators
   - CTA buttons for messaging and portfolio viewing
   - Animated background effects

2. **About Section**
   - Professional bio
   - Core skills showcase
   - Experience statistics
   - Company logos

3. **Experience Section**
   - Timeline-based work history
   - Detailed role descriptions
   - Key achievements for each position
   - Company information

4. **Portfolio Section**
   - Filterable project grid
   - Project categories (Mobile, Web, Dashboard, Research)
   - Project metrics and tags
   - Hover effects and interactions

5. **Contact Section**
   - Functional contact form
   - Contact information cards
   - Social media links
   - Email, location, and availability info

6. **Footer**
   - Site navigation
   - Social media links
   - Resources and quick links
   - Copyright information

### Design Features
- **Custom Fonts** - Playfair Display for headings, Work Sans for body text
- **Gradient Backgrounds** - Beautiful mesh gradients and color transitions
- **Smooth Animations** - Fade in, slide up, scale effects
- **Hover Effects** - Interactive cards and buttons
- **Glass Morphism** - Modern glassmorphism effects
- **Custom Scrollbar** - Branded scrollbar design

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or extract the project**
   ```bash
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Hero.tsx              # Hero section
│   ├── About.tsx             # About section
│   ├── Experience.tsx        # Work experience section
│   ├── Portfolio.tsx         # Projects portfolio
│   ├── Contact.tsx           # Contact form and info
│   └── Footer.tsx            # Footer component
├── public/                   # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 🎨 Customization

### Personal Information

Edit the following files to add your information:

1. **Hero Section** (`components/Hero.tsx`)
   - Update name, title, bio
   - Change profile image URL
   - Modify location and experience

2. **About Section** (`components/About.tsx`)
   - Update bio text
   - Modify skills array
   - Change statistics

3. **Experience Section** (`components/Experience.tsx`)
   - Add/modify work experiences
   - Update company logos
   - Edit achievements

4. **Portfolio Section** (`components/Portfolio.tsx`)
   - Add your projects
   - Update project images
   - Modify categories and filters

5. **Contact Section** (`components/Contact.tsx`)
   - Update email address
   - Add social media links
   - Customize form handling

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: '#0A0E27',        // Dark blue
  secondary: '#1A1F3A',      // Medium blue
  accent: '#6366F1',         // Indigo (main accent)
  'accent-hover': '#4F46E5', // Darker indigo
  muted: '#64748B',          // Gray
  border: '#E2E8F0',         // Light gray
}
```

### Fonts

Modify fonts in `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

:root {
  --font-display: 'Your Display Font', serif;
  --font-body: 'Your Body Font', sans-serif;
}
```

## 🏗️ Building for Production

1. **Create production build**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Start production server**
   ```bash
   npm start
   # or
   yarn start
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with mobile-first design.

## 🔧 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library (ready to use)
- **React** - UI library

## 📝 Contact Form

The contact form currently logs to console. To make it functional:

1. **Add a backend API** (e.g., Next.js API route)
2. **Use a service** like Formspree, EmailJS, or SendGrid
3. **Update the handleSubmit function** in `components/Contact.tsx`

Example with API route:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  
  if (response.ok) {
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Deploy to Netlify

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect repository
4. Build command: `npm run build`
5. Publish directory: `.next`

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For questions or issues, please open an issue in the repository or contact me through the portfolio website.

## 🎯 Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section with MDX
- [ ] Project detail pages
- [ ] Animations with Framer Motion
- [ ] Multilingual support
- [ ] Analytics integration
- [ ] CMS integration (Sanity, Contentful)
- [ ] Download resume functionality

---

**Built with ❤️ using Next.js**
