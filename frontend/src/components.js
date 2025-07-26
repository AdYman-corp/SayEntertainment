import React, { useState, useEffect } from 'react';

// Enhanced Mock Data for Egyptian Entertainment
const mockNews = [
  {
    id: 1,
    title: "Ahmed Helmy & Mona Zaki Team Up for Fifth Romantic Comedy",
    subtitle: "The beloved Egyptian duo returns with their most anticipated collaboration yet",
    category: "Cinema",
    image: "https://images.unsplash.com/photo-1662737802594-3d1cc6892dec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxlbnRlcnRhaW5tZW50JTIwbmV3c3xlbnwwfHx8cHVycGxlfDE3NTM0OTExNjN8MA&ixlib=rb-4.1.0&q=85",
    author: "Sarah Mahmoud",
    date: "January 26, 2025",
    readTime: "3 min read",
    views: "12.5K",
    featured: true,
    trending: true,
    tags: ["Egyptian Cinema", "Comedy", "Romance"]
  },
  {
    id: 2,
    title: "Amr Diab's New Album 'Sahran' Breaks Streaming Records",
    subtitle: "The King of Arabic Music delivers another chart-topping masterpiece",
    category: "Music",
    image: "https://images.unsplash.com/photo-1651155586309-1310d9c6a250?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxjZWxlYnJpdGllcyUyMG11c2ljfGVufDB8fHxwdXJwbGV8MTc1MzQ5MTE3M3ww&ixlib=rb-4.1.0&q=85",
    author: "Ahmed Ali",
    date: "January 25, 2025",
    readTime: "4 min read",
    views: "18.2K",
    featured: true,
    trending: true,
    tags: ["Arabic Music", "Pop", "Albums"]
  },
  {
    id: 3,
    title: "Mai Ezz El Din Stars in New Ramadan Drama Series",
    subtitle: "The acclaimed actress takes on her most challenging role yet",
    category: "TV",
    image: "https://images.unsplash.com/photo-1659356870699-2c6b511baec9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxlbnRlcnRhaW5tZW50JTIwbmV3c3xlbnwwfHx8cHVycGxlfDE3NTM0OTExNjN8MA&ixlib=rb-4.1.0&q=85",
    author: "Fatma Ahmed",
    date: "January 24, 2025",
    readTime: "5 min read",
    views: "9.8K",
    featured: true,
    trending: false,
    tags: ["TV Series", "Drama", "Ramadan"]
  },
  {
    id: 4,
    title: "Yousra Receives Lifetime Achievement Award at Cairo Film Festival",
    subtitle: "The legendary actress honored for her outstanding contribution to cinema",
    category: "Celebrities",
    image: "https://images.unsplash.com/photo-1505921544958-26139bde2044?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHw0fHxjZWxlYnJpdGllcyUyMG11c2ljfGVufDB8fHxwdXJwbGV8MTc1MzQ5MTE3M3ww&ixlib=rb-4.1.0&q=85",
    author: "Mohamed Hassan",
    date: "January 23, 2025",
    readTime: "6 min read",
    views: "15.4K",
    featured: false,
    trending: true,
    tags: ["Awards", "Cinema", "Egyptian Stars"]
  },
  {
    id: 5,
    title: "El Gouna Film Festival Announces Star-Studded 2025 Lineup",
    subtitle: "International and regional films set to dazzle audiences this fall",
    category: "Events",
    image: "https://images.unsplash.com/photo-1567928513899-997d98489fbd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxjZWxlYnJpdGllcyUyMG11c2ljfGVufDB8fHxwdXJwbGV8MTc1MzQ5MTE3M3ww&ixlib=rb-4.1.0&q=85",
    author: "Nour El Din",
    date: "January 22, 2025",
    readTime: "7 min read",
    views: "11.2K",
    featured: false,
    trending: true,
    tags: ["Film Festival", "Events", "Cinema"]
  },
  {
    id: 6,
    title: "Tamer Hosny's Summer Concert Tour Breaks Attendance Records",
    subtitle: "The superstar's latest tour becomes the most successful in Egyptian music history",
    category: "Music",
    image: "https://images.unsplash.com/photo-1646614871834-07ca6f701ea8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxjZWxlYnJpdGllcyUyMG11c2ljfGVufDB8fHxwdXJwbGV8MTc1MzQ5MTE3M3ww&ixlib=rb-4.1.0&q=85",
    author: "Reem Salem",
    date: "January 21, 2025",
    readTime: "4 min read",
    views: "22.1K",
    featured: false,
    trending: true,
    tags: ["Concerts", "Music", "Tours"]
  }
];

