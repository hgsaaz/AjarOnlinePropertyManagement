import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import FooterComp from './App/components/FooterComp';
import DetailsPageComp from './App/Pages/Details/DetailsPageComp';
import Login from './App/components/Login';
import Listing from '../src/App/Pages/Listing/Listing'
import Firebase, { FirebaseContext } from '../src/App/Firebase';
import Register from './App/components/Register';
import Account from './App/Pages/Home/Account';
import Admin from './App/Pages/Admin/Admin';
import Home from './App/Pages/Home/Home';
import NotFound from './App/components/NotFound';
import HeaderComp from './App/components/HeaderComp';
import { applyMiddleware, createStore } from 'redux';
import reducers from './App/reducers';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import {
    ToastProvider,
} from 'react-toast-notifications';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

const DefaultLayout = ({ component: Component, ...rest }) => {

    return (
        <FirebaseContext.Consumer>
            {firebase => {
                return <div>
                    <Route {...rest} render={(renderProps) => {
                        return <Component {...renderProps} firebase={firebase} />
                    }} />
                </div>
            }}
        </FirebaseContext.Consumer>
    );
}

const Routing = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <FirebaseContext.Consumer>
            {firebase => { return <HeaderComp firebase={firebase} /> }}
        </FirebaseContext.Consumer>
        <Switch>
        <DefaultLayout exact path="/" component={App} />
        <DefaultLayout exact path="/home" component={Home} />
        <DefaultLayout exact path="/listing/:areaid" component={Listing} />
        <DefaultLayout exact path="/listing/:areaid/:pid" component={DetailsPageComp} />
        <DefaultLayout exact path="/login" component={Login} />
        <DefaultLayout exact path="/register" component={Register} />
        <DefaultLayout exact path="/account" component={Account} />
        <DefaultLayout exact path="/admin" component={Admin} />
        <Route path="*" component={NotFound} />
        </Switch>
        <FooterComp />
    </BrowserRouter>
);

ReactDOM.render(
    <Provider store={store}>
        <ToastProvider>
            <FirebaseContext.Provider value={new Firebase()}>
                <Routing />
            </FirebaseContext.Provider>
        </ToastProvider>

    </Provider>, document.getElementById('page')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
