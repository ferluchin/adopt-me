import React, { useState } from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import SearchParams from "./SearchParams";
import Details from './Details';
import ThemeContext from './ThemeContext';

const App = () => {
    const themeHook = useState('purple');
    return (
        <ThemeContext.Provider value={themeHook}>
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
        </ThemeContext.Provider>
    )
};
// render(<App />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));