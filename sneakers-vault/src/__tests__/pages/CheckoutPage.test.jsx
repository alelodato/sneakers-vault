import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from '@testing-library/react';
import Checkout from '../../pages/Checkout';
import { BrowserRouter } from 'react-router-dom';
import { changeLanguage } from "i18next";

// Mock traduzioni i18n
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));

// Cart mock context wiht fictional product
vi.mock('@contexts/CartContext', () => ({
  useCart: () => ({
    items: [
      {
        key: 'abc123',
        qty: 2,
        size: { code: 'EU42', us: 9 },
        product: {
          title: 'Nike Air Max',
          price: 150,
          image: 'https://image.url/shoe.jpg',
        },
      },
    ],
  }),
}));

describe('Checkout', () => {
  it('renders CheckoutPage with the summary title', () => {
    render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>
    );

    const title = screen.getByText('checkout.summary');
    expect(title).toBeInTheDocument();
  });

  it('renders one item in cart summary', () => {
    render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>
    );

    // Verifica che il nome del prodotto mockato sia visibile
    expect(screen.getByText('Nike Air Max')).toBeInTheDocument();

    // Verifica presenza bottone pagamento
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

