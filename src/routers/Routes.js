import React from 'react'
import {
    Route,
    Switch,
    BrowserRouter
} from "react-router-dom";
import Main from './HomePage';
import Blog from '../components/gui/Blog';
import Service from '../components/gui/Service';

function Routes() {
    return (
        <BrowserRouter>
                <Switch>                    
                    <Route exact path="/" component={Main} />
                    <Route exact path="/blog/:id" component={Blog} />
                    <Route exact path="/servicio" component={Service} />                    
                    <Route exact path="/webpay-success" component={WebpaySuccess} />
                    <Route exact path="/webpay-cancel" component={WebpayCancel} />
                    <Route exact path="/webpay-error" component={WebpayError} />
                </Switch>
        </BrowserRouter>
    )
}

export default Routes
