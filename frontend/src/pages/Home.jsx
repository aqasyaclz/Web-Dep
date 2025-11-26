import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Microscope, FlaskConical, Radiation, Lightbulb, Target, Users, BookOpen, Award } from 'lucide-react';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const penelitianData = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Analisis Kualitas Citra Medis",
      desc: "Analisis kualitas citra medis (CT-scan, X-ray, MRI) dan optimasi parameter pemeriksaan"
    },
    {
      icon: <Radiation className="w-8 h-8" />,
      title: "Simulasi & Pengukuran Dosis Radiasi",
      desc: "Simulasi dan pengukuran dosis radiasi pada radioterapi atau pemeriksaan radiodiagnostik"
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Instrumentasi Optik & Spektroskopi",
      desc: "Pengembangan instrumentasi optik dan spektroskopi untuk aplikasi biomedis"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Karakterisasi Material Medis",
      desc: "Karakterisasi material atau phantom medis untuk proteksi radiasi atau imaging medis"
    }
  ];

  const fasilitasData = [
    { icon: <Microscope className="w-6 h-6" />, title: "Lab Optik & Spektroskopi", desc: "Fasilitas riset spektroskopi dan optik medis" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Ruang Praktikum", desc: "Praktikum fisika radiodiagnostik dan radioterapi" },
    { icon: <FlaskConical className="w-6 h-6" />, title: "Peralatan Analisis", desc: "Spektroskopi, phantom medis, simulasi radiasi" },
    { icon: <Users className="w-6 h-6" />, title: "Ruang Kolaborasi", desc: "Kolaborasi riset mahasiswa dan dosen" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/bg.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-red-700/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Badge className="bg-red-500/20 text-white border-red-400 mb-6 px-4 py-2 text-sm">
            Departemen Fisika FMIPA UNHAS
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Laboratorium Fisika Medik & Spektroskopi
          </h1>
          <p className="text-xl md:text-2xl text-red-50 mb-8 max-w-3xl mx-auto leading-relaxed">
            Pusat unggulan pendidikan dan penelitian fisika medik dan spektroskopi di Universitas Hasanuddin
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              className="bg-white text-red-700 hover:bg-red-50 px-8 py-6 text-lg font-semibold shadow-xl"
              onClick={() => document.getElementById('profil').scrollIntoView({ behavior: 'smooth' })}
            >
              Jelajahi Lebih Lanjut
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/kontak">
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              >
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Profil Section */}
      <section id="profil" className="py-20 px-4 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Badge className="bg-red-600 text-white mb-4">Profil Program</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Laboratorium</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Program ini hadir sebagai bagian dari Program Studi S1 Fisika (UNHAS) yang memiliki peminatan khusus dalam <strong className="text-red-700">Fisika Medik dan Spektroskopi</strong>.
                </p>
                <p>
                  Bidang kajian meliputi "Fisika Optik & Spektroskopi (FOS)" dan "Fisika Medik (FM)" yang bertujuan mengembangkan pendidikan, penelitian dan aplikasi dalam bidang fisika yang berkaitan dengan teknologi medis.
                </p>
                <p className="text-red-700 font-semibold">
                  Fokus: Radiodiagnostik, Radioterapi, Spektroskopi & Optik Medis
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-400 rounded-lg blur opacity-20"></div>
                <img 
                  src="/Laboratorium.png" 
                  alt="Laboratorium" 
                  className="relative rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Penelitian Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-red-600 text-white mb-4">Penelitian S1</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Jenis Penelitian</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contoh penelitian yang dapat dilakukan di tingkat sarjana (S1)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {penelitianData.map((item, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-red-500 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Visi & Misi</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/15 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-8 h-8 text-yellow-300" />
                  <h3 className="text-2xl font-bold">Visi</h3>
                </div>
                <p className="text-red-50 leading-relaxed">
                  Menjadi pusat unggulan di tingkat nasional dan internasional dalam pendidikan, penelitian, dan penerapan Fisika Medik dan Spektroskopi yang mendukung teknologi medis dan optik berbasis sains dasar, di lingkungan Universitas Hasanuddin.
                </p>
              </CardContent>
            </Card>

            {/* Misi */}
            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/15 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-green-300" />
                  <h3 className="text-2xl font-bold">Misi</h3>
                </div>
                <ul className="space-y-3 text-red-50">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300 mt-1">•</span>
                    <span>Menyelenggarakan pendidikan S1 berkualitas dalam Fisika Medik & Spektroskopi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300 mt-1">•</span>
                    <span>Melaksanakan penelitian dengan aplikasi nyata di bidang medis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300 mt-1">•</span>
                    <span>Membangun kemitraan dengan institusi medis dan industri</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fasilitas Section */}
      <section className="py-20 px-4 bg-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-red-600 text-white mb-4">Fasilitas</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fasilitas Laboratorium</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fasilitasData.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-red-600"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-700 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bergabunglah dengan Kami
          </h2>
          <p className="text-xl text-red-50 mb-8">
            Mari bersama-sama mengembangkan ilmu fisika medik dan spektroskopi untuk masa depan yang lebih baik
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/anggota">
              <Button className="bg-white text-red-700 hover:bg-red-50 px-8 py-6 text-lg font-semibold">
                Lihat Tim Kami
              </Button>
            </Link>
            <Link to="/galeri">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Lihat Galeri
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;