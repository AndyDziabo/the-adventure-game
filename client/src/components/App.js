import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainMenu from "./MainMenu";
import Login from "./Login";
import NewGame from "./NewGame";
import SavedGame from "./SavedGame";
import Settings from "./Settings";
import HighScores from "./HighScores";
import Hud from "./Hud";


function App() {
  const [user, setUser] = useState(null);
  const [selectedGame, setSelectedGame] = useState();
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return (
    <div>
      <Login onLogin={setUser} />
    </div>
  );

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={"/hud"}>
            <Hud keys={keys} selectedGame={selectedGame} />
          </Route>
          <Route exact path="/new-game">
            <NewGame setSelectedGame={setSelectedGame} />
          </Route>
          <Route exact path={"/saved-games"}>
            <SavedGame selectedGame={selectedGame} setSelectedGame={setSelectedGame} />
          </Route>
          <Route exact path={"/settings"}>
            <Settings keys={keys} />
          </Route>
          <Route exact path={"/high-scores"}>
            <HighScores />
          </Route>
          <Route exact path="/">
            <MainMenu user={user} setUser={setUser} setKeys={setKeys} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
