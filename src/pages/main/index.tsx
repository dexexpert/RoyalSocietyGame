import React, { useState, MouseEvent} from "react";
import { useNavigate  } from "react-router-dom";

import { GameButton } from "../../components/Input";

export default function Main() {

  interface IPosition { x: number; y: number; }

  const[clicked,setClicked] = useState(false);
  const[scale,setScale] = useState(2);
  const[position,setPosition] = useState<IPosition>({ x: 0, y: 0 });
  const[clickedPoint, setClickedPoint] = useState<IPosition>({x:-10000, y: -10000})
  
  const navigate = useNavigate();

  const divRef = React.useRef<HTMLDivElement>(null);

  const getMouseDirection = (e: MouseEvent<HTMLDivElement>) => {
    //deal with the horizontal case
    if(clicked) {
      let xDirection = 0;
      let yDirection = 0;
      if(clickedPoint.x>-10000 && clickedPoint.y>-10000) {
        xDirection =  (e.pageX - clickedPoint.x) * 0.2 * scale;
        if((position.x>500 && xDirection > 0) || (position.x<-500 && xDirection < 0)) xDirection = 0;
        yDirection =  (e.pageY - clickedPoint.y) * 0.2 * scale;
        if((position.y>500 && yDirection > 0) || (position.y<-500 && yDirection < 0)) yDirection = 0;
      }
      else {
        setClickedPoint({
          x: e.pageX,
          y: e.pageY
        })
      }
      setPosition({
        x: position.x + xDirection,
        y: position.y + yDirection,
      })
    }
  }

  const getWheelEvent = (e:React.WheelEvent<HTMLDivElement>) => {
    if(e.deltaY<0 && scale < 2) setScale(scale + 0.1);
    else if(e.deltaY>0 && scale > 0.5) setScale(scale - 0.1);
  }

  return (
    <div>
      <div className="castle-overlay overlay"
        onMouseDown={(e) => {
          setClicked(true);
        }}
        onMouseMove={getMouseDirection}
        onMouseUp={() => {
          setClicked(false);
          setClickedPoint({
            x: -10000,
            y: -10000
          })
        }}
        onWheel={getWheelEvent}
      >
        <div 
          className="castle-bg"
          style={{transform: `translate3d(${position.x}px, ${position.y}px, 0px) scale(${scale})`}} 
          ref={divRef}
        >
          <div className="land-auction-btn click-cursor">
            <GameButton title="Marketplace" onClick={() => navigate("/marketplace")}/>
          </div>
        </div>
      </div>
    </div>
  )
}