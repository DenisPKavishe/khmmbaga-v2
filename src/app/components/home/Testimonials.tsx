"use client";

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    rating: 5,
    text: "KH MMBAGA turned our commercial vision into reality ahead of schedule. Their attention to detail and proactive communication made the entire project a pleasure. I would not trust anyone else.",
    name: "Kaniki",
    title: "Director, Mwangi Holdings",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    delay: 100,
  },
  {
    rating: 5,
    text: "From architecture to handover, the KH MMBAGA team was professional, honest, and genuinely talented. Our warehouse facility exceeded every expectation we had set going in.",
    name: "Allan",
    title: "CEO, Saleh Logistics",
    image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=120&q=80",
    delay: 200,
  },
  {
    rating: 4.5,
    text: "The renovation of our villa was handled with extraordinary care and craftsmanship. KH MMBAGA's team respected our home and delivered a result we are incredibly proud of.",
    name: "Kali",
    title: "Homeowner, Arusha",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
    delay: 300,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    return stars;
  };

  return (
    <section
      className="section-bg-alt py-28"
      style={
        {
          '--bg-img':
            "url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1600&q=80')",
        } as React.CSSProperties
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p
            className={`text-primary uppercase tracking-[4px] text-xs font-bold mb-3 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={ref}
          >
            Client Stories
          </p>
          <h2
            className={`font-heading text-dark text-4xl lg:text-5xl font-black mb-4 orange-line-center transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            What Our Clients Say
          </h2>
          <p
            className={`text-gray-500 max-w-xl mx-auto text-base transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our greatest achievement is the trust our clients place in us and the praise they
            share when we deliver beyond expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${testimonial.delay}ms` }}
            >
              <div className="flex gap-1 text-primary text-sm mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-500 italic text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-dark text-sm">{testimonial.name}</div>
                  {/* <div className="text-primary text-xs font-medium">{testimonial.title}</div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonial-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(244, 162, 97, 0.2);
        }
      `}</style>
    </section>
  );
}