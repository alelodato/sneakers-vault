export const products = [
  {
    id: "nike-air-force-1-blk",
    slug: "nike-air-force-1-black",
    title: "Nike Air Max 1 — Black",
    brand: "Nike",
    price: 270,
    tags: ["hot", "men"],
    colors: ["Black"],
    sizes: {
      men: [
        { code: "EU40", us: 7.5, stock: 5 },
        { code: "EU41", us: 8, stock: 3 },
        { code: "EU42", us: 8.5, stock: 2 },
        { code: "EU43", us: 9.5, stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1582451669266-71f7e1cca3dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "adidas-gazelle-white",
    slug: "adidas-gazelle-white",
    title: "adidas GAZELLE — White",
    brand: "adidas",
    price: 95,
    tags: ["new", "men"],
    colors: ["White"],
    sizes: {
      men: [
        { code: "EU41", us: 8, stock: 2 },
        { code: "EU42", us: 8.5, stock: 3 },
        { code: "EU43", us: 9.5, stock: 2 },
        { code: "EU44", us: 10.5, stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1739444929269-341792e2a4ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1739444929249-5af4d61276a9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "nike-free-run-flyknit",
    slug: "nike-free-run-flyknit",
    title: "Nike Free Run Flyknit — Red",
    brand: "Nike",
    price: 159,
    discount: 50,
    tags: ["sale", "men", "women"],
    colors: ["Red"],
    sizes: {
      men: [
        { code: "EU41", us: 8, stock: 4 },
        { code: "EU42", us: 8.5, stock: 3 },
        { code: "EU43", us: 9.5, stock: 2 },
      ],
      women: [
        { code: "EU37", us: 6.5, stock: 3 },
        { code: "EU38", us: 7.5, stock: 2 },
        { code: "EU39", us: 8.5, stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    hoverImage:
      "https://media.istockphoto.com/id/1391533360/it/foto/scarpe-sneakers-rosse.jpg?s=1024x1024&w=is&k=20&c=TB0wFKcR31BSBn_sW0zjCqUYpR1aic0ad7S46QFbdcc=",
  },
  {
    id: "jordan-1-low",
    slug: "jordan-1-low-black-red-white",
    title: "Air Jordan 1 Low Black Toes",
    brand: "Nike",
    price: 190,
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
    image:
      "https://images.unsplash.com/photo-1696954895463-343839741541?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1696954895434-fc503a498486?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "nike-air-force-1-pst",
    slug: "nike-air-force-1-shadow-pastel",
    title: "Nike Air Force 1 Shadow Pastel",
    brand: "Nike",
    price: 215,
    tags: ["hot", "women"],
    colors: ["White", "Pink", "Blue"],
    sizes: {
      women: [
        { code: "EU36", us: 5.5, stock: 5 },
        { code: "EU37", us: 6.5, stock: 4 },
        { code: "EU38", us: 7.5, stock: 2 },
        { code: "EU39", us: 8.5, stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1580894529572-79b20170f355?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "nike-air-force-1-w",
    slug: "nike-air-force-1-white",
    title: "Nike Air Force 1 White",
    brand: "Nike",
    price: 130,
    tags: ["new", "men", "women"],
    colors: ["White"],
    sizes: {
      men: [
        { code: "EU41", us: 8, stock: 5 },
        { code: "EU42", us: 9, stock: 3 },
        { code: "EU43", us: 10, stock: 2 },
      ],
      women: [
        { code: "EU37", us: 6.5, stock: 3 },
        { code: "EU38", us: 7.5, stock: 2 },
        { code: "EU39", us: 8.5, stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1656164847621-4665c4c397da?q=80&w=1250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1597350584914-55bb62285896?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "nike-air-force-1-swarovski",
    slug: "nike-air-force-1-swarovski",
    title: 'Nike Air Force 1 "Swarovski"',
    brand: "Nike",
    price: 219,
    tags: ["hot", "women"],
    colors: ["White"],
    sizes: {
      men: [
        { code: "EU41", us: 8, stock: 4 },
        { code: "EU42", us: 9, stock: 3 },
        { code: "EU43", us: 10, stock: 2 },
      ],
      women: [
        { code: "EU37", us: 6.5, stock: 5 },
        { code: "EU38", us: 7.5, stock: 3 },
        { code: "EU39", us: 8.5, stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1720070827942-c67f31b68d1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1720070828114-dc286eb53ba8?q=80&w=953&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "air-force-1-cosmic-play",
    slug: "air-force-1-cosmic-play",
    title: "Air Force 1 Cosmic Play",
    brand: "Nike",
    price: 239,
    tags: ["new", "men"],
    colors: ["White"],
    sizes: {
      men: [
        { code: "EU40", us: 7.5, stock: 4 },
        { code: "EU41", us: 8, stock: 2 },
        { code: "EU42", us: 9, stock: 2 },
        { code: "EU43", us: 10, stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1594101173594-b4dc450c64b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1594101226350-4793a5b5e048?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "adidas-top-ten-hi",
    slug: "adidas-top-ten-hi-white",
    title: "adidas Top Ten Hi White",
    brand: "adidas",
    price: 150,
    discount: 70,
    tags: ["sale", "men", "women"],
    colors: ["White"],
    sizes: {
      men: [
        { code: "EU41", us: 8, stock: 4 },
        { code: "EU42", us: 9, stock: 3 },
        { code: "EU43", us: 10, stock: 2 },
      ],
      women: [
        { code: "EU37", us: 6.5, stock: 3 },
        { code: "EU38", us: 7.5, stock: 2 },
        { code: "EU39", us: 8.5, stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1651013691313-81b822df0044?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1645846123684-f6f33a2eb3ec?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "adidas-original-forum-bonega",
    slug: "adidas-original-forum-bonega-white",
    title: "adidas Original Forum Bonega White",
    brand: "adidas",
    price: 89,
    tags: ["new", "women"],
    colors: ["White"],
    sizes: {
      women: [
        { code: "EU36", us: 5.5, stock: 4 },
        { code: "EU37", us: 6.5, stock: 2 },
        { code: "EU38", us: 7.5, stock: 2 },
        { code: "EU39", us: 8.5, stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1698108223397-3d222e80d7ea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1670416035623-6538fd6810c9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "new-balance-ct302-w",
    slug: "new-balance-ct302-white",
    title: "New Balance CT302 White",
    brand: "New Balance",
    price: 80,
    tags: ["new", "women"],
    colors: ["White"],
    sizes: {
      women: [
        { code: "EU36", us: 5.5, stock: 3 },
        { code: "EU37", us: 6.5, stock: 3 },
        { code: "EU38", us: 7.5, stock: 2 },
        { code: "EU39", us: 8.5, stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1690988550369-db0fe19c1baf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1577982886439-c25dc08b0c01?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "lacoste-carnaby",
    slug: "lacoste-carnaby-white",
    title: "Lacoste Carnaby White",
    brand: "Lacoste",
    price: 110,
    tags: ["hot", "men"],
    colors:["White"],
    sizes: {
      men: [
        { code: "EU40", us: 7.5, stock: 5 },
        { code: "EU41", us: 8, stock: 3 },
        { code: "EU42", us: 9, stock: 2 },
        { code: "EU43", us: 10, stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1722489292294-426912777649?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1722489291844-b7ef817e10d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "new-balance-ct302-wp",
    slug: "new-balance-ct302-white-pink",
    title: "New Balance CT302 White & Pink",
    brand: "New Balance",
    price: 65,
    discount: 50,
    tags: ["sale", "women"],
    colors: ["White", "Pink"],
    sizes: {
      women: [
        { code: "EU36", us: 5.5, stock: 3 },
        { code: "EU37", us: 6.5, stock: 3 },
        { code: "EU38", us: 7.5, stock: 2 },
        { code: "EU39", us: 8.5, stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1690988550616-1cf0b63e2824?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1690988550401-3e23818b03c3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "nike-sb-dunk",
    slug: "nike-sb-dunk-low-pro-pale-ivory",
    title: "Nike SB Dunk Low Pro Pale Ivory",
    brand: "Nike",
    price: 198,
    discount: 30,
    tags: ["sale", "men"],
    colors: ["Ivory"],
    sizes: {
      men: [
        { code: "EU41", us: 8, stock: 4 },
        { code: "EU42", us: 9, stock: 3 },
        { code: "EU43", us: 10, stock: 2 },
        { code: "EU44", us: 11, stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1750929472555-157e4c5718b2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1750929471162-c8b9a7e3613b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "nike-dunk-low-next",
    slug: "nike-dunk-low-next-beige-sail",
    title: "Nike Dunk Low Next Beige Sail",
    brand: "Nike",
    price: 275,
    discount: 70,
    tags: ["sale", "women"],
    colors: ["Beige"],
    sizes: {
      women: [
        { code: "EU36", us: 5.5, stock: 4 },
        { code: "EU37", us: 6.5, stock: 3 },
        { code: "EU38", us: 7.5, stock: 2 },
        { code: "EU39", us: 8.5, stock: 2 },
        { code: "EU40", us: 9, stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1706550630360-c54242049729?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1706550630383-5e0b7a7c1673?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "adidas-gazelle-bold-w",
    slug: "adidas-gazelle-bold-w-white-green",
    title: "adidas Gazelle Bold W White & Green",
    brand: "adidas",
    price: 99,
    tags: ["hot", "men"],
    colors: ["White", "Green"],
    sizes: {
      men: [
        { code: "EU40", us: 7.5, stock: 4 },
        { code: "EU41", us: 8, stock: 3 },
        { code: "EU42", us: 9, stock: 3 },
        { code: "EU43", us: 10, stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1700853012811-ce0a42d2b6d3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1695552835881-fdcf4bf18aa6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "adidas-forum-low",
    slug: "adidas-forum-low-blue-white",
    title: "adidas Forum Low Blue & White",
    brand: "adidas",
    price: 69,
    tags: ["hot", "men"],
    colors: ["Blue", "White"],
    sizes: {
      men: [
        { code: "EU40", us: 7.5, stock: 3 },
        { code: "EU41", us: 8, stock: 3 },
        { code: "EU42", us: 9, stock: 2 },
        { code: "EU43", us: 10, stock: 2 },
        { code: "EU44", us: 11, stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1706550633317-6d34e8882ad5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1706550632795-ebc765ec9f8a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "nike-dunk-low-gs",
    slug: "nike-dunk-low-gs-blue-white-orange",
    title: "Nike Dunk Low GS Blue White & Orange",
    brand: "Nike",
    price: 105,
    tags: ["hot", "men"],
    colors: ["White", "Orange"],
    sizes: {
      men: [
        { code: "EU40", us: 7.5, stock: 3 },
        { code: "EU41", us: 8, stock: 3 },
        { code: "EU42", us: 9, stock: 2 },
        { code: "EU43", us: 10, stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1706550630997-e55368e7b616?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1706550631034-8ef8fc9abfbd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "adidas-performance-supernova",
    slug: "adidas-performance-supernova-white",
    title: "adidas Performance Supernova",
    brand: "adidas",
    price: 105,
    tags: ["new", "women"],
    colors:["White"],
    sizes: {
      women: [
        { code: "EU36", us: 5.5, stock: 5 },
        { code: "EU37", us: 6.5, stock: 3 },
        { code: "EU38", us: 7.5, stock: 2 },
        { code: "EU39", us: 8.5, stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1699999233448-fc2e192a4334?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1699999233466-bf833871f181?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "adidas-ar-trainer",
    slug: "adidas-ar-trainer-white",
    title: "Adidas AR Trainer White",
    brand: "adidas",
    price: 99,
    discount: 50,
    tags: ["sale", "women"],
    colors: ["White"],
    sizes: {
      women: [
        { code: "EU36", us: 5.5, stock: 5 },
        { code: "EU37", us: 6.5, stock: 4 },
        { code: "EU38", us: 7.5, stock: 3 },
        { code: "EU39", us: 8.5, stock: 2 },
        { code: "EU40", us: 9, stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1608551279774-4b0c208cf00d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1591781997999-a600e7a43f27?q=80&w=768&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "puma-shuffle-mid",
    slug: "puma-shuffle-mid-white",
    title: "Puma Shuffle Mid White",
    brand: "Puma",
    price: 79,
    tags: ["new", "men"],
    colors: ["White"],
    sizes: {
      men: [
        { code: "EU40", us: 7.5, stock: 3 },
        { code: "EU41", us: 8, stock: 3 },
        { code: "EU42", us: 9, stock: 2 },
        { code: "EU43", us: 10, stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1662037131816-aa2d7245166c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1608230616491-5d696aa9fe52?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "austin-mt",
    slug: "austin-mt-white",
    title: "Austin MT White",
    brand: "Austin",
    price: 199,
    tags: ["hot", "men"],
    colors: ["White"],
    sizes: {
      men: [
        { code: "EU40", us: 7.5, stock: 3 },
        { code: "EU41", us: 8, stock: 3 },
        { code: "EU42", us: 9, stock: 2 },
        { code: "EU43", us: 10, stock: 2 },
        { code: "EU44", us: 11, stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1651255122187-d49ae6f41736?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1650776967849-d037bd1ddab9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "puma-se",
    slug: "puma-se-black-grey-white",
    title: "Puma SE Black Grey & White",
    brand: "Puma",
    price: 109,
    tags: ["new", "women"],
    colors:["Grey", "White"],
    sizes: {
      women: [
        { code: "EU36", us: 5.5, stock: 4 },
        { code: "EU37", us: 6.5, stock: 3 },
        { code: "EU38", us: 7.5, stock: 2 },
        { code: "EU39", us: 8.5, stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1619253341026-74c609e6ce50?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1715714275887-fbfc77fe90ab?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "puma-smash",
    slug: "puma-smash-white",
    title: "Puma Smash White",
    brand: "Puma",
    price: 99,
    discount: 30,
    tags: ["sale", "women"],
    colors: ["White"],
    sizes: {
      women: [
        { code: "EU36", us: 5.5, stock: 4 },
        { code: "EU37", us: 6.5, stock: 3 },
        { code: "EU38", us: 7.5, stock: 2 },
        { code: "EU39", us: 8.5, stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1608230164697-c791326d284c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "puma-mayze-lth",
    slug: "puma-mayze-lth-white",
    title: "Puma Mayze LTH White",
    brand: "Puma",
    price: 70,
    tags: ["new", "men", "women"],
    colors: ["White"],
    sizes: {
      men: [
        { code: "EU41", us: 8, stock: 3 },
        { code: "EU42", us: 9, stock: 2 },
        { code: "EU43", us: 10, stock: 2 },
      ],
      women: [
        { code: "EU37", us: 6.5, stock: 3 },
        { code: "EU38", us: 7.5, stock: 2 },
        { code: "EU39", us: 8.5, stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1680204101400-aeac783c9d87?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1661152655333-7b5275ad6baa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "puma-suede-classic-blue",
    slug: "puma-suede-classic-blue",
    title: "Puma Suede Classic Blue",
    brand: "Puma",
    price: 40,
    tags: ["kids"],
    colors: ["Blue"],
    sizes: {
      kids: [
        { code: "EU26", us: "9C", stock: 4 },
        { code: "EU27", us: "10C", stock: 3 },
        { code: "EU28", us: "11C", stock: 3 },
        { code: "EU29", us: "12C", stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1593548366595-c449f72ccb3d?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage: "",
  },
  {
    id: "stones-and-bone-lemmi-crs",
    slug: "stones-and-bone-lemmi-crs",
    title: "Stones And Bones Lemmi Calf Navy & Ivor",
    brand: "Stones And Bones",
    price: 80,
    tags: ["kids"],
    colors: ["Navy", "Ivory"],
    sizes: {
      kids: [
        { code: "EU27", us: "9C", stock: 4 },
        { code: "EU28", us: "10C", stock: 3 },
        { code: "EU29", us: "11C", stock: 2 },
        { code: "EU30", us: "12C", stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1744814917835-eb4a2e82b8e8?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage: "",
  },
  {
    id: "stones-and-bones-lemmi-pink",
    slug: "stones-and-bones-lemmi-pink",
    title: "Stones And Bones Lemmi Pink",
    brand: "Stones And Bones",
    price: 80,
    tags: ["kids"],
    colors: ["Pink"],
    sizes: {
      kids: [
        { code: "EU25", us: "8C", stock: 4 },
        { code: "EU26", us: "9C", stock: 4 },
        { code: "EU27", us: "10C", stock: 3 },
        { code: "EU28", us: "11C", stock: 3 },
        { code: "EU29", us: "12C", stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1742390671609-9811019fe538?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage: "",
  },
  {
    id: "air-jordan-low-nero",
    slug: "air-jordan-low-nero",
    title: "Air Jordan Low Nero",
    brand: "Air Jordan",
    price: 70,
    tags: ["kids"],
    colors: ["Black"],
    sizes: {
      kids: [
        { code: "EU27", us: "9C", stock: 5 },
        { code: "EU28", us: "10C", stock: 4 },
        { code: "EU29", us: "11C", stock: 3 },
        { code: "EU30", us: "12C", stock: 2 },
        { code: "EU31", us: "13C", stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1679284392463-bfe74e6b75b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1679284392816-191b1c849f76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "philippe-model-paris-w",
    slug: "philippe-model-paris-w",
    title: "Philippe Model Paris White",
    brand: "Philippe Model",
    price: 199,
    tags: ["hot", "women"],
    colors: ["White"],
    sizes: {
      women: [
        { code: "EU36", us: 5.5, stock: 4 },
        { code: "EU37", us: 6.5, stock: 3 },
        { code: "EU38", us: 7.5, stock: 2 },
        { code: "EU39", us: 8.5, stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1617713210693-bdd16fb3fb56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1605034498188-5bb90e51930e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "ventela-republic-low-black",
    slug: "ventela-republic-low-black",
    title: "Ventela Republic Low Black",
    brand: "Ventela",
    price: 40,
    tags: ["kids"],
    colors: ["Black"],
    sizes: {
      kids: [
        { code: "EU27", us: "9C", stock: 5 },
        { code: "EU28", us: "10C", stock: 4 },
        { code: "EU29", us: "11C", stock: 3 },
        { code: "EU30", us: "12C", stock: 2 },
        { code: "EU31", us: "13C", stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1750726134041-4dfd4d86592d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage: "",
  },
  {
    id: "air-jordan-high-blue",
    slug: "air-jordan-high-blue",
    title: "Air Jordan High Blue",
    brand: "Air Jordan",
    price: 70,
    tags: ["kids"],
    colors: ["Blue"],
    sizes: {
      kids: [
        { code: "EU25", us: "8C", stock: 4 },
        { code: "EU26", us: "9C", stock: 3 },
        { code: "EU27", us: "10C", stock: 3 },
        { code: "EU28", us: "11C", stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1596036592126-66ebeb7c91ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://unsplash.com/photos/blue-and-orange-nike-sneakers-luGJ5ZkWQC0",
  },
  {
    id: "nike-air-huarache-w-or",
    slug: "nike-air-huarache-w-or",
    title: "Nike Air Huarache White & Orange",
    brand: "Nike",
    price: 55,
    tags: ["kids"],
    colors: ["White", "Orange"],
    sizes: {
      kids: [
        { code: "EU27", us: "9C", stock: 3 },
        { code: "EU28", us: "10C", stock: 4 },
        { code: "EU29", us: "11C", stock: 2 },
        { code: "EU30", us: "12C", stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1704900263740-c03c67a6c6d9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1704900264036-26bb66daa464?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "golden-goose-golden",
    slug: "golden-goose-golden",
    title: "Golden Goose Golden",
    brand: "Golden Goose",
    price: 100,
    tags: ["kids"],
    colors: ["White"],
    sizes: {
      kids: [
        { code: "EU27", us: "9C", stock: 6 },
        { code: "EU28", us: "10C", stock: 4 },
        { code: "EU29", us: "11C", stock: 3 },
        { code: "EU30", us: "12C", stock: 2 },
        { code: "EU31", us: "13C", stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1725271741207-b727541e983e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage: "",
  },
  {
    id: "stones-and-bones-vit-mauve",
    slug: "stones-and-bones-vit-mauve",
    title: "Stones And Bones Vit Mauve Pink",
    brand: "Stones And Bones",
    price: 80,
    tags: ["kids"],
    colors: ["Pink"],
    sizes: {
      kids: [
        { code: "EU27", us: "9C", stock: 5 },
        { code: "EU28", us: "10C", stock: 3 },
        { code: "EU29", us: "11C", stock: 2 },
        { code: "EU30", us: "12C", stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1741783928523-e08a26beb206?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage: "",
  },
  {
    id: "air-jordan-1-high-red-b-kids",
    slug: "air-jordan-1-high-red-b-kids",
    title: "Air Jordan 1 High OG Heritage Junior",
    brand: "Air Jordan",
    price: 60,
    tags: ["kids"],
    colors: ["Red"],
    sizes: {
      kids: [
        { code: "EU28", us: "10C", stock: 6 },
        { code: "EU29", us: "11C", stock: 4 },
        { code: "EU30", us: "12C", stock: 2 },
        { code: "EU31", us: "13C", stock: 1 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1667664585038-6eb05100f8dd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage:
      "https://images.unsplash.com/photo-1600686436232-82a3c677bc51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "stones-and-bones-kaki-jongens",
    slug: "stones-and-bones-kaki-jongens",
    title: "Stones And Bones Kaki Jongens",
    brand: "Stones And Bones",
    price: 45,
    tags: ["kids"],
    colors: ["Kaki"],
    sizes: {
      kids: [
        { code: "EU26", us: "9C", stock: 4 },
        { code: "EU27", us: "10C", stock: 3 },
        { code: "EU28", us: "11C", stock: 2 },
        { code: "EU29", us: "12C", stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1742390671619-5d4f2433e10a?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage: "",
  },
  {
    id: "stones-and-bones-low-lightblue",
    slug: "stones-and-bones-low-lightblue",
    title: "Stones And Bones Low Lightblue",
    brand: "Stones And Bones",
    price: 50,
    tags: ["kids"],
    colors: ["Blue"],
    sizes: {
      kids: [
        { code: "EU27", us: "10C", stock: 5 },
        { code: "EU28", us: "11C", stock: 4 },
        { code: "EU29", us: "12C", stock: 3 },
        { code: "EU30", us: "13C", stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1741783873370-0aa88947c15f?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage: "",
  },
  {
    id: "stones-and-bones-nero-calf-moss",
    slug: "stones-and-bones-nero-calf-moss",
    title: "Stones And Bones Nero Calf Moss",
    brand: "Stones And Bones",
    price: 70,
    tags: ["kids"],
    colors: ["Black"],
    sizes: {
      kids: [
        { code: "EU26", us: "9C", stock: 3 },
        { code: "EU27", us: "10C", stock: 3 },
        { code: "EU28", us: "11C", stock: 2 },
        { code: "EU29", us: "12C", stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1742390671604-298585775fe9?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage: "",
  },
  {
    id: "stones-and-bones-lesti-calf-crs",
    slug: "stones-and-bones-lesti-calf-crs",
    title: "Stones And Bones Lesti Calf Crs",
    brand: "Stones And Bones",
    price: 40,
    tags: ["kids"],
    colors: ["Blue"],
    sizes: {
      kids: [
        { code: "EU28", us: "11C", stock: 4 },
        { code: "EU29", us: "12C", stock: 3 },
        { code: "EU30", us: "13C", stock: 2 },
        { code: "EU31", us: "1Y", stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1744814917891-070900ee021d?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage: "",
  },
  {
    id: "stones-and-bones-sneakers-pink",
    slug: "stones-and-bones-sneakers-pink",
    title: "Stones And Bones Sneakers Pink",
    brand: "Stones And Bones",
    price: 70,
    tags: ["kids"],
    colors: ["Pink"],
    sizes: {
      kids: [
        { code: "EU27", us: "10C", stock: 4 },
        { code: "EU28", us: "11C", stock: 3 },
        { code: "EU29", us: "12C", stock: 3 },
        { code: "EU30", us: "13C", stock: 2 },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1742390671587-38df317d351d?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage: "",
  },
];
