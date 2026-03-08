import { CartItem } from '../context/CartContext';
import { formatCurrency } from './formatCurrency';

export const generateWhatsAppLink = (cart: CartItem[], total: number) => {
  // Updated with The Bakeology's WhatsApp Number
  const phone = "919749976541";
  let message = "Hello, I would like to order from The Bakeology:\n\n";
  
  cart.forEach(item => {
    message += `${item.name} x${item.quantity}\n`;
  });
  
  message += `\nTotal: ${formatCurrency(total)}`;
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};