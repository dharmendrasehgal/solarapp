import React, { useRef, useState } from 'react';
import Panel from './Panel';
import './Solar.css';
import logo from './logo.svg';
import useOutsideAlerter from './hooks/useOutsideAlerter';

function Solar() {
    const [hidden, setHidden] = useState(true);
    const [defaultPanels] = useState([
        {'c1':'A','c2':'E','c3':'F','c4':'B'},
        {'c1':'L','c2':'a','c3':'b','c4':'G'},
        {'c1':'K','c2':'c','c3':'e','c4':'H'},
        {'c1':'D','c2':'J','c3':'I','c4':'C'}
    ]);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    function renderPanels() {
        return defaultPanels.map((p,i) => {
            const {c1,c2,c3,c4} = p;
            return (
                <tr key={ i }>
                    <Panel value={ c1}  />
                    <Panel value={ c2 }  />
                    <Panel value={ c3 }  />
                    <Panel value={ c4 }  />
                </tr>
            );
        });
    }
    function renderSolarPanel() {
        return (
            <div ref={wrapperRef}>
                <table cellPadding="0" cellSpacing="0">
                    <tbody>
                        { renderPanels() }
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div data-val={hidden}>
            {!hidden ? renderSolarPanel() : <p className="content">Shape your Solar panel <button onClick={() => setHidden(!hidden)}><img src={logo} className="App-logo" alt="logo" /></button></p>}
        </div>
    );
};

export default Solar;