import React from 'react';
import st from './Block3.module.css';
import f1 from '../img/f1.png'
import f2 from '../img/f2.png'
import f3 from '../img/f3.png'
import f4 from '../img/f4.png'
import arrow from '../img/btn/arrow.png'









const Block3 = (props) => {
return(

    <div className = {st.block3}>

        <div className={st.text}>
                        <div className={st.texth1}>
                            Features
                        </div>

                        <div className={st.texth2}>
                            Some of the features and advantages
                            that we provide for those of you who
                            store data in this Data Warehouse.
                        </div>

          </div>

            <div className={st.divfimg}>

                     <div className={st.featurecard1}>

                                            <img src = {f1} alt='' className={st.f1img}>
                                            </img>

                                             <div className={st.featurename}>
                                                                            Search Data
                                              </div>

                                            <div className={st.featurdiscript}>Don’t worry if your data is very large,
                                                                            the Data Warehoue provides a search engine,
                                                                            which is useful for making it easier to find 
                                                                            data effectively saving time.   
                                             </div>

                                             <div className={st.featurebtn1}>
                                                                             Learn more
                                                                       <img alt='' src={arrow}></img>
                                              </div>
                        </div>
                       

                        <div className={st.featurecard2}>

                                    <img src = {f2} alt='' className={st.f2img}></img>
                                    <div className={st.featurename}>
                                                                             24 Hours Access
                                              </div>

                                            <div className={st.featurdiscript}>
                                                                            Access is given 24 hours a full morning 
                                                                            to night and meet again in the morning,
                                                                            giving you comfort when you need data 
                                                                            when urgent.   
                                             </div>

                                             <div className={st.featurebtn2}>
                                                                             Learn more
                                                                       <img alt='' src={arrow}></img>
                                              </div>
                      
                         </div>

                        <div className={st.featurecard3}>

                                    <img src = {f3} alt='' className={st.f3img}></img>
                                    <div className={st.featurename}>
                                                                           Print Out
                                              </div>

                                            <div className={st.featurdiscript}>Print out service gives you convenience if
                                                                                 someday you need print data, just edit
                                                                                  it all and just print it.
                                             </div>

                                             <div className={st.featurebtn3}>
                                                                             Learn more
                                                                       <img alt='' src={arrow}></img>
                                              </div>
                       
                         </div>

                        <div className={st.featurecard4}>

                                    <img src = {f4}  alt=''className={st.f4img}></img>
                                    <div className={st.featurename}>
                                                                             Security Code
                                              </div>

                                            <div className={st.featurdiscript}>Data Security is one of our best facilities.
                                                                               Allows for your files to be safer. The file can
                                                                               be secured with a code or password that you created,
                                                                               so only you can open the file. 
                                             </div>

                                             <div className={st.featurebtn4}>
                                                                             Learn more
                                                                       <img alt='' src={arrow}></img>
                                              </div>
                         </div>
                  
            </div>


    
    </div>

    )

}


export default Block3;