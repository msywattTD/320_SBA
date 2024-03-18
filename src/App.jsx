import './App.css'

import NavBar from './components/NavBar'
import Main from './pages/Main'
import NotFound from './pages/NotFound'

import { Route, Routes} from 'react-router-dom'

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Main />} />
                {/* <Route path='/bard' element={<Bard />} />
                <Route path='/cleric' element={<Cleric />} />
                <Route path='/wizard' element={<Wizard />} /> */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
