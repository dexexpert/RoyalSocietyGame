import React, {FC} from "react";
import { useNavigate  } from "react-router-dom";

export interface IModal {
  title?: string
}

export const Modal: FC<IModal> = (params) => {
  
  const {
    children, title
  } = params;

  const navigate = useNavigate();

  return (
    <div className="modal-overlay overlay active">
      <div className="modal game-border fancy" 
        style={{width: '600px', height: '316px', marginBottom: 0}}>
        <div className="close-btn click-cursor" onClick={() => navigate("/")}>
        </div>
        {
          title? 
          <h3 className="modal-title fancy">
            <span>{title}</span>
          </h3>:''
        }
        <div className="modal-body">
          { children }
        </div>
      </div>
    </div>
  )
}