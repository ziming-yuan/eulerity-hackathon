import { v4 as uuidv4 } from "uuid";
import { PetInit } from "../types/pet";

export const fetchPets = async () => {
  try {
    const response = await fetch("https://eulerity-hackathon.appspot.com/pets");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const data = await response.json();
      return data.map((pet: PetInit) => ({ ...pet, id: uuidv4() }));
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
