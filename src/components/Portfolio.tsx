import React from 'react';
import { Portfolio as PortfolioType, Stock } from '../types/stock';

interface PortfolioProps {
  portfolio: PortfolioType;
  stockPrices: Stock[];
  onSell: (symbol: string) => void;
}

export function Portfolio({ portfolio, stockPrices, onSell }: PortfolioProps) {
  const getStockPrice = (symbol: string) => {
    return stockPrices.find(stock => stock.symbol === symbol)?.price || 0;
  };

  const calculateValue = (symbol: string, shares: number) => {
    const currentPrice = getStockPrice(symbol);
    return currentPrice * shares;
  };

  const calculateTotalValue = () => {
    return portfolio.positions.reduce((total, position) => {
      return total + calculateValue(position.symbol, position.shares);
    }, portfolio.cash);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium">Your Portfolio</h2>
        <p className="mt-1 text-sm text-gray-500">
          Cash Balance: ${portfolio.cash.toFixed(2)}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Total Value: ${calculateTotalValue().toFixed(2)}
        </p>
      </div>
      <div className="border-t border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shares</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Cost</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {portfolio.positions.map((position) => (
              <tr key={position.symbol}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{position.symbol}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{position.shares}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${position.averageCost.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${calculateValue(position.symbol, position.shares).toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    onClick={() => onSell(position.symbol)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Sell
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}