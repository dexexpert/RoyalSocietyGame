import React from "react";

import Filter from "./Filter";
import LandView from "./Land";
import { IProps } from "../../components/Input";

const statuses:IProps[] = [
  {title: 'All', value: -1},
  {title: 'For Sale', value: 0},
  {title: 'Not for sale', value: 1},
  {title: 'For Lease', value: 2}
]

const classes:IProps[] = [
  {title: 'King', value: 0},
  {title: 'Not for sale', value: 1},
  {title: 'For Lease', value: 2},
  {title: 'King', value: 3},
  {title: 'Queen', value: 4},
  {title: 'Witches', value: 5},
  {title: 'Royal Knights', value: 6},
  {title: 'Guards', value: 7},
  {title: 'Stewards', value: 8},
  {title: 'Servants', value: 9},
  {title: 'Peasants', value: 10}
]

// interface IAssest {
//   name: string,
//   id: number,
//   class: number,
//   status: number,
//   price?: number,
//   level: number,
//   img: string
// }

// interface IFilter {
//   assetId: string;
//   selectedClasses: number[];
//   selectedStatuses: number[];
// }

const LandAuction = () => {

  // const [filter, setFilter] = React.useState<IFilter>({
  //   assetId: '',
  //   selectedClasses: [],
  //   selectedStatuses: []
  // });

  return (
    <div className="land-auction overlay row ">
      <Filter classes={classes} statuses={statuses}/>
      <LandView/>
    </div>
  )
}

export default LandAuction;