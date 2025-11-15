import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const TopNav: React.FC = () => {
  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Product Name */}
          <div className="flex items-center gap-3">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img src="/logo-clouddesk.png" alt="CloudDesk EDU" className="w-12 h-12 object-contain" />
            </Link>
          </div>

          {/* Center: Optional Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#product" className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-3 py-2 rounded-md transition-colors">
              Product
            </a>
            <a href="#use-cases" className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-3 py-2 rounded-md transition-colors">
              Use Cases
            </a>
            <a href="#docs" className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-3 py-2 rounded-md transition-colors">
              Documentation
            </a>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <Link to="/dashboard">
              <Button variant="primary" size="md">
                Open Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
