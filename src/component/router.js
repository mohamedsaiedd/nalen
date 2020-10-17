import React from "react";
import { Route , BrowserRouter , Link  }from "react-router-dom";
import App from "./app";
import Shop from "./shop";
import About from "./about";

const Approute = () => {

    return (
            <BrowserRouter >
                <div> 
                    <Route component={App} path="/" exact={true} />
                    <Route component={Shop} path="/shop"  exact={true}/>
                    <Route component={About} path="/about"  exact={true}/>
                </div>
            </BrowserRouter>
    
    )
}

export default Approute; 