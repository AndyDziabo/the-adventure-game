import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./MainMenuStyle/mainMenu.css";
import newGame from "./images/text_newGame.png";
import savedGame from "./images/text_savedGame.png";
import settings from "./images/text_settings.png";
import highScores from "./images/text_highScore.png";
import logout from "./images/text_logout.png";

function MainMenu({ user, setUser, setKeys }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setUser(null);
            }
          });
        }

        useEffect(() => {
            fetch("/user_settings")
                .then((r) => r.json())
                .then(data => setKeys(data[0]));
        }, []);

    return(
        <div className="main-menu">
            <h1>Welcome, {user.name}</h1>
            <h2>Main Menu</h2>
            <div className="menu-new-game">
                <NavLink to="/new-game" exact>
                    <img src={newGame} />
                </NavLink>
            </div>
            <div className="menu-saved-game">
                <NavLink to="/saved-games" exact>
                    <img src={savedGame} />
                </NavLink>
            </div>
            <div className="menu-settings">
                <NavLink to="/settings" exact>
                    <img src={settings} />
                </NavLink>
            </div>
            <div className="menu-high-scores">
                <NavLink to="/high-scores" exact>
                    <img src={highScores} />
                </NavLink>
            </div>
            <div onClick={handleLogoutClick} className="menu-logout">
                <img src={logout} />
            </div>
        </div>
    );
}

export default MainMenu;