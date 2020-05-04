import React from 'react';
import st from './Block2.module.css';
import block2img from '../img/block2img.png';

const Block2 = (props) => {
return(

    <div className = {st.block2}>

            <img src={block2img} alt='sdf'></img>

             <div className={st.text}>
            
                             <div className={st.texth1}>
                                      We are a high-level data storage bank
                             </div>

                             <div className={st.texth2}>
                                        The place to store various data that
                                         you can access at any time through
                                          the internet  and where you can carry it. 
                                        This very flexible storage area has a high
                                         level of security. To enter into your own 
                                         data you must enter the password that
                                          you created when you registered in
                                           this Data Warehouse. 
                             </div>
             </div>

    </div>

    )

}


export default Block2;