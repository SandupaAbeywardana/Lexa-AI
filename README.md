# Research Project Website

## AI-Assisted Criminal Investigation Platform

A modern, responsive website for showcasing the research project on AI-assisted criminal investigations.

### 🚀 Quick Start

#### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

#### Installation & Setup

1. **Navigate to the project directory:**

```bash
cd "d:\Research Project\web"
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run development server:**

```bash
npm run dev
```

4. **Open in browser:**

```
http://localhost:3000
```

### 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── domain/page.tsx    # Research domain page
│   ├── milestones/page.tsx # Milestones page
│   ├── documents/page.tsx  # Documents page
│   ├── presentations/page.tsx # Presentations page
│   ├── about/page.tsx     # About Us page
│   ├── contact/page.tsx   # Contact page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation header
│   └── Footer.tsx        # Footer
└── data/
    └── projectData.ts    # Project data & placeholders

public/
└── images/              # Images and assets

```

### 📝 Key Pages

- **Home** (`/`) - Project introduction and key features
- **Domain** (`/domain`) - Literature survey, research gap, objectives, methodology
- **Milestones** (`/milestones`) - Project progress timeline
- **Documents** (`/documents`) - Project documents and reports
- **Presentations** (`/presentations`) - Presentation slides
- **About Us** (`/about`) - Team information
- **Contact** (`/contact`) - Contact form and information

### 🎨 Customization

#### Update Project Data

Edit `src/data/projectData.ts` to replace placeholders with actual data:

- **Team members** - Add names, roles, emails, and photos
- **Milestones** - Update dates and marks
- **Documents** - Add document links and descriptions
- **Presentations** - Add presentation slide links
- **Contact info** - Update contact details

#### Update Colors

Edit `tailwind.config.js` to customize colors:

```javascript
colors: {
  primary: '#1e40af',      // Main color
  secondary: '#7c3aed',    // Secondary color
  accent: '#06b6d4',       // Accent color
}
```

#### Add Images

Place images in `public/images/` and reference them in components or data files.

### 🛠️ Build & Deployment

#### Build for production:

```bash
npm run build
npm start
```

#### Deploy to Vercel (recommended):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### 📋 Placeholders to Replace

Look for `[...]` placeholders in:

- `src/data/projectData.ts` - Project data
- `src/components/Footer.tsx` - Contact details
- `src/app/contact/page.tsx` - Contact form recipient email

### 🔧 Technologies Used

- **Frontend Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Fonts**: Inter (body), Playfair Display (headings)

### 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1920px and up)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (< 768px)

### ✅ Features

✓ Responsive navigation menu  
✓ Hero sections with gradient backgrounds  
✓ Card-based layouts  
✓ Timeline visualization  
✓ Contact form  
✓ Team showcase  
✓ Document/presentation gallery  
✓ SEO-friendly structure  
✓ Fast loading times  
✓ Mobile-first design

### 📞 Support

For issues or questions, check:

1. `src/data/projectData.ts` - Update project information
2. Component files in `src/components/`
3. Page files in `src/app/`

### 📄 License

This project is for academic research purposes.

---

**Last Updated**: October 24, 2025  
**Status**: Ready for customization with placeholder data
