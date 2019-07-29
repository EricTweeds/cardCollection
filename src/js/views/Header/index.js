import React from "react";
import Button from "react-bootstrap/Button";
import "./styles.css";
import Constants from "../../Constants";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-row">
                    <Button className="btn btn-light header-home-button" onClick={() => this.props.onPageChange(Constants.NAV_PAGE)}>Home</Button>
                    <h1 className="header-title">{this.props.page}</h1>
                </div>
            </div>
        );
    }
}
