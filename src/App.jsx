import './App.css';

import NavBar from './components/NavBar';
import Main from './pages/Main';
import Bard from './pages/Bard';
import NotFound from './pages/NotFound';
import SpellInfo from './pages/SpellInfo';

import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/:charClass" element={<Bard />} />
                {/* <Route path='/bard' element={<Bard />} />
                <Route path='/cleric' element={<Cleric />} />
                <Route path='/wizard' element={<Wizard />} /> */}
                <Route path="/api/spells/:SpellId" element={<SpellInfo />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
