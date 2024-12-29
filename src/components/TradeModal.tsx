import React, { useState } from 'react';
import { Stock } from '../types/stock';

interface TradeModalProps {
  stock: Stock;
  isOpen: boolean;
  isBuy: boolean;
  maxShares?: number;
  onClose: () => void;
  onTrade: (shares: number) => void;
}

export function TradeModal({ stock, isOpen, isBuy, maxShares, onClose, onTrade }: TradeModalProps) {
  const [shares, setShares] = useState(1);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onTrade(shares);
    setShares(1);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">
          {isBuy ? 'Buy' : 'Sell'} {stock.symbol}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Current Price: ${stock.price.toFixed(2)}
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Number of Shares
            </label>
            <input
              type="number"
              min="1"
              max={maxShares}
              value={shares}
              onChange={(e) => setShares(Math.max(1, parseInt(e.target.value) || 0))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Total Value: ${(shares * stock.price).toFixed(2)}
            </label>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 text-sm font-medium text-white rounded-md ${
                isBuy ? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {isBuy ? 'Buy' : 'Sell'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}