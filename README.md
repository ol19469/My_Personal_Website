# 🌲 Oscar Lopez - Personal Website

An immersive, interactive personal portfolio website built with React that creates a magical forest-themed digital experience. Navigate through different environments by clicking on objects in each scene.

## 🌲 Project Overview

This is not your typical portfolio website. Instead of traditional navigation, visitors explore different "environments" by clicking on interactive objects:

- **🏕️ Campfire Scene (Home)**: Click the telescope, cabin, or dock to navigate
- **🏕️ Cozy Cabin (About)**: Learn about me in a warm cabin setting
- **🔭 Cliff Observatory (Projects)**: View my projects under the stars
- **🏕️ Lake Dock (Contact)**: Connect with me by the peaceful waters

## 🌲 Technologies Used

### Core Framework

- **React 19.1.0** - Modern React with latest features
- **Vite 6.3.5** - Fast build tool and development server
- **React Router DOM 7.6.2** - Client-side routing

### Animation & Motion

- **Framer Motion 12.18.1** - Smooth page transitions and animations
- **Lottie React 2.4.1** - High-quality JSON animations (fire, fireflies, fish, etc.)

### Development Tools

- **ESLint** - Code linting and quality assurance
- **React Hooks ESLint Plugin** - Enforce React hooks rules
- **React Refresh Plugin** - Hot module replacement

## 🌲 Project Structure

src/
├── components/ # Reusable UI components
│ ├── AnimatedPage.jsx # Page transition wrapper
│ ├── BackArrow.jsx # Navigation back button
│ ├── Fireflies.jsx # Animated firefly system
│ ├── ForestLayout.jsx # Main layout wrapper
│ ├── ImageLoader.jsx # Progressive image loading
│ ├── Navbar.jsx # Top navigation bar
│ └── SoundPlayer.jsx # Audio management component
├── pages/ # Main page components
│ ├── Home.jsx # Campfire scene with navigation
│ ├── About.jsx # Cabin interior with cat
│ ├── Projects.jsx # Cliff with stars and alien ship
│ └── Contact.jsx # Lake dock with fish animations
├── assets/ # Static assets
│ ├── animations/ # Lottie JSON files
│ ├── images/ # Background images
│ └── sounds/ # Ambient audio files
└── App.jsx # Main app component with routing

## ✨ Key Features

### 🎵 Immersive Audio System

- **Themed ambient sounds** for each environment
- **Custom SoundPlayer component** with volume control
- **Graceful autoplay handling** with browser compatibility
- **Individual volume settings** per page

### �� Animation System

- **Staggered firefly animations** with individual restart cycles
- **Lottie animations** for complex effects (fire, fish, stars)
- **CSS animations** for floating elements and hover effects
- **Smooth page transitions** with Framer Motion

### ��️ Progressive Image Loading

- **Custom ImageLoader component** with loading spinners
- **Smooth fade-in transitions** when images load
- **Optimized loading experience** with fallback backgrounds

### 🎯 Interactive Navigation

- **Object-based navigation** instead of traditional menus
- **Hover effects** with visual feedback
- **Back arrow navigation** for secondary pages
- **Responsive design** considerations

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ol19469/My_Personal_Website.git
   cd My_Personal_Website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 🎨 Design Philosophy

This website demonstrates several key principles:

- **Immersive UX**: Creating memorable experiences through themed environments
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Performance**: Optimized loading with lazy loading and efficient animations
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Maintainability**: Modular component architecture with clear separation of concerns

## 🔧 Technical Highlights

### Component Architecture

- **Reusable components** for common functionality
- **Props-based configuration** for flexibility
- **Custom hooks** for complex state management
- **Error boundaries** for graceful error handling

### Animation Techniques

- **CSS keyframes** for simple animations
- **Lottie integration** for complex animations
- **React state management** for animation timing
- **Performance optimization** with `useCallback` and `useMemo`

### Audio Implementation

- **Web Audio API** integration
- **Autoplay policy compliance**
- **Volume control** and looping functionality
- **Error handling** for unsupported browsers

## �� Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

Note: Audio autoplay may be restricted in some browsers and requires user interaction.

## �� Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

Oscar Lopez is a passionate full-stack developer who loves creating immersive, thoughtful web experiences. This website showcases both technical skills and creative vision.

**Contact:**

- 📧 Email: ol19469@gmail.com
- �� GitHub: [ol19469](https://github.com/ol19469)
- 💼 LinkedIn: [Oscar Lopez](https://www.linkedin.com/in/oscar-lopez-592534240/)

---

_Built with ❤️ and lots of coffee_
