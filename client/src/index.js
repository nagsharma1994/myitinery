import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/app';
import Cities from './components/cities/cities';
import Itineraries from './components/itineraries/itineraries';
import Account from './components/account/account';
import Login from './components/login/login';
import 'bootstrap/dist/css/bootstrap.min.css';


class Routing extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={App} />
                        <Route path="/login" component={Login}/>
                        <Route path="/cities" component={Cities} />
                        <Route path="/create" component={Account} />
                        <Route path="/itineraries/:city" component={Itineraries} />
                    </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<Routing/> , document.querySelector('#root'))