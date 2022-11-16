import "./HighScoreStyle/highScore.css";
function Score({ score, num }) {

    return(
        <li>
            <div>
                <div className="score-num">{`${num}. `}</div>
                <div className="score-name">{score.user.name}</div>
                <div className="score-value">{score.score}</div>
            </div>
        </li>
    )
}

export default Score;