import React, { useState } from 'react';

// Mock data for entertainment news
const mockNews = [
  {
    id: 1,
    title: "أحمد حلمي يكشف عن فيلمه الجديد مع منى زكي",
    subtitle: "كوميديا رومانسية جديدة تجمع النجمين للمرة الخامسة",
    category: "Cinema",
    image: "https://images.unsplash.com/photo-1662737802594-3d1cc6892dec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxlbnRlcnRhaW5tZW50JTIwbmV3c3xlbnwwfHx8cHVycGxlfDE3NTM0OTExNjN8MA&ixlib=rb-4.1.0&q=85",
    author: "سارة محمود",
    date: "2025-01-26",
    readTime: "3 دقائق",
    views: "12.5K",
    featured: true
  },
  {
    id: 2,
    title: "عمرو دياب يطلق أغنيته الجديدة 'قلبي معاك'",
    subtitle: "أغنية رومانسية جديدة من الهضبة بتوقيع طارق مدكور",
    category: "Music",
    image: "https://images.unsplash.com/photo-1651155586309-1310d9c6a250?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxjZWxlYnJpdGllcyUyMG11c2ljfGVufDB8fHxwdXJwbGV8MTc1MzQ5MTE3M3ww&ixlib=rb-4.1.0&q=85",
    author: "أحمد علي",
    date: "2025-01-25",
    readTime: "2 دقائق",
    views: "8.2K",
    featured: true
  },
  {
    id: 3,
    title: "مي عز الدين تبدأ تصوير مسلسلها الجديد",
    subtitle: "دراما اجتماعية جديدة من تأليف تامر حبيب",
    category: "TV",
    image: "https://images.unsplash.com/photo-1659356870699-2c6b511baec9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxlbnRlcnRhaW5tZW50JTIwbmV3c3xlbnwwfHx8cHVycGxlfDE3NTM0OTExNjN8MA&ixlib=rb-4.1.0&q=85",
    author: "فاطمة أحمد",
    date: "2025-01-24",
    readTime: "4 دقائق",
    views: "6.8K",
    featured: true
  },
  {
    id: 4,
    title: "يسرا تحصل على جائزة التميز في مهرجان القاهرة",
    subtitle: "تكريم النجمة الكبيرة لمسيرتها الفنية العريقة",
    category: "Celebrities",
    image: "https://images.unsplash.com/photo-1505921544958-26139bde2044?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHw0fHxjZWxlYnJpdGllcyUyMG11c2ljfGVufDB8fHxwdXJwbGV8MTc1MzQ5MTE3M3ww&ixlib=rb-4.1.0&q=85",
    author: "محمد حسن",
    date: "2025-01-23",
    readTime: "3 دقائق",
    views: "9.1K",
    featured: false
  },
  {
    id: 5,
    title: "انطلاق مهرجان الموسيقى العربية بدار الأوبرا",
    subtitle: "فعاليات متنوعة تجمع نجوم الموسيقى العربية",
    category: "Events",
    image: "https://images.unsplash.com/photo-1567928513899-997d98489fbd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxjZWxlYnJpdGllcyUyMG11c2ljfGVufDB8fHxwdXJwbGV8MTc1MzQ5MTE3M3ww&ixlib=rb-4.1.0&q=85",
    author: "نور الدين",
    date: "2025-01-22",
    readTime: "5 دقائق",
    views: "4.7K",
    featured: false
  },
  {
    id: 6,
    title: "فيلم 'الممر' يحقق نجاحاً كبيراً في دور العرض",
    subtitle: "العمل الجديد لأحمد عز يتصدر شباك التذاكر",
    category: "Cinema",
    image: "https://images.unsplash.com/photo-1649609732631-0c7b63d4ef52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxlbnRlcnRhaW5tZW50JTIwbmV3c3xlbnwwfHx8cHVycGxlfDE3NTM0OTExNjN8MA&ixlib=rb-4.1.0&q=85",
    author: "ريم سالم",
    date: "2025-01-21",
    readTime: "3 دقائق",
    views: "15.3K",
    featured: false
  }
];

