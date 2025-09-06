# Modern Landing Page

A clean, responsive landing page built with modern web technologies, designed to be easily converted to a Hugo template.

## Features

- **Clean minimalist design** - Simple header, hero text, 2-2-3 full-width image grid, and project section
- **Mobile-first responsive design** - Optimized for all screen sizes
- **Modern CSS** - Using CSS Grid, Flexbox, and custom properties
- **Performance optimized** - Lazy loading, minimal JavaScript, optimized fonts
- **Accessibility focused** - ARIA labels, focus management, reduced motion support
- **SEO friendly** - Semantic HTML5, meta tags, structured data ready
- **Hugo ready** - Clean structure that's easy to convert to Hugo templates

## Tech Stack

- **HTML5** - Semantic markup with accessibility in mind
- **CSS3** - Modern features including Grid, Flexbox, and custom properties
- **Vanilla JavaScript** - ES6+ with modern APIs (Intersection Observer, etc.)
- **Inter Font** - Google Fonts for clean typography
- **Picsum Photos** - Placeholder images for development

## File Structure

```
landing/
├── index.html          # Main HTML file
├── styles.css          # All styles (mobile-first)
├── script.js           # Minimal JavaScript
└── README.md           # This file
```

## Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in your browser
3. **Customize** the content, images, and styling as needed

## Development

### Local Development Server

For the best development experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Customization

#### Content
- Update the hero text in the `.hero__title` section
- Replace placeholder images with your own
- Modify navigation links and social media URLs
- Update contact information in the footer

#### Styling
- Colors are defined using CSS custom properties (easy to modify)
- Typography uses Inter font family (easily changeable)
- Responsive breakpoints: 640px, 768px, 1024px

#### Images
- Current images use Picsum Photos for placeholders
- Replace with your own images in 4:3 aspect ratio
- The design features a 2-2-3 full-width grid layout: 2 large images, then 2 large images, then 3 smaller images
- Optimize images for web (WebP format recommended)

## Hugo Conversion

This design is structured to be easily converted to Hugo templates:

### Template Structure (Future)
```
layouts/
├── _default/
│   ├── baseof.html
│   └── single.html
├── partials/
│   ├── header.html
│   ├── footer.html
│   ├── navigation.html
│   └── gallery.html
└── index.html
```

### Key Conversion Points
- **Content sections** are clearly separated and can become Hugo partials
- **CSS classes** follow BEM methodology for easy theming
- **JavaScript** is modular and can be bundled with Hugo's asset pipeline
- **Images** can use Hugo's image processing and optimization

### Hugo-Specific Features to Add
- Hugo's built-in image processing
- Hugo Pipes for asset optimization
- Hugo's content management system
- Hugo's taxonomy and categorization
- Hugo's multilingual support (if needed)

## Performance Optimizations

- **Lazy loading** for images using Intersection Observer
- **Font optimization** with preconnect and display=swap
- **Minimal JavaScript** with modern APIs
- **CSS optimization** with efficient selectors and properties
- **Responsive images** with proper aspect ratios

## Browser Support

- **Modern browsers** (Chrome, Firefox, Safari, Edge)
- **Mobile browsers** (iOS Safari, Chrome Mobile)
- **Progressive enhancement** for older browsers

## Accessibility

- **Semantic HTML** with proper heading structure
- **ARIA labels** for interactive elements
- **Focus management** with visible focus indicators
- **Reduced motion** support for users with vestibular disorders
- **Screen reader** friendly navigation and content

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices and browsers
5. Submit a pull request

## Support

For questions or issues, please open an issue on the repository or contact the maintainer.
