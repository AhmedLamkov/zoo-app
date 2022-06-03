import { useCallback } from "react";
import { Animal as AnimalType, AnimalBreed } from "../../types";
import Button from "../Button";
import "./Animal.css";

interface Props {
  data: AnimalType;
  handleClickFree: (animalId: string) => void;
  handleClickFeed: (animalId: string) => void;
}

const Animal = ({ data, handleClickFeed, handleClickFree }: Props) => {
  const attributeName = AnimalBreed[data.breed];
  const attributeValue = data[attributeName];

  const onClickFeed = useCallback(() => {
    handleClickFeed(data.id)
  }, [data, handleClickFeed]);

  const onClickFree = useCallback(() => {
    handleClickFree(data.id)
  }, [data, handleClickFree]);

  return (
    <div className="animal">
      <p>Breed: {data.breed}</p>
      <p>{`${attributeName}: ${attributeValue}`}</p>
      <div className="animal__buttons">
        <Button text="Feed" color="green" onClick={onClickFeed}/>
        <Button text="Free" color="red" onClick={onClickFree}/>
      </div>
    </div>
  )
}

export default Animal;
