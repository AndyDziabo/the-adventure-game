import ted from "./images/Ted.png"
import { useSelector } from "react-redux";

function CharacterCard({ char, handlePatrol }) {
    document.documentElement.style.setProperty('--character-x', char.x);
    document.documentElement.style.setProperty('--character-y', char.y);
    var pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixel-size'));
    const action = useSelector((state) => state.action.value);

    const XMIN = char.x;
    const XMAX = char.x + (pixelSize + 100);
    const YMIN = char.y;
    const YMAX = char.y + (pixelSize + 100);


    if(char.patrol){
        if(action.xP >= XMIN && action.xP <= XMAX){
            if(action.yP >= YMIN && action.yP <= YMAX){
                handlePatrol(char, false);
            }
        }
    }else{
        if(action.xP < XMIN || action.xP > XMAX){
            handlePatrol(char, true);
        }
        if(action.yP < YMIN || action.yP > YMAX){
            handlePatrol(char, true);
        }
    }

    function imageType() {
        switch(char.char_type){
            case "ted":
                return <img className="char-img" src={ted} alt="character" />;
            default:
        }
    }

    const mystyle = {
        position: "absolute",
        transform: `translate3d(${pixelSize*char.x}px, ${pixelSize*char.y}px, 0)`
    };

    return(
        <>
        {char.patrol ?
            <div className={`character pixel-art  ${char.patrol ? "patrol" : null}`}>
                {imageType()}
            </div>
        :
            <div style={mystyle}>
                {imageType()}
            </div>
        }
        </>
    )
}

export default CharacterCard;