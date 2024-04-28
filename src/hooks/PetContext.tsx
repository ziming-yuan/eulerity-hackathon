

import React, {createContext, useContext, useState, useEffect} from 'react';
import { fetchPets } from '../utils/api';
import { Pet } from '../types/pet';

type PetContextType = {
    pets: Pet[];
    loading: boolean;
    error: string | null;
    search: string;
    setSearch: (search: string) => void;
};

const PetContext = createContext<PetContextType>(
  {
    pets: [],
    loading: true,
    error: null,
    search: '',
    setSearch: () => {}
  }
);

export const PetProvider = ({children}: {children: React.ReactNode}) => {
    const [pets, setPets] = useState<Pet[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
    const [search, setSearch] = useState<string>('');

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
        const filtered = pets.filter(pet => {
          return pet.title.toLowerCase().includes(lowerCaseSearch) || pet.description.toLowerCase().includes(lowerCaseSearch);
        });
        setFilteredPets(filtered);
      }
    }, [search, pets]);

    const curr: PetContextType = { pets: filteredPets, loading, error, search, setSearch };

    return (
      <PetContext.Provider value={curr}>
        {children}
      </PetContext.Provider>
    );
};

export const usePets = () => useContext(PetContext);