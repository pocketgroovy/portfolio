import type { ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LayoutWrapperProps {
  children: ReactNode;
  showFullHeader?: boolean;
}

export default function LayoutWrapper({ children, showFullHeader = false }: LayoutWrapperProps): ReactElement {
  if (showFullHeader) {
    // Return children with full header for projects page
    return <>{children}</>;
  }

  // Simple header for other pages
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              PocketGroovy
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/projects" className="text-gray-300 hover:text-cyan-400 transition-colors">Projects</Link>
              <Link to="/experience" className="text-gray-300 hover:text-cyan-400 transition-colors">Experience</Link>
              <Link to="/service" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/aboutMe" className="text-gray-300 hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/contacts" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="text-white">
        {children}
      </div>
    </div>
  );
}