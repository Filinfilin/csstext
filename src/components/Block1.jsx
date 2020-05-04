import React from 'react';
import st from './Block1.module.css';
import Logologo from '../img/Logologo.png'
import mainimage from '../img/mainimage.png'
import arrow from '../img/btn/arrow.png'

const Block1 = (props) => {
return(

    <div className = {st.block1}>

        <div className={st.top}>

                            <img  alt='#' src = {Logologo} className={st.Logologo}></img>


                                <ul>
                                    <li><a href='//#'>About</a></li>
                                    <li><a href='//#'>Help</a></li>
                                    <li><a href='//#'>Features</a></li>
                                    <li><a href='//#'>Signup</a></li>

                                </ul>
                            <div className={st.btnrequest}>Request Demo<img alt ='#'src={arrow}></img></div>
             </div>      

                    <div className={st.text}>
                        
                                <div className={st.texth1}>Save your data storage here.</div>

                                    <div className={st.texth2}>
                                                Data Warehouse is a data storage area that has been
                                                tested for security, so you can store your data here
                                                safely but not be afraid of being stolen by others.
                                    </div>
                                    <div className={st.btnlearn} >Learn more</div>

                         </div>

                    <img alt='#' src = {mainimage} className={st.mainimage}></img>



    </div>


    )

}


export default Block1;