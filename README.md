# MetaObjects Developer Site

The official developer website for MetaObjects - an enterprise architecture framework for metadata-driven development.

## 🚀 About MetaObjects

MetaObjects is an open-source enterprise architecture framework that revolutionizes software development through metadata-driven approaches. Define once, deploy everywhere across Java, TypeScript, C#, Python, and more.

### Key Features

- **Universal Metadata Architecture**: Single definition generates consistent implementations across all programming languages
- **Runtime System Adaptation**: Zero-downtime changes and hot reload capabilities
- **Intelligent Code Generation**: Production-ready code with validation, serialization, and documentation
- **Enterprise Governance**: Built-in compliance, security, and audit capabilities
- **Cross-Language Validation**: Consistent validation rules across all services and languages
- **Metadata Overlay System**: Extend without modifying core schemas

## 🏗️ Site Architecture

This site is built with modern web technologies optimized for developer experience:

- **Pure HTML/CSS/JavaScript**: No framework dependencies, fast loading
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation support
- **Performance**: Optimized for Core Web Vitals
- **SEO**: Comprehensive meta tags and structured data

### File Structure

```
├── www/                # Website files
│   ├── index.html      # Main landing page
│   ├── styles.css      # Comprehensive CSS with custom properties
│   ├── script.js       # Interactive functionality and accessibility
│   └── images/         # Optimized images and icons
├── docs/               # Documentation and content files
│   ├── *.md           # Development guides and content
└── README.md          # Project documentation
```

## 🛠️ Development

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/metaobjects.dev.git
   cd metaobjects.dev
   ```

2. Serve locally (using any static server):
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

3. Open `http://localhost:8000` in your browser

### Content Updates

The site content is organized in markdown files in the `docs/` folder:

- `docs/WEBSITE_CONTENT.md` - Main messaging and copy
- `docs/FEATURES_CONTENT.md` - Detailed feature descriptions
- `docs/TECHNICAL_CONTENT.md` - Code examples and technical details
- `docs/CLAUDE_CONTEXT.md` - Development guidelines and design system

### Making Changes

1. Update the relevant markdown files
2. Modify HTML/CSS/JS as needed
3. Test locally across different devices
4. Commit and push changes

## 🚢 Deployment

This site is configured for GitHub Pages deployment:

- **Production URL**: `https://metaobjects.dev`
- **Auto-deployment**: Pushes to `main` branch trigger deployment
- **Custom Domain**: Configured via CNAME file

## 📊 Performance

The site is optimized for performance with:

- Minimal JavaScript footprint
- Optimized images and assets
- CSS custom properties for consistent theming
- Efficient event handling with throttling/debouncing

## ♿ Accessibility

Accessibility features include:

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Reduced motion preferences

## 🔗 Related Links

- **Main Project**: [MetaObjects Core](https://github.com/Draagon/draagon-metaobjects)
- **Documentation**: [GitHub Docs](https://github.com/Draagon/draagon-metaobjects/blob/main/README.md)
- **License**: [Apache 2.0](https://github.com/Draagon/draagon-metaobjects/blob/main/LICENSE)
- **Community**: [GitHub Discussions](https://github.com/Draagon/draagon-metaobjects/discussions)

## 📄 License

This website is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by Doug Mealing LLC for the MetaObjects open source community.