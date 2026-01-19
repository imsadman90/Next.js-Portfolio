# Marcus Chen - Portfolio

A modern, responsive portfolio website built with React.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern glassmorphism design with dark theme
- ✨ Smooth animations powered by Framer Motion
- 📱 Fully responsive layout
- ⚡ Fast and optimized with Vite
- 🎯 Section navigation (Hero, Projects, About, Skills, Contact)
- 🌊 Interactive UI elements with hover effects

## Tech Stack

- **React.js** - UI library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool
- **Material Symbols** - Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index-react.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```js
colors: {
  primary: "#3713ec",
  "background-dark": "#0b0c15",
  // ... more colors
}
```

### Content

Update the content in each component file located in `src/components/`.

## License

© 2024 Marcus Chen. All rights reserved.
