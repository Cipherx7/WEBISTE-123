import { Stock } from '../types/stock';

export const mockStocks: Stock[] = [
  {
    symbol: 'ACC',
    name: 'ACC Limited',
    price: 2300.50,
    change: 234.30,
    changePercent: 11.34
  },
  {
    symbol: 'TISCO',
    name: 'Tata Iron and Steel Company Ltd',
    price: 1378.85,
    change: 156.15,
    changePercent: 12.78
  },
  {
    symbol: 'APOLLO',
    name: 'Apollo Tyres Ltd',
    price: 442.65,
    change: 35.85,
    changePercent: 8.81
  },
  {
    symbol: 'ONGC',
    name: 'Oil and Natural Gas Corporation',
    price: 875.35,
    change: -23.25,
    changePercent: -2.59
  }
];