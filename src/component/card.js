import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import Logo from "../pic/cream.jpg";
import Cream from "../pic/cream2.jpg";
import Cream1 from "../pic/cream3.jpg";
const Card1 = (props) => {
  return (
    <div className="cardi">
      <Card inverse>
        <CardImg className="cardi" width="100%" src={Logo} alt="Card image cap"/>
        <CardImgOverlay>
          <CardText>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};



export default Card1;