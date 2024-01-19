import React from 'react';
import Greeting from '@components/Greeting';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
     <Routes>
       <Route path="/" element={<Greeting />} />
     </Routes>
    );
}


export default App;