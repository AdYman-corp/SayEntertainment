import React, { useState, useEffect } from 'react';

// Mock data for entertainment news
const mockNews = [
  {
    id: 1,
    title: "Ahmed Helmy Reveals New Film with Mona Zaki",
    subtitle: "A new romantic comedy bringing the stars together for the fifth time",
    category: "Cinema",
    image: "https://images.unsplash.com/photo-1662737802594-3d1cc6892dec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxlbnRlcnRhaW5tZW50JTIwbmV3c3xlbnwwfHx8cHVycGxlfDE3NTM0OTExNjN8MA&ixlib=rb-4.1.0&q=85",
    author: "Sarah Mahmoud",
    date: "January 26, 2025",
    readTime: "3 min read",
    views: "12.5K",
    featured: true
  },
  {
    id: 2,
    title: "Amr Diab Releases New Song 'Qalbi Ma'ak'",
    subtitle: "A new romantic track from the plateau featuring Tarek Madkour",
    category: "Music",
    image: "https://images.unsplash.com/photo-1651155586309-1310d9c6a250?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxjZWxlYnJpdGllcyUyMG11c2ljfGVufDB8fHxwdXJwbGV8MTc1MzQ5MTE3M3ww&ixlib=rb-4.1.0&q=85",
    author: "Ahmed Ali",
    date: "January 25, 2025",
    readTime: "2 min read",
    views: "8.2K",
    featured: true
  },
  {
    id: 3,
    title: "Mai Ezz El Din Starts Filming New Series",
    subtitle: "A new social drama written by Tamer Habib",
    category: "TV",
    image: "https://images.unsplash.com/photo-1659356870699-2c6b511baec9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxlbnRlcnRhaW5tZW50JTIwbmV3c3xlbnwwfHx8cHVycGxlfDE3NTM0OTExNjN8MA&ixlib=rb-4.1.0&q=85",
    author: "Fatma Ahmed",
    date: "January 24, 2025",
    readTime: "4 min read",
    views: "6.8K",
    featured: true
  },
  {
    id: 4,
    title: "Yousra Receives Excellence Award at Cairo Festival",
    subtitle: "Honoring the great star for her distinguished artistic career",
    category: "Celebrities",
    image: "https://images.unsplash.com/photo-1505921544958-26139bde2044?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHw0fHxjZWxlYnJpdGllcyUyMG11c2ljfGVufDB8fHxwdXJwbGV8MTc1MzQ5MTE3M3ww&ixlib=rb-4.1.0&q=85",
    author: "Mohamed Hassan",
    date: "January 23, 2025",
    readTime: "3 min read",
    views: "9.1K",
    featured: false
  },
  {
    id: 5,
    title: "Arabic Music Festival Launches at Opera House",
    subtitle: "Diverse events bringing together Arab music stars",
    category: "Events",
    image: "https://images.unsplash.com/photo-1567928513899-997d98489fbd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxjZWxlYnJpdGllcyUyMG11c2ljfGVufDB8fHxwdXJwbGV8MTc1MzQ5MTE3M3ww&ixlib=rb-4.1.0&q=85",
    author: "Nour El Din",
    date: "January 22, 2025",
    readTime: "5 min read",
    views: "4.7K",
    featured: false
  },
  {
    id: 6,
    title: "Film 'Al Mamar' Achieves Great Success in Theaters",
    subtitle: "Ahmed Ezz's new work tops the box office",
    category: "Cinema",
    image: "https://images.unsplash.com/photo-1649609732631-0c7b63d4ef52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxlbnRlcnRhaW5tZW50JTIwbmV3c3xlbnwwfHx8cHVycGxlfDE3NTM0OTExNjN8MA&ixlib=rb-4.1.0&q=85",
    author: "Reem Salem",
    date: "January 21, 2025",
    readTime: "3 min read",
    views: "15.3K",
    featured: false
  }
];

