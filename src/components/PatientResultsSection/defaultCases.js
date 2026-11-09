import after1Image from "../../assets/patientResults/home-patient-1-after.webp";
import after2Image from "../../assets/patientResults/home-patient-2-after.webp";
import after3Image from "../../assets/patientResults/home-patient-3-after.webp";
import before1Image from "../../assets/patientResults/home-patient-1-before.webp";
import before2Image from "../../assets/patientResults/home-patient-2-before.webp";
import before3Image from "../../assets/patientResults/home-patient-3-before.webp";
import comparison1Image from "../../assets/patientResults/home-patient-1-comparison.webp";
import comparison2Image from "../../assets/patientResults/home-patient-2-comparison.webp";
import comparison3Image from "../../assets/patientResults/home-patient-3-comparison.webp";

export const defaultPatientResults = [
  {
    id: 1,
    comparisonImage: comparison1Image,
    beforeImage: before1Image,
    afterImage: after1Image,
    quote: "I can eat comfortably again.",
  },
  {
    id: 2,
    comparisonImage: comparison2Image,
    beforeImage: before2Image,
    afterImage: after2Image,
    quote: "I feel like myself when I smile."
  },
  {
    id: 3,
    comparisonImage: comparison3Image,
    beforeImage: before3Image,
    afterImage: after3Image,
    quote: "Why didn't I do it sooner?",
  },
];
