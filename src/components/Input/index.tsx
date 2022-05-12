import React, { FunctionComponent } from 'react';
// import { Link } from 'react-router-dom';

export type IProps = {
  title?: string,
  value?: number,
  checked?: boolean,
  className?: string,
  onClick?: (event: any) => void
}

export const RadioButton: FunctionComponent<IProps> = (props: IProps) => (
  <li className="filter-status__item col c-6">
    <label className="status-label click-cursor">
      <input 
        className="click-cursor" 
        type="radio" 
        name={props.title} 
        id={`status-${props.value}`} 
        value={props.value} 
        checked={props.checked}
        onChange={props.onClick}
      />
      <span className='capitalize'>{props.title}</span>
    </label>
  </li>
)


export const CheckBox: FunctionComponent<IProps> = (props: IProps) => (
  <li className="filter-region__item col c-6">
    <label className="region-label click-cursor">
      <input
        className="click-cursor region-checkbox"
        type="checkbox"
        name={props.title}
        id={`status-${props.value}`}
        value={props.value}
        checked={props.checked}
        onChange={props.onClick}
      />
      <span className='capitalize'>{props.title}</span>
    </label>
  </li>
)

export const GameButton: FunctionComponent<IProps> = (props: IProps) => (
  <button className="game-button click-cursor undefined" onClick={props.onClick}>
    <div className="title">{props.title}</div>
    <img src={`${process.env.PUBLIC_URL}/assets/bubble-arrow.png`} alt="" />
  </button>
)


export const GreenButton: FunctionComponent<IProps> = (props: IProps) => (
  <button className={`green-button click-cursor ${props.className?props.className:''}`} onClick={props.onClick}> {props.title} </button>
)


