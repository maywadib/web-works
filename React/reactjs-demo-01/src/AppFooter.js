import React from 'react';
import './AppFooter.css';
//here instead of class extends component
//use function

export default function AppFooter(props) {
    return(
        <div className="app-footer">
            <p >This is my footer</p>
            <p >Website: {props.website}</p>
            <p>Company: {props.company}</p>
            <p>Year: {props.year}</p>
        </div>
    )
}