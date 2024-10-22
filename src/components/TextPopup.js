// src/components/Popup.js

import React from 'react';

const Popup = ({ selectedText ,html,img,network}) => {
    return (
        <div style={{ margin: '30px', width: '200px', fontFamily: 'Arial' }}>
            {selectedText&&<p>text:{selectedText}</p>}
            {img&&<p>img:{img}</p>}
            {html&&<p>html:{html}</p>}
            {network&&<p>network:{network}</p>}
        </div>
    );
};

export default Popup;
