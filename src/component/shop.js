import React from 'react'
import { Card, Icon } from 'semantic-ui-react';
import Navv from "./navbar";
import Img1 from "../pic/cream4.jpg";
import Img2 from "../pic/cream.jpg";
import Img3 from "../pic/cream2.jpg";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import toggleDrawer from "./sidebar";
function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}



const extra = (
  <a onClick={toggleDrawer}>add to cart</a>
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
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });


 
    return (
        <div className="row">
            <Cardd img={Img1} ItemName="Nalen Basic Cream" />
            <Cardd img={Img2} ItemName="Nalen Basic Cream" />
            <Cardd img={Img3} ItemName="Nalen Basic Cream" />
            <Cardd img={Img2} ItemName="Nalen Basic Cream" />
            <Snackbar
        open={state.open}
       
        TransitionComponent={state.Transition}
        message="I love snacks"
        key={state.Transition.name}
      />
        </div>
    )
}


const Shop = () => {
  
    return ( 
        <div className="container">
        <Navv />
        <Cards />
       
        </div>
       
    )
} 
export default Shop;