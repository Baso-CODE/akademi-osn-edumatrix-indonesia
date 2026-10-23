import { BookOpen, ChevronRight, FileText, Lock } from "lucide-react";

export default function OSNSampleQuestion() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* 1. Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#04397D] mb-3 font-title">
            Contoh Soal OSN & Pembahasan
          </h2>
          <p className="text-gray-600 text-lg font-desc">
            Bukan soal biasa. Ini gambaran nyata level kompetisi OSN yang akan
            dihadapi.
          </p>
        </div>

        {/* 2. Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card Soal 1: Matematika */}
          <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
            {/* Header Soal */}
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-50 text-[#04397D] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  OSN Matematika
                </span>
                <span className="text-gray-600 text-md font-medium">
                  Soal No. 1
                </span>
              </div>

              <div className="font-serif text-lg text-gray-800 leading-relaxed mb-4">
                <p>
                  Diketahui bilangan bulat positif <strong>n</strong> memiliki
                  sifat bahwa jika digit terakhirnya dihapus, maka bilangan yang
                  tersisa adalah pembagi dari <strong>n</strong>.
                </p>
                <p className="mt-2">
                  Tentukan semua bilangan <strong>n</strong> yang mungkin jika{" "}
                  <strong>n</strong> lebih besar dari 10 dan kurang dari 100.
                </p>
              </div>
            </div>

            {/* Pembahasan (Locked) */}
            <div className="relative bg-gray-50 flex-1 p-6 border-t border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-[#04397D]" />
                <h3 className="font-bold text-[#04397D] text-md uppercase">
                  Preview Pembahasan
                </h3>
              </div>

              {/* Teks Pembahasan Awal */}
              <div className="text-gray-600 text-sm leading-relaxed space-y-2 filter blur-[0.5px] opacity-70 select-none">
                <p>
                  Misalkan bilangan n tersebut dapat ditulis sebagai 10a + b, di
                  mana b adalah digit terakhir (0 ≤ b ≤ 9) dan a adalah bilangan
                  yang tersisa setelah digit terakhir dihapus.
                </p>
                <p>
                  Berdasarkan soal, a harus membagi n. Artinya a membagi (10a +
                  b). Karena a jelas membagi 10a, maka syarat agar a membagi n
                  adalah a harus membagi b...
                </p>
              </div>

              {/* Overlay Lock */}
              <div className="absolute inset-0 bg-linear-to-t from-gray-50 via-gray-50/90 to-transparent flex flex-col items-center justify-center pt-8">
                <div className="bg-white p-3 rounded-full shadow-md mb-3 border border-gray-100">
                  <Lock className="w-6 h-6 text-[#04397D]" />
                </div>
                <p className="text-[#04397D] font-semibold text-sm mb-1">
                  Pembahasan Terkunci
                </p>
                <p className="text-gray-500 text-xs">
                  Bergabung untuk akses analisis lengkap
                </p>
              </div>
            </div>
          </div>

          {/* Card Soal 2: IPA / Fisika */}
          <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
            {/* Header Soal */}
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-50 text-[#04397D] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  OSN IPA (Fisika)
                </span>
                <span className="text-gray-600 text-md font-medium">
                  Soal No. 2
                </span>
              </div>

              <div className="font-serif text-lg text-gray-800 leading-relaxed mb-4">
                <p>
                  Sebuah benda bergerak lurus dengan percepatan tetap. Pada
                  detik ke-2 benda menempuh jarak 10 meter, dan pada detik ke-4
                  benda menempuh jarak 18 meter.
                </p>
                <p className="mt-2">
                  Berapakah jarak yang ditempuh benda tersebut pada detik ke-6?
                </p>
              </div>
            </div>

            {/* Pembahasan (Locked) */}
            <div className="relative bg-gray-50 flex-1 p-6 border-t border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-[#04397D]" />
                <h3 className="font-bold text-[#04397D] text-md uppercase">
                  Preview Pembahasan
                </h3>
              </div>

              {/* Teks Pembahasan Awal */}
              <div className="text-gray-600 text-sm leading-relaxed space-y-2 filter blur-[0.5px] opacity-70 select-none">
                <p>
                  Ini adalah kasus GLBB. Hati-hati, jarak pada &quot;detik
                  ke-n&quot; berbeda dengan jarak &quot;selama n detik&quot;.
                </p>
                <p>
                  Jarak pada detik ke-n dirumuskan sebagai Sn - S(n-1). Kita
                  bisa menggunakan persamaan posisi s = v0.t + 1/2.a.t^2.
                  Substitusikan t=2 dan t=1 untuk mendapatkan persamaan
                  pertama...
                </p>
              </div>

              {/* Overlay Lock */}
              <div className="absolute inset-0 bg-linear-to-t from-gray-50 via-gray-50/90 to-transparent flex flex-col items-center justify-center pt-8">
                <div className="bg-white p-3 rounded-full shadow-md mb-3 border border-gray-100">
                  <Lock className="w-6 h-6 text-[#04397D]" />
                </div>
                <p className="text-[#04397D] font-semibold text-sm mb-1">
                  Pembahasan Terkunci
                </p>
                <p className="text-gray-500 text-xs">
                  Bergabung untuk akses analisis lengkap
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CTA Section */}
        <div className="flex flex-col items-center">
          <button className="bg-[#04397D] hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <BookOpen className="w-5 h-5" />
            <span>Akses Bank Soal & Pembahasan Lengkap</span>
            <ChevronRight className="w-5 h-5" />
          </button>
          <p className="mt-4 text-gray-500 text-sm font-medium">
            Belajar logika penyelesaian soal secara bertahap bersama pembina OSN
          </p>
        </div>
      </div>
    </section>
  );
}
