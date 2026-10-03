import React, { useState, useCallback } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import BrandStory from './components/home/BrandStory';
import ProductGrid from './components/catalog/ProductGrid';
import CustomOrderSection from './components/custom/CustomOrderSection';
import ProductDetailModal from './components/product/ProductDetailModal';
import type { Product } from './types/catalog';
import type { View } from './types/navigation';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleNavigate = useCallback((view: View) => {
    setCurrentView(view);
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleViewDetails = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-linen)] flex flex-col selection:bg-[var(--color-gold)] selection:text-[var(--color-espresso)]">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <BrandStory />
            <ProductGrid onViewDetails={handleViewDetails} />
            <CustomOrderSection />
          </>
        )}

        {currentView === 'catalog' && (
          <div className="pt-16">
            <ProductGrid onViewDetails={handleViewDetails} />
          </div>
        )}

        {currentView === 'custom' && (
          <div className="pt-16">
            <CustomOrderSection />
          </div>
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      <ProductDetailModal product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
