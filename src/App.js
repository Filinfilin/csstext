import React from 'react';
import './App.css';
import Block1 from './components/Block1';
import Block2 from './components/Block2';
import st from './App.module.css'
import Block3 from './components/Block3';
import Block4 from './components/Block4';
import data from './data/data.js'
import Block5 from './components/Block5';


function App(props) {

  


  return (

    <div className={st.allblocks}>
      

         <Block1/>

         <Block2/>

         <Block3/>

         <Block4  data={data.property} />

         <Block5/>

    </div>
  );
}

export default App;
