import coin from "./images/Coin.gif";
import axe from "./images/Axe.gif";
import sword from "./images/Sword.gif";
import health from "./images/Health.gif";
import { useSelector } from "react-redux";
import { charUpdate } from "./features/character";

function ObjectCard({ obj, handleCollect }) {
    var pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixel-size'));
    const action = useSelector((state) => state.action.value);
    const xMin = obj.x - 20;
    const xMax = obj.x;
    const yMin = obj.y -25;
    const yMax = obj.y + 5;

    if(action.xP >= xMin && action.xP <= xMax){
        if(action.yP >= yMin && action.yP <= yMax){
            handleCollect(obj);
        }
    }

    function imageType() {
        switch(obj.object_type){
            case "coin":
                return <img className="coin-img" src={coin} />;
            case "axe":
                return <img className="coin-img" src={axe} />;
            case "sword":
                return <img className="coin-img" src={sword} />;
            case "health":
                return <img className="coin-img" src={health} />;
            default:
        }
    }

    const mystyle = {
        position: "absolute",
        transform: `translate3d(${pixelSize*obj.x}px, ${pixelSize*obj.y}px, 0)`
    };

    return(
        <div style={mystyle}>
            {imageType()}
        </div>
    )
}

export default ObjectCard;