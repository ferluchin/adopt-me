import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import SearchParams from "./SearchParams";
import Details from './Details';

const App = () => {
    return (
        <div>
            <header>
                <Link to="/">
                    Adopt Me!
                    </Link>
            </header>

            <Router>
                <SearchParams path="/">
                </SearchParams>
                <Details path="/details/:id"></Details>

            </Router>
        </div>
    )
};
// render(<App />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));