const trendingNews = [
  {
    id: 7,
    title: "حسن الرداد ينفي شائعات انفصاله عن إيمي سالم",
    category: "Celebrities",
    image: "https://images.unsplash.com/photo-1580687208282-7ff99f6038c2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxlbnRlcnRhaW5tZW50JTIwbmV3c3xlbnwwfHx8cHVycGxlfDE3NTM0OTExNjN8MA&ixlib=rb-4.1.0&q=85",
    views: "18.2K",
    timeAgo: "منذ ساعة"
  },
  {
    id: 8,
    title: "تامر حسني يستعد لحفل جديد في العلمين",
    category: "Music",
    image: "https://images.unsplash.com/photo-1646614871834-07ca6f701ea8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxjZWxlYnJpdGllcyUyMG11c2ljfGVufDB8fHxwdXJwbGV8MTc1MzQ5MTE3M3ww&ixlib=rb-4.1.0&q=85",
    views: "11.7K",
    timeAgo: "منذ 3 ساعات"
  },
  {
    id: 9,
    title: "نيللي كريم تنضم لبطولة مسلسل رمضان المقبل",
    category: "TV",
    image: "https://images.unsplash.com/photo-1564484911601-58effed8d577?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxFZ3lwdGlhbiUyMGVudGVydGFpbm1lbnR8ZW58MHx8fHB1cnBsZXwxNzUzNDkxMTQwfDA&ixlib=rb-4.1.0&q=85",
    views: "9.4K",
    timeAgo: "منذ 5 ساعات"
  },
  {
    id: 10,
    title: "مهرجان الجونة يعلن عن قائمة الأفلام المشاركة",
    category: "Events",
    image: "https://images.unsplash.com/photo-1653806957258-d90d942c0150?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxFZ3lwdGlhbiUyMGVudGVydGFpbm1lbnR8ZW58MHx8fHB1cnBsZXwxNzUzNDkxMTQwfDA&ixlib=rb-4.1.0&q=85",
    views: "7.9K",
    timeAgo: "منذ 8 ساعات"
  }
];

const categories = [
  { name: "TV", icon: "📺", color: "bg-purple-600", count: 45 },
  { name: "Cinema", icon: "🎬", color: "bg-red-600", count: 32 },
  { name: "Music", icon: "🎵", color: "bg-yellow-600", count: 28 },
  { name: "Celebrities", icon: "⭐", color: "bg-pink-600", count: 67 },
  { name: "Events", icon: "🎪", color: "bg-indigo-600", count: 23 }
];

