import React, { useState, MouseEvent, useEffect} from "react";
import { useNavigate  } from "react-router-dom";

import { GameButton } from "../../components/Input";

export default function Main() {

  interface IPosition { x: number; y: number; }

  const[clicked,setClicked] = useState(false);
  const[scale,setScale] = useState(2);
  const[position,setPosition] = useState<IPosition>({ x: 0, y: 0 });
  
  const navigate = useNavigate();

  const divRef = React.useRef<HTMLDivElement>(null);

  const getMouseDirection = (e: MouseEvent<HTMLDivElement>) => {
    //deal with the horizontal case
    console.log(clicked);
    if(clicked) {
      let xDirection = 0;
      let yDirection = 0;
      if (position.x > e.pageX) {
        xDirection = -3;
      } else if (position.x < e.pageX) {
        xDirection = 3;
      }
  
      //deal with the vertical case
      if (position.y > e.pageY) {
          yDirection = -3;
      }else if (position.y < e.pageY) {
        yDirection = 3;
      }
  
      setPosition({
        x: position.x + xDirection,
        y: position.y + yDirection,
      })
      console.log(e.pageX + " " + e.pageY);
    }
  }

  const getWheelEvent = (e:React.WheelEvent<HTMLDivElement>) => {
    console.log('sdffsd');
    if(e.deltaY<0 && scale < 2) setScale(scale + 0.1);
    else if(e.deltaY>0 && scale > 0.5) setScale(scale - 0.1);
  }

  useEffect(() => {
    // document.addEventListener("mousedown", () => setClicked(true));
    // document.addEventListener("mousemove", () => getMouseDirection);
    // document.addEventListener("mouseup", () => setClicked(false));
  });


  return (
    <div>
      <div className="castle-overlay overlay"
        onMouseDown={(e) => {
          setClicked(true);
          setPosition({
            x: e.pageX,
            y: e.pageY,
          })
        }}
        onMouseMove={getMouseDirection}
        onMouseUp={() => setClicked(false)}
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