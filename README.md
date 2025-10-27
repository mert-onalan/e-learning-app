A modern, accessible eLearning application built with React, TypeScript, and SCSS. This application enables learners and company employees to browse and access learning content through an intuitive interface.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design Decisions](#design-decisions)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Testing](#testing)

## Overview

This project is a two-page eLearning application that provides users with access to various learning components including courses, learning paths, and media items. The application works entirely with mocked data and focuses on delivering a solid user experience with good performance and accessibility standards.

The main page displays learning components as tiles with search capabilities, while the component description page shows detailed information about each selected item.

## Features

### Main Page
- Component tiles display with images and progress indicators
- Real-time search filtering by component name
- Component counter showing total and filtered results
- Responsive grid layout

### Component Description Page
- Detailed component information (planning status, administrator, provider, cost center)
- Important dates and learning mode
- Share functionality with copy to clipboard and email options
- Toast notifications for user feedback

### General
- Fully responsive design (mobile breakpoint at 600px)
- Accessibility features including keyboard navigation and screen reader support
- Type-safe implementation with TypeScript
- Loading states and error handling

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling and development
- React Router DOM for routing
- SCSS for styling
- react-icons for UI icons
- date-fns for date handling
- react-hot-toast for notifications
- React Testing Library for tests

## Getting Started

### Prerequisites

Node.js version 16 or higher is required.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/mert-onalan/e-learning-app.git
cd e-learning-app
npm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

### Other Commands

```bash
npm test              # Run tests
npm run test:coverage # Run tests with coverage
```

## Project Structure

```
src/
├── assets/             # Static assets (images, icons)
│   └── images/         # Image files
│   └── styles/         # Global styles and variables
├── components/         # Reusable components
│   ├── LoadingFallback/
│   ├── PageHeader/
│   ├── ProgressBar/
│   ├── SearchBar/
│   └── Tile/
├── data/               # Mock data
│   └── mockData.ts
├── hooks/              # Custom React hooks
│   ├── useSearch.ts
│   └── useShareCourse.ts
├── pages/              # Page components
│   ├── DescriptionPage/
│   ├── MainPage/
│   └── NotFoundPage/
├── types/              # TypeScript type definitions
│   └── types.ts
├── utils/              # Utility functions
│   └── dateFormatter.ts
├── App.tsx             # Main app component
└── main.tsx            # Application entry point
```

## Design Decisions

### Component Organization

The application uses a component-based architecture where each component lives in its own folder with its styles and tests. Reusable components like SearchBar and ProgressBar are kept separate from page-level components.

### State Management

I used local component state with React hooks since the application scope is relatively small. Custom hooks like `useSearch` and `useShareCourse` handle reusable logic across components.

### Data Display

The requirements specified displaying a "full component list" with mocked data. Since only 2-3 mock items were provided, I implemented a simple list view that displays all available items. The component counter shows "10" as part of the mock data structure to demonstrate the UI pattern.

In a production environment with 150+ actual items, this would need pagination or infinite scroll for better performance. I chose to follow the requirements as written rather than over-engineer for a use case that doesn't exist in the provided data.

### Styling

I went with SCSS because it provides good organization through variables and nesting. The variables file contains all colors, spacing, and breakpoints, making it easy to maintain consistency across the app. The mobile breakpoint is set at 600px.

## Performance

I spent some time optimizing the application's performance, particularly around images and loading strategies.

### Code Splitting

Routes are lazy-loaded using React.lazy() to reduce the initial bundle size. This means users only download the code they need for the page they're viewing.

### Results

The Lighthouse performance score is 95+. The accessibility score is 95+ and best practices is 90+. Most of the remaining performance issues would require pagination with real data or further bundle optimization.

## Accessibility

The application follows WCAG 2.1 guidelines. All interactive elements are keyboard accessible with visible focus indicators. I used semantic HTML elements (article, nav, main) and added ARIA labels where needed for screen reader support.

Images have alt text, and the color contrast meets WCAG AA standards. The SearchBar and tile components include proper ARIA roles and labels. Form elements have associated labels, and toast notifications use appropriate ARIA live regions.

## Testing

The project includes unit and component tests using React Testing Library and Vitest. Tests cover utility functions, custom hooks, and component.

Run tests with:
```bash
npm test                # Run all tests
npm run test:coverage  # Generate coverage report
```

The project maintains 100% test coverage for all utilities, hooks, components, and pages (excluding application entry points).