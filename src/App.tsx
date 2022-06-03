import React, { useCallback, useState } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import AnimalsList from './components/AnimalsList';
import Button from './components/Button';
import { Animal, AnimalBreed } from './types';


function App() {
  const [animals, setAnimals] = useState<Animal[]>([]);

  const handleClickCatch = useCallback(() => {
    const randomBreedIndex = Math.floor(Math.random() * 3);
    const randomAttributeValue = Math.floor(Math.random() * 5) + 1;
    const breeds = Object.keys(AnimalBreed);
    const breed = breeds[randomBreedIndex] as keyof typeof AnimalBreed;
    const attribute = AnimalBreed[breed];

    const newAnimal: Animal = {
      id: uuid(),
      breed,
      [attribute]: randomAttributeValue,
    }

    setAnimals(state => ([
      ...state,
      newAnimal,
    ]))

  }, []);

  const handleClickFeed = useCallback((animalId: string) => {
    const newAnimals = animals.map(animal => {
      if (animal.id === animalId) {
        const attributeName = AnimalBreed[animal.breed];
        return { ...animal, [attributeName]: (animal[attributeName] || 0) + 1 }
      }

      return animal;
    });

    setAnimals(newAnimals);
  }, [animals]);

  const handleClickFree = useCallback((animalId: string) => {
    const newAnimals = animals.filter(animal => animal.id !== animalId);
    setAnimals(newAnimals);
  }, [animals]);

  return (
    <div className="App">
      <Button text="Catch" color="orange" onClick={handleClickCatch} />
      <AnimalsList animals={animals} handleClickFeed={handleClickFeed} handleClickFree={handleClickFree} />
    </div>
  );
}

export default App;
