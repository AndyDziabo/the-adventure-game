import { NavLink } from "react-router-dom";
import mainMenuImg from "./images/text_mainMenu.png";
import "./HighScoreStyle/highScore.css";

function HighScores() {
    return(
        <div className="main-menu">
            <div>
                <h2>High Scores</h2>
            </div>
            <div className="high-score-container">

            </div>
            <div className="setting-main-menu">
                <NavLink to="/" exact>
                    <img src={mainMenuImg} alt="main-menu" />
                </NavLink>
            </div>
        </div>
    )
}

export default HighScores;