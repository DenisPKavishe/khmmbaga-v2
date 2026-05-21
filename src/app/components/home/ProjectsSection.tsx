"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80',
    category: 'Residential',
    categoryColor: 'bg-primary',
    title: 'Skyline Condominium',
    location: 'Arusha, Tanzania',
    date: 'March 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
    category: 'Commercial',
    categoryColor: 'bg-secondary',
    title: 'Metro Office Tower',
    location: 'Dar es Salaam, TZ',
    date: 'November 2023',
  },
  {
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=700&q=80',
    category: 'Industrial',
    categoryColor: 'bg-dark',
    title: 'Greenfield Warehouse Hub',
    location: 'Mwanza, Tanzania',
    date: 'August 2023',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80',
    category: 'Residential',
    categoryColor: 'bg-primary',
    title: 'Serengeti Villa Estate',
    location: 'Arusha, Tanzania',
    date: 'June 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
    category: 'Civil Engineering',
    categoryColor: 'bg-secondary',
    title: 'Kilimanjaro Bridge & Road',
    location: 'Kilimanjaro Region, TZ',
    date: 'January 2024',
    wide: true,
  },
];

export default function ProjectsSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="projects"
      className="section-bg py-28"
      style={
        {
          '--bg-img':
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80')",
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
            Our Portfolio
          </p>
          <h2
            className={`font-heading text-dark text-4xl lg:text-5xl font-black mb-4 orange-line-center transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Latest Projects
          </h2>
          <p
            className={`text-gray-500 max-w-xl mx-auto text-base leading-relaxed transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            A glimpse into the work that defines us projects built with purpose, precision, and
            pride.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card group rounded-2xl overflow-hidden shadow-md relative cursor-pointer transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${project.wide ? 'lg:col-span-2' : ''}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-600 group-hover:scale-105"
                />
              </div>
              <div className="project-overlay absolute inset-0 opacity-80"></div>
              <span
                className={`absolute top-4 left-4 ${project.categoryColor} text-white text-xs px-3 py-1 rounded-full font-semibold z-10`}
              >
                {project.category}
              </span>
              <div className="project-info absolute bottom-4 left-4 right-4 text-white z-10">
                <h3 className="font-heading text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-gray-300 text-xs flex items-center gap-1">
                  <i className="fas fa-map-marker-alt text-primary"></i> {project.location}
                </p>
                <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                  <i className="fas fa-calendar text-primary"></i> {project.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects" className="btn-dark px-8 py-3.5 rounded-full font-semibold text-sm inline-block">
            View All Projects →
          </Link>
        </div>
      </div>

      <style jsx>{`
        .project-card {
          overflow: hidden;
        }
        .project-overlay {
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.85) 0%,
            rgba(0, 0, 0, 0.1) 60%,
            transparent 100%
          );
          transition: opacity 0.4s ease;
        }
        .project-info {
          transform: translateY(10px);
          transition: transform 0.4s ease;
        }
        .project-card:hover .project-info {
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}