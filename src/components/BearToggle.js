import React from "react";
import './BearToggle.scss'

export const BearToggle = ({state, callback}) => {

    return (
        <div className="toggleWrapper">
            <input type="checkbox" className="dn" id="dn" onClick={() => callback(!state)}/>
            <label htmlFor="dn" className="toggle">
                <span className="toggle__handler"/>
            </label>
            <div className="bear-body">
                <span className="eye left"/>
                <span className="eye right"/>
            </div>
        </div>)
}