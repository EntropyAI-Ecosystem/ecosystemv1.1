import React from 'react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gold/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
              <span className="text-xl font-bold text-gold">EntropyAI</span>
            </div>
            <p className="text-gold/60">
              Building the future of decentralized artificial intelligence
            </p>
          </div>
          
          <div>
            <h3 className="text-gold font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-gold/60">
              <li><a href="#" className="hover:text-gold">Features</a></li>
              <li><a href="#" className="hover:text-gold">Pricing</a></li>
              <li><a href="#" className="hover:text-gold">Documentation</a></li>
              <li><a href="#" className="hover:text-gold">API Reference</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gold/60">
              <li><a href="#" className="hover:text-gold">About</a></li>
              <li><a href="#" className="hover:text-gold">Blog</a></li>
              <li><a href="#" className="hover:text-gold">Careers</a></li>
              <li><a href="#" className="hover:text-gold">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gold/60">
              <li><a href="#" className="hover:text-gold">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gold/20 mt-8 pt-8 text-center text-gold/60">
          <p>&copy; {currentYear} EntropyAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}