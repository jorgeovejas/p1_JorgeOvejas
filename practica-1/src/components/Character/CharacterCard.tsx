import type { CharacterT } from "../../types";
import "./style.css";

export const CharacterCard = ({ character }: { character: CharacterT }) => {
  return (
    <div className="character-card">
      <h2 className="character-name">{character.name}</h2>
      
      <div className="character-info">
        <p><strong>Altura:</strong> {character.height} cm</p>
        <p><strong>Peso:</strong> {character.mass} kg</p>
        <p><strong>Color de pelo:</strong> {character.hair_color}</p>
        <p><strong>Color de piel:</strong> {character.skin_color}</p>
        <p><strong>Color de ojos:</strong> {character.eye_color}</p>
        <p><strong>Año de nacimiento:</strong> {character.birth_year}</p>
        <p><strong>Género:</strong> {character.gender}</p>
      </div>

      <div className="character-stats">
        <span> {character.films.length} películas</span>
        <span> {character.vehicles.length} vehículos</span>
        <span> {character.starships.length} naves</span>
      </div>
    </div>
  );
};
