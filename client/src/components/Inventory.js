import "./InventoryStyle/inventory.css";
import equipImg from "./images/text_equip.png";
import unequipImg from "./images/text_unequip.png";
import useImg from "./images/text_use.png";
import dropImg from "./images/text_drop.png";
import healthPackImg from "./images/text_healthPacks.png";
import weaponImg from "./images/text_weapon.png";
import healthImg from "./images/shopHealth.png";
import { useDispatch, useSelector } from "react-redux";
import { updateHealthPacks, updateItem1, updateItem2, updateItem3, updateItem4, updateItem5, updateItem6, updateWeapon } from "./features/inventory";
import { objUpdate } from "./features/gameItem";
import { gameHealth } from "./features/game";
import returnTo from "./images/text_returnTo.png";

function Inventory({ setToggleInven }) {
    const game = useSelector((state) => state.game.value);
    const inventory = useSelector((state) => state.inventory.value);
    const gameObj = useSelector((state) => state.gameItem.entities);
    const action = useSelector((state) => state.action.value);
    const dispatch = useDispatch();

    function handleHealthPacks() {
        if(inventory.healthPacks >= 1){
            if(game.health <= 99){
                let addHealth;
                if(game.health >= 80){
                    addHealth = 100;
                }else{
                    addHealth = game.health + 20;
                }
                dispatch(gameHealth(addHealth));
                let useHealthPack = inventory.healthPacks - 1;
                dispatch(updateHealthPacks(useHealthPack));
            }else{
                console.log("health full")
            }
        }else{
            console.log("Health Packs Empty")
        }
    }

    function handleDrop(item, num) {
        let newX;
        let newY;
        if(action.direction === "right"){
            newX = action.xP + 40;
            newY = action.yP;
        }else if(action.direction === "left"){
            newX = action.xP - 20;
            newY = action.yP;
        }else if(action.direction === "up"){
            newX = action.xP;
            newY = action.yP - 20;
        }else if(action.direction === "down"){
            newX = action.xP;
            newY = action.yP + 40;
        }

        dispatch(objUpdate({id: item.id, collected: false, map: game.map, object_type: item.object_type, x: newX, y: newY}));
        if(inventory.weapon === item.object_type){
            dispatch(updateWeapon("fist"));
        }
        switch(num){
            case 1:
                return dispatch(updateItem1({id: 0, collected: false, map: "", object_type: "", x: 0, y: 0 }));
            case 2:
                return dispatch(updateItem2({id: 0, collected: false, map: "", object_type: "", x: 0, y: 0 }));
            case 3:
                return dispatch(updateItem3({id: 0, collected: false, map: "", object_type: "", x: 0, y: 0 }));
            case 4:
                return dispatch(updateItem4({id: 0, collected: false, map: "", object_type: "", x: 0, y: 0 }));
            case 5:
                return dispatch(updateItem5({id: 0, collected: false, map: "", object_type: "", x: 0, y: 0 }));
            case 6:
                return dispatch(updateItem6({id: 0, collected: false, map: "", object_type: "", x: 0, y: 0 }));
            default:
        }
    }

    function handleEquip(item, num) {
        if(item.object_type !== ""){
            dispatch(updateWeapon(item.object_type));
        }
    }

    return (
        <div className="camera">
            <div className={`map ${game.map} pixel-art`}>
                <div className="inventory-main">
                    <div className="inventory-container">
                        <h2>Inventory</h2>
                        <div className="inv-top">
                            <div className="inv-health-pack">
                                <div className="inv-health-btn-contain">
                                    <div className="health-image">
                                        <img src={healthPackImg} alt="health-pack" />
                                    </div>
                                    <div className="inv-use-btn" onClick={handleHealthPacks}>
                                        <img src={useImg} alt="use" />
                                    </div>
                                </div>
                                <div className="inv-health-box">
                                    {inventory.healthPacks}
                                    <img src={healthImg} alt="health" />
                                </div>
                            </div>
                            <div className="inv-weapon">
                                <div className="inv-weapon-btn-contain">
                                    <div className="weapon-image">
                                        <img src={weaponImg} alt="weapon" />
                                    </div>
                                    <div className="inv-unequip-btn" onClick={() => dispatch(updateWeapon("fist"))}>
                                        <img src={unequipImg} alt="unequip" />
                                    </div>
                                </div>
                                <div className="inv-weapon-box">
                                    <div className={`inv-weapon-${inventory.weapon}`}></div>
                                </div>
                            </div>
                        </div>
                        <div className="inv-middle">
                            <div className="inv-item">
                                {/* Item 1 */}
                                <div className="inv-btn-contain">
                                    <div onClick={() => handleEquip(inventory.item1, 1)} className="inv-equip-btn">
                                        <img src={equipImg} alt="equip" />
                                    </div>
                                    <div onClick={() => handleDrop(inventory.item1, 1)} className="inv-drop-btn">
                                        <img src={dropImg} alt="drop" />
                                    </div>
                                </div>
                                <div className="inv-item-box">
                                <div className={`inv-weapon-${inventory.item1.object_type}`}></div>
                                </div>
                            </div>
                            <div className="inv-item2">
                                {/* Item 2 */}
                                <div className="inv-btn-contain">
                                    <div onClick={() => handleEquip(inventory.item2, 2)} className="inv-equip-btn">
                                        <img src={equipImg} alt="equip" />
                                    </div>
                                    <div onClick={() => handleDrop(inventory.item2, 2)} className="inv-drop-btn">
                                        <img src={dropImg} alt="drop" />
                                    </div>
                                </div>
                                <div className="inv-item-box">
                                <div className={`inv-weapon-${inventory.item2.object_type}`}></div>
                                </div>
                            </div>
                            <div className="inv-item3">
                                {/* Item 3 */}
                                <div className="inv-btn-contain">
                                    <div onClick={() => handleEquip(inventory.item3, 3)} className="inv-equip-btn">
                                        <img src={equipImg} alt="equip" />
                                    </div>
                                    <div onClick={() =>handleDrop(inventory.item3, 3)} className="inv-drop-btn">
                                        <img src={dropImg} alt="drop" />
                                    </div>
                                </div>
                                <div className="inv-item-box">
                                <div className={`inv-weapon-${inventory.item3.object_type}`}></div>
                                </div>
                            </div>
                        </div>
                        <div className="inv-bottom">
                            <div className="inv-item">
                                {/* Item 4 */}
                                <div className="inv-btn-contain">
                                    <div onClick={() => handleEquip(inventory.item4, 4)} className="inv-equip-btn">
                                        <img src={equipImg} alt="equip" />
                                    </div>
                                    <div onClick={() =>handleDrop(inventory.item4, 4)} className="inv-drop-btn">
                                        <img src={dropImg} alt="drop" />
                                    </div>
                                </div>
                                <div className="inv-item-box">
                                <div className={`inv-weapon-${inventory.item4.object_type}`}></div>
                                </div>
                            </div>
                            <div className="inv-item2">
                                {/* Item 5 */}
                                <div className="inv-btn-contain">
                                    <div onClick={() => handleEquip(inventory.item5, 5)} className="inv-equip-btn">
                                        <img src={equipImg} alt="equip" />
                                    </div>
                                    <div onClick={() =>handleDrop(inventory.item5, 5)} className="inv-drop-btn">
                                        <img src={dropImg} alt="drop" />
                                    </div>
                                </div>
                                <div className="inv-item-box">
                                <div className={`inv-weapon-${inventory.item5.object_type}`}></div>
                                </div>
                            </div>
                            <div className="inv-item3">
                                {/* Item 6 */}
                                <div className="inv-btn-contain">
                                    <div onClick={() => handleEquip(inventory.item6, 6)} className="inv-equip-btn">
                                        <img src={equipImg} alt="equip" />
                                    </div>
                                    <div onClick={() =>handleDrop(inventory.item6, 6)} className="inv-drop-btn">
                                        <img src={dropImg} alt="drop" />
                                    </div>
                                </div>
                                <div className="inv-item-box">
                                <div className={`inv-weapon-${inventory.item6.object_type}`}></div>
                                </div>
                            </div>
                        </div>
                        <div className="return-to" onClick={() => setToggleInven(false)}>
                            <img src={returnTo} alt="return" />
                        </div>
                    </div>
                </div> 

            </div>
        </div>
    )
}

export default Inventory;