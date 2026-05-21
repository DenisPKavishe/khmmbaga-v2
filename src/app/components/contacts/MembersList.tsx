"use client";

import Image from 'next/image';

type TeamMember = {
  id: number;
  name: string;
  title: string;
  description: string;
  whatsapp: string;
  avatar: string;
  cover: string;
  stats: { stars: string; followers: string; projects: string };
};

const team: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "Chief Executive Officer",
    description: "Visionary leader with 12+ years driving business growth across East Africa and beyond.",
    whatsapp: "255700000001",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&fit=max",
    cover: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=600&fit=max",
    stats: { stars: "2k", followers: "10k", projects: "15" },
  },
  {
    id: 2,
    name: "James Okonkwo",
    title: "Head of Engineering",
    description: "Full-stack architect passionate about scalable systems and clean, maintainable code.",
    whatsapp: "255700000002",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=max",
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&fit=max",
    stats: { stars: "4k", followers: "8k", projects: "32" },
  },
  {
    id: 3,
    name: "Amara Diallo",
    title: "Lead UX Designer",
    description: "Crafting intuitive digital experiences that delight users and solve real-world problems.",
    whatsapp: "255700000003",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&fit=max",
    cover: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&fit=max",
    stats: { stars: "3k", followers: "12k", projects: "28" },
  },
  {
    id: 4,
    name: "Daniel Mwangi",
    title: "Marketing Director",
    description: "Brand storyteller turning strategy into growth. Expert in digital and content marketing.",
    whatsapp: "255700000004",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=max",
    cover: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&fit=max",
    stats: { stars: "1k", followers: "6k", projects: "20" },
  },
  {
    id: 5,
    name: "Zara Kimani",
    title: "Business Analyst",
    description: "Translating complex data into actionable insights that guide smarter business decisions.",
    whatsapp: "255700000005",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=max",
    cover: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&fit=max",
    stats: { stars: "2k", followers: "9k", projects: "18" },
  },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ProfileCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white shadow-xl rounded-lg text-gray-900 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Cover image with opacity layers */}
      <div className="relative h-32 overflow-hidden rounded-t-lg">
        <Image
          className="object-cover object-top opacity-40"
          src={member.cover}
          alt="cover"
          fill
        />
        <div className="absolute inset-0 bg-white opacity-60" />
      </div>

      {/* Avatar */}
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <Image
          className="object-cover object-center"
          src={member.avatar}
          alt={member.name}
          fill
        />
      </div>

      {/* Name, title, description */}
      <div className="text-center mt-2 px-5">
        <h2 className="font-semibold text-base">{member.name}</h2>
        <p className="text-orange-500 text-xs font-semibold mt-0.5">{member.title}</p>
        <p className="text-gray-500 text-xs mt-2 leading-relaxed">{member.description}</p>
      </div>

      {/* WhatsApp button */}
      <div className="p-4 border-t mx-8 mt-2 mb-2">
        <a
          href={`https://wa.me/${member.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 rounded-full bg-[#25d366] hover:bg-[#1ebe5d] hover:shadow-lg font-semibold text-white text-sm px-6 py-2 transition-all duration-200"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function TeamCards() {
  return (
    <section className="py-16 px-4">
      {/* Section header */}
      <div className="text-center mb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
          The people behind the work
        </p>
        <h1 className="text-4xl font-bold text-orange-500">Meet Our Team</h1>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          Passionate professionals committed to delivering excellence and driving meaningful impact every single day.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {team.map((member) => (
          <ProfileCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}