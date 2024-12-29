import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function MarketWarning() {
  return (
    <div className="bg-red-50 border-l-4 border-red-800 p-4 mb-8">
      <div className="flex items-center">
        <AlertTriangle className="h-5 w-5 text-red-800 mr-2" />
        <p className="text-sm text-red-800">
          <span className="font-bold">Market Warning:</span> High volatility detected in banking sector. 
          Trade with caution. Remember the lessons of 1992.
        </p>
      </div>
    </div>
  );
}