const trendingNews = [
  {
    id: 7,
    title: "Hassan El Raddad Denies Separation Rumors with Amy Salem",
    category: "Celebrities",
    image: "https://images.unsplash.com/photo-1580687208282-7ff99f6038c2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxlbnRlcnRhaW5tZW50JTIwbmV3c3xlbnwwfHx8cHVycGxlfDE3NTM0OTExNjN8MA&ixlib=rb-4.1.0&q=85",
    views: "18.2K",
    timeAgo: "1 hour ago"
  },
  {
    id: 8,
    title: "Tamer Hosny Prepares for New Concert in El Alamein",
    category: "Music",
    image: "https://images.unsplash.com/photo-1646614871834-07ca6f701ea8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxjZWxlYnJpdGllcyUyMG11c2ljfGVufDB8fHxwdXJwbGV8MTc1MzQ5MTE3M3ww&ixlib=rb-4.1.0&q=85",
    views: "11.7K",
    timeAgo: "3 hours ago"
  },
  {
    id: 9,
    title: "Nelly Karim Joins New Ramadan Series Cast",
    category: "TV",
    image: "https://images.unsplash.com/photo-1564484911601-58effed8d577?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxFZ3lwdGlhbiUyMGVudGVydGFpbm1lbnR8ZW58MHx8fHB1cnBsZXwxNzUzNDkxMTQwfDA&ixlib=rb-4.1.0&q=85",
    views: "9.4K",
    timeAgo: "5 hours ago"
  },
  {
    id: 10,
    title: "El Gouna Festival Announces List of Participating Films",
    category: "Events",
    image: "https://images.unsplash.com/photo-1653806957258-d90d942c0150?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxFZ3lwdGlhbiUyMGVudGVydGFpbm1lbnR8ZW58MHx8fHB1cnBsZXwxNzUzNDkxMTQwfDA&ixlib=rb-4.1.0&q=85",
    views: "7.9K",
    timeAgo: "8 hours ago"
  }
];

const categories = [
  { 
    name: "TV", 
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5l-1 1v2h8v-2l-1-1h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H3V5h18v10z"/>
      </svg>
    ), 
    color: "bg-gradient-to-br from-purple-500 to-purple-700", 
    count: 45 
  },
  { 
    name: "Cinema", 
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
      </svg>
    ), 
    color: "bg-gradient-to-br from-red-500 to-red-700", 
    count: 32 
  },
  { 
    name: "Music", 
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
    ), 
    color: "bg-gradient-to-br from-yellow-500 to-yellow-700", 
    count: 28 
  },
  { 
    name: "Celebrities", 
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ), 
    color: "bg-gradient-to-br from-pink-500 to-pink-700", 
    count: 67 
  },
  { 
    name: "Events", 
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
      </svg>
    ), 
    color: "bg-gradient-to-br from-indigo-500 to-indigo-700", 
    count: 23 
  }
];

// SVG Icons
const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const ShareIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const FireIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.28 2.9-.2 4.15-.78 2.01-2.03 3.24-4.01 3.69z"/>
  </svg>
);

