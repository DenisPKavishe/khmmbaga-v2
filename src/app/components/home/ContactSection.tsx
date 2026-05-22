"use client";

import { useInView } from 'react-intersection-observer';

export default function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="contact"
      className="section-bg py-28"
      style={
        {
          '--bg-img':
            "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80')",
        } as React.CSSProperties
      }
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div>
          <p
            className={`text-primary uppercase tracking-[4px] text-xs font-bold mb-3 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={ref}
          >
            Start A Conversation
          </p>
          <h2
            className={`font-heading text-dark text-4xl lg:text-5xl font-black leading-tight mb-6 orange-line-center transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Let's Build Something<br />Remarkable Together.
          </h2>
          <p
            className={`text-gray-500 text-base leading-relaxed mb-12 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Whether you have a fully fleshed blueprint or just a spark of an idea, the KH MMBAGA
            team is ready to listen, advise, and deliver. Great projects start with a single
            conversation make yours today.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: 'fas fa-map-marker-alt', label: 'Address', value: 'P.O.Box 999, Arusha, Tanzania' },
              { icon: 'fas fa-phone', label: 'Phone', value: '+255 766 689 136' },
              { icon: 'fas fa-envelope', label: 'Email', value: 'khmmbagacompanyltd' },
              { icon: 'fas fa-clock', label: 'Working Hours', value: 'Mon – Sat: 7:00 AM – 6:00 PM' },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 hover:bg-primary/20 transition-colors duration-300">
                  <i className={`${item.icon} text-primary text-xl`}></i>
                </div>
                <div className="text-dark font-semibold text-sm mb-1">{item.label}</div>
                <div className="text-gray-500 text-sm">{item.value}</div>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 transition-all duration-1000 delay-400 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a
              href="tel:+255766689136"
              className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base hover:scale-105 transition-all duration-300"
            >
              <i className="fas fa-phone-alt"></i>
              Call Us Now
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}