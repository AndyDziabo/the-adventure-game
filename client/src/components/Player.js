import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameMap } from "./features/game";
import { actionXP, actionYP, actionXM, actionYM, actionDir, actionWalking} from "./features/action";

function Player({ openInventory, openMenu, keys, setToggleShop }) {
    const leftLimit = 25;
    const rightLimit = 595;
    const topLimit = 6;
    const bottomLimit = 270;
    
    const game = useSelector((state) => state.game.value);
    const action = useSelector((state) => state.action.value);
    const weapon = useSelector((state) => state.inventory.value.weapon);
    let switchWeapon;
    const dispatch = useDispatch();
    var directions = [];
    var speed = 2;
    var xP = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--player-x'));
    var yP = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--player-y')); 
    var xM = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--map-x'));
    var yM = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--map-y'));

    useEffect(() => {

        function handleKeyDown(e) {
            switch(e.keyCode){
                case keys.left_keyCode:
                case 37:
                    return movePlayer('left');
                case keys.up_keyCode:
                case 38:
                    return movePlayer('up');
                case keys.right_keyCode:
                case 39:
                    return movePlayer('right');
                case keys.down_keyCode:
                case 40:
                    return movePlayer('down');
                case keys.attack_keyCode:
                case 32:
                    return attackMonster();
                case 73:
                    return openInventory();
                case 77:
                    return openMenu();
                default:
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
          }
    }, [handleKeyUp]);

    function movePlayer(dir) {
        dispatch(actionWalking(true));
        if(dir === 'right'){
            dispatch(actionDir(dir));
            if(xP >= rightLimit){
                xP = rightLimit;
            }else if(xP < 65 || xM >= 480){
                xP +=speed;
            }else if(game.map === "LevelOne"){
                if(yP >= 106 && yP <= 191){
                    if(xP >= 220 && xP <= 350){
                        xP = xP;
                    }else{
                        xP += speed;
                        xM += speed;
                    }
                }else if(yP >= 192 && yP <= 209){
                    if(xP >= 281 && xP <= 350){
                        xP = xP;
                    }else{
                        xP += speed;
                        xM += speed;
                    }
                }else{
                    xP += speed;
                    xM += speed;
                }
            }else if(game.map === "LevelTwo"){
                if(yP >= 110 && yP <= 184 && xP >= 74 && xP <= 150){
                        xP = xP;
                }else if(yP >= 185 && yP <= 194 && xP >= 102 && xP <= 150){
                        xP = xP;
                }else if(yP >= 114 && yP <= 192 &&xP >= 308 && xP <= 375){
                        xP = xP;
                }else if(yP >= 193 && yP <= 209 && xP >= 346 && xP <= 375){
                        xP = xP;
                }else{
                    xP += speed;
                    xM += speed;
                }
            }else{
                xP += speed;
                xM += speed;
            }
        }
        if(dir === 'left'){
            dispatch(actionDir(dir));
            if(xP <= leftLimit){
                xP = leftLimit;
            }else if(xM <= 0 || xP > 545){
                xP -= speed;
            }else if(game.map === "LevelOne"){
                if(yP >= 106 && yP <= 163){
                    if(xP >= 351 && xP <= 481){
                        xP = xP;
                    }else{
                        xP -= speed;
                        xM -= speed;
                    }
                }else if(yP >= 164 && yP <= 209){
                    if(xP >= 351 && xP <= 448){
                        xP = xP;
                    }else{
                        xP -= speed;
                        xM -= speed;
                    }
                }else{
                    xP -= speed;
                    xM -= speed;
                }
            }else if(game.map === "LevelTwo"){
                if(yP >= 108 && yP <= 178 && xP >= 150 && xP <= 223){
                        xP = xP;
                }else if(yP >= 179 && yP <= 194 && xP >= 150 && xP <= 202){
                        xP = xP;
                }else if(yP >= 114 && yP <= 171 &&xP >= 375 && xP <= 440){
                        xP = xP;
                }else if(yP >= 172 && yP <= 202 && xP >= 375 && xP <= 418){
                        xP = xP;
                }else if(yP >= 203 && yP <= 209 && xP >= 375 && xP <= 400){
                        xP = xP;
                }else{
                    xP -= speed;
                    xM -= speed;
                }
            }else{
                xP -= speed;
                xM -= speed;
            }
        }
        if(dir === 'up'){
            dispatch(actionDir(dir));
            if(yP <= topLimit){
                yP = topLimit;
            }else if(game.map === "LevelOne"){
                if(xP >= 282 && xP <= 446 && yP >= 150 && yP <= 213){
                        yP = yP;
                }else if(xP >= 222 && xP <= 350 && yP >= 150 && yP <= 192){
                        yP = yP;
                }else if(xP >= 351 && xP <= 480 && yP >= 150 && yP <= 164){
                        yP = yP;
                }else{
                    yP -= speed;
                    yM -= speed;
                }
            }else if(game.map === "LevelTwo"){
                if(xP >= 103 && xP <= 201 && yP >= 130 && yP <= 195){
                        yP = yP;
                }else if(xP >= 75 && xP <= 175 && yP >= 130 && yP <= 185){
                        yP = yP;
                }else if(xP >= 176 && xP <= 221 && yP >= 130 && yP <= 178){
                        yP = yP;
                }else if(xP >= 347 && xP <= 399 && yP >= 150 && yP <= 211){
                        yP = yP;
                }else if(xP >= 400 && xP <= 417 && yP >= 150 && yP <= 203){
                        yP = yP;
                }else if(xP >= 418 && xP <= 439 && yP >= 150 && yP <= 173){
                        yP = yP;
                }else if(xP >= 309 && xP <= 347 && yP >= 150 && yP <= 194){
                        yP = yP;
                }else{
                    yP -= speed;
                    yM -= speed;
                }
            }else{
                yP -= speed;
                yM -= speed;
            }
        }
        if(dir === 'down'){
            dispatch(actionDir(dir));
            if(yP >= bottomLimit){
                yP = bottomLimit;
            }else if(game.map === "LevelOne"){
                if(xP >= 222 && xP <= 480){
                    if(yP >= 105 && yP <= 150){
                        yP = yP;
                    }else{
                        yP += speed;
                        yM += speed;
                    }
                }else{
                    yP += speed;
                    yM += speed;
                }
            }else if(game.map === "LevelTwo"){
                if(xP >= 75 && xP <= 221){
                    if(yP >= 108 && yP <= 150){
                        yP = yP;
                    }else{
                        yP += speed;
                        yM += speed;
                    }
                }else if(xP >= 309 && xP <= 439){
                    if(yP >= 112 && yP <= 150){
                        yP = yP;
                    }else{
                        yP += speed;
                        yM += speed;
                    }
                }else{
                    yP += speed;
                    yM += speed;
                }
            }else{
                yP += speed;
                yM += speed;
            }
        }
 
        if(game.map === "LevelOne"){
            if(xP <= 25 && yP >= 200){
                dispatch(gameMap("LevelTwo"));
                console.log("change map: ", game.map)
                xP += 569;
                xM += 480;
            }
            if(xP >= 333 && xP <= 363 && yP >= 200 && yP <= 213){
                setToggleShop(true);
            }
        }

        if(game.map === "LevelTwo"){
            if(xP >= 595 && yP >= 200){
                 dispatch(gameMap("LevelOne"));
                xP -=569;
                xM -=480;
            }
        }
        document.documentElement.style.setProperty('--player-x', xP);
        dispatch(actionXP(xP));
        document.documentElement.style.setProperty('--player-y', yP);
        dispatch(actionYP(yP));
        document.documentElement.style.setProperty('--map-x', xM);
        dispatch(actionXM(xM));
        document.documentElement.style.setProperty('--map-y', yM);
        dispatch(actionYM(yM));
    }

    function attackMonster() {
        console.log("attack!!!");
    }

    function handleKeyUp() {
        dispatch(actionWalking(false));
    }

    if(weapon !== "fist"){
        switchWeapon =`${action.direction}-${weapon}`;
    }else{
        switchWeapon = action.direction;
    }

    return(
        <div className="player">
            <div className="player-bound">
                <div className={`player-spritesheet pixel-art ${switchWeapon} ${action.walking ? `walking-${switchWeapon}` : null}`}>
                    
                </div>
            </div>
        </div>
    )
}

export default Player;