import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/Logo-Resmi-Unhas.png" alt="Logo UNHAS" className="h-16 w-auto" />
              <div>
                <h3 className="text-xl font-bold">Lab Fisika Medik & Spektroskopi</h3>
                <p className="text-gray-400 text-sm">Universitas Hasanuddin</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Pusat unggulan pendidikan dan penelitian fisika medik dan spektroskopi yang mendukung teknologi medis dan optik berbasis sains dasar.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-red-400">Navigasi Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">Beranda</Link>
              </li>
              <li>
                <Link to="/anggota" className="text-gray-300 hover:text-red-400 transition-colors">Anggota</Link>
              </li>
              <li>
                <Link to="/galeri" className="text-gray-300 hover:text-red-400 transition-colors">Galeri</Link>
              </li>
              <li>
                <Link to="/kontak" className="text-gray-300 hover:text-red-400 transition-colors">Kontak</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-red-400">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span className="text-sm">Jl. Perintis Kemerdekaan Km.10, Tamalanrea, Makassar 90245</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5 text-red-400" />
                <span className="text-sm">+62 411 586 0154</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5 text-red-400" />
                <span className="text-sm">fisika.medik@unhas.ac.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2025 Laboratorium Fisika Medik & Spektroskopi - Universitas Hasanuddin. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;