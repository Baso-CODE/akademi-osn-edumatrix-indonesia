import { dummyContactCsData } from "@/app/components/data/contactCs.dummyData";
import { ContactCs } from "@/app/types/contact.type";

export async function getAllContactCsIsDeleted(): Promise<ContactCs[]> {
  try {
    const activeContacts = dummyContactCsData.filter((c) => !c.isDeleted);
    if (activeContacts.length === 0) return [];

    const PAIR_SIZE = 2;
    const totalBatches = Math.ceil(activeContacts.length / PAIR_SIZE);

    let lastBatchIndex = -1;
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cs_pair_rotation_index");
      lastBatchIndex = saved !== null ? parseInt(saved, 10) : -1;
      if (isNaN(lastBatchIndex)) lastBatchIndex = -1;
    }

    const nextBatchIndex = (lastBatchIndex + 1) % totalBatches;

    if (typeof window !== "undefined") {
      localStorage.setItem("cs_pair_rotation_index", nextBatchIndex.toString());
    }

    const startIndex = nextBatchIndex * PAIR_SIZE;
    return activeContacts.slice(startIndex, startIndex + PAIR_SIZE);
  } catch (error) {
    console.error("Error getting rotated dummy CS data:", error);
    return dummyContactCsData.slice(0, 2);
  }
}
