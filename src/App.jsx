import { useState } from 'react';
import HomePage from '@components/HomePage/HomePage';
import Info from '@components/Info/Info';
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <HomePage />
            <Info />
        </>
    );
}

export default App;
