import React from 'react';
import './css/App.css';

import { NavMenu } from './NavMenu';
import { Practice } from './Practice';
import { SentenceComponent } from './SentenceComponent';

function App() {
    return (
        <div className="App">
            <NavMenu currentPage="Practice" />
            <Practice />
        </div>
    );
}

export default App;
