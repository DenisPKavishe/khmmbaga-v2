"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

const tools = [
  {
    id: 1,
    image: '/images/brush.jpeg',
    name: 'Painting Brush',
    description: 'High-quality painting brush for smooth finish, ideal for all paint types.',
    price: 450000,
    delay: 100,
  },
  {
    id: 2,
    image: '/images/roller.jpeg',
    name: 'Painting Rollers',
    description: 'Professional painting rollers, easy to use, perfect for large surface areas.',
    price: 850000,
    delay: 200,
  },
  {
    id: 3,
    image: '/images/hammer.jpeg',
    name: 'Hammer',
    description: 'Heavy-duty hammer with ergonomic handle, ideal for construction work.',
    price: 320000,
    delay: 300,
  },
  {
    id: 4,
    image: '/images/mabati.jpeg',
    name: 'Roof Sheets (Mabati)',
    description: 'High-quality galvanized iron sheets, durable and weather-resistant.',
    price: 1250000,
    delay: 400,
  },
  {
    id: 5,
    image: '/images/bindingwire.jpeg',
    name: 'Binding Wire',
    description: 'Strong and flexible binding wire for construction reinforcement.',
    price: 680000,
    delay: 500,
  },
  {
    id: 6,
    image: '/images/bawaba&kufuli.jpeg',
    name: 'Hinges & Locks',
    description: 'Premium quality hinges and locks for doors and windows.',
    price: 520000,
    delay: 600,
  },
  {
    id: 7,
    image: '/images/cements.jpeg',
    name: 'Cements',
    description: 'Quality Portland cement for all construction needs.',
    price: 520000,
    delay: 600,
  },
  {
    id: 8,
    image: '/images/nondo.jpeg',
    name: 'Steel Bars/Rebars',
    description: 'High-tensile steel bars for concrete reinforcement.',
    price: 520000,
    delay: 600,
  },
  {
    id: 9,
    image: '/images/pliers.jpeg',
    name: 'Pliers',
    description: 'Durable pliers with comfortable grip for various applications.',
    price: 520000,
    delay: 600,
  },
  {
    id: 10,
    image: '/images/misumari.jpeg',
    name: 'Nails (Misumari)',
    description: 'Assorted sizes of high-quality construction nails.',
    price: 520000,
    delay: 600,
  },
  {
    id: 11,
    image: '/images/screws.jpeg',
    name: 'Screws',
    description: 'Stainless steel screws for durable fastening.',
    price: 520000,
    delay: 600,
  },
  {
    id: 12,
    image: '/images/tapemeasure.jpeg',
    name: 'Tape Measure',
    description: 'Professional grade tape measure with metric and imperial units.',
    price: 520000,
    delay: 600,
  },
  {
    id: 13,
    image: '/images/weatherguard.jpeg',
    name: 'Weather Guard',
    description: 'Protective coating for exterior surfaces, weather-resistant.',
    price: 520000,
    delay: 600,
  },
  {
    id: 14,
    image: '/images/pva.jpeg',
    name: 'PVA',
    description: 'Premium quality PVA adhesive for various applications.',
    price: 520000,
    delay: 600,
  },
  {
    id: 15,
    image: '/images/2kpaints.jpeg',
    name: '2K Paints',
    description: 'High-durability 2K paint system for industrial applications.',
    price: 520000,
    delay: 600,
  },
  {
    id: 16,
    image: '/images/solvent.jpeg',
    name: 'Solvent',
    description: 'Industrial grade solvent for paint thinning and cleaning.',
    price: 520000,
    delay: 600,
  },
  {
    id: 17,
    image: '/images/hardener.jpeg',
    name: 'Hardener',
    description: 'Paint hardener for 2K paint systems, ensures durability.',
    price: 520000,
    delay: 600,
  },
  {
    id: 18,
    image: '/images/masking tape.jpeg',
    name: 'Masking Tape',
    description: 'Professional masking tape for clean paint lines.',
    price: 520000,
    delay: 600,
  },
  {
    id: 19,
    image: '/images/skimmingPutty.jpeg',
    name: 'Skimming Putty',
    description: 'Smooth finishing putty for wall surfaces.',
    price: 520000,
    delay: 600,
  },
  {
    id: 20,
    image: '/images/white cement.jpeg',
    name: 'White Cement',
    description: 'Premium white cement for decorative finishes.',
    price: 520000,
    delay: 600,
  },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface PopupProps {
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
  onClose: () => void;
}

function PopupNotification({ type, title, message, onClose }: PopupProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <i className="fas fa-check-circle text-green-500 text-5xl"></i>;
      case 'error':
        return <i className="fas fa-exclamation-circle text-red-500 text-5xl"></i>;
      default:
        return <i className="fas fa-info-circle text-blue-500 text-5xl"></i>;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'border-green-500 bg-green-50';
      case 'error':
        return 'border-red-500 bg-red-50';
      default:
        return 'border-blue-500 bg-blue-50';
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className={`bg-white rounded-2xl p-6 max-w-md mx-4 text-center border-t-8 ${getBgColor()} transform animate-scale-up shadow-2xl`}>
        <div className="mb-4">
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function ToolsGrid() {
  const [quantities, setQuantities] = useState<number[]>(new Array(tools.length).fill(0));
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerLocation, setCustomerLocation] = useState('');
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [popup, setPopup] = useState<{ type: 'success' | 'error' | 'info'; title: string; message: string } | null>(null);

  const showPopup = (type: 'success' | 'error' | 'info', title: string, message: string) => {
    setPopup({ type, title, message });
  };

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-tool');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatCurrency = (amount: number) => {
    return 'TSh ' + amount.toLocaleString();
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 0) return;
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantity;
    setQuantities(newQuantities);
  };

  const addToCart = (index: number) => {
    const quantity = quantities[index];
    if (quantity === 0) {
      showPopup('error', 'Cannot Add to Cart', 'Please select at least 1 item before adding to cart.');
      return;
    }
    
    const tool = tools[index];
    const existingItem = cart.find(item => item.id === tool.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === tool.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
      showPopup('success', 'Cart Updated!', `Added ${quantity} more ${tool.name} to your cart.`);
    } else {
      setCart([...cart, {
        id: tool.id,
        name: tool.name,
        price: tool.price,
        quantity: quantity
      }]);
      showPopup('success', 'Added to Cart!', `${quantity} x ${tool.name} has been added to your cart.`);
    }
    
    // Reset quantity for this item
    const newQuantities = [...quantities];
    newQuantities[index] = 0;
    setQuantities(newQuantities);
  };

  const removeFromCart = (id: number) => {
    const item = cart.find(i => i.id === id);
    setCart(cart.filter(item => item.id !== id));
    showPopup('info', 'Item Removed', `${item?.name} has been removed from your cart.`);
  };

  const updateCartQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const sendWhatsAppOrder = () => {
    if (cart.length === 0) {
      showPopup('error', 'Empty Cart', 'Your cart is empty. Please add items before ordering.');
      return;
    }
    
    if (!customerName || !customerPhone) {
      showPopup('error', 'Missing Information', 'Please enter your name and phone number.');
      return;
    }
    
    // Format order message
    let orderMessage = `🛒 *NEW ORDER FROM KH MMBAGA HARDWARE* 🛒\n\n`;
    orderMessage += `*Customer Details:*\n`;
    orderMessage += `👤 Name: ${customerName}\n`;
    orderMessage += `📞 Phone: ${customerPhone}\n`;
    orderMessage += `📍 Location: ${customerLocation || 'Not specified'}\n\n`;
    orderMessage += `*Order Items:*\n`;
    orderMessage += `────────────────────\n`;
    
    cart.forEach((item, idx) => {
      const total = item.price * item.quantity;
      orderMessage += `${idx + 1}. ${item.name}\n`;
      orderMessage += `   Quantity: ${item.quantity} pcs\n`;
      orderMessage += `   Price: ${formatCurrency(item.price)} each\n`;
      orderMessage += `   Total: ${formatCurrency(total)}\n`;
      orderMessage += `────────────────────\n`;
    });
    
    orderMessage += `\n*GRAND TOTAL: ${formatCurrency(getCartTotal())}*\n\n`;
    orderMessage += `📦 *Delivery Requested:* ${customerLocation ? 'Yes' : 'To be confirmed'}\n`;
    orderMessage += `⏰ *Order Date:* ${new Date().toLocaleString()}\n\n`;
    orderMessage += `✅ Please confirm order and provide delivery timeline.\n`;
    orderMessage += `Thank you for choosing KH MMBAGA! 🏗️`;
    
    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(orderMessage);
    const whatsappNumber = '255766689136';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success popup
    showPopup('success', 'Order Sent!', 'Your order has been sent via WhatsApp. Our team will contact you shortly.');
    
    // Reset cart and form
    setCart([]);
    setCustomerName('');
    setCustomerPhone('');
    setCustomerLocation('');
    setShowCheckoutForm(false);
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Popup Notification */}
      {popup && (
        <PopupNotification
          type={popup.type}
          title={popup.title}
          message={popup.message}
          onClose={() => setPopup(null)}
        />
      )}

      {/* Cart Button - Floating */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
      >
        <div className="relative">
          <i className="fas fa-shopping-cart text-2xl"></i>
          {getCartItemCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
              {getCartItemCount()}
            </span>
          )}
        </div>
      </button>

      {/* Cart Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              <i className="fas fa-shopping-cart text-orange-500 mr-2"></i>
              Your Cart
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <i className="fas fa-shopping-basket text-6xl text-gray-300 mb-4"></i>
              <p className="text-gray-500">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 text-orange-500 hover:text-orange-600 font-semibold"
              >
                Continue Shopping →
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="border-b border-gray-100 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600 text-sm transition-colors"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"
                        >
                          -
                        </button>
                        <span className="font-semibold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-bold text-orange-600">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-gray-800">Total:</span>
                  <span className="text-2xl font-bold text-orange-600">
                    {formatCurrency(getCartTotal())}
                  </span>
                </div>
                
                {!showCheckoutForm ? (
                  <button
                    onClick={() => setShowCheckoutForm(true)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all duration-300"
                  >
                    Proceed to Checkout →
                  </button>
                ) : (
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 transition-all"
                    />
                    <input
                      type="tel"
                      placeholder="Your Phone Number *"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Delivery Location (Optional)"
                      value={customerLocation}
                      onChange={(e) => setCustomerLocation(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 transition-all"
                    />
                    <button
                      onClick={sendWhatsAppOrder}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <i className="fab fa-whatsapp text-xl"></i>
                      Send Order via WhatsApp
                    </button>
                    <button
                      onClick={() => setShowCheckoutForm(false)}
                      className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 rounded-xl transition-all duration-300"
                    >
                      Back to Cart
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main Tools Grid */}
      <section id="tools-section" className="tools-split-bg w-full py-20 md:py-28 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="reveal-tool transition-all duration-700">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-xs border-b-2 border-orange-500 inline-block pb-1">
                <i className="fas fa-tools mr-1"></i> Premium Equipment
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-4 mb-5">
                Construction <span className="text-orange-500">Hardware & Tools</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 text-lg">Select the quantity you need and add to cart. Bulk discounts available for large projects.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div
                key={tool.id}
                className="tool-card bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 reveal-tool transition-all duration-700"
                style={{ transitionDelay: `${tool.delay}ms` }}
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    fill
                    className="object-fill transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{tool.name}</h3>
                    <span className="text-orange-600 font-bold text-lg">{formatCurrency(tool.price)}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{tool.description}</p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <span className="text-gray-700 font-medium">Quantity:</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(index, quantities[index] - 1)}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition-all"
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-semibold text-lg">{quantities[index]}</span>
                      <button
                        onClick={() => updateQuantity(index, quantities[index] + 1)}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition-all"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-2">
                    <span className="text-sm text-gray-500">Total:</span>
                    <span className="font-bold text-orange-600">{formatCurrency(tool.price * quantities[index])}</span>
                  </div>
                  <button
                    onClick={() => addToCart(index)}
                    className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <i className="fas fa-cart-plus"></i> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .tools-split-bg {
          position: relative;
          background: white;
        }
        .tools-split-bg::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center;
          z-index: 0;
          opacity: 0.1;
        }
        @media (max-width: 1024px) {
          .tools-split-bg::before {
            width: 100%;
            opacity: 0.05;
          }
        }
        .tools-split-bg > :not(style) {
          position: relative;
          z-index: 2;
        }
        
        .tool-card {
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        .tool-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.2);
        }
        
        .reveal-tool {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-tool.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        .animate-scale-up {
          animation: scale-up 0.3s ease-out forwards;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        .animate-pulse {
          animation: pulse 1s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}