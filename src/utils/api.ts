export const fetchPets = async () => {
  try {
    const response = await fetch('https://eulerity-hackathon.appspot.com/pets')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error;
  }
}