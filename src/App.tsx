import React, { useState, useEffect } from 'react';
import { StockList } from './components/StockList';
import { Portfolio } from './components/Portfolio';
import { TradeModal } from './components/TradeModal';
import { Header } from './components/Header';
import { HistoricalContext } from './components/HistoricalContext';
import { MarketWarning } from './components/MarketWarning';
import { StockChart } from './components/StockChart';
import { SearchBar } from './components/SearchBar';
import { FlagPopup } from './components/FlagPopup';
import { mockStocks } from './data/mockStocks';
import { Stock, Portfolio as PortfolioType } from './types/stock';

function App() {
  const [portfolio, setPortfolio] = useState<PortfolioType>({
    cash: 10000,
    positions: []
  });

  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
  const [isBuyMode, setIsBuyMode] = useState(true);
  const [showFlag, setShowFlag] = useState(false);

  const handleBuy = (stock: Stock) => {
    setSelectedStock(stock);
    setIsBuyMode(true);
  };

  const handleSell = (symbol: string) => {
    const stock = mockStocks.find(s => s.symbol === symbol);
    if (stock) {
      setSelectedStock(stock);
      setIsBuyMode(false);
    }
  };

  const checkLavelCondition = (updatedPortfolio: PortfolioType) => {
    const lavelPosition = updatedPortfolio.positions.find(p => p.symbol === 'LAVEL');
    if (lavelPosition && lavelPosition.shares >= 100) {
      setShowFlag(true);
    }
  };

  const handleTrade = (shares: number) => {
    if (!selectedStock) return;

    if (isBuyMode) {
      const cost = selectedStock.price * shares;
      if (cost <= portfolio.cash) {
        const existingPosition = portfolio.positions.find(p => p.symbol === selectedStock.symbol);
        
        const updatedPortfolio = {
          cash: portfolio.cash - cost,
          positions: existingPosition
            ? portfolio.positions.map(p =>
                p.symbol === selectedStock.symbol
                  ? {
                      ...p,
                      shares: p.shares + shares,
                      averageCost: (p.averageCost * p.shares + cost) / (p.shares + shares)
                    }
                  : p
              )
            : [
                ...portfolio.positions,
                {
                  symbol: selectedStock.symbol,
                  shares,
                  averageCost: selectedStock.price
                }
              ]
        };
        
        setPortfolio(updatedPortfolio);
        checkLavelCondition(updatedPortfolio);
      }
    } else {
      const position = portfolio.positions.find(p => p.symbol === selectedStock.symbol);
      if (position && position.shares >= shares) {
        const revenue = selectedStock.price * shares;
        
        const updatedPortfolio = {
          cash: portfolio.cash + revenue,
          positions: portfolio.positions
            .map(p =>
              p.symbol === selectedStock.symbol
                ? { ...p, shares: p.shares - shares }
                : p
            )
            .filter(p => p.shares > 0)
        };
        
        setPortfolio(updatedPortfolio);
      }
    }
    
    setSelectedStock(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HistoricalContext />
        <MarketWarning />
        <StockChart />
        
        <SearchBar 
          stocks={mockStocks} 
          onSelectStock={(stock) => handleBuy(stock)} 
        />
        
        <div className="space-y-8">
          <Portfolio
            portfolio={portfolio}
            stockPrices={mockStocks}
            onSell={handleSell}
          />
          
          <StockList
            stocks={mockStocks}
            onBuy={handleBuy}
          />
        </div>

        {selectedStock && (
          <TradeModal
            stock={selectedStock}
            isOpen={true}
            isBuy={isBuyMode}
            maxShares={!isBuyMode ? portfolio.positions.find(p => p.symbol === selectedStock.symbol)?.shares : undefined}
            onClose={() => setSelectedStock(null)}
            onTrade={handleTrade}
          />
        )}

        <FlagPopup 
          isOpen={showFlag} 
          onClose={() => setShowFlag(false)} 
        />
      </div>
    </div>
  );
}

export default App;
