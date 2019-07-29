import React from "react";
import "./styles.css";

import Constants from "../../Constants";

import Header from "../Header/index";

import NavPage from "../NavPage/index";
import AddPage from "../AddPage/index";
import EditPage from "../EditPage/index";
import ViewPage from "../ViewPage/index";

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: Constants.NAV_PAGE
        }
    }

    onPageChange(newView) {
        this.setState({view: newView});
    }

    render() {
        return (
            <div className="main-page-container">
                <Header onPageChange={this.onPageChange.bind(this)} page={this.state.view} />
                {this.state.view === Constants.NAV_PAGE ? <NavPage onPageChange={this.onPageChange.bind(this)} /> : null}
                {this.state.view === Constants.ADD_PAGE ? <AddPage onPageChange={this.onPageChange.bind(this)} /> : null}
                {this.state.view === Constants.EDIT_PAGE ? <EditPage onPageChange={this.onPageChange.bind(this)} /> : null}
                {this.state.view === Constants.VIEW_PAGE ? <ViewPage onPageChange={this.onPageChange.bind(this)} /> : null}
            </div>
        );
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(MainPage)