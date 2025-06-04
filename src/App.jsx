import { Route, Routes } from 'react-router-dom';
import CardsList from './components/reuts/CardsList';
import Header from './components/Header/Header';
import Home from './components/Home';
import SpaceSearch from './components/SpaceSearch/SpaceSearch';
import Pages from './components/Pages/Pages';

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                
                <Route path='/search' element={<SpaceSearch />} />
                <Route path="/:tipoPage" element={<Pages />} />
            </Routes>
        </>
    );
};

export default App;