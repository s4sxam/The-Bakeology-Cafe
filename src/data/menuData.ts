export type MenuItemType = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  isVeg: boolean;
};

// Updated specifically for The Bakeology based on your Google Maps data
export const menuData: MenuItemType[] =[
  // Bakery & Desserts
  { id: 'bd1', name: 'Sizzler Brownie Cake', price: 350, description: 'Our crowd favorite: Hot sizzling brownie served with vanilla ice cream.', category: 'Bakery & Desserts', isVeg: true },
  { id: 'bd2', name: 'Classic Apple Pie', price: 220, description: 'Freshly baked apple pie with a buttery, flaky crust.', category: 'Bakery & Desserts', isVeg: true },
  { id: 'bd3', name: 'Truffle Pastry', price: 180, description: 'Rich, dense, and gooey artisanal chocolate truffle pastry.', category: 'Bakery & Desserts', isVeg: true },
  { id: 'bd4', name: 'Artisanal Chocolates', price: 250, description: 'Handcrafted premium chocolates box.', category: 'Bakery & Desserts', isVeg: true },

  // Beverages
  { id: 'b1', name: 'Specialty Cappuccino', price: 200, description: 'Handcrafted hot coffee brewed to absolute perfection.', category: 'Beverages', isVeg: true },
  { id: 'b2', name: 'Artisanal Cold Coffee', price: 220, description: 'Creamy and refreshing signature cold brew blend.', category: 'Beverages', isVeg: true },
  { id: 'b3', name: 'Passionfruit Cooler', price: 240, description: 'Tropical passionfruit mocktail with sparkling water.', category: 'Beverages', isVeg: true },

  // Fast Food
  { id: 'f1', name: 'Signature Veg Pizza', price: 380, description: 'Freshly baked pizza loaded with premium seasonal veggies.', category: 'Fast Food', isVeg: true },
  { id: 'f2', name: 'Bombay Pav Bhaji', price: 250, description: 'Spicy mashed vegetable curry served with soft buttery pav.', category: 'Fast Food', isVeg: true },
  { id: 'f3', name: 'Bao Bun Veg', price: 240, description: 'Soft steamed bao buns filled with savory gourmet vegetables.', category: 'Fast Food', isVeg: true },
  { id: 'f4', name: 'Steamed Dumplings', price: 220, description: 'Delicate dumplings stuffed with an aromatic veg filling.', category: 'Fast Food', isVeg: true },
  { id: 'f5', name: 'Crispy Onion Strings', price: 180, description: 'Deep-fried battered onion strings served with dips.', category: 'Fast Food', isVeg: true },

  // Main Course
  { id: 'm1', name: 'Mushroom Paneer Masala', price: 320, description: 'Rich, savory gravy loaded with fresh mushrooms and soft paneer.', category: 'Main Course', isVeg: true },
  { id: 'm2', name: 'Garlic Butter Naan', price: 80, description: 'Soft traditional bread topped with fresh garlic and butter.', category: 'Main Course', isVeg: true },
  { id: 'm3', name: 'Missi Roti', price: 60, description: 'Traditional Indian spiced flatbread.', category: 'Main Course', isVeg: true },
];

export const categories =['Bakery & Desserts', 'Beverages', 'Fast Food', 'Main Course'];