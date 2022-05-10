import React, {FunctionComponent} from "react";

import { LandViewBoard } from "../../../components/Modal";
import { IAssest, IFilter } from "../Auction"
import ViewCard from "./ViewCard";

type Props = {
  assests: IAssest[];
  filter: IFilter;
}

const LandView:FunctionComponent<Props> = (props: Props) => {
  return (
    <LandViewBoard title="View All Assets">
      <div className="summry-sort-land" data-v-60f0dc79="">
        <div className="land-summary" data-v-60f0dc79="">
          <span data-v-60f0dc79=""> Showing 5 Assets </span>
        </div>
        <div className="land-sort" data-v-60f0dc79="">
          <span className="land-sort__label" data-v-60f0dc79="">Sort by: </span>
          <div className="land-select__list" id="landPropertyLabel" data-v-60f0dc79="">
            <select className="click-cursor" name="landProperty" id="landProperty" data-v-60f0dc79="">
              <option value="0" data-v-60f0dc79="">ID</option>
              <option value="1" data-v-60f0dc79="">Name</option>
              <option value="2" data-v-60f0dc79="">Category</option>
              <option value="3" data-v-60f0dc79="">Level</option>
              <option value="4" data-v-60f0dc79="">Sale Price</option>
            </select>
          </div>
          <div className="land-select__list" data-v-60f0dc79="">
            <select className="click-cursor" name="sortType" id="sortType" data-v-60f0dc79="">
              <option value="0" data-v-60f0dc79="">Ascending</option>
              <option value="1" data-v-60f0dc79="">Descending</option>
            </select>
          </div>
        </div>
        <div className="land-list game-scroll-bar row">
          {
            props.assests.map((a, i) => (
              <ViewCard key={i} asset={a}/>
            ))
          }
        </div>
      </div>
    </LandViewBoard>
  )
}

export default LandView;