// Header Component
const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const navigation = [
    { name: "Home", key: "home" },
    { name: "TV", key: "tv" },
    { name: "Cinema", key: "cinema" },
    { name: "Music", key: "music" },
    { name: "Celebrities", key: "celebrities" },
    { name: "Events", key: "events" },
    { name: "Trending", key: "trending" }
  ];

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchTerm('');
  };

  return (
    <header className="bg-black text-white relative z-50 shadow-2xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group transition-all duration-300 hover:scale-105" 
            onClick={() => setCurrentPage('home')}
          >
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg font-bold text-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-yellow-400/50">
              Say
            </div>
            <div className="text-xl font-bold transition-all duration-300 group-hover:text-yellow-400">
              Entertainment
            </div>
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 group-hover:rotate-12">
              <PlayIcon />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => setCurrentPage(item.key)}
                className={`relative font-semibold transition-all duration-300 hover:text-yellow-400 hover:scale-110 ${
                  currentPage === item.key ? 'text-yellow-400' : 'text-white'
                }`}
              >
                {item.name}
                {currentPage === item.key && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-400 animate-pulse"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Search and Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={toggleSearch}
                className="p-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              >
                <SearchIcon />
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-2xl p-4 transform transition-all duration-300 scale-100">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search entertainment news..."
                    className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                    autoFocus
                  />
                </div>
              )}
            </div>

            <button 
              onClick={() => setCurrentPage('submit')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/50 transform hover:-translate-y-1"
            >
              Submit News
            </button>
            
            <button 
              onClick={() => setCurrentPage('contact')}
              className="border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:scale-105 transform hover:-translate-y-1"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700 animate-slideDown">
            <nav className="flex flex-col space-y-2 mt-4">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setCurrentPage(item.key);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left font-semibold transition-all duration-300 hover:text-yellow-400 hover:translate-x-2 py-2 ${
                    currentPage === item.key ? 'text-yellow-400' : 'text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => {
                  setCurrentPage('submit');
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-lg font-semibold mt-4 transition-all duration-300 hover:scale-105"
              >
                Submit News
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section Component
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-black text-white min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-10000 hover:scale-110"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1649609732631-0c7b63d4ef52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxlbnRlcnRhaW5tZW50JTIwbmV3c3xlbnwwfHx8cHVycGxlfDE3NTM0OTExNjN8MA&ixlib=rb-4.1.0&q=85)`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-purple-900/20 to-black/70" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-400/10 rounded-full animate-ping"></div>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
          Entertainment & Media
          <br />
          <span className="text-yellow-400 animate-pulse">WE MAKE YOUR MARK</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-300">
          SayEntertainment - Your ultimate destination for everything related to Egyptian entertainment, television, cinema, music, and celebrities
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-600">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/50 transform hover:-translate-y-1 group">
            <span className="flex items-center space-x-2">
              <span>Discover News</span>
              <ArrowRightIcon />
            </span>
          </button>
          
          <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:scale-105 transform hover:-translate-y-1">
            Watch Latest
          </button>
        </div>
      </div>
    </section>
  );
};

