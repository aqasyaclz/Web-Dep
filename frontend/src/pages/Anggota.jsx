import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Mail, Award, GraduationCap } from 'lucide-react';

const Anggota = () => {
  const anggotaData = [
    {
      nama: "Dr. Kepala Laboratorium",
      jabatan: "Kepala Laboratorium",
      foto: "/kepala_lab.jpg",
      bidang: "Fisika Medik",
      email: "kepala.lab@unhas.ac.id"
    },
    {
      nama: "Dr. Dosen 1",
      jabatan: "Dosen Senior",
      foto: "/dosen-1.jpg",
      bidang: "Spektroskopi",
      email: "dosen1@unhas.ac.id"
    }
  ];

  const mahasiswaData = [
    { nama: "Ahmad Fauzi", foto: "/1.jpg", angkatan: "2021" },
    { nama: "Siti Nurhaliza", foto: "/2.jpg", angkatan: "2021" },
    { nama: "Budi Santoso", foto: "/3.jpg", angkatan: "2022" },
    { nama: "Dewi Lestari", foto: "/4.jpg", angkatan: "2022" },
    { nama: "Eko Prasetyo", foto: "/5.jpg", angkatan: "2022" },
    { nama: "Fitri Handayani", foto: "/6.jpg", angkatan: "2023" },
    { nama: "Gilang Ramadhan", foto: "/7.jpg", angkatan: "2023" },
    { nama: "Hani Pertiwi", foto: "/8.jpg", angkatan: "2023" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50 to-white">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-600 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-white/20 text-white border-white/40 mb-4">Tim Kami</Badge>
          <h1 className="text-5xl font-bold mb-4">Anggota Laboratorium</h1>
          <p className="text-xl text-red-50 max-w-3xl mx-auto">
            Tim dosen dan mahasiswa yang berdedikasi dalam penelitian fisika medik dan spektroskopi
          </p>
        </div>
      </section>

      {/* Dosen Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-red-600 text-white mb-4">Dosen & Peneliti</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tim Pengajar</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {anggotaData.map((dosen, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-red-500">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={dosen.foto} 
                    alt={dosen.nama}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Badge className="bg-red-600 mb-2">{dosen.jabatan}</Badge>
                    <h3 className="text-2xl font-bold mb-1">{dosen.nama}</h3>
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <GraduationCap className="w-5 h-5 text-red-600" />
                      <span className="font-semibold">Bidang:</span>
                      <span>{dosen.bidang}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail className="w-5 h-5 text-red-600" />
                      <a href={`mailto:${dosen.email}`} className="text-red-600 hover:underline">
                        {dosen.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mahasiswa Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-red-600 text-white mb-4">Peneliti Muda</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mahasiswa Peneliti</h2>
            <p className="text-gray-600 text-lg">Mahasiswa aktif yang terlibat dalam penelitian laboratorium</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {mahasiswaData.map((mhs, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={mhs.foto} 
                    alt={mhs.nama}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">{mhs.nama}</h3>
                  <Badge variant="outline" className="border-red-300 text-red-600 text-xs">
                    Angkatan {mhs.angkatan}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-700 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ingin Bergabung dengan Tim Kami?
          </h2>
          <p className="text-red-50 text-lg mb-6">
            Kami selalu membuka kesempatan bagi mahasiswa yang tertarik dengan penelitian fisika medik dan spektroskopi
          </p>
        </div>
      </section>
    </div>
  );
};

export default Anggota;