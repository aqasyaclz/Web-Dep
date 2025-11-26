import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent } from '../components/ui/dialog';
import { X, ZoomIn } from 'lucide-react';

const Galeri = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galeriData = [
    { id: 1, src: "/1.jpg", title: "Kegiatan Penelitian 1", kategori: "Penelitian" },
    { id: 2, src: "/2.jpg", title: "Kegiatan Penelitian 2", kategori: "Penelitian" },
    { id: 3, src: "/3.jpg", title: "Fasilitas Lab 1", kategori: "Fasilitas" },
    { id: 4, src: "/4.jpg", title: "Fasilitas Lab 2", kategori: "Fasilitas" },
    { id: 5, src: "/5.jpg", title: "Workshop 1", kategori: "Kegiatan" },
    { id: 6, src: "/6.jpg", title: "Workshop 2", kategori: "Kegiatan" },
    { id: 7, src: "/7.jpg", title: "Seminar", kategori: "Kegiatan" },
    { id: 8, src: "/8.jpg", title: "Praktikum 1", kategori: "Praktikum" },
    { id: 9, src: "/9.jpg", title: "Praktikum 2", kategori: "Praktikum" },
    { id: 10, src: "/10.jpg", title: "Kegiatan Mahasiswa 1", kategori: "Kegiatan" },
    { id: 11, src: "/11.jpg", title: "Kegiatan Mahasiswa 2", kategori: "Kegiatan" }
  ];

  const kategoriBadgeColor = (kategori) => {
    switch(kategori) {
      case 'Penelitian': return 'bg-red-600';
      case 'Fasilitas': return 'bg-red-500';
      case 'Kegiatan': return 'bg-red-700';
      case 'Praktikum': return 'bg-red-800';
      default: return 'bg-red-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-red-50">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-600 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-white/20 text-white border-white/40 mb-4">Dokumentasi</Badge>
          <h1 className="text-5xl font-bold mb-4">Galeri Kegiatan</h1>
          <p className="text-xl text-red-50 max-w-3xl mx-auto">
            Dokumentasi kegiatan penelitian, praktikum, dan kegiatan laboratorium
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galeriData.map((item) => (
              <Card 
                key={item.id} 
                className="group relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-red-500"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Badge className={`${kategoriBadgeColor(item.kategori)} mb-2`}>
                        {item.kategori}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-red-100">
                        <ZoomIn className="w-4 h-4" />
                        <span>Klik untuk memperbesar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <Badge className={`${kategoriBadgeColor(selectedImage.kategori)} mb-2`}>
                  {selectedImage.kategori}
                </Badge>
                <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Info Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-700 to-red-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ingin Melihat Lebih Banyak?
          </h2>
          <p className="text-red-50 text-lg">
            Ikuti kegiatan kami dan jadilah bagian dari dokumentasi selanjutnya!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Galeri;