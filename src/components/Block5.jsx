import React from 'react';
import st from './Block5.module.css';
import arrow from '../img/btn/arrow.png'
import whitearrow from '../img/btn/whitearrow.png'
import Logologo from '../img/Logologo.png'
import ttwitter from '../img/ttwitter.png'
import ffacebook from '../img/ffacebook.png'
import iinstagram from '../img/iinstagram.png'
import messageimg from '../img/messageimg.png'






const Block5 = (props) => {
return(

    <div className = {st.block5}>


        <div className={st.head}>
            <div className={st.tryforfree}>
                <h1>try bfor free!</h1>
                <h3>Get limited 1 week free try our features!</h3>

            </div>

            <div className={st.buttons}>

                        <div className={st.btnlearnbottom} >Learn more</div>

                        <div className={st.btnrequest}>Request Demo<img alt ='#'src={arrow}></img></div>
                                                
             </div> 
        </div>

          <div className={st.bottom}>
              
                          <div className={st.info}>
                                        <div className={st.logoname}>   
                                            <img  alt='#' src = {Logologo} className={st.Logologo}></img>
                                            <h2>DataWarehouse</h2>
                                        </div>
                                         <div>
                                          Warehouse Society, 234 <br/>
                                          Bahagia Ave Street PRBW 29281
                                           </div>
                                           <br/>

                                           <div>
                                          info@warehouse.project <br/>
                                          1-232-3434 (Main)
                                         </div>
                         </div>

                                               <div className={st.about}>
                                                                <ul>
                                                                    <h2>About</h2>
                                                                    <li><a href='//#'>Profile</a></li><br/>
                                                                    <li><a href='//#'>Careers</a></li><br/>
                                                                    <li><a href='//#'>Dw Neews</a></li><br/>

                                                                </ul>
                                                </div>

                                                <div className={st.help}>

                                                                <ul>
                                                                    <h2>Help</h2>
                                                                    <li><a href='//#'>Support</a></li><br/>
                                                                    <li><a href='//#'>Sign up</a></li><br/>
                                                                    <li><a href='//#'>Guide</a></li><br/>
                                                                    <li><a href='//#'>Reports</a></li><br/>
                                                                    <li><a href='//#'>Q&A</a></li><br/><br/>
                                                                </ul>
                                                </div>
                                                <div className={st.socialmedia}>
                                                                   <h2>Social Media</h2>
                                                                   <div className={st.socialmediaimg}>
                                                                            <img  alt='#' src = {ttwitter} className={st.Logologo}></img>
                                                                            <img  alt='#' src = {ffacebook} className={st.Logologo}></img>
                                                                            <img  alt='#' src = {iinstagram} className={st.Logologo}></img>
                                                                   </div>
                                                                   <div className={st.chat}>
                                                                        <img  alt='#' src = {messageimg} className={st.Logologo}></img>
                                                                   </div>

                                                </div>

             </div>

    </div>

    )

}


export default Block5;