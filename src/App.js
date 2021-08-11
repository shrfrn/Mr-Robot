import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { MisterBitcoin } from './pages/MisterBitcoin.jsx';
import { ContactDetails } from './pages/ContactDetails.jsx';
import { EditContact } from './pages/EditContact';

function App() {

    return (
        <Router>
            <main>
                <Switch>
                    <Route path="/contact/:id" component={ContactDetails} />
                    <Route path="/edit/:id?" component={EditContact} />
                    <Route path="/" component={MisterBitcoin} />
                </Switch>
            </main>
        </Router>
    )
}

export default App;
