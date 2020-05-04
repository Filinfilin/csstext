import React from 'react';
import st from './Card.module.css';

const Card = (props, installActive) => {
  return (
    <div className={`${st.card} ${props.cardStyle ? st.active : ''}`}>
      <div className={st.profile} >
        <div >blablabla</div>
        <img src={props.img} alt='props.img'></img>
        <div>  {props.name}</div>
        <div> {props.ifo}</div>
        <div> {props.text}</div>
      </div>
    </div>
  )
}

export default Card;