import { CharacterCard } from "./CharacterCard";
import type { CharacterT } from "../../types";
import "./style.css";

export const CharacterList = ({ characters }: { characters: CharacterT[] }) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.url} character={character} />
      ))}
    </div>
  );
};

