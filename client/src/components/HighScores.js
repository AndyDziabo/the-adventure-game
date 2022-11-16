import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import mainMenuImg from "./images/text_mainMenu.png";
import "./HighScoreStyle/highScore.css";
import Score from "./Score";

function HighScores() {
    let num = 0;
    const [highScores, setHighScores] = useState([]);
    useEffect(() => {
        fetch("/high_scores")
            .then((r) => r.json())
            .then(data => setHighScores(data));
    }, []);
    
    return(
        <div className="main-menu">
            <div>
                <h2>High Scores</h2>
            </div>
            <div className="high-score-container">
                {highScores.map((score) => <Score key={score.id} score={score} num={num += 1} /> )}
            </div>
            <div className="score-main-menu">
                <NavLink to="/" exact>
                    <img src={mainMenuImg} alt="main-menu" />
                </NavLink>
            </div>
        </div>
    )
}

export default HighScores;