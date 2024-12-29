export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface Position {
  symbol: string;
  shares: number;
  averageCost: number;
}

export interface Portfolio {
  cash: number;
  positions: Position[];
}