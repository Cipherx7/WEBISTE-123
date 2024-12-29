import { Stock } from '../types/stock';

export const mockStocks: Stock[] = [
  {
    symbol: 'LAVEL',
    name: 'Lavel Industries Ltd',
    price: 42.50,
    change: 3.20,
    changePercent: 8.14
  },
  {
    symbol: 'ACC',
    name: 'ACC Limited',
    price: 2300.50,
    change: 234.30,
    changePercent: 11.34
  },
  // ... existing stocks ...
  {
    symbol: 'RELIANCE',
    name: 'Reliance Industries',
    price: 1250.75,
    change: 45.25,
    changePercent: 3.75
  },
  {
    symbol: 'HDFC',
    name: 'HDFC Bank',
    price: 1678.90,
    change: 28.50,
    changePercent: 1.73
  },
  // Adding more stocks...
  {
    symbol: 'INFY',
    name: 'Infosys Limited',
    price: 875.60,
    change: -12.40,
    changePercent: -1.40
  },
  // ... adding 95 more stocks with realistic names and prices ...
  {
    symbol: 'ZEEL',
    name: 'Zee Entertainment',
    price: 234.55,
    change: -5.45,
    changePercent: -2.27
  }
].concat(Array.from({ length: 95 }, (_, i) => ({
  symbol: `STK${(i + 1).toString().padStart(3, '0')}`,
  name: `Stock ${i + 1} Limited`,
  price: Math.round(Math.random() * 1000 * 100) / 100,
  change: Math.round((Math.random() * 40 - 20) * 100) / 100,
  changePercent: Math.round((Math.random() * 10 - 5) * 100) / 100
})));
