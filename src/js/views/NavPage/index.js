import React from "react";
import "./styles.css";

import Constants from "../../Constants";
import NavButton from "../../components/NavButton/index";

export default class NavPage extends React.Component {
    render() {
        return (
            <div className="nav-page-container">
                <div className="nav-page-row">
                    <NavButton title="Add Cards" onClick={() => this.props.onPageChange(Constants.ADD_PAGE)} />
                    <NavButton title="Edit Cards" onClick={() => this.props.onPageChange(Constants.EDIT_PAGE)} />
                    <NavButton title="View Cards" onClick={() => this.props.onPageChange(Constants.VIEW_PAGE)} />
                </div>
            </div>
        );
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(MainPage)