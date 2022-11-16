import { useDispatch, useSelector } from "react-redux";
import CharacterCard from "./CharacterCard";
import { charUpdate } from "./features/character";

function Characters() {
    const characters = useSelector((state) => state.character.entities);
    const game = useSelector((state) => state.game.value);
    const dispatch = useDispatch();

    const availableChar = characters.filter((char) => char.defeated === false && char.map === game.map);

    function handlePatrol(char, is){
        if(!is){
        dispatch(charUpdate({
                id: char.id, 
                char_type: char.char_type, 
                damage: char.damage, 
                defeated: char.defeated,
                defense: char.defense, 
                health_level: char.health_level, 
                health_max: char.health_max, 
                map: char.map, 
                patrol: false, 
                points: char.points, 
                x: char.x, 
                y: char.y
            }));
        }else{
            dispatch(charUpdate({
                id: char.id, 
                char_type: char.char_type, 
                damage: char.damage, 
                defeated: char.defeated,
                defense: char.defense, 
                health_level: char.health_level, 
                health_max: char.health_max, 
                map: char.map, 
                patrol: true, 
                points: char.points, 
                x: char.x, 
                y: char.y
            }));
        }
    }

    return(
        <>
            {availableChar.map((char) => <CharacterCard key={char.id} char={char} handlePatrol={handlePatrol} /> )}
        </>
    )
}

export default Characters;