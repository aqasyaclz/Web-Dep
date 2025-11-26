import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Kontak = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    subjek: '',
    pesan: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih, kami akan segera menghubungi Anda.",
    });
    setFormData({ nama: '', email: '', subjek: '', pesan: '' });
  };

  const kontakInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat",
      content: "Departemen Fisika FMIPA Universitas Hasanuddin\nJl. Perintis Kemerdekaan Km.10, Tamalanrea\nMakassar, Sulawesi Selatan 90245"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon",
      content: "+62 411 586 0154\n+62 811 4567 8901"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "fisika.medik@unhas.ac.id\nlabfms@unhas.ac.id"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      content: "Senin - Jumat: 08:00 - 16:00 WITA\nSabtu: 08:00 - 12:00 WITA\nMinggu: Tutup"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50 to-white">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-600 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-white/20 text-white border-white/40 mb-4">Hubungi Kami</Badge>
          <h1 className="text-5xl font-bold mb-4">Kontak</h1>
          <p className="text-xl text-red-50 max-w-3xl mx-auto">
            Kami siap membantu Anda. Jangan ragu untuk menghubungi kami
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {kontakInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-t-4 border-red-600">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{info.title}</h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <Card className="shadow-xl border-2 hover:border-red-500 transition-colors">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Badge className="bg-red-600 text-white mb-3">Formulir Kontak</Badge>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Kirim Pesan</h2>
                  <p className="text-gray-600">Isi formulir di bawah ini dan kami akan segera merespons</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                    <Input 
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      required
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subjek</label>
                    <Input 
                      name="subjek"
                      value={formData.subjek}
                      onChange={handleChange}
                      placeholder="Subjek pesan"
                      required
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Pesan</label>
                    <Textarea 
                      name="pesan"
                      value={formData.pesan}
                      onChange={handleChange}
                      placeholder="Tulis pesan Anda di sini..."
                      rows={5}
                      required
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white py-6 text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="shadow-xl overflow-hidden border-2 hover:border-red-500 transition-colors">
              <div className="h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.7373847820855!2d119.49283207475943!3d-5.135266451815842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee329da04b3e1%3A0x8d62db38e678f4c4!2sFakultas%20Matematika%20dan%20Ilmu%20Pengetahuan%20Alam!5e0!3m2!1sid!2sid!4v1732587234567!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '600px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Lab Fisika Medik & Spektroskopi"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-700 to-red-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Kunjungi Laboratorium Kami
          </h2>
          <p className="text-red-50 text-lg">
            Kami menyambut kunjungan dari mahasiswa, peneliti, dan mitra industri
          </p>
        </div>
      </section>
    </div>
  );
};

export default Kontak;