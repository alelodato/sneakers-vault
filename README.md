# Sneakers Vault – React + Express

## Project description

Sneakers Vault is an e-commerce platform dedicated to sneakers enthusiasts. It allows users to explore a wide range of sneakers, apply advanced filters, add products to cart, and complete purchases through a fully functional checkout process powered by Stripe. The frontend is built with React, and the backend with Express.

[🔗 View live website here](https://sneakers-vault-jet.vercel.app)

![Responsive design](./src/assets/readme/mockup.png)

## Table of Contents

- [Project](#project)
  - [Objective](#objective)
  - [Site Users Goal](#site-users-goal)
  - [Site Owners Goal](#site-owners-goal)
  - [Project Management](#project-management)
  - [User Stories](#user-stories)

- [User Experience (UX)](#user-experience-ux)
  - [Wireframes](#wireframes)
  - [Site Structure](#site-structure)
  - [Design Choices](#design-choices)

- [Existing Features](#existing-features)
  - [Navigation](#navigation)
  - [Homepage](#homepage)
  - [Shop Page](#shop-page)
  - [Product Detail](#product-detail)
  - [Cart](#cart)
  - [Checkout](#checkout)
  - [Success / Cancel Pages](#success-cancel-pages)

- [Technologies Used](#technologies-used)
  - [Languages](#languages)
  - [Frameworks & Software](#frameworks--software)
  - [Libraries](#libraries)

- [Testing](#testing)
  - [Code Validation](#code-validation)
  - [Manual Testing](#manual-testing)
  - [Known Bugs](#known-bugs)

- [Deployment](#deployment)
- [Credits](#credits)

---

# **Project**

## Objective

The objective of this project is to build a clean and modern e-commerce site for sneakers lovers. Users can browse products, apply filters, search by name or brand, view product details, and proceed to purchase. The Stripe Checkout integration provides a seamless and secure payment flow.

## Site Users Goal

- Discover the latest sneaker arrivals, promotions, and collections.
- Use filters to find sneakers by brand, color, size, or tag.
- View detailed product info and high-quality images.
- Add items to cart and update/remove them before checkout.
- Complete secure payments using Stripe Checkout.

## Site Owners Goal

The aim of the site owner is to provide an intuitive shopping experience tailored to sneaker fans, showcase curated collections, and manage orders efficiently.

## Project Management

### Github Project Board

A Kanban board was used to manage the project development through user stories and feature tracking.

[GitHub Project Board](https://github.com/users/alelodato/projects)

## User Stories

| Category   | As a... | I want to...                     | So that I can...                                           |
|------------|---------|----------------------------------|------------------------------------------------------------|
| Navigation | Visitor | View categories in homepage      | Quickly access men’s, women’s or kids’ sneakers           |
| Products   | Visitor | View a grid of products          | Browse through the catalogue                              |
| Products   | Visitor | Use filters (brand, size, tag)   | Find what I’m looking for more easily                     |
| Products   | Visitor | Use search bar                   | Locate a product quickly                                  |
| Cart       | User    | Add products to cart             | Save my selection before buying                           |
| Cart       | User    | Update quantity or remove items  | Manage what I want to purchase                            |
| Checkout   | User    | Choose delivery or pickup        | Decide how I want to receive my sneakers                  |
| Checkout   | User    | Pay with Stripe                  | Complete purchase securely                                |
| Checkout   | User    | Be redirected to success/cancel  | Receive confirmation of the order or retry payment        |

---

# **User Experience (UX)**

## Wireframes

Wireframes were hand-sketched during planning. The layout was optimized for both desktop and mobile views following a mobile-first approach.

<details><summary><b>Wireframes</b></summary>

![Mobile Wireframe](./src/assets/readme/mobile-wireframe.png)  
![Desktop Wireframe](./src/assets/readme/desktop-wireframe.png)

</details><br/>

## Site Structure

- **Homepage:** Highlights promotions, new arrivals, and links to category pages (via filters).
- **Shop Page:** Full list of sneakers with advanced filters and search.
- **Product Page:** Displays details and allows user to add product to cart.
- **Cart Page:** Lists all products added by user with quantity and total price.
- **Checkout:** Stripe-hosted checkout page.
- **Success / Cancel:** Order confirmation or payment error message.

## Design Choices

- **Color Scheme:** Black & white with subtle tones of grey and vibrant accents for call-to-actions.
- **Typography:** Clean sans-serif font for a modern and sharp look.
- **Layout:** Grid-based product presentation, responsive navigation, mobile-friendly UI.

---

# **Existing Features**

## Navigation

- Responsive navbar with burger menu on mobile.
- Quick links to Home, Shop, and Cart.
- Category links redirect to `/shop` with predefined filters via query string.

## Homepage

- Carousel with featured products.
- Sections for promotions, new arrivals, and highlighted items.
- Category buttons for men, women, and kids — redirecting to `/shop?category=men`, etc.

## Shop Page

- Product grid layout with image, name, and price.
- Filter sidebar with:
  - Brand
  - Color
  - Size
  - Tags
- Search bar for product name.

## Product Detail

- Image zoom on hover.
- Title, description, price, available sizes.
- Add to Cart functionality.

## Cart

- Dynamic cart with update quantity and remove buttons.
- Price total calculation in real-time.
- Option to continue shopping or proceed to checkout.

## Checkout

- Stripe Checkout with delivery/pickup toggle before payment.
- Stripe handles the payment securely.
- Backend session creation via Express and Stripe SDK.

## Success / Cancel Pages

- Success page confirms order and thanks the user.
- Cancel page informs the user payment was not completed.

---

# **Technologies Used**

## Languages

- HTML5
- CSS3
- JavaScript (ES6)
- JSX

## Frameworks & Software

- React
- Express.js (Node backend)
- Stripe Checkout
- Vite (React build tool)
- Railway (Backend deployment)
- Vercel (Frontend deployment)
- GitHub (repo + project board)
- Cloudinary (image hosting)

## Libraries

- React Router
- Stripe JS
- Dotenv
- Axios
- React Icons
- React Toastify

---

# **Testing**

## Code Validation

- HTML/CSS tested via W3C Validators.
- ESLint used for JSX validation.

## Manual Testing

| Test | Result |
|------|--------|
| Visit homepage on desktop | ✅ |
| Visit homepage on mobile | ✅ |
| Click category links | ✅ Redirects with filter applied |
| Filter products in shop | ✅ |
| Search for product | ✅ |
| Add/remove items from cart | ✅ |
| Proceed to Stripe checkout | ✅ |
| Complete a payment with Stripe | ✅ |
| Try cancelling payment | ✅ Redirects to cancel page |
| View cart persistence | ✅ |
| Test responsiveness on all screen sizes | ✅ |

## Known Bugs

- No authentication system is implemented yet.
- No admin dashboard or inventory management system.
- Cart is stored in local state — no persistence on refresh.
- No email confirmation yet (planned for future release).

---

# **Deployment**

## Frontend

- Deployed on [Vercel](https://sneakers-vault-jet.vercel.app)

## Backend

- Deployed on [Render](https://dashboard.render.com)
- Uses environment variables for Stripe secret keys
- `/create-checkout-session` handles checkout logic

## Cloning Instructions

1. Clone repo:  
   `git clone https://github.com/alelodato/sneakers-vault`
2. Install dependencies:  
   `npm install`
3. Run development server:  
   `npm run dev`

---

All code written by **Alessio Lodato**.
