import React, { useState } from 'react';
import SomoyPayDeposit from './components/SomoyPayDeposit';
import Dashboard from './pages/Dashboard';

function App() {
    const [activePage, setActivePage] = useState('dashboard'); // This controls which page to show

    const togglePage = () => {
        setActivePage((prevPage) => (prevPage === 'dashboard' ? 'deposit' : 'dashboard'));
    };

    return (
        <div className="App">
            <button onClick={togglePage}>
                Switch to {activePage === 'dashboard' ? 'Deposit' : 'Dashboard'}
            </button>

            {activePage === 'dashboard' ? <Dashboard /> : <SomoyPayDeposit />}
        </div>
    );
}

export default App;
