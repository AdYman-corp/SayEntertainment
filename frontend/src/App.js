import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Components from './components';

const { 
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
} = Components;

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <TrendingSection />
            <CategorySection />
            <NewsletterSection />
          </>
        );
      case 'tv':
        return <CategoryPage category="TV" />;
      case 'cinema':
        return <CategoryPage category="Cinema" />;
      case 'music':
        return <CategoryPage category="Music" />;
      case 'celebrities':
        return <CategoryPage category="Celebrities" />;
      case 'events':
        return <CategoryPage category="Events" />;
      case 'trending':
        return <TrendingSection fullPage={true} />;
      case 'submit':
        return <SubmitNewsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'article':
        return <ArticlePage />;
      default:
        return (
          <>
            <Hero />
            <FeaturedNews />
            <TrendingSection />
            <CategorySection />
            <NewsletterSection />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;