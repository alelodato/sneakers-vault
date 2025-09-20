import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home.jsx';
import { BrowserRouter } from 'react-router-dom';

vi.mock('@contexts/WishlistContext', () => ({
  useWishlist: () => ({
    has: () => false,
    toggle: vi.fn(),
  }),
}));

describe('Home', () => {
  it('renders homepage title and featured section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    // Tests the page Header
    expect(screen.getByText(/Unlock the vault/i)).toBeInTheDocument();
    expect(screen.getByText(/Step into style/i)).toBeInTheDocument();

    // Tests the other page's elements (translated using the t key)
    expect(screen.getByText("home.men")).toBeInTheDocument();
    expect(screen.getByText("home.women")).toBeInTheDocument();
    expect(screen.getByText("home.kids")).toBeInTheDocument();
    expect(screen.getByText("home.trend")).toBeInTheDocument();
    expect(screen.getByText("home.sale")).toBeInTheDocument();
    expect(screen.getByText("home.new")).toBeInTheDocument();
    expect(screen.getByText("home.contact")).toBeInTheDocument();
    expect(screen.getByText("home.lang")).toBeInTheDocument();
    expect(screen.getAllByText("home.more").length).toBe(3); // used 3 times
  });
});

