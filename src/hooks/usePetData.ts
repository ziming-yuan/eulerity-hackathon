import { useEffect, useState } from 'react';
import { fetchPets } from '../utils/api';
import { Pet } from '../types/pet';

const usePetData = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
      const loadData = async () => {
          try {
              const data = await fetchPets();
              setPets(data);
          } catch (error: any) {
              setError(error.message);
          } finally {
              setLoading(false);
          }
      };

      loadData();
  }, []);

  return { pets, loading, error };
};

export default usePetData;