// Featured News Component
const FeaturedNews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const featuredNews = mockNews.filter(news => news.featured);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
      setIsAnimating(false);
    }, 150);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 animate-fadeInUp">
          Featured News
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slider */}
          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            {featuredNews.map((news, index) => (
              <div
                key={news.id}
                className={`absolute inset-0 transition-all duration-500 transform ${
                  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                  style={{ backgroundImage: `url(${news.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-all duration-500 hover:translate-y-[-4px]">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105">
                      {news.category}
                    </span>
                    <span className="text-gray-300 text-sm flex items-center space-x-1">
                      <ClockIcon />
                      <span>{news.date}</span>
                    </span>
                    <span className="text-gray-300 text-sm flex items-center space-x-1">
                      <EyeIcon />
                      <span>{news.views}</span>
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 transition-all duration-300 hover:text-yellow-400">
                    {news.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6">{news.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-300 text-sm">By {news.author}</span>
                      <span className="text-gray-300 text-sm">• {news.readTime}</span>
                    </div>
                    <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/50 transform hover:-translate-y-1">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:bg-black/70 hover:scale-110"
            >
              <ArrowLeftIcon />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:bg-black/70 hover:scale-110"
            >
              <ArrowRightIcon />
            </button>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredNews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Trending Section Component
const TrendingSection = ({ fullPage = false }) => {
  return (
    <section className={`py-16 ${fullPage ? 'min-h-screen' : ''} bg-white`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 flex items-center space-x-3 animate-fadeInUp">
            <FireIcon />
            <span>Trending Now</span>
          </h2>
          {!fullPage && (
            <button className="text-yellow-600 hover:text-yellow-700 font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <span>View All</span>
              <ArrowRightIcon />
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingNews.map((news, index) => (
            <div 
              key={news.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 transform hover:-translate-y-2 group animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                  #{index + 1}
                </div>
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {news.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-3 text-gray-800 line-clamp-2 transition-colors duration-300 group-hover:text-yellow-600">
                  {news.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center space-x-1">
                    <EyeIcon />
                    <span>{news.views}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <ClockIcon />
                    <span>{news.timeAgo}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Category Section Component
const CategorySection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fadeInUp">
          Browse by Category
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {categories.map((category, index) => (
            <div 
              key={category.name} 
              className={`${category.color} rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group animate-fadeInUp`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-white mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-yellow-200">
                {category.name}
              </h3>
              <p className="text-sm opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                {category.count} articles
              </p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockNews.slice(0, 3).map((news, index) => (
            <div 
              key={news.id} 
              className="bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:bg-gray-700 hover:scale-105 transform hover:-translate-y-2 group animate-fadeInUp"
              style={{ animationDelay: `${(index + 5) * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-yellow-400/20 backdrop-blur-sm rounded-full p-4 hover:bg-yellow-400/30 transition-colors duration-300">
                    <PlayIcon />
                  </div>
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-yellow-400 text-sm font-semibold">{news.category}</span>
                  <span className="text-gray-400 text-sm flex items-center space-x-1">
                    <ClockIcon />
                    <span>{news.date}</span>
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-yellow-400">
                  {news.title}
                </h3>
                <p className="text-gray-300 text-sm">{news.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Newsletter Section Component
const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Successfully subscribed to our newsletter!');
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-black/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fadeInUp">
          Stay Updated with Latest News
        </h2>
        <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto animate-fadeInUp animation-delay-300">
          Subscribe to our newsletter to be the first to know about the latest entertainment news
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4 animate-fadeInUp animation-delay-600">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 text-black border-none rounded-lg focus:outline-none focus:ring-4 focus:ring-black/20 transition-all duration-300 hover:scale-105"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
};

// Footer Component
const Footer = ({ setCurrentPage }) => {
  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-black to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400/5 rounded-full animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg font-bold text-xl transition-all duration-300 group-hover:scale-105">
                Say
              </div>
              <div className="text-xl font-bold">Entertainment</div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 group-hover:rotate-12">
                <PlayIcon />
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              SayEntertainment - Your ultimate destination for everything related to Egyptian entertainment, television, cinema, music, and celebrities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:scale-110 hover:shadow-xl"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Contact', 'Submit News'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => setCurrentPage(link.toLowerCase().replace(' ', ''))}
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <button 
                    onClick={() => setCurrentPage(category.name.toLowerCase())}
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2"
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SayEntertainment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Article Page Component
const ArticlePage = () => {
  const article = mockNews[0];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fadeInUp">
            <div className="relative overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                  <span className="text-white text-sm flex items-center space-x-1">
                    <ClockIcon />
                    <span>{article.date}</span>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                {article.title}
              </h1>
              <h2 className="text-xl text-gray-600 mb-6">{article.subtitle}</h2>
              
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {article.author[0]}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">{article.author}</p>
                  <p className="text-sm text-gray-500">Entertainment Editor</p>
                </div>
                <div className="ml-auto flex items-center space-x-4 text-gray-500">
                  <span className="flex items-center space-x-1">
                    <EyeIcon />
                    <span>{article.views}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <ClockIcon />
                    <span>{article.readTime}</span>
                  </span>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Actor Ahmed Helmy revealed details about his new cinematic project that will bring him together with his wife, actress Mona Zaki, for the fifth time in their shared artistic history. This work comes as part of the romantic comedy series that has characterized the duo.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Helmy indicated in press statements that the film will have a light comedic character with a romantic touch, confirming that the story addresses a contemporary topic that touches on Egyptian society issues in an entertaining and intelligent way.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Filming is scheduled to begin next month, and will star a selection of stars beloved by the Egyptian and Arab public.
                </p>
              </div>
              
              <div className="border-t pt-6 mt-8">
                <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                  <ShareIcon />
                  <span>Share Article</span>
                </h3>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg">
                    📘 Facebook
                  </button>
                  <button className="bg-blue-400 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:scale-105 hover:shadow-lg">
                    🐦 Twitter
                  </button>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-lg">
                    📱 WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Category Page Component
const CategoryPage = ({ category }) => {
  const categoryNews = mockNews.filter(news => news.category === category);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            {category} News
          </h1>
          <p className="text-xl text-gray-600">
            Latest news and updates from the world of {category}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryNews.map((news, index) => (
            <div 
              key={news.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 transform hover:-translate-y-2 group animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-yellow-400/20 backdrop-blur-sm rounded-full p-4 hover:bg-yellow-400/30 transition-colors duration-300">
                    <PlayIcon />
                  </div>
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {news.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center space-x-1">
                    <ClockIcon />
                    <span>{news.date}</span>
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 transition-colors duration-300 group-hover:text-yellow-600">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4">{news.subtitle}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <span>By {news.author}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <EyeIcon />
                      <span>{news.views}</span>
                    </span>
                  </div>
                  <button className="text-yellow-600 hover:text-yellow-700 font-semibold transition-all duration-300 hover:scale-105">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Submit News Page Component
const SubmitNewsPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    email: '',
    name: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('News submitted successfully! It will be reviewed soon.');
    setFormData({ title: '', category: '', content: '', email: '', name: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 animate-fadeInUp">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
              Submit News
            </h1>
            <p className="text-gray-600 mb-8 text-center">
              Share the latest news from the world of Egyptian entertainment
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  News Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="TV">Television</option>
                  <option value="Cinema">Cinema</option>
                  <option value="Music">Music</option>
                  <option value="Celebrities">Celebrities</option>
                  <option value="Events">Events</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  News Content
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
              >
                {isSubmitting ? 'Submitting News...' : 'Submit News'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 animate-fadeInUp">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center">
              About Us
            </h1>
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SayEntertainment is an extension of the Say.eg group, a platform specialized in Egyptian entertainment and art news. We strive to provide high-quality entertainment content that covers all aspects of artistic life in Egypt.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To be the first destination for Egyptian and Arab audiences to get the latest entertainment and art news, and to be a bridge between stars and the public.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To provide reliable and comprehensive entertainment content that covers the world of television, cinema, music and celebrities in Egypt, focusing on quality and credibility.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Offer</h2>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
                <li>Egyptian television and series news</li>
                <li>Latest Egyptian and Arab cinema news</li>
                <li>Music and singer news</li>
                <li>Celebrity and star news</li>
                <li>Coverage of artistic events and festivals</li>
                <li>Exclusive interviews with stars</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Message sent successfully! We will contact you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fadeInUp">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              We are here to listen to you and answer your questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-fadeInUp">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-fadeInUp animation-delay-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black text-xl transition-all duration-300 group-hover:scale-110">
                    📧
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">Email Address</h3>
                    <p className="text-gray-600">info@sayentertainment.com</p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black text-xl transition-all duration-300 group-hover:scale-110">
                    📱
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">Phone Number</h3>
                    <p className="text-gray-600">+20 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black text-xl transition-all duration-300 group-hover:scale-110">
                    📍
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">Cairo, Egypt</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Follow Us on Social Media
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-blue-700 hover:scale-110">
                    📘
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-pink-700 hover:scale-110">
                    📱
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-blue-500 hover:scale-110">
                    🐦
                  </a>
                  <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-red-700 hover:scale-110">
                    📺
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export all components
export default {
  Header,
  Hero,
  FeaturedNews,
  TrendingSection,
  CategorySection,
  NewsletterSection,
  Footer,
  ArticlePage,
  CategoryPage,
  SubmitNewsPage,
  AboutPage,
  ContactPage
};