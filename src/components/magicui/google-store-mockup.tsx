import React, { useState } from 'react';

const GoogleStoreMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchFocused, setSearchFocused] = useState(false);
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleLike = (id: number) => {
    if (likedItems.includes(id)) {
      setLikedItems(likedItems.filter(item => item !== id));
    } else {
      setLikedItems([...likedItems, id]);
    }
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col bg-[#121212] text-white h-full w-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center ml-4 cursor-pointer hover:text-gray-200 transition-colors ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
        <div className="cursor-pointer mr-4 relative hover:text-[#4285F4] transition-colors duration-300">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black">
            <img src="/transparent.png" alt="logo" className="w-5 h-5" />
          </div>        
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="px-4 py-3">
        <div 
          className={`relative transition-all duration-300 ${searchFocused ? 'scale-105' : ''}`}
          onClick={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        >
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <div className={`w-full h-10 bg-[#2a2a2a] rounded-full pl-10 flex items-center text-gray-400 cursor-text transition-colors ${searchFocused ? 'border border-[#4285F4] text-white' : 'border border-transparent'}`}>
            {searchFocused ? 'Search for products...' : 'Search Google Store'}
          </div>
          {searchFocused && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          )}
        </div>
      </div>
      
      {/* Nav Tabs - Interactive */}
      <div className="flex border-b border-gray-800 px-4">
        {['ALL', 'SERVICES', 'STATS', 'FAQ'].map(tab => (
          <div 
            key={tab}
            className={`px-4 py-2 text-xs font-medium cursor-pointer ${
              activeTab === tab ? 'text-[#4285F4] border-b-2 border-[#4285F4]' : 'text-gray-400'
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      
      {/* Content based on active tab */}
      <div className={activeTab === 'ALL' ? 'block' : 'hidden'}>
        {/* Product Card 1 */}
        <div className="p-4 bg-[#1e1e1e] mx-3 my-3 rounded-lg">
          <div className="flex items-start">
            {/* Left side - Profile and info */}
            <div className="flex-1 mr-2">
              <div className="w-12 h-12 bg-gray-700 rounded-full mb-2"></div>
              <div className="w-32 h-4 bg-gray-600 rounded mb-2"></div>
              <div className="w-40 h-4 bg-gray-700 rounded mb-4"></div>
              
              {/* Product details */}
              <div className="w-2/3 h-3 bg-gray-700 rounded mb-2"></div>
              <div className="w-2/3 h-3 bg-gray-700 rounded mb-2"></div>

              
              {/* Star rating */}
              <div className="flex mt-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            {/* Right side - Product image */}
            <div className="w-32 h-36 bg-[#2a2a2a] rounded-md flex items-center justify-center">
              <div className="relative w-28 h-28">
                <div style={{ 
                  position: 'absolute', 
                  width: '100%', 
                  height: '100%', 
                  backgroundImage: 'url(/products/shoe.png)', 
                  backgroundPosition: 'center center', 
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES Tab Content */}
      <div className={`p-4 ${activeTab === 'SERVICES' ? 'block' : 'hidden'}`}>
        <div className="bg-[#1e1e1e] rounded-lg p-4 mb-3">
          <div className="text-[#4285F4] text-sm font-medium mb-2">Google Merchant Center</div>
          <div className="text-white text-base font-medium mb-2">Expert GMC Management</div>
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex items-center text-xs text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#34A853] mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Creating GMC from scratch</span>
            </div>
            <div className="flex items-center text-xs text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#34A853] mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fixing GMC suspensions</span>
            </div>
            <div className="flex items-center text-xs text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#34A853] mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Identity verification</span>
            </div>
            <div className="flex items-center text-xs text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#34A853] mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Store design by experts</span>
            </div>
          </div>
        </div>
        
        <div className="bg-[#1e1e1e] rounded-lg p-4">
          <div className="text-[#EA4335] text-sm font-medium mb-2">Business Growth</div>
          <div className="text-white text-base font-medium mb-2">Scaling Your Business</div>
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex items-center text-xs text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FBBC05] mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Reinstated, stronger GMCs</span>
            </div>
            <div className="flex items-center text-xs text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FBBC05] mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Professionally designed stores</span>
            </div>
            <div className="flex items-center text-xs text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FBBC05] mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Long-term business success</span>
            </div>
            <div className="flex items-center text-xs text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FBBC05] mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Higher success rates</span>
            </div>
          </div>
        </div>
      </div>

      {/* STATS Tab Content */}
      <div className={`p-4 ${activeTab === 'STATS' ? 'block' : 'hidden'}`}>
        <div className="text-center mb-4">
          <div className="text-base font-medium text-gray-200">Our Performance</div>
          <div className="text-xs text-gray-400">Proven results for businesses</div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#1e1e1e] rounded-lg p-3 flex flex-col items-center">
            <div className="text-lg font-bold text-[#4285F4]">$10M+</div>
            <div className="text-xs text-gray-400">Revenue Generated</div>
          </div>
          <div className="bg-[#1e1e1e] rounded-lg p-3 flex flex-col items-center">
            <div className="text-lg font-bold text-[#4285F4]">750+</div>
            <div className="text-xs text-gray-400">GMCs Managed</div>
          </div>
          <div className="bg-[#1e1e1e] rounded-lg p-3 flex flex-col items-center">
            <div className="text-lg font-bold text-[#4285F4]">120+</div>
            <div className="text-xs text-gray-400">Active Clients</div>
          </div>
          <div className="bg-[#1e1e1e] rounded-lg p-3 flex flex-col items-center">
            <div className="text-lg font-bold text-[#4285F4]">95%</div>
            <div className="text-xs text-gray-400">Client Retention</div>
          </div>
        </div>
        
        <div className="mt-4 bg-[#1e1e1e] rounded-lg p-3">
          <div className="text-sm font-medium text-gray-200 mb-2">Service Timeline</div>
          <div className="flex items-center text-xs text-gray-300 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#34A853] mr-2"></div>
            <span>GMC Creation: 1-3 business days</span>
          </div>
          <div className="flex items-center text-xs text-gray-300">
            <div className="w-3 h-3 rounded-full bg-[#FBBC05] mr-2"></div>
            <span>Reinstatement Period: 21 days</span>
          </div>
        </div>
      </div>

      {/* FAQ Tab Content */}
      <div className={`p-4 ${activeTab === 'FAQ' ? 'block' : 'hidden'}`}>
        <div className="bg-[#1e1e1e] rounded-lg p-3 mb-3">
          <div className="text-sm font-medium text-white mb-1">How does your GMC service help my business?</div>
          <div className="text-xs text-gray-300">Our GMC solutions optimize your Google Merchant Center accounts, ensuring approval, better ad performance, and higher conversions—leading to increased revenue.</div>
        </div>
        
        <div className="bg-[#1e1e1e] rounded-lg p-3 mb-3">
          <div className="text-sm font-medium text-white mb-1">What if my GMC gets suspended?</div>
          <div className="text-xs text-gray-300">If your GMC faces misrepresentation within 7 days of reinstatement, we fix it for free. After that period, a standard service fee applies.</div>
        </div>
        
        <div className="bg-[#1e1e1e] rounded-lg p-3">
          <div className="text-sm font-medium text-white mb-1">How long does it take to set up a GMC?</div>
          <div className="text-xs text-gray-300">It typically takes 3-5 business days to create a new GMC account, followed by a 21-day monitoring period for reinstatement if needed.</div>
        </div>
      </div>
      
      {/* User profile start */}
      <div className="mt-auto p-3 border-t border-gray-800 flex items-center justify-between">
        <div className="w-8 h-8 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-600 transition-colors"></div>
        <div className="flex space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 cursor-pointer hover:text-[#4285F4] transition-colors">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 cursor-pointer hover:text-[#4285F4] transition-colors">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 cursor-pointer hover:text-[#4285F4] transition-colors">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GoogleStoreMockup; 