import React from 'react'
import { Card, Icon } from 'semantic-ui-react';
import Navv from "./navbar";
import Img1 from "../pic/cream4.jpg";
import Img2 from "../pic/cream.jpg";
import Img3 from "../pic/cream2.jpg";
const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const Cardd = (props) => (
  <Card
    image={props.img}
    header={props.ItemName}
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
)


 const Cards = (props) => {
    return (
        <div className="row">
            <Cardd img={Img1} ItemName="Nalen Basic Cream"/>
            <Cardd img={Img2} ItemName="Nalen Basic Cream"/>
            <Cardd img={Img3} ItemName="Nalen Basic Cream"/>
            <Cardd img={Img2} ItemName="Nalen Basic Cream"/>
        </div>
    )
}


const Shop = () => {
    return ( 
        <div>
        <Navv />
        <Cards />
        </div>
       
    )
} 
export default Shop;