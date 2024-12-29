import React from 'react';
import { TrendingUp } from 'lucide-react';

export function Header() {
  return (
    <div className="bg-gradient-to-r from-red-900 to-red-800 text-white py-12 px-4 sm:px-6 lg:px-8 mb-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-8 w-8" />
              <h1 className="text-4xl font-bold">BSE Trading Floor</h1>
            </div>
            <p className="mt-2 text-red-200">Inspired by the 1992 Securities Scandal</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-red-200">BSE Sensex</p>
            <p className="text-2xl font-bold">4,467.90</p>
            <p className="text-red-200 text-sm">April 22, 1992</p>
          </div>
        </div>
      </div>
    </div>
  );
}