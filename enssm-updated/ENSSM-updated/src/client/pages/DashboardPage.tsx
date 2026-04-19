import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, Bus, CalendarDays, GraduationCap as Classes, ExternalLink, LogOut, Sparkles, ArrowRight, User } from 'lucide-react';

const platforms = [
  {
    id: 'elibrary',
    title: 'E-Library',
    arabicTitle: 'المكتبة الإلكترونية',
    description: 'Access thousands of academic books, research papers, and educational resources tailored for deaf education specialists.',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    bgGlow: 'bg-blue-500/20',
    borderColor: 'border-blue-400/30',
    hoverBorder: 'hover:border-blue-400/60',
    link: '#', // Replace with real link
    badge: 'Academic Resources',
    stats: '10,000+ Books',
  },
  {
    id: 'transportation',
    title: 'Transportation',
    arabicTitle: 'النقل الجامعي',
    description: 'View bus schedules, routes, and real-time transportation updates for getting to and from the ENS-SM campus.',
    icon: Bus,
    color: 'from-orange-500 to-amber-500',
    bgGlow: 'bg-orange-500/20',
    borderColor: 'border-orange-400/30',
    hoverBorder: 'hover:border-orange-400/60',
    link: '#', // Replace with real link
    badge: 'Campus Mobility',
    stats: '12 Routes',
  },
  {
    id: 'calendar',
    title: 'Event Calendar',
    arabicTitle: 'التقويم والفعاليات',
    description: 'Stay up to date with academic events, seminars, workshops, graduation ceremonies, and all campus activities.',
    icon: CalendarDays,
    color: 'from-emerald-500 to-teal-500',
    bgGlow: 'bg-emerald-500/20',
    borderColor: 'border-emerald-400/30',
    hoverBorder: 'hover:border-emerald-400/60',
    link: '#', // Replace with real link
    badge: 'Academic Schedule',
    stats: 'Live Updates',
  },
  {
    id: 'classes',
    title: 'Classes',
    arabicTitle: 'الفصول الدراسية',
    description: 'Access your class schedules, lecture materials, assignments, and connect with professors and fellow students.',
    icon: Classes,
    color: 'from-purple-500 to-pink-500',
    bgGlow: 'bg-purple-500/20',
    borderColor: 'border-purple-400/30',
    hoverBorder: 'hover:border-purple-400/60',
    link: '#', // Replace with real link
    badge: 'Learning Platform',
    stats: '14 Programs',
  },
];

export default function DashboardPage() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all">
              <GraduationCap className="w-6 h-6 text-cyan-300" />
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-sm leading-none">ENS-SM</p>
              <p className="text-white/50 text-xs">Student Portal</p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <User className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white/80 text-sm font-medium">Student</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/10 hover:bg-red-500/20 border border-white/20 hover:border-red-400/40 text-white/70 hover:text-red-300 rounded-full px-4 py-2 text-sm transition-all duration-300"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome hero */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 px-5 py-2 rounded-full text-sm font-medium border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            Welcome to your ENS-SM Student Portal
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Your Learning
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mt-1">
              Hub
            </span>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Access all your academic platforms in one place. Click any card below to get started.
          </p>
        </div>

        {/* 4 Platform Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            const isHovered = hoveredId === platform.id;

            return (
              <a
                key={platform.id}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredId(platform.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative bg-white/10 backdrop-blur-xl rounded-3xl border ${platform.borderColor} ${platform.hoverBorder} shadow-xl hover:shadow-2xl transition-all duration-400 overflow-hidden cursor-pointer hover:scale-[1.03] hover:-translate-y-1 block`}
              >
                {/* Glow on hover */}
                <div className={`absolute inset-0 ${platform.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl`} />

                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${platform.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

                <div className="relative p-8">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">{platform.badge}</span>
                    <span className={`text-xs font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>{platform.stats}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <div className="mb-3">
                    <p className="text-white/40 text-xs mb-0.5">{platform.arabicTitle}</p>
                    <h2 className="text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                      {platform.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {platform.description}
                  </p>

                  {/* CTA */}
                  <div className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}>
                    <span>Open Platform</span>
                    <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="text-center mt-14">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} ENS-SM — Higher School for Teachers of Deaf and Mute, Algeria
          </p>
          <Link to="/" className="text-white/30 hover:text-white/60 text-sm transition-colors mt-1 inline-block">
            ← Back to Main Website
          </Link>
        </div>
      </main>
    </div>
  );
}
