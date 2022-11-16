import { NavLink } from "react-router-dom";
import { useState } from "react";
import start from "./images/text_startGame.png";
import { useDispatch } from "react-redux";
import { updateId } from "./features/inventory";
import { gameId } from "./features/game";
import { loadObjects } from "./features/gameItem";
import { loadCharacters } from "./features/character";
import "./NewGameStyle/newGame.css";
import gameName from "./images/text_gameName.png";
import createGame from "./images/text_createGame.png";
import mainMenuImg from "./images/text_mainMenu.png";

function NewGame({ setSelectedGame }) {
    const [newGame, setNewGame] = useState("");
    const [savedGame, setSavedGame] = useState([]);
    const [startGame, setStartGame] = useState(false);
    const [errors, setErrors] =useState([]);
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/inventories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                health_pack: 0,
                weapon: "fist",
                weapon_strength: 100,
                weapon_max: 100,
                item_1: 0,
                item_2: 0,
                item_3: 0,
                item_4: 0,
                item_5: 0,
                item_6: 0,
            }),
        }).then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    dispatch(updateId(data.id));
                    fetch("/saved_games", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name: newGame,
                            map: "LevelOne",
                            xP: 65,
                            yP: 65,
                            xM: 0,
                            yM: 0,
                            health_level: 100,
                            health_max: 100,
                            armor_level: 0,
                            armor_max: 100,
                            score: 0,
                            coins: 0,
                            inventory_id: data.id,
                        }),
                    }).then((r) => {
                        if(r.ok){
                            r.json().then((saved) => {
                                dispatch(gameId(saved.id));
                                document.documentElement.style.setProperty('--player-x', saved.xP);
                                document.documentElement.style.setProperty('--player-y', saved.yP);
                                document.documentElement.style.setProperty('--map-x', saved.xM);
                                document.documentElement.style.setProperty('--map-y', saved.yM);
                                saved.game_objects.map((obj) => dispatch(loadObjects(obj)));
                                saved.characters.map((char) => dispatch(loadCharacters(char)));
                                setSavedGame(saved);
                                setSelectedGame(saved)
                                setStartGame(true);                                
                            });
                        }else{
                            r.json().then((err) => setErrors(err.errors));
                        }
                    });
                });
            }else{
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return(
        <>
            {startGame ?
                <div className="start-game">
                    <NavLink to="/hud" exact>
                        <img src={start} alt="Start" />
                    </NavLink>
                </div>
            :
                <div className="main-menu">
                    <div>
                        <h2>New Game</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="game-name">
                                <img src={gameName} alt="game-name" />
                            </div>
                            <div className="game-name-text">
                                <input 
                                    type="text"
                                    id="game"
                                    autoComplete="off"
                                    value={newGame}
                                    onChange={(e) => setNewGame(e.target.value)}
                                />
                            </div>
                            <div className="create-game" onClick={handleSubmit}>
                                <img src={createGame} alt="create-game" />
                            </div>
                        </form>
                    </div>
                    <div className="new-main-menu">
                        <NavLink to="/" exact>
                            <img src={mainMenuImg} alt="main-menu" />
                        </NavLink>
                    </div>
                </div>
            }
        </>
    )
}

export default NewGame;