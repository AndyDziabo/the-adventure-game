import { useDispatch, useSelector } from "react-redux";
import { updateHealthPacks, updateItem1, updateItem2, updateItem3, updateItem4, updateItem5, updateItem6 } from "./features/inventory";
import { gameCoins, gameScore } from "./features/game";
import { objUpdate } from "./features/gameItem";
import ObjectCard from "./ObjectCard";

function Objects() {    
    const game = useSelector((state) => state.game.value);
    const inventory = useSelector((state) => state.inventory.value);
    const gameObjects = useSelector((state) => state.gameItem.entities);
    const dispatch = useDispatch();
    const availableObjs = gameObjects.filter((gameObject) => gameObject.collected === false && gameObject.map === game.map);

    function handleCollect(item){
        if(item.object_type === "coin"){
            const addCoin = game.coins + 5;
            dispatch(gameCoins(addCoin));
        }else if(item.object_type === "health"){
            const addHealth = inventory.healthPacks + 1;
            dispatch(updateHealthPacks(addHealth));
        }else{
            if(inventory.item1.id === 0){
                console.log("item1: ", item)
                dispatch(updateItem1(item));
            }else if(inventory.item2.id === 0){
                dispatch(updateItem2(item));
            }else if(inventory.item3.id === 0){
                dispatch(updateItem3(item));
            }else if(inventory.item4.id === 0){
                dispatch(updateItem4(item));
            }else if(inventory.item5.id === 0){
                dispatch(updateItem5(item));
            }else if(inventory.item6.id === 0){
                dispatch(updateItem6(item));
            }
        }          
        const addScore = game.score +5;
        dispatch(gameScore(addScore));
        dispatch(objUpdate({id: item.id, collected: true, map: item.map, object_type: item.object_type, x: item.x, y: item.y}));
    }                
    
    return (
        <>
            {availableObjs.map((obj) => <ObjectCard key={obj.id} obj={obj} handleCollect={handleCollect} /> )}
        </>
    )
}

export default Objects; 