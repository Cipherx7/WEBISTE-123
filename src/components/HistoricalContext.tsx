import React from 'react';
import { History } from 'lucide-react';

export function HistoricalContext() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <History className="h-6 w-6 text-red-800" />
        <h2 className="text-xl font-bold text-gray-900">The Big Bull of Dalal Street</h2>
      </div>
      <div className="prose prose-red">
        <p className="text-gray-600">
          Harshad Mehta (1954-2001), known as the &quot;Big Bull of Dalal Street,&quot; 
          orchestrated one of India&apos;s biggest financial scandals in 1992. Worth ₹30,000 crore 
          (US$27 billion in 2023), the scandal exposed critical vulnerabilities in India&apos;s 
          banking and stock market systems.
        </p>
        <div className="mt-4 p-4 bg-red-50 rounded-md">
          <h3 className="text-red-800 font-semibold mb-2">Key Facts:</h3>
          <ul className="list-disc pl-4 text-gray-600">
            <li>Manipulated stocks using fraudulent bank receipts</li>
            <li>Scandal valued at ₹100 billion on the Bombay Stock Exchange</li>
            <li>Led to major reforms in Indian financial markets</li>
            <li>Convicted of 4 out of 27 criminal charges</li>
          </ul>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          This historical simulation allows you to experience stock trading in the context of 
          1992&apos;s volatile market conditions. Trade responsibly.
        </p>
      </div>
    </div>
  );
}