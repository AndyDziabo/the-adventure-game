import "./SettingsStyle/settings.css";
import { useEffect, useState } from "react";
import selectImg from "./images/text_select.png";

function ChangeUpKey({ setToggleUp, keys, upKey, setUpKey, upKeyCode, setUpKeyCode}) {
    const [toggleKey, setToggleKey] = useState(false);

    useEffect(() => {
      function handleKeyDown(e) {
          e.preventDefault();
          setToggleKey(true);
          setTimeout(function(){
            setToggleKey(false);
          },100);
          setUpKey(e.key);
          setUpKeyCode(e.keyCode);
          console.log("key: ", e.key, "keyCode: ", e.keyCode)
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      }
    }, []);

    function handleSelect() {
      fetch(`/settings/${keys.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          up_key: upKey,
          up_keyCode: upKeyCode,
        }),
      }).then((r) => {
        if(r.ok){
          setToggleUp(false);
        }else{
          r.json().then((err) => console.log(err));
        }
      });
    }
    
    return (
        <div className="change-main">
          <div className="change-container">
            <h2 className="change-title">
                Choose Key 
            </h2>
            <div className="change-body">
              <div className="key-container">
                <div className={toggleKey ? "key-down" : "key-up"}>
                  <h3>{upKey}</h3>
                </div>
              </div>
            </div>
            <div className="select-btn" onClick={handleSelect}>
              <img src={selectImg} alt="select" />
            </div>
          </div>
        </div>
      )
}

export default ChangeUpKey;