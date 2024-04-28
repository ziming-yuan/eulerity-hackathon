import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchPets } from "../utils/api";
import { Pet } from "../types/pet";

type PetContextType = {
  pets: Pet[];
  selectedPets: Set<string>;
  loading: boolean;
  error: string | null;
  search: string; // seach string
  setSearch: (search: string) => void;
  toggleSelection: (id: string) => void; // function to toggle selection of a pet
  selectAll: () => void;
  clearSelection: () => void;
  downloadSelected: () => void;
};

const PetContext = createContext<PetContextType>({
  pets: [],
  selectedPets: new Set(),
  loading: true,
  error: null,
  search: "",
  setSearch: () => {},
  toggleSelection: () => {},
  selectAll: () => {},
  clearSelection: () => {},
  downloadSelected: () => {},
});

export const PetProvider = ({ children }: { children: React.ReactNode }) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedPets, setSelectedPets] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPets();
        setPets(data);
        setFilteredPets(data);
      } catch (err: unknown) {
        const error = err as Error;
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (search.length === 0) {
      setFilteredPets(pets);
    } else {
      const lowerCaseSearch = search.toLowerCase();
      const filtered = pets.filter((pet) => {
        return (
          pet.title.toLowerCase().includes(lowerCaseSearch) ||
          pet.description.toLowerCase().includes(lowerCaseSearch)
        );
      });
      setFilteredPets(filtered);
    }
  }, [search, pets]);

  const toggleSelection = (id: string) => {
    setSelectedPets((prevSelectedPets) => {
      const newSelectedPets = new Set(prevSelectedPets);
      if (newSelectedPets.has(id)) {
        newSelectedPets.delete(id);
      } else {
        newSelectedPets.add(id);
      }
      return newSelectedPets;
    });
  };

  const selectAll = () => {
    const allIds = new Set<string>();
    pets.forEach((pet) => allIds.add(pet.id));
    setSelectedPets(allIds);
  };

  const clearSelection = () => {
    setSelectedPets(new Set());
  };

  const downloadSelected = () => {
    // Mock implementation
    console.log(Array.from(selectedPets));
  };

  const value = {
    pets: filteredPets,
    selectedPets,
    loading,
    error,
    search,
    setSearch,
    toggleSelection,
    selectAll,
    clearSelection,
    downloadSelected,
  };

  return <PetContext.Provider value={value}>{children}</PetContext.Provider>;
};

export const usePets = () => useContext(PetContext);
