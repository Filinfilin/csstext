import React from 'react';
import st from './Block4.module.css';
import Card from './Card'
import { useState } from 'react';
import whitearrow from '../img/btn/whitearrow.png'
import longarrow from '../img/btn/longarrow.png'

const Block4 = (props) => {

  const [index, setCount] = useState(0);
  const cardLength = props.data.length - 1;

  return (
    <div className={st.block4}>
      <div className={st.wrapper}>
        <h1>Testimonials</h1>

        <div className={`caruselwrapper-` + index} style={{
          'height': `400px`,
          'width': '700px',
          'marginTop': `190px`,
          'marginLeft': `93px`,
        }}>

          <div className={st.carusel} style={{ 'transform': `translate(-${index * (100 / props.data.length)}%)` }}> {
            props.data.map(property => <Card
              cardStyle={index === property._index ? 'active' : ''}
              settedIndex={index}
              index={property._index}
              text={property._text}
              name={property._name}
              img={property._profileimg}
              info={property._site}
            />)}</div>
        </div>
      </div>

      <div className={st.buttons}>
        <div className={st.rowtriger} > {
          props.data.map(property => <div
            className={st.triger}
            style={index === property._index ?
              { 'backgroundColor': ` #F063B8`, 'width': `10px`, 'height': `10px` } :
              { 'backgroundColor': `#FFFFFF` }}
            onClick={() => setCount(property._index)}
          ></div>)}</div>

        <div className={st.arrows}>
          <div className={st.arrow1} onClick={() => index === 0 ? setCount(index + cardLength) : setCount(index - 1)}>
            <img src={longarrow} alt='longarrow'></img>
          </div>
          <div className={st.arrow2} onClick={() => index === cardLength ? setCount(index - cardLength) : setCount(index + 1)}>
            <img src={whitearrow} alt='longarrow'></img>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Block4;