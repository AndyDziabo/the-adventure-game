import { useDispatch, useSelector } from "react-redux";
import { gameId, gameMap, gameArmorLevel, gameArmorMax, gameCoins, gameHealth, gameHealthMax, gameScore, gameXM, gameXP, gameYM, gameYP } from "./features/game";
import { updateId, updateHealthPacks, updateWeapon, updateItem1, updateItem2, updateItem3, updateItem4, updateItem5, updateItem6 } from "./features/inventory";
import { loadObjects } from "./features/gameItem";
import { loadCharacters } from "./features/character";
import { actionXP, actionYP, actionXM, actionYM} from "./features/action";
import selectImg from "./images/text_select.png";
import deleteImg from "./images/text_delete.png";

function SavedGameCard({ sGame, setSelectedGame, setToggleGameStart, handleDeleteGame }) {
    const action = useSelector((state) => state.action.value);
    const dispatch = useDispatch();

    function handleSelect() {
        document.documentElement.style.setProperty('--player-x', sGame.xP);
        document.documentElement.style.setProperty('--player-y', sGame.yP);
        document.documentElement.style.setProperty('--map-x', sGame.xM);
        document.documentElement.style.setProperty('--map-y', sGame.yM);

        if(sGame.inventory.item_1 !== 0){
            const updateItem = sGame.game_objects.filter((obj) => obj.id === sGame.inventory.item_1);
            dispatch(updateItem1(updateItem[0]));
        }
        if(sGame.inventory.item_2 !== 0){
            const updateItem = sGame.game_objects.filter((obj) => obj.id === sGame.inventory.item_2);
            dispatch(updateItem2(updateItem[0]));
        }
        if(sGame.inventory.item_3 !== 0){
            const updateItem = sGame.game_objects.filter((obj) => obj.id === sGame.inventory.item_3);
            dispatch(updateItem3(updateItem[0]));
        }
        if(sGame.inventory.item_4 !== 0){
            const updateItem = sGame.game_objects.filter((obj) => obj.id === sGame.inventory.item_4);
            dispatch(updateItem4(updateItem[0]));
        }
        if(sGame.inventory.item_5 !== 0){
            const updateItem = sGame.game_objects.filter((obj) => obj.id === sGame.inventory.item_5);
            dispatch(updateItem5(updateItem[0]));
        }
        if(sGame.inventory.item_6 !== 0){
            const updateItem = sGame.game_objects.filter((obj) => obj.id === sGame.inventory.item_6);
            dispatch(updateItem6(updateItem[0]));
        }
        
        dispatch(updateId(sGame.inventory.id));
        dispatch(updateWeapon(sGame.inventory.weapon));
        dispatch(updateHealthPacks(sGame.inventory.health_pack));
        dispatch(gameId(sGame.id));
        dispatch(gameMap(sGame.map));
        dispatch(gameArmorLevel(sGame.armor_level));
        dispatch(gameArmorMax(sGame.armor_max));
        dispatch(gameCoins(sGame.coins));
        dispatch(gameHealth(sGame.health_level));
        dispatch(gameHealthMax(sGame.health_max));
        dispatch(gameScore(sGame.score));
        dispatch(gameXM(sGame.xM));
        dispatch(gameXP(sGame.xP));
        dispatch(gameYM(sGame.yM));
        dispatch(gameYP(sGame.yP));
        sGame.game_objects.map((obj) => dispatch(loadObjects(obj)));
        sGame.characters.map((char) => dispatch(loadCharacters(char)));
        setSelectedGame(sGame);
        setToggleGameStart(true);

    }

    function handleDelete() {
        fetch(`/saved_games/${sGame.id}`, {
            method: 'DELETE',
        })
         .then(res => {
            if(res.ok){
                handleDeleteGame(sGame);
            }else{
                res.json().then(console.log)
            }
         })
    }

    return(
        <li>
            <div className="save-select" onClick={handleSelect}>
            <img src={selectImg} alt="select" />
            </div>
            <h3 className="save-name">{sGame.name} </h3>
            <div className="save-delete" onClick={handleDelete}>
                <img src={deleteImg} alt="delete" />
            </div>
        </li>
    )
}

export default SavedGameCard;