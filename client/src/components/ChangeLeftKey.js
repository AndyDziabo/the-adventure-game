import "./SettingsStyle/settings.css";
import { useEffect, useState } from "react";
import selectImg from "./images/text_select.png";

function ChangeLeftKey({ setToggleLeft, keys, leftKey, setLeftKey, leftKeyCode, setLeftKeyCode}) {
    const [toggleKey, setToggleKey] = useState(false);

    useEffect(() => {
      function handleKeyDown(e) {
          e.preventDefault();
          setToggleKey(true);
          setTimeout(function(){
            setToggleKey(false);
          },100);
          setLeftKey(e.key);
          setLeftKeyCode(e.keyCode);
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
            left_key: leftKey,
            left_keyCode: leftKeyCode,
        }),
      }).then((r) => {
        if(r.ok){
          setToggleLeft(false);
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
                  <h3>{leftKey}</h3>
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

export default ChangeLeftKey;