import React from "react";
import "./styles.css";

import Header from "../Header/index";

import NavPage from "../NavPage/index";
import AddPage from "../AddPage/index";
import EditPage from "../EditPage/index";
import ViewPage from "../ViewPage/index";

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: "nav"
        }
    }

    onPageChange(newView) {
        this.setState({view: newView});
    }

    render() {
        return (
            <div className="main-page-container">
                <Header />
                {this.state.view === "nav" ? <NavPage onPageChange={this.onPageChange.bind(this)} /> : null}
                {this.state.view === "add" ? <AddPage onPageChange={this.onPageChange.bind(this)} /> : null}
                {this.state.view === "edit" ? <EditPage onPageChange={this.onPageChange.bind(this)} /> : null}
                {this.state.view === "view" ? <ViewPage onPageChange={this.onPageChange.bind(this)} /> : null}
            </div>
        );
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(MainPage)