import { ContactCs } from "@/app/types/contact.type";

export const dummyContactCsData: ContactCs[] = [
  {
    id: 1,
    nama_cs: "Kak Nevita",
    nomor_hp: "+6285815095359",
    link_cta: `https://wa.me/6285815095359?text=${encodeURIComponent(
      "Halo Kak Nevita https://akademiosn.com/, Saya ingin tanya program belajar yang ada di Akademi OSN. Apa saja jenis program belajar dan pilihan paket.",
    )}`,
    isDeleted: false,
    weight: 1,
    display_order: 1,
  },
  {
    id: 2,
    nama_cs: "Kak Sari",
    nomor_hp: "+6285712217876",
    link_cta: `https://wa.me/6285712217876?text=${encodeURIComponent(
      "Halo Kak Sari https://akademiosn.com/, Saya ingin tanya program belajar yang ada di Akademi OSN. Apa saja jenis program belajar dan pilihan paket.",
    )}`,
    isDeleted: false,
    weight: 2,
    display_order: 2,
  },
  {
    id: 3,
    nama_cs: "Kak Asya",
    nomor_hp: "+6281215523902",
    link_cta: `https://wa.me/6281215523902?text=${encodeURIComponent(
      "Halo Kak Asya https://akademiosn.com/, Saya ingin tanya program belajar yang ada di Akademi OSN. Apa saja jenis program belajar dan pilihan paket.",
    )}`,
    isDeleted: false,
    weight: 3,
    display_order: 3,
  },
  {
    id: 4,
    nama_cs: "Kak Putri",
    nomor_hp: "+6285724543040",
    link_cta: `https://wa.me/6285724543040?text=${encodeURIComponent(
      "Halo Kak Putri https://akademiosn.com/, Saya ingin tanya program belajar yang ada di Akademi OSN. Apa saja jenis program belajar dan pilihan paket.",
    )}`,
    isDeleted: false,
    weight: 4,
    display_order: 4,
  },
];

// Dummy fallback Kak Putri jika data null
export const fallbackContact: ContactCs = {
  id: 1,
  nama_cs: "Kak Putri",
  nomor_hp: "+6285724543040",
  link_cta: `https://wa.me/6285724543040?text=${encodeURIComponent(
    "Halo Kak Putri https://akademiosn.com/, Saya ingin tanya program belajar yang ada di Akademi OSN. Apa saja jenis program belajar dan pilihan paket.",
  )}`,
  isDeleted: false,
  weight: 1,
  display_order: 1,
};
