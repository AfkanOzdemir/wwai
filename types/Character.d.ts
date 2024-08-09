interface CharacterProps {
  id: number;
  category: { id: number; name: string }[];
  name: string;
  image: string;
  shortDescription: string;
  description: string;
  properties: { id: number; name: string; value: number }[];
}