// Header Component
const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "الرئيسية", key: "home" },
    { name: "تليفزيون", key: "tv" },
    { name: "سينما", key: "cinema" },
    { name: "موسيقى", key: "music" },
    { name: "مشاهير", key: "celebrities" },
    { name: "أحداث", key: "events" },
    { name: "الأكثر تداولاً", key: "trending" }
  ];

  return (
    <header className="bg-black text-white relative z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-lg font-bold text-xl">
              Say
            </div>
            <div className="text-xl font-bold">Entertainment</div>
            <div className="text-yellow-400 text-2xl">🎬</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => setCurrentPage(item.key)}
                className={`hover:text-yellow-400 transition-colors ${
                  currentPage === item.key ? 'text-yellow-400 border-b-2 border-yellow-400' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setCurrentPage('submit')}
              className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
            >
              أرسل خبر
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors"
            >
              تواصل معنا
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-2 mt-4">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setCurrentPage(item.key);
                    setIsMenuOpen(false);
                  }}
                  className={`text-right hover:text-yellow-400 transition-colors py-2 ${
                    currentPage === item.key ? 'text-yellow-400' : ''
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
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-semibold mt-4"
              >
                أرسل خبر
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
  return (
    <section className="relative bg-black text-white min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1649609732631-0c7b63d4ef52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxlbnRlcnRhaW5tZW50JTIwbmV3c3xlbnwwfHx8cHVycGxlfDE3NTM0OTExNjN8MA&ixlib=rb-4.1.0&q=85)`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-purple-900/20 to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          أخبار الفن والترفيه
          <br />
          <span className="text-yellow-400">نحن نصنع علامتك</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          منصة SayEntertainment - وجهتك الأولى لكل ما يخص الترفيه المصري من تليفزيون وسينما وموسيقى ومشاهير
        </p>
        
        <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors transform hover:scale-105">
          اكتشف الأخبار
        </button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 text-yellow-400 text-6xl opacity-20 animate-pulse">🎭</div>
      <div className="absolute bottom-10 left-10 text-purple-400 text-5xl opacity-20 animate-bounce">🎬</div>
    </section>
  );
};

// Featured News Component
const FeaturedNews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredNews = mockNews.filter(news => news.featured);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          الأخبار المميزة
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slider */}
          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden">
            {featuredNews.map((news, index) => (
              <div
                key={news.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${news.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {news.category}
                    </span>
                    <span className="text-gray-300 text-sm">{news.date}</span>
                    <span className="text-gray-300 text-sm">{news.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{news.title}</h3>
                  <p className="text-gray-300 text-lg mb-4">{news.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-300 text-sm">بواسطة {news.author}</span>
                      <span className="text-gray-300 text-sm">• {news.views} مشاهدة</span>
                    </div>
                    <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-semibold">
                      اقرأ المزيد
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            >
              →
            </button>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredNews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-yellow-500' : 'bg-gray-300'
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            🔥 الأكثر تداولاً الآن
          </h2>
          {!fullPage && (
            <button className="text-yellow-600 hover:text-yellow-700 font-semibold">
              عرض الكل ←
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingNews.map((news, index) => (
            <div key={news.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  #{index + 1}
                </div>
                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                  {news.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2">{news.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{news.views} مشاهدة</span>
                  <span>{news.timeAgo}</span>
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
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          تصفح حسب الفئة
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div key={category.name} className={`${category.color} rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-pointer`}>
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-sm opacity-90">{category.count} خبر</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockNews.slice(0, 3).map((news) => (
            <div key={news.id} className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors">
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-yellow-400 text-sm font-semibold">{news.category}</span>
                  <span className="text-gray-400 text-sm">{news.date}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{news.title}</h3>
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('تم اشتراكك بنجاح!');
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          ابق على اطلاع بأحدث الأخبار
        </h2>
        <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
          اشترك في نشرتنا الإخبارية لتكون أول من يعرف آخر أخبار الفن والترفيه
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="أدخل بريدك الإلكتروني"
            className="flex-1 px-4 py-3 rounded-lg text-black border-none focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <button
            type="submit"
            className="bg-black text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            اشترك
          </button>
        </form>
      </div>
    </section>
  );
};

// Footer Component
const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-lg font-bold text-xl">
                Say
              </div>
              <div className="text-xl font-bold">Entertainment</div>
              <div className="text-yellow-400 text-2xl">🎬</div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              منصة SayEntertainment - وجهتك الأولى لكل ما يخص الترفيه المصري من تليفزيون وسينما وموسيقى ومشاهير
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <span className="text-2xl">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <span className="text-2xl">📱</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <span className="text-2xl">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <span className="text-2xl">📺</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('home')} className="text-gray-300 hover:text-yellow-400 transition-colors">الرئيسية</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="text-gray-300 hover:text-yellow-400 transition-colors">من نحن</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="text-gray-300 hover:text-yellow-400 transition-colors">تواصل معنا</button></li>
              <li><button onClick={() => setCurrentPage('submit')} className="text-gray-300 hover:text-yellow-400 transition-colors">أرسل خبر</button></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">الفئات</h3>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('tv')} className="text-gray-300 hover:text-yellow-400 transition-colors">تليفزيون</button></li>
              <li><button onClick={() => setCurrentPage('cinema')} className="text-gray-300 hover:text-yellow-400 transition-colors">سينما</button></li>
              <li><button onClick={() => setCurrentPage('music')} className="text-gray-300 hover:text-yellow-400 transition-colors">موسيقى</button></li>
              <li><button onClick={() => setCurrentPage('celebrities')} className="text-gray-300 hover:text-yellow-400 transition-colors">مشاهير</button></li>
              <li><button onClick={() => setCurrentPage('events')} className="text-gray-300 hover:text-yellow-400 transition-colors">أحداث</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SayEntertainment. جميع الحقوق محفوظة.</p>
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
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
                <span className="text-gray-500 text-sm">{article.date}</span>
                <span className="text-gray-500 text-sm">{article.readTime}</span>
                <span className="text-gray-500 text-sm">{article.views} مشاهدة</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
              <h2 className="text-xl text-gray-600 mb-6">{article.subtitle}</h2>
              
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {article.author[0]}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">{article.author}</p>
                  <p className="text-sm text-gray-500">محرر ترفيه</p>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  كشف الفنان أحمد حلمي عن تفاصيل مشروعه السينمائي الجديد الذي سيجمعه مع زوجته الفنانة منى زكي للمرة الخامسة في تاريخهما الفني المشترك. ويأتي هذا العمل ضمن سلسلة الأعمال الكوميدية الرومانسية التي تميز بها الثنائي.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  وأشار حلمي في تصريحات صحفية إلى أن الفيلم سيحمل طابعاً كوميدياً خفيفاً مع لمسة رومانسية، مؤكداً أن القصة تتناول موضوعاً معاصراً يلامس قضايا المجتمع المصري بطريقة مسلية وذكية.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  من المقرر أن يبدأ تصوير الفيلم خلال الشهر المقبل، وسيشارك في بطولته نخبة من النجوم المحبوبين لدى الجمهور المصري والعربي.
                </p>
              </div>
              
              <div className="border-t pt-6 mt-8">
                <h3 className="text-xl font-bold mb-4">شارك المقال</h3>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    📘 فيسبوك
                  </button>
                  <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                    🐦 تويتر
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    📱 واتساب
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            أخبار {category}
          </h1>
          <p className="text-xl text-gray-600">
            آخر الأخبار والتطورات في عالم {category}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryNews.map((news) => (
            <div key={news.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {news.category}
                  </span>
                  <span className="text-gray-500 text-sm">{news.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.subtitle}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-sm">بواسطة {news.author}</span>
                    <span className="text-gray-500 text-sm">• {news.views} مشاهدة</span>
                  </div>
                  <button className="text-yellow-600 hover:text-yellow-700 font-semibold">
                    اقرأ المزيد
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('تم إرسال الخبر بنجاح! سيتم مراجعته قريباً.');
    setFormData({ title: '', category: '', content: '', email: '', name: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              أرسل خبراً
            </h1>
            <p className="text-gray-600 mb-8 text-center">
              شاركنا آخر الأخبار في عالم الترفيه المصري
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  عنوان الخبر
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الفئة
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                >
                  <option value="">اختر الفئة</option>
                  <option value="TV">تليفزيون</option>
                  <option value="Cinema">سينما</option>
                  <option value="Music">موسيقى</option>
                  <option value="Celebrities">مشاهير</option>
                  <option value="Events">أحداث</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  محتوى الخبر
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                إرسال الخبر
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
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
              من نحن
            </h1>
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                منصة SayEntertainment هي امتداد لمجموعة Say.eg، وهي منصة متخصصة في أخبار الترفيه والفن المصري. نحن نسعى لتقديم محتوى ترفيهي عالي الجودة يغطي جميع جوانب الحياة الفنية في مصر.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">رؤيتنا</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                أن نكون الوجهة الأولى للجمهور المصري والعربي للحصول على أحدث أخبار الترفيه والفن، وأن نكون جسراً بين النجوم والجمهور.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">مهمتنا</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                تقديم محتوى ترفيهي موثوق وشامل يغطي عالم التليفزيون والسينما والموسيقى والمشاهير في مصر، مع التركيز على الجودة والمصداقية.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">ما نقدمه</h2>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
                <li>أخبار التليفزيون والمسلسلات المصرية</li>
                <li>أحدث أخبار السينما المصرية والعربية</li>
                <li>أخبار الموسيقى والمطربين</li>
                <li>أخبار المشاهير والنجوم</li>
                <li>تغطية الأحداث الفنية والمهرجانات</li>
                <li>مقابلات حصرية مع النجوم</li>
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              تواصل معنا
            </h1>
            <p className="text-xl text-gray-600">
              نحن هنا للاستماع إليك والإجابة على استفساراتك
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                أرسل رسالة
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الموضوع
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الرسالة
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                معلومات التواصل
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black text-xl">
                    📧
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">البريد الإلكتروني</h3>
                    <p className="text-gray-600">info@sayentertainment.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black text-xl">
                    📱
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">الهاتف</h3>
                    <p className="text-gray-600">+20 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black text-xl">
                    📍
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">العنوان</h3>
                    <p className="text-gray-600">القاهرة، مصر</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  تابعنا على وسائل التواصل
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    📘
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                    📱
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                    🐦
                  </a>
                  <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
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