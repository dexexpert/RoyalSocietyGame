import React, {FunctionComponent} from "react";

// import { IAssest, classes, statuses } from "../Auction"
import { IAssest } from ".."

type Props = {
  asset: IAssest;
}
const ViewCard:FunctionComponent<Props> = (props: Props) => {
  const {name, id, img, classs, status, level, price} = props.asset
  return (
    <div className="col view-card" data-v-258caee8="">
      <div data-v-258caee8="">
        <div className="land-item">
          <div className="land-image-wrap">
            <div className="land-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${img})` }}>

              <div className="green-button land-sale-tag"> For sale </div>
            </div>
          </div>
          <div className="land-item__details">
            <div className="land-item__header">
              <p>{name}</p><p>#{id}</p>
            </div>
            <div className="land-info">
              <div className="land-info__row">
                <p>Class</p><p>{classs}</p></div>
              <div className="land-info__row">
                <p>Level</p><p>{level}</p></div>
              <div className="land-info__row font-extrabold"><p>{status}</p><p>{price}</p>
              </div>
            </div>
            </div><div className="land-item__butotn-wrap">
            <button className="green-button click-cursor"> Buy Assets </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewCard;