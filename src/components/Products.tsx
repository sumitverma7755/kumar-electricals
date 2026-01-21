'use client';

import { Check } from 'lucide-react';
import Reveal from './Reveal';

const products = [
  {
    name: 'Havells Wires & Cables',
    brand: 'Havells',
    price: '₹800 - ₹2,500',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80',
    inStock: true
  },
  {
    name: 'Orient Ceiling Fans',
    brand: 'Orient Electric',
    price: '₹1,500 - ₹3,800',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80',
    inStock: true
  },
  {
    name: 'Philips LED Lights',
    brand: 'Philips',
    price: '₹200 - ₹1,500',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&q=80',
    inStock: true
  },
  {
    name: 'Anchor Switches',
    brand: 'Anchor by Panasonic',
    price: '₹150 - ₹900',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    inStock: true
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Authorized Dealer for Top Brands
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Genuine electrical products from trusted brands, always in stock at wholesale prices
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 0.08}>
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="aspect-square bg-slate-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 mb-1">{product.name}</h3>
                <p className="text-sm text-slate-600 mb-2">{product.brand}</p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-600 font-semibold">{product.price}</span>
                  {product.inStock && (
                    <span className="inline-flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2 py-1 rounded-full">
                      <Check className="h-3 w-3" />
                      In Stock
                    </span>
                  )}
                </div>
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
