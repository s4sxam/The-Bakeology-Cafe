export type MenuItemType = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  isVeg: boolean;
  image?: string; // Made optional so code doesn't break if other items don't have images yet
};

export const menuData: MenuItemType[] = [
  // Beverages (No images provided yet)
  { id: 'b1', name: 'Signature Cold Coffee', price: 180, description: 'Rich espresso blended with creamy milk and vanilla ice cream.', category: 'Beverages', isVeg: true },
  { id: 'b2', name: 'Classic Espresso', price: 120, description: 'A bold, double shot of our finest house blend.', category: 'Beverages', isVeg: true },
  { id: 'b3', name: 'Artisanal Hot Chocolate', price: 200, description: 'Thick, melted premium chocolate steamed with milk.', category: 'Beverages', isVeg: true },
  { id: 'b4', name: 'Hazelnut Frappe', price: 220, description: 'Iced blended coffee with rich hazelnut syrup and whipped cream.', category: 'Beverages', isVeg: true },

  // Bakery & Desserts (UPDATED WITH LOCAL IMAGES)
  { 
    id: 'bd1', 
    name: 'Chocolate Truffle Pastry', 
    price: 150, 
    description: 'Decadent layers of dark chocolate sponge and rich ganache.', 
    category: 'Bakery & Desserts', 
    isVeg: true,
    image: '/images/pexels-pelageia-zelenina-58865108-10390468.webp'
  },
  { 
    id: 'bd2', 
    name: 'Classic Apple Pie', 
    price: 180, 
    description: 'Warm, spiced apples baked in a buttery, flaky crust.', 
    category: 'Bakery & Desserts', 
    isVeg: true,
    image: '/images/pexels-mary-nikitina-53440096-7790871.webp'
  },
  { 
    id: 'bd3', 
    name: 'Artisanal Chocolates', 
    price: 120, 
    description: 'Handcrafted melt-in-your-mouth artisanal chocolates.', 
    category: 'Bakery & Desserts', 
    isVeg: true,
    image: '/images/pexels-suju-1693027.webp'
  },
  { 
    id: 'bd4', 
    name: 'Sizzler Brownie Cake', 
    price: 250, 
    description: 'Hot sizzling brownie served with vanilla ice cream and chocolate sauce.', 
    category: 'Bakery & Desserts', 
    isVeg: true,
    image: '/images/pexels-pixabay-45202.webp'
  },

  // Fast Food
  { id: 'ff1', name: 'Wholesome Veg Burger', price: 160, description: 'Crispy veg patty with fresh lettuce, tomatoes, and house mayo.', category: 'Fast Food', isVeg: true },
  { id: 'ff2', name: 'Barbeque Cottage Cheese Pizza', price: 280, description: 'Paneer tossed in BBQ sauce with bell peppers and mozzarella.', category: 'Fast Food', isVeg: true },
  { id: 'ff3', name: 'Pan-Fried Chilli Paneer Bao', price: 220, description: 'Soft steamed bao buns stuffed with spicy paneer chunks.', category: 'Fast Food', isVeg: true },
  { id: 'ff4', name: 'Cheese Corn Sizzler', price: 350, description: 'Sizzling hot plate loaded with cheese, corn, and spicy wedges.', category: 'Fast Food', isVeg: true },

  // Main Courses
  { id: 'mc1', name: 'Burnt Garlic Fried Rice', price: 220, description: 'Wok-tossed rice with a strong, aromatic burnt garlic flavor.', category: 'Main Courses', isVeg: true },
  { id: 'mc2', name: 'Alfredo Macaroni Pasta', price: 260, description: 'Macaroni in a rich, creamy, and cheesy white sauce.', category: 'Main Courses', isVeg: true },
  { id: 'mc3', name: 'Veg Schezwan Noodles', price: 210, description: 'Spicy, wok-tossed noodles with fresh vegetables and schezwan sauce.', category: 'Main Courses', isVeg: true },
  { id: 'mc4', name: 'Special Pav Bhaji', price: 180, description: 'Mumbai-style mashed vegetable curry served with buttery buns.', category: 'Main Courses', isVeg: true },
];

export const categories = ['Beverages', 'Bakery & Desserts', 'Fast Food', 'Main Courses'];