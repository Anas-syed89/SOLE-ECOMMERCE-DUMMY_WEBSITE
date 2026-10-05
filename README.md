# 👟 SOLE — Modern Shoe E-Commerce Web Application

SOLE is a modern and responsive shoe e-commerce frontend built with React.js and Tailwind CSS. The project focuses on creating a clean shopping experience with dynamic product pages, cart management, client-side routing, form handling, and a responsive user interface.

The goal of this project was to build more than just a static product website. I wanted to practice how a real-world React application handles product data, user interactions, cart state, forms, routing, and browser storage.

## 🌐 Live Demo

**Live Website:**  
https:[//your-live-demo-link.com](https://sole-ecommerce-web.netlify.app/)

## 📸 Project Overview

SOLE allows users to browse available shoes, view detailed product information, add products to their cart, manage quantities, and submit contact information through a dedicated contact form.

The application also includes a custom 404 page and user-friendly toast notifications to provide feedback during different interactions.

---

## ✨ Features

### 🏠 Interactive Hero Section

- Clean and modern landing page design.
- **Explore More** button takes users directly to the product section.
- **Watch Video** button opens a dedicated video route.
- Product demonstration video can be played from the video page.

### 👟 Dynamic Product Catalog

- Products are rendered dynamically from product data.
- Responsive product grid layout.
- Each product contains information such as:
  - Product name
  - Category
  - Price
  - Original price
  - Rating
  - Reviews
  - Product image
  - Description
  - Product badge

### 🔎 Product Details

- Every product has its own dynamic detail page.
- Product details are displayed based on the URL parameter.
- Users can view complete information about an individual shoe before adding it to their cart.

### 🛒 Shopping Cart

- Users can add products to the cart.
- Products are stored using browser `localStorage`.
- Cart data remains available even after refreshing the page.
- Users can increase or decrease product quantities.
- Products can be removed from the cart.
- Cart total is calculated dynamically based on product price and quantity.

### 💾 Local Storage

The project uses the browser's `localStorage` API to persist important user data.

This includes:

- Shopping cart data
- Contact form submissions

This means the data does not disappear immediately when the browser page is refreshed.

### 📩 Contact Form

- Built using React controlled components.
- Handles user input through React state.
- Includes form validation.
- Displays error messages when required fields are missing.
- Successfully submitted forms are stored in `localStorage`.
- Multiple submissions can be stored.

### 🔔 Toast Notifications

The application uses React Toastify to provide instant feedback to users.

Examples include:

- Missing form fields
- Successful form submission
- Other user interaction feedback

### 💬 Testimonials

- Includes a dedicated testimonials section.
- Displays customer feedback in clean and responsive cards.
- Helps make the overall website feel more like a real e-commerce platform.

### 🚫 Custom 404 Page

- Includes a custom 404 error page for invalid routes.
- Provides a more user-friendly experience instead of showing a blank or default error page.

---

## 🛠️ Tech Stack

### Frontend

- **React.js**
- **Tailwind CSS**
- **JavaScript (ES6+)**

### Libraries

- **react-router** — Client-side routing and dynamic product pages
- **lucide-react** — Clean and modern SVG icons
- **react-toastify** — Toast notifications and user feedback

### Browser APIs

- **localStorage** — Persistent client-side data storage

---

## 🧠 React Concepts Practiced

This project helped me practice several important React concepts, including:

- Functional Components
- Component Reusability
- Props
- `useState`
- `useEffect`
- Event Handling
- Controlled Components
- Form Handling
- Dynamic Routing
- URL Parameters
- Array Methods such as `map()`, `find()`, `filter()`, and `reduce()`
- Conditional Rendering
- State Management
- Browser `localStorage`
- Data Persistence

---

## 👤 Author

**Syed Anas ALi**

- GitHub: https://github.com/Anas-syed89
- LinkedIn: https://www.linkedin.com/in/syedanasali2007

---

## ⭐ Support

If you like this Sole-Website/Front-End Project or find it useful, consider giving the repository a **⭐ star** on GitHub.

Thank you for visiting my Project! 🚀
