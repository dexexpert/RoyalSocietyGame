import React, { FunctionComponent} from 'react';

import { GreenButton, CheckBox, RadioButton, IProps } from "../../../components/Input";
import {IFilter} from '../Auction'

type Props = {
  statuses?: IProps[];
  classes?: IProps[];
  onFilterChange: (data:any) => void
}

const Filter:FunctionComponent<Props> = (props: Props) => {
  
  const [filter, setFilter] = React.useState<IFilter>({
    assetId: '',
    selectedClasses: ['0'],
    selectedStatuses: '-1'
  });

  const handleClassChange = (event: any) => {
    const {
      target: { value },
    } = event;
    let arr = filter.selectedClasses;
    if(arr.some((s) => {
      return s === value?.toString();
    })) arr.splice(arr.indexOf(value), 1)
    else arr.push(value)
    setFilter(
      { ...filter, 
        selectedClasses: arr
      }
    );
  };

  const handleChangeFilter = (prop: keyof IFilter) => (event: any) => {
    setFilter({ ...filter, [prop]: event.target.value });
  };

  return (
    <div className="filter col md:w-1/3 w-4/5" data-v-412a3124="">
      <div className="filter-expanded game-border basic">
        <div className="filter-header">
          <div className="filter-header-group">
            <span>Filter</span>
            <div className="filter-toggle-btn click-cursor">
              <i className="fas fa-angle-left"></i>
            </div>
          </div>
          <div className="filter-header-group">
            <GreenButton title='Apply' onClick={() => props.onFilterChange(filter)}/>
            <GreenButton title='Reset' onClick={() => {
              setFilter({
                assetId: '',
                selectedClasses: ['0'],
                selectedStatuses: '-1'
              });
              props.onFilterChange(filter)
            }}/>
          </div>
        </div>
        <hr />
        <div className="filter-body game-scroll-bar">
          <div className="filter-search">
            <input 
              type="text" 
              className="filter-search-input" 
              value={filter?.assetId}
              placeholder="Search by Asset ID"
              onChange={handleChangeFilter('assetId')}
            />
          </div>
          <div className="filter-status">
            <span className="filter-heading">Status</span>
            <div className="container">
              <ul className="filter-status__list row">
                { props.statuses?.map((s, i) => {
                 return ( 
                  <RadioButton 
                    key={i} 
                    title={s.title} 
                    value={s.value} 
                    checked={s.value?.toString() === filter.selectedStatuses}
                    onClick={handleChangeFilter('selectedStatuses')}
                  /> )
                }) }
              </ul>
            </div>
          </div>
          <div className="filter-region">
            <span className="filter-heading">ClassName</span>
            <div className="container">
              <ul className="filter-region__list row">
              { props.classes?.map((c, i) => {
                 return ( 
                 <CheckBox 
                  key={i} 
                  title={c.title} 
                  value={c.value}
                  checked={
                    filter.selectedClasses.some((s) => {
                      return s === c.value?.toString();
                    })}
                    onClick={handleClassChange}
                /> )
                }) }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter;
