# 🧪 Testing - Sneakers Vault

This document provides an overview of all testing activities performed for the **Sneakers Vault** project. It includes:

- Automated Testing (Unit + Integration)
- Manual Testing
- Code Validation
- Known Bugs
- Areas for Future Improvement

---

## ✅ Automated Testing (Unit & Integration)

All automated tests are written using **Vitest** and **React Testing Library**.  
The main focus was to test critical pages/components for rendering, interactivity, conditional UI, and context behavior.

| Test Suite              | Description                                                              | Status |
|-------------------------|--------------------------------------------------------------------------|--------|
| `Home.test.jsx`         | Verifies rendering of home sections, links, titles, and structure        | ✅ Pass |
| `ProductCard.test.jsx`  | Tests image, title, wishlist interaction, and prices (with/without discount) | ✅ Pass |
| `Cart.test.jsx`         | Checks cart item rendering, buttons for quantity update/removal, total price | ✅ Pass |
| `ProductDetail.test.jsx`| Tests conditional rendering, size selection, and “Add to Cart” button    | ✅ Pass |
| `Filters.test.jsx`      | Ensures filter checkboxes toggle and trigger handler                     | ✅ Pass |
| `SearchBar.test.jsx`    | Tests input change and search trigger on enter                           | ✅ Pass |

---

### 🔍 Example: `Cart.test.jsx`

This test covers:

- Rendering of cart with dummy product
- Display of product image, title, and price
- Functionality of + / - / remove buttons
- Total price calculation

Test uses mocked `CartContext` to simulate state and handler behavior.

---

## 🧪 Manual Testing

Manual testing was performed on both **desktop** and **mobile** (Chrome DevTools and physical iPhone).  
Each key user flow and interaction was verified by hand.

| Functionality                             | Test Case                                                        | Status |
|------------------------------------------|-------------------------------------------------------------------|--------|
| Homepage Loads                            | Check all sections (carousel, new arrivals, category buttons)     | ✅     |
| Category buttons                          | Click "Men", "Women", "Kids" redirects to `/shop?category=...`   | ✅     |
| Product Grid                              | Products load correctly with image, title, price                  | ✅     |
| Product Detail Page                       | Shows correct info, image zoom, size selection                    | ✅     |
| Add to Cart                               | Product gets added, shows in Cart page                            | ✅     |
| Cart Interactions                         | Quantity update (+/-), remove, total updates                      | ✅     |
| Cart Persistence                          | Cart data stays on page reload (within session)                   | ✅     |
| Checkout                                  | Stripe opens, correct product + size in summary                   | ✅     |
| Success Page                              | Message appears after successful payment                          | ✅     |
| Cancel Page                               | Message shown if payment canceled                                 | ✅     |
| Search Function                           | Typing product name filters correctly                             | ✅     |
| Filter Sidebar                            | Selecting/unselecting filters updates results                     | ✅     |
| Language Switcher                         | UI updates correctly in all supported languages                   | ✅     |
| Responsive Design                         | Pages adjust correctly from 320px to desktop                      | ✅     |
| Wishlist Icon                             | Adds/removes product with heart icon toggle                       | ✅     |
| Form Submission (Contact)                 | Mobile form layout and submission flow verified                   | ✅     |

---

## 🧹 Code Validation

| Tool              | Purpose                            | Result              |
|-------------------|------------------------------------|---------------------|
| **ESLint**        | JavaScript + JSX static analysis   | ✅ No critical issues |
| **W3C Validator** | HTML5 & CSS3 markup check          | ✅ Valid markup      |

---

## 🐞 Known Bugs & Limitations

| Issue                  | Description                                                  | Status     |
|------------------------|--------------------------------------------------------------|------------|
| No persistent cart     | Cart resets on browser refresh (no localStorage yet)         | To Improve |
| No admin panel         | No backend dashboard for managing products/orders            | Planned    |
| No user authentication | Users cannot register or login                               | Planned    |
| No email confirmation  | Orders not followed up with confirmation emails              | Planned    |
| No form validation     | Contact form lacks real-time field validation                | To Add     |

---

## 💡 Suggestions for Future Testing

- Add full **E2E testing** using Cypress or Playwright
- Add **coverage reports** via `vitest --coverage` or `c8`
- Write tests for **checkout backend logic**
- Test all edge cases: discounts, filters + search combined, wishlist + checkout
