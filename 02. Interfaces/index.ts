interface Cat {
  name: string;
  weight: number;
  age: number;
  gender: Gender;
  color?: string;
}

type Gender = 'male' | 'female' | 'other';
