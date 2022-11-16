import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SavedGameCard from "./SavedGameCard";
import start from "./images/text_startGame.png";
import "./SavedGameStyle/savedGame.css";
import mainMenuImg from "./images/text_mainMenu.png";

function SavedGame({ selectedGame, setSelectedGame }) {
    const [toggleGameStart, setToggleGameStart] = useState(false);
    const [savedList, setSavedList] = useState([]);
    
    useEffect(() => {
        fetch("/saved_list")
            .then((r) => r.json())
            .then(list => {
                setSavedList(list)
                
        
            });
    }, []);

    function handleDeleteGame(deletedGame) {
        const updatedList = savedList.filter((save) => save.id !== deletedGame.id);
        setSavedList(updatedList);
    }

    return(
        <>
            {toggleGameStart ?
                <div className="start-game">
                    <NavLink to="/hud" exact>
                        <img src={start} />
                    </NavLink>
                </div>
            :
                <div className="main-menu">
                    <div className="save-list">
                        <h2>Saved Game</h2>
                        {savedList.map((sGame) => (
                            <SavedGameCard key={sGame.id} sGame={sGame} setSelectedGame={setSelectedGame} setToggleGameStart={setToggleGameStart} handleDeleteGame={handleDeleteGame} />
                        ))}
                    </div>
                    <div className="save-main-menu">
                        <NavLink to="/" exact>
                            <img src={mainMenuImg} alt="main-menu" />
                        </NavLink>
                    </div>
                </div>
            }        
        </>        
    )
}

export default SavedGame;