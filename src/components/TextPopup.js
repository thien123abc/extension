// src/components/Popup.js

import React from 'react';

const Popup = ({ selectedText }) => {
    return (
        <div style={{ margin: '30px', width: '200px', fontFamily: 'Arial' }}>
            <h3>Selected Text:</h3>
            <p>{selectedText}</p>
        </div>
    );
};

export default Popup;
