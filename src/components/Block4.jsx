import React from 'react';
import st from './Block4.module.css';
import Card from './Card'
import { useState } from 'react';
import whitearrow from '../img/btn/whitearrow.png'
import longarrow from '../img/btn/longarrow.png'
import {add} from '../data/data.js'








const Block4 = (props) => {

const [index, setCount] = useState(0);




return(
  
<div className={st.block4}>
    <div className = {st.wrapper}>
     
          <h1>Testimonials</h1>

                  <div className={`caruselwrapper-`+index} style ={ {
                                                                              'height':`400px`,
                                                                              'width':'700px',
                                                                              'marginTop': `190px`,
                                                                              'marginLeft':`93px`,
                                                                                  
                                                                          
                                                                        }               
                                                                         } >
                        <div className={st.carusel} style ={{'transform':`translate(-${index*(100/props.data.length)}%)`}}>
                            
                                        
                                          {
                                            props.data.map(property => <Card  
                                                                              settedIndex={index}
                                                                              index = {property._index}
                                                                              index={property._id}
                                                                              text={property._text}
                                                                              name={property._name}
                                                                              img={property._profileimg}
                                                                              info={property._site}/> )
                                          }
                                              

                        </div>
                </div>    

                </div>
                            <div className={st.buttons}>   

                                  <div className={st.rowtriger} >

                                                                            <div className={st.triger} style={index === 0 ? {'backgroundColor': ` #F063B8`, 'width': `10px`, 'height':`10px`} : {'backgroundColor': `#FFFFFF`}}></div>
                                                                            <div className={st.triger} style={index === 1 ? {'backgroundColor': ` #F063B8`, 'width': `10px`, 'height':`10px` } : {'backgroundColor': `#FFFFFF`}}></div>
                                                                            <div className={st.triger} style={index === 2 ? {'backgroundColor': ` #F063B8`, 'width': `10px`, 'height':`10px` } : {'backgroundColor': `#FFFFFF`}}></div>
                                                                            <div className={st.triger} style={index === 3 ? {'backgroundColor': ` #F063B8`, 'width': `10px`, 'height':`10px` } : {'backgroundColor': `#FFFFFF`}}></div>

                </div>

                <div className={st.arrows}>
                  
                                                                            <div className={st.arrow1} onClick={index === 0 ? ()=>setCount(index + 3):()=>setCount(index-1)}>
                                                                                          <img src={longarrow}></img>
                                                                              </div>
                                                                            
                                                                            <div className={st.arrow2} onClick={index === 3 ? ()=>setCount(index - 3):()=>setCount(index+1)}>
                                                                                          <img src={whitearrow}></img>
                                                                            </div>

                      

                        </div>
                    </div>

    </div>
             
  
    )

}


export default Block4;