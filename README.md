# 🍽️ CHEFMASTER-FOOD-APP

**A production-grade food ordering web application built with React.js, featuring modern architecture, state management, and performance optimizations.**

---

## 📋 Table of Contents

- [Product Overview](#product-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Installation & Setup](#installation--setup)
- [Available Scripts](#available-scripts)
- [Application Flow](#application-flow)
- [Performance Optimizations](#performance-optimizations)
- [Testing Strategy](#testing-strategy)
- [Environment Configuration](#environment-configuration)
- [Accessibility & UX](#accessibility--ux)
- [Production Best Practices](#production-best-practices)
- [Future Roadmap](#future-roadmap)
- [Contributing](#contributing)
- [Credits & Learning Resources](#credits--learning-resources)
- [License](#license)

---

## 🎯 Product Overview

**CHEFMASTER-FOOD-APP** is a modern, full-featured food ordering platform that mirrors real-world food delivery applications like Swiggy and Zomato. Built with production-grade React.js practices, this application demonstrates enterprise-level architecture, scalable state management, and optimized performance patterns.

### Value Proposition

**Problem Solved:** Streamlines the food ordering experience by providing an intuitive interface for restaurant discovery, menu browsing, and cart management—all while maintaining fast load times and responsive interactions.

**Target Users:**
- End consumers seeking a seamless food ordering experience
- Developers learning production React patterns
- Engineering teams evaluating scalable frontend architectures

### Engineering Philosophy

This project embodies production-ready React development principles, emphasizing:
- **Modular, component-driven architecture** for maintainability
- **Predictable state management** using Redux Toolkit
- **Performance-first design** with code splitting and lazy loading
- **Testable codebase** with comprehensive unit test coverage
- **API abstraction layers** for clean separation of concerns

The implementation follows industry best practices learned from **Akshay Saini's Namaste React curriculum**, focusing on understanding React internals, hooks, performance optimization, and scalable application architecture.

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

### Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        User Interaction                      │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                    React Component Layer                     │
│  (Body, RestaurantMenu, Cart, etc.)                         │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                    Custom Hooks Layer                       │
│  (useRestaurantMenu, useOnlineStatus)                       │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                      API Abstraction Layer                   │
│  (utils/api/index.jsx, swiggyAPI.json)                      │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                    Redux Store (Global State)                │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  cart: { items: [...] }                              │  │
│  │  - addItem(action)                                   │  │
│  │  - removeItem(action)                                │  │
│  │  - clearCart(action)                                 │  │
│  └──────────────────────────────────────────────────────┘  │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                    UI Re-render (Optimized)                  │
│  - React Redux selectors prevent unnecessary renders        │
│  - Memoized components where applicable                    │
└─────────────────────────────────────────────────────────────┘
```

### State Lifecycle Example: Adding Item to Cart

1. **User Action**: Click "Add to Cart" button on `MenuItem` component
2. **Event Handler**: Dispatches `addItem(item)` action
3. **Redux Reducer**: `cartSlice` updates state with new item
4. **Store Update**: Redux store notifies connected components
5. **Selector Update**: `Cart` component receives updated cart items via `useSelector`
6. **UI Re-render**: Cart icon badge and cart page update automatically

---

## ⚡ Performance Optimizations

### Code Splitting & Lazy Loading

- **Route-based code splitting**: Grocery component loaded on-demand using `React.lazy()`
- **Suspense boundaries**: Graceful loading states during code splitting
- **Bundle optimization**: Parcel automatically splits vendor and application code

```jsx
const Grocery = lazy(() => import("./components/Grocery"));

<Suspense fallback={<Shimmer />}>
  <Grocery />
</Suspense>
```

### Rendering Optimizations

- **Redux selector optimization**: Components only re-render when relevant state changes
- **Shimmer placeholders**: Improve perceived performance during data fetching
- **Conditional rendering**: Prevents unnecessary DOM updates

### CSS Optimization

- **Tailwind CSS purging**: Unused styles automatically removed in production
- **PostCSS processing**: Autoprefixer for cross-browser compatibility
- **Custom animations**: Optimized keyframe animations in Tailwind config

### Build Optimizations

- **Parcel bundler**: Zero-configuration, optimized production builds
- **Asset optimization**: Automatic image and asset optimization
- **Tree shaking**: Dead code elimination in production builds

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

## 🔧 Environment Configuration

### API Endpoint Management

Currently, the application uses a live Swiggy API endpoint for restaurant data. In a production environment, this should be managed through environment variables:

**Recommended Setup:**

1. Create `.env` file (not committed to git):
   ```env
   REACT_APP_API_BASE_URL=https://api.chefmaster.com
   REACT_APP_API_KEY=your_api_key_here
   ```

2. Update API calls to use environment variables:
   ```javascript
   const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
   ```

3. Add `.env` to `.gitignore`:
   ```
   .env
   .env.local
   .env.production
   ```

### Build-time Configuration

- **Parcel**: Automatically handles environment variables prefixed with `REACT_APP_`
- **Babel**: Transpiles modern JavaScript for browser compatibility
- **PostCSS**: Processes Tailwind CSS and applies Autoprefixer

### Production Considerations

- **API Rate Limiting**: Implement request throttling for production APIs
- **Error Monitoring**: Integrate error tracking (Sentry, LogRocket)
- **Analytics**: Add user behavior tracking (Google Analytics, Mixpanel)
- **CDN Integration**: Serve static assets from CDN for global performance

---

## ♿ Accessibility & UX

### Responsive Design

- **Mobile-first approach**: Optimized for mobile devices (320px+)
- **Tablet optimization**: Responsive breakpoints for tablet screens
- **Desktop enhancement**: Enhanced layouts for larger screens
- **Tailwind responsive utilities**: `sm:`, `md:`, `lg:`, `xl:` breakpoints

### Keyboard Navigation

- **Focus management**: Proper tab order and focus indicators
- **Keyboard shortcuts**: Support for common navigation patterns
- **ARIA labels**: Semantic HTML for screen readers

### Motion & Animation

- **Framer Motion**: Purposeful animations that enhance UX
- **Reduced motion support**: Respects user preferences
- **Performance-conscious**: Animations use GPU acceleration

### Consistent UI Behavior

- **Loading states**: Shimmer placeholders maintain layout stability
- **Error states**: Clear error messages with recovery options
- **Empty states**: Helpful messaging when no data is available
- **Offline detection**: Clear indication of network status

---

## 🏗️ Production Best Practices

### Code Quality

- **ESLint**: Enforce consistent code style (recommended addition)
- **Prettier**: Automatic code formatting (recommended addition)
- **TypeScript**: Type safety (future consideration)
- **Clean code principles**: Readable, maintainable, self-documenting code

### Scalable Architecture

- **Feature-based folders**: Easy to locate and modify features
- **Separation of concerns**: UI, business logic, and data layers separated
- **Reusable components**: DRY principle applied throughout
- **Custom hooks**: Extract and reuse stateful logic

### Error Handling

- **Error boundaries**: Graceful error recovery at component level
- **Try-catch blocks**: Proper error handling in async operations
- **User-friendly messages**: Clear error communication
- **Fallback UI**: Alternative content when errors occur

### Security Considerations

- **Input validation**: Sanitize user inputs
- **XSS prevention**: React's built-in XSS protection
- **API security**: Secure API key management
- **HTTPS enforcement**: Secure data transmission

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

We welcome contributions! Please follow these guidelines:

### Branch Strategy

- **Main branch**: Production-ready code
- **Feature branches**: `feature/feature-name`
- **Bug fixes**: `fix/bug-description`
- **Hotfixes**: `hotfix/issue-description`

### Pull Request Process

1. **Fork the repository**
2. **Create a feature branch** from `main`
3. **Make your changes** with clear, descriptive commits
4. **Write/update tests** for new functionality
5. **Ensure all tests pass** (`npm test`)
6. **Update documentation** if needed
7. **Submit a pull request** with a clear description

### Code Quality Expectations

- **Follow existing code style** and patterns
- **Write meaningful commit messages**
- **Add tests** for new features
- **Update README** if adding new features
- **Ensure responsive design** works on all devices

### Review Standards

- All PRs require at least one approval
- Code must pass all tests
- No merge conflicts
- Documentation updated if applicable

---

## 📚 Credits & Learning Resources

### Educational Inspiration

This project is an **independent implementation** inspired by concepts and best practices taught in **Akshay Saini's Namaste React curriculum**. The curriculum emphasizes:

- **Deep understanding of React internals** - How React works under the hood
- **Modern React patterns** - Hooks, Context API, performance optimization
- **Production-grade architecture** - Scalable folder structures, state management
- **Real-world application development** - Building applications that mirror industry standards

### Key Learnings Applied

- **React Fundamentals**: Components, JSX, Virtual DOM
- **Hooks**: useState, useEffect, custom hooks
- **State Management**: Redux Toolkit, Context API
- **Performance**: Code splitting, lazy loading, memoization
- **Testing**: Component testing, mocking, coverage
- **Build Tools**: Parcel, Babel, PostCSS
- **Styling**: Tailwind CSS, utility-first approach

### Disclaimer

This project is an **independent work** created to demonstrate production-ready React development skills. While inspired by educational content, all code, architecture decisions, and implementations are original.

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 📸 Screenshots / UI Preview

### Home Page
_Placeholder for home page screenshot showing restaurant listings_

### Restaurant Menu
_Placeholder for restaurant menu page showing categories and items_

### Cart Page
_Placeholder for shopping cart with items and totals_

### Grocery Page
_Placeholder for grocery section with product listings_

---

## 📞 Contact & Support

For questions, issues, or contributions, please open an issue on the [GitHub repository](https://github.com/Riyanshu-256/namaste-react/issues).

---

**Built with ❤️ using React.js and modern web technologies**
