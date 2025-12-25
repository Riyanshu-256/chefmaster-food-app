# 🍽️ CHEFMASTER-FOOD-APP

**A production-grade food ordering web application built with React.js, featuring modern architecture, state management, and performance optimizations.**

---

## 📋 Table of Contents

[Product Overview](#product-overview) • [Features](#features) • [Tech Stack](#tech-stack) • [Project Architecture](#project-architecture) • [Installation & Setup](#installation--setup) • [Available Scripts](#available-scripts) • [Application Flow](#application-flow) • [Performance Optimizations](#performance-optimizations) • [Testing Strategy](#testing-strategy) • [Accessibility & UX](#accessibility--ux) • [Future Roadmap](#future-roadmap) • [Contributing](#contributing) • [Credits & Learning Resources](#credits--learning-resources) • [License](#license)

---

## 🎯 Product Overview

**CHEFMASTER-FOOD-APP** is a modern food ordering platform built with production-grade React.js practices. It demonstrates enterprise-level architecture, scalable state management with Redux Toolkit, and optimized performance patterns including code splitting and lazy loading. The application follows industry best practices from **Akshay Saini's Namaste React curriculum**, emphasizing modular component-driven architecture, predictable state management, and testable codebase.

---

## ✨ Features

### User-Facing Features

- **🏪 Restaurant Discovery**
  - Dynamic restaurant listing with real-time API integration
  - Advanced search and filtering capabilities
  - Promoted restaurant badges with higher-order components
  - Responsive grid layout with optimized card rendering

- **📋 Dynamic Menu System**
  - Category-based menu organization
  - Real-time menu data fetching
  - Item-level details with pricing and descriptions
  - Smooth navigation between categories

- **🛒 Cart Management**
  - Redux-powered global cart state
  - Add/remove items with persistent state
  - Real-time cart total calculations
  - Optimized re-renders using Redux selectors

- **🛍️ Grocery Section**
  - Lazy-loaded grocery module
  - Code-split for optimal bundle size
  - Suspense-based loading states

- **⚡ Enhanced UX**
  - Shimmer loading placeholders for better perceived performance
  - Error boundaries with graceful fallback UI
  - Online/offline status detection
  - Fully responsive design (mobile, tablet, desktop)
  - Smooth animations powered by Framer Motion

### Engineering Features

- **State Management**
  - Redux Toolkit for predictable state updates
  - Centralized cart state management
  - Context API for user authentication flow
  - Optimized selector patterns

- **Custom Hooks**
  - `useRestaurantMenu` for data fetching abstraction
  - `useOnlineStatus` for network state monitoring
  - Reusable, testable hook patterns

- **API Layer**
  - Centralized API abstraction
  - Mock data for development and testing
  - Clean separation between data fetching and UI

- **Testing Infrastructure**
  - Jest configuration with jsdom environment
  - React Testing Library for component tests
  - Coverage reporting with detailed metrics
  - Mock-driven test strategy

---

## 🛠️ Tech Stack

### Core Framework
- **React.js 18.3.1** - Modern React with concurrent features
- **React Router DOM 6.30.2** - Client-side routing

### State Management
- **Redux Toolkit 2.11.2** - Modern Redux with simplified API
- **React Redux 9.2.0** - React bindings for Redux

### Styling & UI
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Framer Motion 12.23.26** - Production-ready animation library
- **Lucide React 0.562.0** - Modern icon library

### Build Tools
- **Parcel 2.16.3** - Zero-configuration bundler
- **Babel** - JavaScript transpilation
- **PostCSS** - CSS processing with Autoprefixer

### Testing
- **Jest 30.2.0** - JavaScript testing framework
- **React Testing Library 16.3.1** - React component testing utilities
- **Jest DOM 6.9.1** - Custom Jest matchers for DOM

---

## 📁 Project Architecture

### Folder Structure

```
CHEFMASTER-FOOD-APP/
│
├── .parcel-cache/          # Parcel internal build cache
├── coverage/                # Test coverage reports (Jest)
│   ├── lcov-report/         # HTML coverage reports
│   └── lcov.info            # LCOV coverage data
│
├── dist/                    # Optimized production build output
│   ├── index.html           # Production HTML entry point
│   └── *.js                 # Code-split JavaScript bundles
│
├── node_modules/            # Project dependencies
│
├── src/                     # Source code directory
│   ├── app.jsx              # Root application component & route orchestration
│   │
│   ├── components/          # React UI components
│   │   ├── __tests__/       # Component test suite
│   │   │   ├── Contact.test.jsx
│   │   │   ├── Header.test.jsx
│   │   │   ├── RestaurantCard.test.jsx
│   │   │   ├── Search.test.jsx
│   │   │   └── sum.test.jsx
│   │   │
│   │   ├── mocks/           # Mock data for testing
│   │   │   ├── mockRestListData.json
│   │   │   └── resCardMock.json
│   │   │
│   │   ├── About.jsx        # About page component
│   │   ├── Body.jsx         # Main restaurant listing page
│   │   ├── Cart.jsx         # Shopping cart component
│   │   ├── Contact.jsx      # Contact page component
│   │   ├── Error.jsx        # Error boundary fallback UI
│   │   ├── Grocery.jsx      # Lazy-loaded grocery section
│   │   ├── Header.jsx       # Navigation header with cart icon
│   │   ├── ItemCategory.jsx # Menu category component
│   │   ├── MenuItem.jsx     # Individual menu item card
│   │   ├── RestaurantCard.jsx      # Restaurant card with HOC support
│   │   ├── RestaurantInfoCard.jsx  # Restaurant details component
│   │   ├── RestaurantMenu.jsx      # Full restaurant menu page
│   │   ├── Shimmer.jsx      # Loading skeleton UI
│   │   ├── Sum.jsx          # Utility component
│   │   ├── User.jsx         # User profile (functional component)
│   │   └── UserClass.jsx    # User profile (class component)
│   │
│   └── utils/               # Utility functions & configurations
│       ├── api/             # API abstraction layer
│       │   ├── index.jsx    # Menu data mapping (MENU_MAP)
│       │   ├── menu-*.json  # Static menu data files
│       │   └── useOnlineStatus.jsx  # Network status hook
│       │
│       ├── appStore.jsx     # Redux store configuration
│       ├── cartSlice.jsx    # Redux Toolkit slice for cart logic
│       ├── constants.jsx    # Application-wide constants
│       ├── swiggyAPI.json   # API schema/reference mock
│       ├── UserContext.jsx  # Global user context provider
│       └── useRestaurantMenu.jsx  # Custom hook for menu data fetching
│
├── index.html               # Application entry HTML
├── style.css                # Global styles & Tailwind base layer
│
├── .babelrc                 # Babel configuration (legacy)
├── babel.config.js          # Babel transpilation setup
├── .gitignore               # Git ignored files
├── .parcelrc                # Parcel bundler configuration
├── jest.config.js           # Jest testing configuration
├── package.json             # Project scripts & dependencies
├── postcss.config.cjs       # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS customization
├── Notes.md                 # Development notes
└── README.md                # Project documentation (this file)
```

### Architecture Patterns

#### Component Organization
- **Feature-based structure** - Components grouped by functionality
- **Separation of concerns** - UI components separate from business logic
- **Higher-order components** - `withPromotedLabel` for enhanced restaurant cards
- **Composition over inheritance** - Reusable, composable components

#### State Management Hierarchy
```
Redux Store (Global State)
  └── cart: { items: [] }
       ├── addItem action
       ├── removeItem action
       └── clearCart action

Context API (User State)
  └── UserContext: { loggedInUser, setUserName }

Local State (Component-specific)
  └── useState hooks for UI state
```

#### Data Flow
```
Component → Custom Hook → API Layer → Redux Store → UI Update
```

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** (v16.x or higher)
- **npm** (v7.x or higher) or **yarn**

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Riyanshu-256/namaste-react.git
   cd ChefMaster-Food-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:1234` (default Parcel port).

4. **Run tests**
   ```bash
   npm test
   ```

5. **Generate test coverage report**
   ```bash
   npm test
   # Coverage reports are generated in the coverage/ directory
   ```

### Production Build

```bash
npm run build
```

This generates an optimized production build in the `dist/` directory, ready for deployment to any static hosting service (Vercel, Netlify, AWS S3, etc.).

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Starts Parcel development server with hot module replacement |
| `npm run build` | Creates optimized production build in `dist/` directory |
| `npm test` | Runs Jest test suite with coverage collection |
| `npm run watch-test` | Runs Jest in watch mode for TDD workflow |

---

## 🔄 Application Flow

Data flows through the application in a unidirectional pattern: **Component → Custom Hook → API Layer → Redux Store → UI Update**. User interactions trigger actions that update the Redux store, which then notifies connected components via selectors. For example, adding an item to cart dispatches `addItem` action, updates the cart slice, and automatically re-renders the cart UI with optimized selectors preventing unnecessary renders.

---

## ⚡ Performance Optimizations

The application implements route-based code splitting with `React.lazy()` for the Grocery component, Redux selector optimization to prevent unnecessary re-renders, shimmer placeholders for better perceived performance, and Tailwind CSS purging for optimized production builds. Parcel handles automatic bundle splitting, tree shaking, and asset optimization.

---

## 🧪 Testing Strategy

### Testing Philosophy

The application follows a **component isolation** approach, where each component is tested independently with mocked dependencies. This ensures:
- **Fast test execution** - No external API calls during tests
- **Predictable results** - Tests don't depend on network conditions
- **Easy debugging** - Failures are isolated to specific components

### Test Structure

```
src/components/__tests__/
├── Contact.test.jsx        # Contact form interactions
├── Header.test.jsx         # Header UI & navigation tests
├── RestaurantCard.test.jsx # Restaurant card rendering
├── Search.test.jsx         # Search functionality tests
└── sum.test.jsx           # Utility function tests
```

### Testing Tools

- **Jest**: Test runner with built-in assertion library
- **React Testing Library**: Component testing with user-centric queries
- **Jest DOM**: Custom matchers for DOM assertions
- **jsdom**: Browser-like environment for testing

### Coverage Reporting

Test coverage is automatically collected and reported in multiple formats:
- **HTML Report**: `coverage/lcov-report/index.html` (detailed visual report)
- **LCOV Format**: `coverage/lcov.info` (CI/CD integration)
- **JSON Format**: `coverage/coverage-final.json` (programmatic access)

### Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (TDD workflow)
npm run watch-test

# View coverage report
open coverage/lcov-report/index.html
```

---

## ♿ Accessibility & UX

The application follows a mobile-first responsive design with Tailwind breakpoints, includes proper keyboard navigation and ARIA labels, uses Framer Motion for purposeful animations, and maintains consistent UI behavior with shimmer loading states, error boundaries, and offline detection.

---

## 🗺️ Future Roadmap

### Phase 1: Authentication & Authorization
- [ ] User registration and login
- [ ] JWT-based authentication
- [ ] Protected routes
- [ ] User profile management

### Phase 2: Payment Integration
- [ ] Payment gateway integration (Razorpay, Stripe)
- [ ] Order confirmation system
- [ ] Invoice generation
- [ ] Payment history

### Phase 3: Order Management
- [ ] Real-time order tracking
- [ ] Order history
- [ ] Order status updates
- [ ] Delivery time estimation

### Phase 4: Backend Integration
- [ ] RESTful API backend
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Real-time updates (WebSockets)
- [ ] Admin dashboard

### Phase 5: Advanced Features
- [ ] Recommendation engine
- [ ] Reviews and ratings
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Progressive Web App (PWA) capabilities

---

## 🤝 Contributing

We welcome contributions! Fork the repository, create a feature branch (`feature/feature-name`), make your changes with clear commits, write/update tests, ensure all tests pass, and submit a pull request. Follow existing code style, add tests for new features, and ensure responsive design works on all devices.

---

## 📚 Credits & Learning Resources

This project is an **independent implementation** inspired by concepts from **Akshay Saini's Namaste React curriculum**, focusing on React internals, modern patterns (Hooks, Context API), production-grade architecture, and real-world application development. All code, architecture decisions, and implementations are original.

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 📞 Contact & Support

For questions, issues, or contributions, please open an issue on the [GitHub repository](https://github.com/Riyanshu-256/namaste-react/issues).

---

**Built with ❤️ using React.js and modern web technologies**
