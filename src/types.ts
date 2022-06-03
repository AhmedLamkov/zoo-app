export enum AnimalBreed {
  Giraffe = 'height',
  Wolf = 'speed',
  Hippo = 'weight',
}

export interface Animal {
  id: string;
  breed: keyof typeof AnimalBreed;
  speed?: number;
  height?: number;
  weight?: number;
}