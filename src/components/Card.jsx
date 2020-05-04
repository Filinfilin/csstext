import React from 'react';
import st from './Card.module.css';



const Card = (props, installActive) => {



let style = props.settedIndex+'card'

return(
   
    <div className = {st.card} >
       
        
        <div className={st.profile} >

                            <div >blablabla</div>
                            <img src={props.img}></img>

                            <div>  {props.name}</div>

                            <div> {props.ifo}</div>    
                            
                            <div> {props.text}</div>

        </div>
     
    </div>
 
    )

}


export default Card;