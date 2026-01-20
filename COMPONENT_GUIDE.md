# Component Guide - Kumar Electricals

## 📦 Component Architecture

### Header Component (`Header.tsx`)
**Purpose**: Main navigation bar with mobile responsiveness

**Features**:
- Sticky positioning (stays at top while scrolling)
- Logo with electrical icon (Zap from Lucide)
- Desktop navigation links (Home, Services, About, Contact)
- Call Now CTA button
- Mobile hamburger menu
- Smooth transitions

**Props**: None (self-contained)

**Styling**: 
- Background: White with shadow
- Brand color: Amber-500
- Height: 64px (h-16)

---

### Hero Component (`Hero.tsx`)
**Purpose**: First impression section with main value proposition

**Features**:
- Large headline with brand color accent
- Descriptive subheadline
- Two CTA buttons (View Services, WhatsApp)
- Professional shop image
- Gradient background (slate-50 to amber-50)
- Decorative blur elements
- Framer Motion entrance animations

**Props**: None

**Styling**:
- Gradient background
- 2-column grid on desktop
- Responsive padding

---

### Features Component (`Features.tsx`)
**Purpose**: Highlight key differentiators

**Features**:
- 3 feature cards
- Icons: Clock, Shield, Wrench
- Hover effects with shadow
- Scroll-triggered animations
- Responsive grid (1 col mobile, 3 col desktop)

**Data Structure**:
```typescript
{
  icon: LucideIcon,
  title: string,
  description: string
}
```

---

### Services Component (`Services.tsx`)
**Purpose**: Showcase all business services

**Features**:
- 3 service categories
- Detailed item lists
- Icon-based cards
- Hover lift effect
- Scroll animations with stagger

**Service Categories**:
1. Electrical Sales (ShoppingBag icon)
2. Repair Services (Wrench icon)
3. House Wiring (Home icon)

**Styling**:
- White cards on slate-50 background
- Shadow on hover
- Bullet points with amber dots

---

### About Component (`About.tsx`)
**Purpose**: Build trust and credibility

**Features**:
- Company story
- Statistics showcase (3 stats)
- Professional imagery
- 2-column layout (image + content)
- Responsive design

**Statistics**:
- Years of Experience: 10+
- Happy Customers: 5000+
- Service Hours: 24/7

**Icons**: Award, Users, Clock

---

### Contact Component (`Contact.tsx`)
**Purpose**: Make it easy to reach the business

**Features**:
- 4 contact info cards:
  - Address with MapPin icon
  - Phone with Phone icon
  - Shop Hours with Clock icon
  - Email with Mail icon
- Embedded Google Maps iframe
- Click-to-call phone links
- Click-to-email links
- 2-column layout (info + map)

**Map Configuration**:
- Coordinates: 26.867192, 80.949335
- Full height: 600px
- Rounded corners with shadow

---

### Footer Component (`Footer.tsx`)
**Purpose**: Site-wide footer with links and info

**Features**:
- 4-column grid layout
- Brand section with logo
- Quick links
- Services list
- Contact information
- Social media icons (Facebook, Instagram, Twitter)
- Copyright notice
- Hover effects on links

**Styling**:
- Dark background (slate-900)
- Light text (slate-300)
- Amber hover effects

---

### StructuredData Component (`StructuredData.tsx`)
**Purpose**: SEO optimization with schema markup

**Features**:
- LocalBusiness schema
- JSON-LD format
- Includes:
  - Business name and description
  - Full address
  - Geo-coordinates
  - Contact information
  - Opening hours
  - Price range

**Usage**: Automatically included in layout.tsx

---

## 🎨 Design System

### Colors
```css
Primary: amber-500 (#f59e0b)
Text: slate-900 (#0f172a)
Text Secondary: slate-600 (#475569)
Background: white (#ffffff)
Background Alt: slate-50 (#f8fafc)
Dark BG: slate-900 (#0f172a)
```

### Typography
```css
Font Family: Inter (Google Fonts)
Headings: 3xl-6xl, font-bold
Body: lg-xl, font-normal
Small: sm-base
```

### Spacing
```css
Section Padding: py-16 lg:py-24
Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Card Padding: p-6 or p-8
Gap: gap-4, gap-6, gap-8
```

### Animations
```javascript
// Entrance animation
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}

// Stagger effect
transition={{ duration: 0.6, delay: index * 0.1 }}
```

### Breakpoints
```css
sm: 640px   (Tablet)
md: 768px   (Small Desktop)
lg: 1024px  (Desktop)
xl: 1280px  (Large Desktop)
```

---

## 🔧 Customization Tips

### Changing Colors
Search and replace throughout components:
- `amber-500` → your brand color
- `slate-900` → your text color

### Adding New Sections
1. Create component in `src/components/`
2. Import in `src/app/page.tsx`
3. Add between existing sections
4. Follow existing animation patterns

### Modifying Content
All content is hardcoded in components for simplicity.
For CMS integration, consider:
- Contentful
- Sanity
- Strapi

### Adding Forms
Consider adding:
- Contact form
- Quote request form
- Newsletter signup

Use libraries like:
- React Hook Form
- Formik
- Native HTML forms

---

## 📱 Responsive Behavior

### Mobile (< 768px)
- Single column layouts
- Hamburger menu
- Stacked buttons
- Full-width cards

### Tablet (768px - 1024px)
- 2-column grids
- Adjusted spacing
- Larger touch targets

### Desktop (> 1024px)
- 3-column grids
- Side-by-side layouts
- Hover effects
- Larger images

---

## ⚡ Performance Tips

1. **Images**: Use WebP format, optimize size
2. **Fonts**: Already optimized with next/font
3. **Animations**: Use CSS transforms (GPU accelerated)
4. **Code Splitting**: Automatic with Next.js
5. **Lazy Loading**: Images load on scroll

---

## 🧪 Testing Checklist

- [ ] All links work
- [ ] Phone numbers dial correctly
- [ ] WhatsApp opens properly
- [ ] Map loads and is interactive
- [ ] Animations trigger on scroll
- [ ] Mobile menu opens/closes
- [ ] Responsive on all screen sizes
- [ ] No console errors
- [ ] Fast page load

---

**Version**: 1.0.0
**Last Updated**: January 2026
