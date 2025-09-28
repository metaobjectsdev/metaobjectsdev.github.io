# MetaObjects Developer Site - Claude Context

## 📋 Project Overview

**Project**: MetaObjects Developer Website
**Repository**: metaobjects.dev
**Status**: Production-ready developer site (September 2025)
**Purpose**: Official developer website for MetaObjects enterprise architecture framework

## 🎯 What is MetaObjects?

MetaObjects is an **open-source enterprise architecture framework** for metadata-driven development:

- **Universal Metadata Architecture**: Single definition → consistent implementations across Java, C#, TypeScript, Python, Rust
- **Runtime System Adaptation**: Zero-downtime changes, hot reload capabilities
- **Intelligent Code Generation**: Production-ready code with validation, serialization, documentation
- **Enterprise Governance**: Built-in compliance, security, audit capabilities
- **Cross-Language Validation**: Consistent validation rules across all services and languages
- **Metadata Overlay System**: Extend without modifying core schemas

**Battle-tested**: 20+ years in production at pharmaceutical, education, and financial companies.

## 🏗️ Repository Structure

```
metaobjects.dev/
├── .claude/               # Claude AI context files
│   └── CLAUDE.md         # This file - project context
├── www/                  # Website files (deployable)
│   ├── index.html        # Main landing page
│   ├── styles.css        # Site styling (CSS custom properties)
│   ├── script.js         # Interactive functionality
│   └── images/           # Website assets
├── docs/                 # Documentation files
│   ├── CLAUDE_CONTEXT.md     # Original development context
│   ├── DEPLOYMENT_STATUS.md  # Current deployment status
│   ├── FEATURES_CONTENT.md   # Feature descriptions and content
│   ├── IMAGE_OPTIMIZATION_GUIDE.md # Brand asset requirements
│   ├── TECHNICAL_CONTENT.md  # Technical architecture details
│   └── WEBSITE_CONTENT.md    # Website copy and messaging
├── README.md             # Project documentation
└── CNAME                # GitHub Pages domain config
```

## 🚀 Current Status (September 2025)

### ✅ Complete & Ready
- **Website Development**: Full rebuild complete with modern enterprise design
- **Technical Architecture**: Pure HTML/CSS/JavaScript (no frameworks)
- **Responsive Design**: Mobile-first, WCAG 2.1 accessible
- **Content**: 6 comprehensive feature sections, interactive code examples
- **Repository**: Clean structure with `www/` (deployable) and `docs/` (development)

### 📋 Pending Tasks
- **Brand Assets**: Logo creation, favicon suite, social media images
- **Domain Setup**: Configure metaobjects.dev domain
- **GitHub Pages**: Deployment configuration
- **Analytics**: Google Analytics integration

## 🎨 Design System

### Visual Identity
- **Colors**: Primary #2563eb (blue), Gradient #667eea → #764ba2 (purple-blue)
- **Typography**: Inter font family, clean and technical
- **Style**: Modern enterprise software aesthetic, professional but approachable
- **Branding**: Standalone MetaObjects identity (separated from Draagon legacy)

### Technical Approach
- **Framework**: None - pure HTML/CSS/JavaScript for maximum performance
- **CSS**: Custom properties, mobile-first responsive design
- **JavaScript**: Modern ES6+, accessibility-focused, performance optimized
- **SEO**: Comprehensive meta tags, structured data, social media integration

## 🔧 Development Workflow

### Local Development
```bash
# Serve locally using any static server
python -m http.server 8000  # Python
npx serve .                 # Node.js
php -S localhost:8000       # PHP
```

### File Organization
- **Website files**: All in `www/` folder (directly deployable)
- **Documentation**: All in `docs/` folder (development context)
- **Configuration**: Root level (README, CNAME, .gitignore)

### Content Management
- **Primary content**: Stored in `docs/` markdown files
- **Website updates**: Modify HTML/CSS/JS in `www/` folder
- **Documentation**: Update relevant files in `docs/` folder

## 📚 Key Documentation Files

### Development Context
- **`docs/CLAUDE_CONTEXT.md`**: Original development guidelines and design direction
- **`docs/DEPLOYMENT_STATUS.md`**: Current status, completion tracking, next steps
- **`docs/FEATURES_CONTENT.md`**: Detailed feature descriptions for website content

### Technical Details
- **`docs/TECHNICAL_CONTENT.md`**: Architecture overview, technical implementation details
- **`docs/IMAGE_OPTIMIZATION_GUIDE.md`**: Brand requirements, asset specifications
- **`docs/WEBSITE_CONTENT.md`**: Website copy, messaging, marketing content

## 🎯 Target Audience

**Primary**: Enterprise developers and software architects
**Secondary**: Open-source contributors, technical decision makers
**Goal**: Drive GitHub engagement, build community, establish thought leadership

## 🚢 Deployment Information

### Current Hosting
- **Platform**: GitHub Pages
- **Repository**: metaobjectsdev/metaobjectsdev.github.io
- **Deploy Source**: `www/` folder content
- **Domain**: Pending metaobjects.dev configuration

### Performance Targets
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Accessibility**: WCAG 2.1 AA compliance

## 🔗 Related Links

- **Main Project**: [MetaObjects Core](https://github.com/Draagon/draagon-metaobjects)
- **License**: Apache 2.0 (open source)
- **Business Entity**: Doug Mealing LLC (doing business as MetaObjects)

## 💡 Development Notes

### Code Generation Examples
The site showcases interactive code examples:
- **Input**: JSON metadata definition
- **Output 1**: Generated Java (Spring Boot with JPA annotations)
- **Output 2**: Generated TypeScript (interfaces with validation)

### Enterprise Focus
- Emphasizes 20+ years of production use
- Highlights enterprise governance and compliance
- Targets technical decision makers in large organizations
- Showcases cross-language consistency as key differentiator

### Performance Considerations
- Minimal JavaScript footprint with efficient event handling
- CSS custom properties for consistent theming
- Optimized images and assets (pending logo/brand creation)
- Progressive enhancement approach

## 🛠️ When Working on This Project

1. **Website Changes**: Work in `www/` folder, test locally before deployment
2. **Content Updates**: Reference `docs/` folder for authoritative content
3. **Brand Assets**: Follow `docs/IMAGE_OPTIMIZATION_GUIDE.md` specifications
4. **Documentation**: Keep `docs/DEPLOYMENT_STATUS.md` updated with progress
5. **Git**: Use descriptive commits, preserve file history with `git mv`

## 🎪 Key Features to Highlight

1. **Universal Language Support**: Same metadata → Java + TypeScript + C# + Python
2. **Runtime Adaptation**: Change systems without rebuilding/redeploying
3. **Enterprise Governance**: Built-in compliance, audit, security
4. **20+ Years Battle-Tested**: Real production use at major enterprises
5. **Zero Vendor Lock-in**: Open source Apache 2.0 license
6. **Developer Experience**: Maven plugin, IDE integration, clean APIs

---

**Last Updated**: September 27, 2025
**Status**: Production-ready website, pending brand assets and deployment