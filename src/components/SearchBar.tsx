import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Stock } from '../types/stock';

interface SearchBarProps {
  stocks: Stock[];
  onSelectStock: (stock: Stock) => void;
}

export function SearchBar({ stocks, onSelectStock }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredStocks = stocks.filter(stock => 
    stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
    stock.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative mb-8">
      <div className="flex items-center bg-white rounded-lg shadow">
        <Search className="h-5 w-5 text-gray-400 ml-3" />
        <input
          type="text"
          placeholder="Search stocks by name or symbol..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full p-3 rounded-lg focus:outline-none"
        />
      </div>
      
      {isOpen && query && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg">
          {filteredStocks.length > 0 ? (
            <ul>
              {filteredStocks.map(stock => (
                <li 
                  key={stock.symbol}
                  className="p-3 hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    onSelectStock(stock);
                    setQuery('');
                    setIsOpen(false);
                  }}
                >
                  <div className="font-medium">{stock.symbol}</div>
                  <div className="text-sm text-gray-500">{stock.name}</div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-3 text-gray-500">No stocks found</div>
          )}
        </div>
      )}
    </div>
  );
}