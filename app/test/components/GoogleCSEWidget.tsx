"use client";

import { useEffect } from "react";

interface GoogleCSEWidgetProps {
  showGoogleCSE: boolean;
}

export default function GoogleCSEWidget({
  showGoogleCSE,
}: GoogleCSEWidgetProps) {
  // Load Google Custom Search Engine script
  useEffect(() => {
    if (
      showGoogleCSE &&
      !document.querySelector('script[src*="cse.google.com"]')
    ) {
      const script = document.createElement("script");
      // Get CX ID from environment variable or use placeholder
      const cxId = process.env.NEXT_PUBLIC_GOOGLE_CX || "GOOGLE_CX";
      script.src = `https://cse.google.com/cse.js?cx=${cxId}`;
      script.async = true;
      document.head.appendChild(script); // Add custom CSS for better styling
      const style = document.createElement("style");
      style.innerHTML = `
        .gcse-search {
          font-family: inherit !important;
        }
        .gsc-control-cse {
          padding: 0 !important;
          border: none !important;
          background: transparent !important;
        }
        .gsc-search-box {
          margin-bottom: 24px !important;
        }
        .gsc-input-box {
          border: 2px solid #e5e7eb !important;
          border-radius: 12px !important;
          height: 56px !important;
          background: #f8fafc !important;
          transition: all 0.2s ease !important;
        }
        .gsc-input-box:focus-within {
          border-color: #3b82f6 !important;
          background: white !important;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
        }
        .gsc-input {
          padding: 16px 20px !important;
          font-size: 16px !important;
          background: transparent !important;
          border: none !important;
        }
        .gsc-search-button {
          border-radius: 12px !important;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%) !important;
          border: none !important;
          height: 56px !important;
          padding: 0 24px !important;
          font-weight: 600 !important;
          transition: all 0.2s ease !important;
        }
        .gsc-search-button:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3) !important;
        }
        .gsc-results .gsc-cursor-box {
          margin: 32px 0 !important;
          text-align: center !important;
        }
        .gsc-cursor-page {
          display: inline-block !important;
          margin: 0 4px !important;
          padding: 8px 12px !important;
          border-radius: 8px !important;
          background: #f3f4f6 !important;
          color: #374151 !important;
          text-decoration: none !important;
          transition: all 0.2s ease !important;
        }
        .gsc-cursor-page:hover {
          background: #e5e7eb !important;
          transform: translateY(-1px) !important;
        }
        .gsc-cursor-current-page {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%) !important;
          color: white !important;
        }
        .gsc-results .gsc-result {
          border: none !important;
          border-bottom: 1px solid #f3f4f6 !important;
          padding: 24px 0 !important;
          transition: all 0.2s ease !important;
        }
        .gsc-results .gsc-result:hover {
          background: #f9fafb !important;
          border-radius: 12px !important;
          padding: 24px 16px !important;
          margin: 0 -16px !important;
        }
        .gs-title a {
          color: #1d4ed8 !important;
          text-decoration: none !important;
          font-weight: 600 !important;
          font-size: 18px !important;
          line-height: 1.4 !important;
        }
        .gs-title a:hover {
          color: #3b82f6 !important;
        }
        .gs-snippet {
          color: #6b7280 !important;
          line-height: 1.6 !important;
          margin: 8px 0 !important;
          font-size: 14px !important;
        }
        .gs-visibleUrl {
          color: #059669 !important;
          font-size: 13px !important;
          font-weight: 500 !important;
        }
        
        /* Custom line-clamp utilities for our results */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Add loading animation */
        .gsc-loading-fade {
          animation: pulse 1.5s ease-in-out infinite !important;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `;
      document.head.appendChild(style);
    }
  }, [showGoogleCSE]);
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-white/95">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Google Custom Search
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full font-medium">
              Widget Oficial
            </span>
            <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
              Google Powered
            </span>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <div className="gcse-search" data-linktarget="_blank"></div>
        </div>
      </div>
    </div>
  );
}
