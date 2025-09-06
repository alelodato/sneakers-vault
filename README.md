# 👟 Sneakers Vault

An interactive concept e-commerce platform for sneaker lovers — offering a playful user experience with randomized product displays, dynamic size selection, and a functional shopping cart system.

![Sneakers Vault Screenshot](assets/images/screenshot.png)

---

## 🚀 Live Demo

[🔗 Visit Live Site](https://alelodato.github.io/sneakers-vault/)  
*(Best viewed on desktop or larger screens)*

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Pages](#-pages)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Testing](#-testing)
- [Future Improvements](#-future-improvements)
- [Contact](#-contact)
- [License](#-license)

---

## 🧩 Overview

**Sneakers Vault** is a frontend e-commerce prototype that simulates the experience of browsing and purchasing sneakers. It emphasizes dynamic product rendering, randomized size generation, and interactive UI features to provide a more engaging user experience.

This project was built to showcase frontend skills in **JavaScript**, **CSS**, and **DOM manipulation**, and is part of my professional portfolio.

---

## ✨ Features

- 🎲 **Randomized Product Cards**  
  Each visit generates a new set of sneaker cards with varied sizes and gender categories.

- 👟 **Size Selector**  
  Users must select a size before adding a product to the cart, with visual validation and feedback.

- 🛒 **Cart Functionality**  
  - Add items to the cart  
  - Modify item quantity with `+` and `−` buttons  
  - Remove items  
  - View price and size information

- 👶 **Support for Men, Women & Kids Sizes**  
  Products are labeled according to gender and associated with valid size ranges.

- 💬 **Feedback Messages**  
  Real-time alerts guide the user experience (e.g. missing size, item added to cart).

- 💻 **Responsive Design**  
  Optimized layout for desktop and mobile devices.

---

## 📄 Pages

### 🏠 Home Page (`index.html`)

Displays:

- A random list of sneaker cards
- Sizes and gender categories per product
- Add-to-cart system (size selection required)

### 🛍️ Cart Page (`cart.html`)

Includes:

- All added products (name, size, quantity)
- Quantity adjustment (+ / −)
- Item removal button
- Total price (if implemented)

> Cart data is stored in memory (no persistent storage). On reload, contents reset.

---

## 🛠️ Tech Stack

| Technology         | Description                               |
|--------------------|-------------------------------------------|
| **HTML5**          | Semantic structure of the UI              |
| **CSS3**           | Custom styling and responsive layout      |
| **Vanilla JavaScript** | Dynamic DOM updates, cart logic, random generators |
| **GitHub Pages**   | Deployment and live demo hosting          |

---

## 🧱 Project Structure

sneakers-vault/
├── assets/
│ ├── css/
│ │ └── styles.css # Styling and layout
│ ├── js/
│ │ ├── main.js # Homepage logic (product cards, size selection, add to cart)
│ │ ├── cart.js # Cart page logic (quantity, remove, UI updates)
│ │ └── utils.js # Helper functions (random generators, size arrays, etc.)
│ └── images/ # Product images, logos, screenshots
├── index.html # Home page with product listing
├── cart.html # Cart page with selected items
└── README.md # Project documentation


---

## ⚙️ Installation

To run the project locally on your machine:

1. Clone the repository:

git clone https://github.com/alelodato/sneakers-vault.git

---

## 🧪 Testing

All testing has been performed manually. Below are the test cases covered:

| Test Case                                  | Expected Behavior                              | Status |
| ------------------------------------------ | ---------------------------------------------- | ------ |
| Home loads with random sneakers each time  | Products are randomized on each page load      | ✅      |
| Click “Add to Cart” without selecting size | Block action + show alert message              | ✅      |
| Select size then click “Add to Cart”       | Product is added to cart                       | ✅      |
| Navigate to Cart page                      | Cart displays added products with correct data | ✅      |
| Change quantity with “+” and “−” buttons   | Quantity updates immediately in cart           | ✅      |
| Remove product from cart                   | Product disappears from cart                   | ✅      |
| Reload home page                           | Different set of products and sizes appears    | ✅      |
| Cart resets on page refresh                | Cart is emptied (no persistent storage)        | ✅      |
| Responsive on mobile                       | Layout adjusts and remains functional          | ✅      |
| Error handling (e.g. no size selected)     | Friendly alert shown to the user               | ✅      |


https://sneakers-vault-jet.vercel.app/

An interactive concept e-commerce platform for sneaker lovers — offering a playful user experience with randomized product displays, dynamic size selection, and a functional shopping cart system.

![Sneakers Vault Screenshot](assets/images/screenshot.png)

---

## 🚀 Live Demo

[🔗 Visit Live Site](https://alelodato.github.io/sneakers-vault/)  
*(Best viewed on desktop or larger screens)*

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Pages](#-pages)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Testing](#-testing)
- [Future Improvements](#-future-improvements)
- [Contact](#-contact)
- [License](#-license)

---

## 🧩 Overview

**Sneakers Vault** is a frontend e-commerce prototype that simulates the experience of browsing and purchasing sneakers. It emphasizes dynamic product rendering, randomized size generation, and interactive UI features to provide a more engaging user experience.

This project was built to showcase frontend skills in **JavaScript**, **CSS**, and **DOM manipulation**, and is part of my professional portfolio.

---

## ✨ Features

- 🎲 **Randomized Product Cards**  
  Each visit generates a new set of sneaker cards with varied sizes and gender categories.

- 👟 **Size Selector**  
  Users must select a size before adding a product to the cart, with visual validation and feedback.

- 🛒 **Cart Functionality**  
  - Add items to the cart  
  - Modify item quantity with `+` and `−` buttons  
  - Remove items  
  - View price and size information

- 👶 **Support for Men, Women & Kids Sizes**  
  Products are labeled according to gender and associated with valid size ranges.

- 💬 **Feedback Messages**  
  Real-time alerts guide the user experience (e.g. missing size, item added to cart).

- 💻 **Responsive Design**  
  Optimized layout for desktop and mobile devices.

---

## 📄 Pages

### 🏠 Home Page (`index.html`)

Displays:

- A random list of sneaker cards
- Sizes and gender categories per product
- Add-to-cart system (size selection required)

### 🛍️ Cart Page (`cart.html`)

Includes:

- All added products (name, size, quantity)
- Quantity adjustment (+ / −)
- Item removal button
- Total price (if implemented)

> Cart data is stored in memory (no persistent storage). On reload, contents reset.

---

## 🛠️ Tech Stack

| Technology         | Description                               |
|--------------------|-------------------------------------------|
| **HTML5**          | Semantic structure of the UI              |
| **CSS3**           | Custom styling and responsive layout      |
| **Vanilla JavaScript** | Dynamic DOM updates, cart logic, random generators |
| **GitHub Pages**   | Deployment and live demo hosting          |

---

## 🧱 Project Structure

sneakers-vault/
├── assets/
│ ├── css/
│ │ └── styles.css # Styling and layout
│ ├── js/
│ │ ├── main.js # Homepage logic (product cards, size selection, add to cart)
│ │ ├── cart.js # Cart page logic (quantity, remove, UI updates)
│ │ └── utils.js # Helper functions (random generators, size arrays, etc.)
│ └── images/ # Product images, logos, screenshots
├── index.html # Home page with product listing
├── cart.html # Cart page with selected items
└── README.md # Project documentation


---

## ⚙️ Installation

To run the project locally on your machine:

1. Clone the repository:

git clone https://github.com/alelodato/sneakers-vault.git

---

## 🧪 Testing

All testing has been performed manually. Below are the test cases covered:

| Test Case                                  | Expected Behavior                              | Status |
| ------------------------------------------ | ---------------------------------------------- | ------ |
| Home loads with random sneakers each time  | Products are randomized on each page load      | ✅      |
| Click “Add to Cart” without selecting size | Block action + show alert message              | ✅      |
| Select size then click “Add to Cart”       | Product is added to cart                       | ✅      |
| Navigate to Cart page                      | Cart displays added products with correct data | ✅      |
| Change quantity with “+” and “−” buttons   | Quantity updates immediately in cart           | ✅      |
| Remove product from cart                   | Product disappears from cart                   | ✅      |
| Reload home page                           | Different set of products and sizes appears    | ✅      |
| Cart resets on page refresh                | Cart is emptied (no persistent storage)        | ✅      |
| Responsive on mobile                       | Layout adjusts and remains functional          | ✅      |
| Error handling (e.g. no size selected)     | Friendly alert shown to the user               | ✅      |
