import { useEffect, useState } from "react";
import "./HudStyle/hud.css";
import Inventory from "./Inventory";
import Objects from "./Objects";
import Shop from "./Shop";
import Characters from "./Characters";
import HudMenu from "./HudMenu";
import { useSelector } from "react-redux";
import Player from "./Player";

function Hud({ keys, selectedGame }) {
    const [toggleInven, setToggleInven] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleShop, setToggleShop] = useState(false);
    const [healthMeterColor, setHealthMeterColor] = useState();
    const game = useSelector((state) => state.game.value);
    const gameObjects = useSelector((state) => state.gameItem.entities);

    const mystyle = {
        backgroundColor : `#${healthMeterColor}`,
        height : "100%",
        width : `${game.health}%`
    };

    useEffect(() => {
        if(game.health > 20){
            setHealthMeterColor("225291");
        }else if(game.health <= 20){
            setHealthMeterColor("ff0000");
        }
    }, [game.health]);

    function openInventory() {
        setToggleInven(true);
    }

    function openMenu() {
        setToggleMenu(true);
    }

    return(
        <div>
            <div className="main">
                <div className="camera">
                    {toggleMenu ?
                        <HudMenu 
                            setToggleMenu={setToggleMenu} 
                            selectedGame={selectedGame}
                            gameObjects={gameObjects}
                        />
                    :
                        toggleInven ? 
                            <Inventory 
                                setToggleInven={setToggleInven} 
                            />
                        :
                            toggleShop ?
                                <Shop setToggleShop={setToggleShop} />
                                :
                            <div className={`map ${game.map} pixel-art`}>
                                <Objects />
                                <Characters  />
                                <Player openInventory={openInventory} openMenu={openMenu} keys={keys} setToggleShop={setToggleShop} />
                                <div className={`map ${game.map}Upper pixel-art`}>
                                </div>
                            </div> 
                    }
                </div>
            </div>
            <div className="hud-statusbar">
                <div className="health">
                    <div className="health-title">Health</div>
                    <div className="health-bar">
                        <div style={mystyle}></div>
                    </div>
                </div>
                <div className="coins">
                    <div className="coins-title">Coins</div>
                    <div className="coins-bar">{game.coins}</div>
                </div>
                <div className="score">
                    <div className="score-title">Score</div>
                    <div className="score-bar">{game.score}</div>
                </div>
            </div>
        </div>
    )
}

export default Hud;
