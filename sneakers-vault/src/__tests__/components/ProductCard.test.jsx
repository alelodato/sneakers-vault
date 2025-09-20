import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import WishlistProvider from "../../contexts/WishListContext";

describe("ProductCard component", () => {
  const product = {
    id: "air-jordan-1",
    slug: "air-jordan-1-low-black-toes",
    title: "Air Jordan 1 Low Black Toes",
    price: 190,
    image:
      "https://images.unsplash.com/photo-1696954895463-343839741541?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1696954895434-fc503a498486?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["hot", "men"],
    colors: ["Black", "Red", "White"],
    sizes: {
      men: [
        { code: "EU41", us: 8, stock: 2 },
        { code: "EU42", us: 8.5, stock: 3 },
        { code: "EU43", us: 9.5, stock: 2 },
        { code: "EU44", us: 10.5, stock: 1 },
      ],
    },
  };

  it("renders product title, price, image and wishlist button", () => {
    render(
      <BrowserRouter>
        <WishlistProvider>
          <ProductCard p={product} />
        </WishlistProvider>
      </BrowserRouter>
    );

    // ✅ Title
    expect(
      screen.getByText("Air Jordan 1 Low Black Toes")
    ).toBeInTheDocument();

    // ✅ Price (discounted or not)
    expect(screen.getByText("€190")).toBeInTheDocument();

    // ✅ Product Image
    expect(screen.getByAltText("Air Jordan 1 Low Black Toes")).toBeInTheDocument();

    // ✅ Hover image
    expect(
      screen.getByAltText("Air Jordan 1 Low Black Toes alt")
    ).toBeInTheDocument();

    // ✅ Wishlist button
    expect(
      screen.getByRole("button", { name: /add to wishlist/i })
    ).toBeInTheDocument();
  });
});
