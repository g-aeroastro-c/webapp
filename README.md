# GITAM Aero Astro Club (GAAC) Website

A modern, professional, and mobile-first website for the GITAM Aero Astro Club, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Pages
- **Landing Page**: Stunning hero section with animated 3D elements and comprehensive club information
- **Projects Showcase**: Interactive project gallery with filtering and detailed project cards
- **Blog Platform**: Modern blog layout with category filtering and newsletter signup
- **Contact Page**: Comprehensive contact information with interactive forms and FAQ section
- **Authentication**: Professional sign-in and sign-up pages with social login options

### Design & UX
- **Mobile-First Design**: Optimized for mobile users with responsive layouts
- **Professional UI/UX**: Following modern design principles with smooth animations
- **Dark Theme**: Elegant dark theme with cyan accent colors (#09C0F9)
- **Micro-interactions**: Subtle animations and hover effects throughout
- **Accessibility**: WCAG compliant with proper contrast ratios and keyboard navigation

### Technical Features
- **Next.js 15**: Latest Next.js with App Router and React 19
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Framer Motion**: Smooth animations and page transitions
- **Responsive Design**: Seamless experience across all device sizes
- **SEO Optimized**: Proper meta tags, structured data, and performance optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.10
- **Animations**: Framer Motion 12.18.1
- **Icons**: Lucide React 0.515.0
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── blogs/             # Blog listing page
│   ├── contact/           # Contact page with forms
│   ├── projects/          # Projects showcase
│   ├── signin/            # Authentication pages
│   ├── signup/            
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── Footer.tsx        # Site footer
│   ├── LoadingSpinner.tsx # Loading components
│   └── Navbar.tsx        # Navigation component
└── lib/
    └── utils.ts          # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gaac-website.git
   cd gaac-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- **Primary**: #09C0F9 (Cyan)
- **Secondary**: #0EA5E9 (Light Blue)
- **Accent**: #0284C7 (Blue)
- **Background**: Gradient from #0B0C0D to #1C1E21
- **Text**: White (#FFFFFF) and Gray variants

### Typography
- **Primary Font**: Geist Sans
- **Secondary Font**: DM Sans
- **Weights**: 400, 500, 600, 700

### Components
- **Buttons**: Gradient backgrounds with hover animations
- **Cards**: Glass morphism effect with subtle borders
- **Forms**: Floating labels with focus states
- **Navigation**: Floating navbar with backdrop blur

## 📱 Mobile-First Approach

The website is designed with mobile users as the primary focus:

- **Touch-friendly**: Large tap targets and intuitive gestures
- **Performance**: Optimized images and lazy loading
- **Navigation**: Collapsible mobile menu with smooth animations
- **Content**: Readable typography and proper spacing on small screens
- **Forms**: Mobile-optimized input fields and validation

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Conventional commits for git history

## 🌟 Key Features Breakdown

### Landing Page
- Hero section with animated 3D orb
- Email signup with validation
- Feature showcase with icons
- Statistics section
- Member testimonials
- Call-to-action sections

### Projects Page
- Category-based filtering
- Project cards with status badges
- Technology tags
- GitHub and demo links
- Responsive grid layout

### Blog Page
- Featured article spotlight
- Category filtering
- Author information
- Read time estimates
- Newsletter subscription

### Contact Page
- Multiple contact methods
- Interactive contact form
- FAQ section with expandable items
- Office location and hours
- Social media links

### Authentication
- Sign in/up forms with validation
- Social login options
- Password visibility toggle
- Terms and conditions
- Remember me functionality

## 🚀 Deployment

The website can be deployed on various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Add TypeScript types for new components
- Test on mobile devices
- Update documentation as needed
- Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **GITAM University** for supporting the Aero Astro Club
- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons

## 📞 Support

For support and questions:
- **Email**: getintouchv2@gaac.in
- **Phone**: +91 7036 442464
- **Location**: GITAM University, Visakhapatnam

---

**Built with ❤️ by the GAAC Development Team**

*Empowering students to explore the frontiers of technology through robotics, programming, and astronomy.*