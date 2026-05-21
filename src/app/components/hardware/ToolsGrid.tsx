"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

const tools = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1690719744562-249937b9c03a?q=80&w=1170&auto=format&fit=crop',
    name: 'Portable Concrete Mixer',
    description: '350L capacity, electric motor, heavy-duty drum, ideal for small to medium construction sites.',
    price: 450000,
    delay: 100,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1665631153909-ae7a1b6c137f?q=80&w=687&auto=format&fit=crop',
    name: 'Heavy Duty Jackhammer',
    description: '1500W electric, anti-vibration system, includes 3 chisel bits. Perfect for demolition work.',
    price: 850000,
    delay: 200,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1708201267130-46d12abe74cf?q=80&w=387&auto=format&fit=crop',
    name: 'Inverter Welding Machine',
    description: '200A output, digital display, portable design. Includes electrode holder & cables.',
    price: 320000,
    delay: 300,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    name: 'Scaffolding Set (Complete)',
    description: 'Complete set: frames, braces, planks, casters. 6m height capacity. Galvanized steel.',
    price: 1250000,
    delay: 400,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    name: 'Power Trowel / Floor Finisher',
    description: '36-inch diameter, petrol engine, adjustable pitch, perfect for concrete floor finishing.',
    price: 680000,
    delay: 500,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1562601622-8ec34f65aed5?q=80&w=735&auto=format&fit=crop',
    name: 'Rotary Laser Level Kit',
    description: 'Self-leveling, 360° rotation, includes receiver and tripod. High accuracy for grading.',
    price: 520000,
    delay: 600,
  },
];

export default function ToolsGrid() {
  const [quantities, setQuantities] = useState<number[]>(new Array(tools.length).fill(0));

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

  const handleSingleOrder = (index: number) => {
    const quantity = quantities[index];
    if (quantity === 0) {
      alert('⚠️ Please select at least 1 item before ordering.');
      return;
    }
    const tool = tools[index];
    alert(`✅ Order placed!\n\nItem: ${tool.name}\nQuantity: ${quantity}\nTotal: ${formatCurrency(tool.price * quantity)}\n\nOur team will contact you within 1 hour to confirm delivery. Thank you!`);
  };

  const handleBulkOrder = () => {
    const orderItems: string[] = [];
    let grandTotal = 0;
    
    tools.forEach((tool, idx) => {
      const quantity = quantities[idx];
      if (quantity > 0) {
        const total = tool.price * quantity;
        grandTotal += total;
        orderItems.push(`${tool.name}: ${quantity} pcs (${formatCurrency(total)})`);
      }
    });
    
    if (orderItems.length === 0) {
      alert('⚠️ No items selected.');
      return;
    }
    
    alert(`📦 BULK ORDER\n\n${orderItems.join('\n')}\n\n────────────────────\nGRAND TOTAL: ${formatCurrency(grandTotal)}\n\n✅ Our logistics team will contact you within 24h. WhatsApp +255 784 567 890`);
  };

  return (
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
            <p className="text-gray-600 text-lg">Select the quantity you need and place your order. Bulk discounts available for large projects.</p>
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
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{tool.name}</h3>
                  <span className="text-orange-600 font-bold text-lg">{formatCurrency(tool.price)}</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">{tool.description}</p>
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
                  onClick={() => handleSingleOrder(index)}
                  className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <i className="fas fa-shopping-cart"></i> Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 shadow-lg">
          <div className="reveal-tool transition-all duration-700" style={{ transitionDelay: '700ms' }}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <i className="fas fa-shopping-basket text-orange-500"></i> Bulk Order Summary
                </h3>
                <p className="text-gray-600 text-sm mt-1">Review your selected items below or proceed to order all at once.</p>
              </div>
              <button
                onClick={handleBulkOrder}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center gap-3"
              >
                <i className="fas fa-truck"></i> Place Bulk Order
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

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
      `}</style>
    </section>
  );
}