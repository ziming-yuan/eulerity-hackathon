export interface PetInit {
  title: string;
  description: string;
  url: string;
  created: string;
}

export interface Pet extends PetInit {
  id: string;
}
