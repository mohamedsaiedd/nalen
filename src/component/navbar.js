import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {
  RiShoppingBasketLine
} from 'react-icons/ri';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const Pop = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [BgColor , setBgColor] = useState('#00CC33')

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
     <div  id="Popover1">AYURVEDA</div>
      <Popover id="pop-nav" className="pop-nav"placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
       
        <PopoverBody className="pop-nav">
          <div className="pop-nav">
            <span>make</span><br />
            <span>make</span><br />
            

          </div>
        </PopoverBody>
      </Popover>
    </div>
  );
}



const Navv = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className=" expandable padding fixed-top transparent navbar-inverse navbar-inner"  light expand="md">
      <NavbarBrand className="nav-brand brand d-lg-block" href="/">NALEN</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <NavLink  className="nav"><Link to="./AYURVEDA">AYURVEDA</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="nav"><Link to="./ABOUT">ABOUT</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="nav"><Link to="./SHOP">SHOP</Link></NavLink>
            </NavItem>
          </Nav>
              <NavLink className="nav-itemm" href=""><RiShoppingBasketLine  size={35}/></NavLink>
           
        </Collapse>
      </Navbar>
      
    </div>
  );
}

export default Navv;

// import  React , { useState , useStyles } from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';




// export default function SwipeableTemporaryDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <div
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//       })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//      <div>mohamed</div><br />
//      <div>mohamed</div><br />
//      <div>mohamed</div><br />
//      <div>mohamed</div><br />
//      <div>mohamed</div><br />
     
      
//     </div>
//   );

//   return (
//     <div>
        

//       {['bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <SwipeableDrawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//             onOpen={toggleDrawer(anchor, true)}
//           >
//             {list(anchor)}
//           </SwipeableDrawer>
//         </React.Fragment>
//       ))}
//     </div>
  
   
//   );
// }
