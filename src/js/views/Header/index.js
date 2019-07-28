import React from "react";
import { Button } from "react-bootstrap";
import "./styles.css";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-row">
                    <Button>Home</Button>
                </div>
            </div>
        );
    }
}
