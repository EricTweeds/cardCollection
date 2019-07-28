import React from "react";
import "./styles.css";

export default class NavButton extends React.Component {
    render() {
        return (
            <div className="nav-button-card" onClick={this.props.onClick}>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}