import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import mainMenuImg from "./images/text_mainMenu.png";
import saveGameImg from "./images/text_saveGame.png";
import returnTo from "./images/text_returnTo.png";
import "./HudMenuStyle/hudMenu.css";

function HudMenu({ setToggleMenu }) {
    const [errors, setErrors] = useState([]);
    const game = useSelector((state) => state.game.value);
    const action = useSelector((state) => state.action.value);
    const inventory = useSelector((state) => state.inventory.value);
    const gameItems = useSelector((state) => state.gameItem.entities);
 
    function handleSave() {
        fetch(`/saved_games/${game.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                map: game.map,
                xP: action.xP,
                yP: action.yP,
                xM: action.xM,
                yM: action.yM,
                health_level: game.health,
                health_max: game.healthMax,
                armor_level: game.armor_level,
                armor_max: game.armor_max,
                score: game.score,
                coins: game.coins,
            }),
        }).then((r) => {
            if(r.ok){
                fetch(`/inventories/${inventory.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        health_pack: inventory.healthPacks,
                        weapon: inventory.weapon,
                        weapon_strength: inventory.weaponStrength,
                        weapon_max: inventory.weaponMax,
                        item_1: inventory.item1.id,
                        item_2: inventory.item2.id,
                        item_3: inventory.item3.id,
                        item_4: inventory.item4.id,
                        item_5: inventory.item5.id,
                        item_6: inventory.item6.id,
                    }),
                }).then((r) => {
                    if(r.ok){
                        gameItems.map((item) => {
                            fetch(`/game_objects/${item.id}`, {
                                method: "PATCH",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    map: item.map,
                                    object_type: item.object_type,
                                    x: item.x,
                                    y: item.y,
                                    collected: item.collected,
                                }),
                            }).then((r) => {
                                if(r.ok){
                                    console.log("game saved");
                                }else{
                                    r.json().then((err) => setErrors(err));
                                }
                            });
                        })
                    }else{
                        r.json().then((err) => setErrors(err));
                    }
                });
            }else{
                r.json().then((err) => setErrors(err));
            }
        });
    }
    return(
        <div className="hud-menu-main">
            <div className="hud-menu-container">
                <h2>Game Menu</h2>
                <div className="hud-menu-save" onClick={handleSave}>
                    <img src={saveGameImg} alt="save" />
                </div>
                <div className="hud-menu-return" onClick={() => setToggleMenu(false)}>
                    <img src={returnTo} alt="return" />
                </div>
                <div className="hud-menu-exit">
                    <NavLink to="/" exact>
                        <img src={mainMenuImg} alt="main-menu" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default HudMenu;