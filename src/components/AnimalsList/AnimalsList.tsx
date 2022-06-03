import type { Animal as AnimalType } from "../../types";
import Animal from "../Animal/Animal";
import "./AnimalsList.css";

interface Props {
  animals: AnimalType[];
  handleClickFree: (animalId: string) => void;
  handleClickFeed: (animalId: string) => void;
}

const AnimalsList = ({ animals, handleClickFeed, handleClickFree }: Props) => {
  return (
    <div className="animals-list">
      {animals.map(animal => (
        <Animal data={animal} key={animal.id} handleClickFeed={handleClickFeed} handleClickFree={handleClickFree} />
      ))}
    </div>
  )
}

export default AnimalsList;
