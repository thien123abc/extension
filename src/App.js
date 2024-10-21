// src/App.js

import React, { useEffect, useState } from 'react';
import Popup from './components/TextPopup';

function App() {
    const [selectedText, setSelectedText] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const text = urlParams.get('text');
        if (text) {
            setSelectedText(decodeURIComponent(text));
        }
    }, []);

    return <Popup selectedText={selectedText} />;
}

export default App;