const categories = [
  { 
    name: "TV", 
    icon: "📺", 
    color: "from-purple-500 to-purple-700", 
    count: 45,
    description: "Latest TV series and shows"
  },
  { 
    name: "Cinema", 
    icon: "🎬", 
    color: "from-red-500 to-red-700", 
    count: 32,
    description: "Movies and film industry news"
  },
  { 
    name: "Music", 
    icon: "🎵", 
    color: "from-yellow-500 to-yellow-700", 
    count: 28,
    description: "Artists, albums, and concerts"
  },
  { 
    name: "Celebrities", 
    icon: "⭐", 
    color: "from-pink-500 to-pink-700", 
    count: 67,
    description: "Star news and exclusive interviews"
  },
  { 
    name: "Events", 
    icon: "🎪", 
    color: "from-indigo-500 to-indigo-700", 
    count: 23,
    description: "Festivals, premieres, and shows"
  }
];

// Enhanced SVG Icons with better styling
const SearchIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const MenuIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const PlayIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const FireIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.28 2.9-.2 4.15-.78 2.01-2.03 3.24-4.01 3.69z"/>
  </svg>
);

const EyeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ClockIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ShareIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
  </svg>
);

const EmailIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// Enhanced Header Component
const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "Home", key: "home" },
    { name: "TV", key: "tv" },
    { name: "Cinema", key: "cinema" },
    { name: "Music", key: "music" },
    { name: "Celebrities", key: "celebrities" },
    { name: "Events", key: "events" },
    { name: "Trending", key: "trending" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      alert(`Searching for: ${searchTerm}`);
      setSearchTerm('');
      setIsSearchOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-xl shadow-2xl' : 'bg-black/80 backdrop-blur-lg'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => setCurrentPage('home')}
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-xl font-bold text-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-yellow-400/50 group-hover:scale-105">
                Say
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div className="text-xl font-bold text-white transition-all duration-300 group-hover:text-yellow-400">
              Entertainment
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center text-black transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <PlayIcon className="w-4 h-4" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => setCurrentPage(item.key)}
                className={`relative font-semibold text-base transition-all duration-300 hover:text-yellow-400 hover:scale-105 ${
                  currentPage === item.key ? 'text-yellow-400' : 'text-white'
                }`}
              >
                {item.name}
                {currentPage === item.key && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-3 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 text-white"
              >
                <SearchIcon />
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 animate-slideDown">
                  <form onSubmit={handleSearch}>
                    <div className="relative">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search entertainment news..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-black transition-all duration-300"
                        autoFocus
                      />
                      <SearchIcon className="absolute left-3 top-3.5 text-gray-400" />
                    </div>
                  </form>
                </div>
              )}
            </div>

            <button 
              onClick={() => setCurrentPage('submit')}
              className="bg-gradient-to-r from-yellow-400 to-red-500 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/50 transform hover:-translate-y-1"
            >
              Submit News
            </button>
            
            <button 
              onClick={() => setCurrentPage('contact')}
              className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:scale-105 transform hover:-translate-y-1"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 animate-slideDown">
            <nav className="flex flex-col p-4 space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setCurrentPage(item.key);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left font-semibold transition-all duration-300 hover:text-yellow-400 hover:translate-x-2 py-3 ${
                    currentPage === item.key ? 'text-yellow-400' : 'text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-white/10">
                <button 
                  onClick={() => {
                    setCurrentPage('submit');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-yellow-400 to-red-500 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 mb-3"
                >
                  Submit News
                </button>
                <button 
                  onClick={() => {
                    setCurrentPage('contact');
                    setIsMenuOpen(false);
                  }}
                  className="w-full border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black"
                >
                  Contact Us
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Enhanced Hero Section
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const featuredNews = mockNews.filter(news => news.featured);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredNews.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {featuredNews.map((news, index) => (
          <div
            key={news.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${news.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          </div>
        ))}
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-400/20 rounded-full blur-xl animate-ping"></div>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
            <span className="block">Egyptian Entertainment</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              WE MAKE YOUR MARK
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Your ultimate destination for everything related to Egyptian entertainment, television, cinema, music, and celebrities
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="group bg-gradient-to-r from-yellow-400 to-red-500 text-black px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/50 transform hover:-translate-y-2"
          >
            <span className="flex items-center space-x-2">
              <span>Discover Latest News</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 transform hover:-translate-y-2"
          >
            Watch Trending
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {featuredNews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-yellow-400 scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

// Enhanced Trending Section
const TrendingSection = ({ fullPage = false }) => {
  const [visibleItems, setVisibleItems] = useState(4);
  const trendingNews = mockNews.filter(news => news.trending);

  return (
    <section className={`py-20 ${fullPage ? 'min-h-screen' : ''} bg-gradient-to-br from-gray-50 to-gray-100`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <FireIcon className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
              Trending Now
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The hottest entertainment news everyone's talking about
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {trendingNews.slice(0, visibleItems).map((news, index) => (
            <article 
              key={news.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  #{index + 1}
                </div>
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {news.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <EyeIcon />
                    <span>{news.views}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <ClockIcon />
                    <span>{news.readTime}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-lg mb-3 text-gray-800 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {news.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {news.subtitle}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {news.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {news.author}</span>
                  <button className="text-yellow-600 hover:text-yellow-700 font-semibold transition-colors duration-300 group-hover:scale-105">
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {!fullPage && trendingNews.length > visibleItems && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setVisibleItems(prev => prev + 4)}
              className="bg-gradient-to-r from-yellow-400 to-red-500 text-black px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/50 transform hover:-translate-y-1"
            >
              Load More Stories
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// Enhanced Category Section
const CategorySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Explore Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dive deep into your favorite entertainment topics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group relative overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm opacity-90 mb-3">{category.description}</p>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium inline-block">
                  {category.count} articles
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockNews.slice(0, 3).map((news, index) => (
            <article 
              key={news.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:bg-gray-700/50 hover:scale-105 hover:-translate-y-2 group"
              style={{ animationDelay: `${(index + 5) * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors duration-300">
                    <PlayIcon className="w-6 h-6 text-white" />
                  </div>
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gradient-to-r from-yellow-400 to-red-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    {news.category}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <ClockIcon />
                    <span>{news.readTime}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-xl mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {news.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {news.subtitle}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">By {news.author}</span>
                  <button className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Newsletter Section
const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubscribed(true);
    setEmail('');
    setIsLoading(false);
    
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-black/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Never Miss a Beat
          </h2>
          <p className="text-xl md:text-2xl text-black/80 mb-12 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest Egyptian entertainment news delivered to your inbox
          </p>
          
          {isSubscribed ? (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-black mb-2">Welcome aboard!</h3>
              <p className="text-black/80">You'll receive our latest updates soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 text-black rounded-full border-none focus:outline-none focus:ring-4 focus:ring-black/20 transition-all duration-300 hover:scale-105 text-lg"
                  required
                />
                <EmailIcon className="absolute right-4 top-4 text-gray-400" />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 text-lg"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

// Enhanced Footer
const Footer = ({ setCurrentPage }) => {
  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/sayentertainment' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/sayentertainment' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/sayentertainment' },
    { name: 'YouTube', icon: '📺', url: 'https://youtube.com/sayentertainment' },
    { name: 'TikTok', icon: '🎵', url: 'https://tiktok.com/@sayentertainment' }
  ];

  const quickLinks = [
    { name: 'About Us', key: 'about' },
    { name: 'Privacy Policy', key: 'privacy' },
    { name: 'Terms of Service', key: 'terms' },
    { name: 'Contact', key: 'contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400/5 rounded-full blur-xl animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="bg-gradient-to-r from-yellow-400 to-red-500 text-black px-4 py-2 rounded-xl font-bold text-xl">
                Say
              </div>
              <div className="text-xl font-bold">Entertainment</div>
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center text-black">
                <PlayIcon className="w-4 h-4" />
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-lg">
              Your ultimate destination for Egyptian entertainment news. We bring you the latest updates from the world of television, cinema, music, and celebrity culture.
            </p>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <LocationIcon className="w-4 h-4" />
                <span>Cairo, Egypt</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <PhoneIcon className="w-4 h-4" />
                <span>+20 123 456 789</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center text-yellow-400 transition-all duration-300 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-red-500 hover:text-black hover:scale-110 hover:shadow-xl"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button 
                    onClick={() => setCurrentPage(link.key)}
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 text-lg"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <button 
                    onClick={() => setCurrentPage(category.name.toLowerCase())}
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 text-lg flex items-center space-x-2"
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-lg">
            &copy; 2025 SayEntertainment. All rights reserved. | A sub-platform of Say.eg
          </p>
        </div>
      </div>
    </footer>
  );
};

// Enhanced Article Page Component
const ArticlePage = () => {
  const article = mockNews[0];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-fadeInUp">
            <div className="relative overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-red-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                    {article.category}
                  </span>
                  <span className="text-white text-sm flex items-center space-x-2">
                    <ClockIcon />
                    <span>{article.date}</span>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-8 lg:p-12">
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                  {article.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">{article.subtitle}</p>
                
                <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center text-black font-bold text-lg">
                      {article.author[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{article.author}</p>
                      <p className="text-sm text-gray-500">Entertainment Editor</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-500">
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
              </header>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Actor Ahmed Helmy revealed details about his new cinematic project that will bring him together with his wife, actress Mona Zaki, for the fifth time in their shared artistic history. This work comes as part of the romantic comedy series that has characterized the duo.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Helmy indicated in press statements that the film will have a light comedic character with a romantic touch, confirming that the story addresses a contemporary topic that touches on Egyptian society issues in an entertaining and intelligent way.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Filming is scheduled to begin next month, and will star a selection of stars beloved by the Egyptian and Arab public. The project represents a new milestone in the artistic collaboration between the beloved couple.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This collaboration continues their successful partnership that began with their first film together, which achieved great success at the box office and with critics alike. Their unique chemistry on screen has made them one of Egypt's most beloved on-screen couples.
                </p>
              </div>
              
              <footer className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                  <ShareIcon />
                  <span>Share This Article</span>
                </h3>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg flex items-center space-x-2">
                    <span>📘</span>
                    <span>Facebook</span>
                  </button>
                  <button className="bg-blue-400 text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-blue-500 hover:scale-105 hover:shadow-lg flex items-center space-x-2">
                    <span>🐦</span>
                    <span>Twitter</span>
                  </button>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-lg flex items-center space-x-2">
                    <span>📱</span>
                    <span>WhatsApp</span>
                  </button>
                  <button className="bg-red-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-lg flex items-center space-x-2">
                    <span>📧</span>
                    <span>Email</span>
                  </button>
                </div>
              </footer>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

// Enhanced Category Page Component
const CategoryPage = ({ category }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const categoryNews = mockNews.filter(news => news.category === category);
  
  const filters = ['all', 'trending', 'featured', 'recent'];
  const sortOptions = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'trending', label: 'Trending' }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            {category} News
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Latest news and updates from the world of {category}
          </p>
        </div>
        
        {/* Filters and Sort */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-yellow-400 to-red-500 text-black'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="form-select bg-white border border-gray-300 rounded-full px-4 py-2 text-gray-700 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryNews.map((news, index) => (
            <article 
              key={news.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 group animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors duration-300">
                    <PlayIcon className="w-6 h-6 text-white" />
                  </div>
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gradient-to-r from-yellow-400 to-red-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    {news.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center space-x-1">
                    <ClockIcon />
                    <span>{news.date}</span>
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800 transition-colors duration-300 group-hover:text-yellow-600 line-clamp-2">
                  {news.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{news.subtitle}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {news.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-500 text-sm">
                    <span>By {news.author}</span>
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
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

// Enhanced Submit News Page Component
const SubmitNewsPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    email: '',
    name: '',
    phone: '',
    tags: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setFormData({ title: '', category: '', content: '', email: '', name: '', phone: '', tags: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-lg mx-4 text-center animate-scaleIn">
          <div className="text-6xl mb-6">✨</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">News Submitted Successfully!</h2>
          <p className="text-gray-600 mb-8">Thank you for your contribution. Our editorial team will review your news and get back to you soon.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-yellow-400 to-red-500 text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Submit Another News
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Submit News
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Share the latest news from the world of Egyptian entertainment with our community
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 animate-fadeInUp animation-delay-300">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="form-select"
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
              </div>
              
              <div className="form-group">
                <label className="form-label">News Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="form-input"
                  placeholder="Enter a compelling news headline"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Tags</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  className="form-input"
                  placeholder="Enter tags separated by commas (e.g., Egyptian Cinema, Comedy, Romance)"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">News Content *</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  rows="8"
                  className="form-textarea"
                  placeholder="Write your news story here. Include all relevant details, quotes, and context."
                  required
                />
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Submission Guidelines</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Ensure your news is accurate and verified</li>
                  <li>• Include relevant sources and quotes when possible</li>
                  <li>• Use clear, engaging language suitable for our audience</li>
                  <li>• Our editorial team will review and may edit your submission</li>
                  <li>• We'll contact you if we need additional information</li>
                </ul>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-red-500 text-black py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <div className="loading-spinner"></div>
                    <span>Submitting News...</span>
                  </span>
                ) : (
                  'Submit News'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced About Page Component
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              About SayEntertainment
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted source for Egyptian entertainment news and celebrity updates
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-slideInLeft">
              <img 
                src="https://images.unsplash.com/photo-1564484911601-58effed8d577?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxFZ3lwdGlhbiUyMGVudGVydGFpbm1lbnR8ZW58MHx8fHB1cnBsZXwxNzUzNDkxMTQwfDA&ixlib=rb-4.1.0&q=85" 
                alt="Egyptian Entertainment"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="animate-slideInRight">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SayEntertainment is a proud extension of the Say.eg media group, dedicated to bringing you the most comprehensive coverage of Egyptian entertainment. From the bustling studios of Cairo to the glamorous red carpets of international film festivals, we're your window into the vibrant world of Egyptian arts and culture.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our passionate team of entertainment journalists and industry insiders work around the clock to deliver breaking news, exclusive interviews, and in-depth analysis of the Egyptian entertainment landscape.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 mb-16 animate-fadeInUp">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-black">🎬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading digital platform for Egyptian entertainment news, connecting audiences with their favorite stars and stories.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎭</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To provide accurate, timely, and engaging entertainment content that celebrates Egyptian culture and artistic excellence.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Values</h3>
                <p className="text-gray-600">
                  Integrity, authenticity, and respect for the artists and creators who make Egyptian entertainment extraordinary.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-2xl p-8 lg:p-12 text-center animate-fadeInUp">
            <h2 className="text-3xl font-bold text-black mb-4">What We Cover</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
              {categories.map((category) => (
                <div key={category.name} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div className="font-semibold text-black">{category.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <EmailIcon className="w-6 h-6" />,
      title: "Email Address",
      details: "info@sayentertainment.com",
      link: "mailto:info@sayentertainment.com"
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Phone Number",
      details: "+20 123 456 789",
      link: "tel:+20123456789"
    },
    {
      icon: <LocationIcon className="w-6 h-6" />,
      title: "Office Location",
      details: "Cairo, Egypt",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a story tip, press release, or just want to say hello? We'd love to hear from you
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 animate-slideInLeft">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-6">✉️</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="form-input"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows="6"
                      className="form-textarea"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-400 to-red-500 text-black py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <div className="loading-spinner"></div>
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div className="animate-slideInRight">
              <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center text-black transition-all duration-300 group-hover:scale-110">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.details}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-2xl p-8 lg:p-12 text-center">
                <h3 className="text-2xl font-bold text-black mb-4">Follow Us</h3>
                <p className="text-black/80 mb-6">Stay connected with the latest entertainment news</p>
                <div className="flex justify-center space-x-4">
                  {['📘', '📷', '🐦', '📺', '🎵'].map((icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-black transition-all duration-300 hover:bg-white/30 hover:scale-110"
                    >
                      <span className="text-xl">{icon}</span>
                    </a>
                  ))}
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