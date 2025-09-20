import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cart from '../../pages/Cart.jsx';
import CartProvider from '../../contexts/CartContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';

//i18n Mock
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

// Product
const product = {
  id: 'air-jordan-1',
  slug: 'air-jordan-1-low-black-toes',
  title: 'Air Jordan 1 Low Black Toes',
  price: 190,
  image:
    'https://images.unsplash.com/photo-1696954895463-343839741541?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
};

// CartContext Mock
const mockCartContext = {
  items: [
    {
      key: 'item-1',
      product,
      qty: 2,
      size: { code: 'EU42', us: 8.5, stock: 3 },
    },
  ],
  inc: vi.fn(),
  dec: vi.fn(),
  remove: vi.fn(),
  clear: vi.fn(),
  totalPrice: 380,
};

// Custom render using mocked Cart Context
import * as CartContext from '../../contexts/CartContext';

function renderWithProviders(ui) {
  vi.spyOn(CartContext, 'useCart').mockReturnValue(mockCartContext);

  return render(
    <BrowserRouter>
      <CartProvider>{ui}</CartProvider>
    </BrowserRouter>
  );
}

describe('Cart page', () => {
  it('renders product in cart', () => {
    renderWithProviders(<Cart />);

    // Testing that title is shown
    expect(screen.getByText(/Air Jordan 1 Low Black Toes/i)).toBeInTheDocument();

    // And quantity too
    expect(screen.getByText('2')).toBeInTheDocument();

    // Testing that total price is calculated
    expect(screen.getByText(/cart.total/i)).toBeInTheDocument();
    expect(screen.getByText('380.00', {exact: false })).toBeInTheDocument();
  });
});
