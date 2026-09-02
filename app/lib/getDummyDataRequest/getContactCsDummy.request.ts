import { ContactCs } from "@/app/types/contact.type";
import {
  dummyContactCsData,
  fallbackContact,
} from "../data/contactCSSingleDummy.data";

export async function getDataContactCsDummy(): Promise<ContactCs> {
  try {
    const activeCs = dummyContactCsData.filter((cs) => !cs.isDeleted);
    if (activeCs.length === 0) return fallbackContact;

    let lastIndex = -1;
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("single_cs_rotation_index");
      lastIndex = saved !== null ? parseInt(saved, 10) : -1;
      if (isNaN(lastIndex)) lastIndex = -1;
    }

    const nextIndex = (lastIndex + 1) % activeCs.length;

    if (typeof window !== "undefined") {
      localStorage.setItem("single_cs_rotation_index", nextIndex.toString());
    }

    return activeCs[nextIndex];
  } catch (error) {
    console.error("Error getting single rotated CS data:", error);
    return fallbackContact;
  }
}
