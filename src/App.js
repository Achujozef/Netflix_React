import React from 'react';

import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost'; 
import {action,originals,comedy,horrorMovies,romanceMovies,documentaries} from './url'
function App() {
  return (
    <div className='App'>
        <NavBar/>
        <Banner/>
        <RowPost  url={originals} title='NetFlix Orginals'/>
        <RowPost  url={action} title='Action Movies' isSmall/>
        <RowPost  url={comedy} title='Comedy Movies' isSmall/>
        <RowPost  url={horrorMovies} title='Horror Movies' isSmall/>
        <RowPost  url={romanceMovies} title='Romance Movies' isSmall/>
        <RowPost  url={documentaries} title='Documentaries' isSmall/>
        
    </div>
  );
}

export default App;
