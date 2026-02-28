import {
  Award,
  BrainCircuit,
  FileText,
  MapPin,
  PenTool,
  School,
  Timer,
  Trophy,
} from "lucide-react";

const OsnFlowComponent = () => {
  const stages = [
    {
      id: 1,
      title: "Seleksi Sekolah",
      icon: <School className="w-6 h-6" />,
      desc: "Tahap awal penyaringan siswa terbaik di tingkat satuan pendidikan.",
    },
    {
      id: 2,
      title: "OSN Tingkat Kab/Kota",
      icon: <MapPin className="w-6 h-6" />,
      desc: "Kompetisi antar siswa terpilih dalam satu wilayah Kabupaten/Kota.",
    },
    {
      id: 3,
      title: "OSN Tingkat Provinsi",
      icon: <Award className="w-6 h-6" />,
      desc: "Seleksi ketat juara kota untuk mewakili provinsi ke tingkat nasional.",
    },
    {
      id: 4,
      title: "OSN Tingkat Nasional",
      icon: <Trophy className="w-6 h-6" />,
      desc: "Puncak kompetisi memperbutkan medali emas, perak, dan perunggu.",
    },
  ];

  const questionFormats = [
    {
      title: "Pilihan Ganda Kompleks",
      icon: <BrainCircuit className="w-8 h-8 text-[#04397D]" />,
      desc: "Soal tidak sekadar memilih jawaban, tetapi menuntut logika, eliminasi opsi yang salah, dan pemahaman konsep mendalam.",
    },
    {
      title: "Isian Singkat",
      icon: <Timer className="w-8 h-8 text-[#04397D]" />,
      desc: "Menuntut ketepatan hasil akhir dan kecepatan berpikir tanpa bantuan opsi jawaban. Akurasi adalah kunci.",
    },
    {
      title: "Esai Analitis",
      icon: <FileText className="w-8 h-8 text-[#04397D]" />,
      desc: "Menguji kemampuan penalaran sistematis, pembuktian argumen, dan penyajian solusi yang terstruktur.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* 1. Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-title font-bold text-[#04397D] mb-4">
            Rangkaian Tes & Format Soal OSN
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-desc">
            Memahami tahapan seleksi dan karakteristik soal sejak awal adalah
            langkah pertama menuju medali.
          </p>
        </div>

        {/* 2. Tahapan OSN (Flow) */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stages.map((stage, index) => (
              <div key={stage.id} className="relative group">
                <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl h-full hover:border-[#04397D] transition-colors duration-300 bg-white shadow-sm">
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[#04397D] mb-4 group-hover:bg-[#04397D] group-hover:text-white transition-colors duration-300">
                    {stage.icon}
                  </div>

                  {/* Step Number */}
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">
                    Tahap 0{stage.id}
                  </span>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#04397D] mb-3 font-title">
                    {stage.title}
                  </h3>
                  <p className="text-md text-gray-800 leading-relaxed font-desc">
                    {stage.desc}
                  </p>
                </div>

                {/* Connector Arrow (Desktop Only) */}
                {index < stages.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="#04397D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3. Format Soal (Cards) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-[#04397D] rounded-full"></div>
            <h3 className="text-2xl font-bold text-[#04397D] font-title">
              Karakteristik & Format Soal
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {questionFormats.map((format, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start">
                <div className="mb-6 p-3 bg-blue-50 rounded-lg">
                  {format.icon}
                </div>
                <h4 className="text-xl font-bold text-[#04397D] mb-3 font-title">
                  {format.title}
                </h4>
                <p className="text-gray-600 leading-relaxed font-desc">
                  {format.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Durasi & Tingkat Kesulitan (Info Block) */}
        <div className="bg-[#04397D] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <PenTool className="w-6 h-6 text-blue-200" />
              <span className="font-bold tracking-wide text-blue-100 uppercase text-sm font-title">
                Tingkat Kesulitan
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 font-title">
              Dominasi Soal HOTS (High Order Thinking Skills)
            </h3>
            <p className="text-blue-100 text-base leading-relaxed opacity-90 font-desc">
              Durasi ujian bervariasi mulai dari 2 hingga 5 jam tergantung
              jenjang, dengan tingkat kesulitan yang meningkat eksponensial dari
              tingkat kota hingga nasional.
            </p>
          </div>

          <div className="shrink-0">
            <div className="inline-flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 min-w-50">
              <span className="text-4xl font-bold mb-1">C5 - C6</span>
              <span className="text-sm font-medium text-blue-200">
                Level Kognitif
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OsnFlowComponent;
