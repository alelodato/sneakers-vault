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
| `HomePage.test.jsx`         | Verifies rendering of home sections, links, titles, and structure        | ✅ Pass |
| `ProductCard.test.jsx`  | Tests image, title, wishlist interaction, and prices (with/without discount) | ✅ Pass |
| `CartPage.test.jsx`         | Checks cart item rendering, buttons for quantity update/removal, total price | ✅ Pass |
| `CheckoutPage.test.jsx`| Tests if an item is correctly added to the cart with price, quantity, size infos and also button to payment    | ✅ Pass |

---


## 🧪 Manual Testing

Manual testing was performed on both **desktop** and **mobile** (Chrome DevTools and physical iPhone).  
Each key user flow and interaction was verified by hand.

| Functionality                             | Test Case                                                        | Status |
|------------------------------------------|-------------------------------------------------------------------|--------|
| Homepage Loads                            | Check all sections (carousel, product rotator, category buttons)     | ✅     |
| Category buttons                          | Click "Men", "Women", "Kids" redirects to `/shop?category=...`   | ✅     |
| Product Grid                              | Products load correctly with image, title, price                  | ✅     |
| Product Detail Page                       | Shows correct info, image, size selection                    | ✅     |
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
| No admin panel         | No backend dashboard for managing products/orders            | Planned    |
| No user authentication | Users cannot register or login                               | Planned    |
| No email confirmation  | Orders not followed up with confirmation emails              | Planned    |

---

## 💡 Suggestions for Future Testing

- Add full **E2E testing** using Cypress or Playwright;
- Write tests for **checkout backend logic**;
- Test all edge cases: discounts, filters + search combined, wishlist + checkout.
