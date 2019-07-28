import React from "react";
import "./styles.css";

import NavButton from "../../components/NavButton/index";

export default class NavPage extends React.Component {
    render() {
        return (
            <div className="nav-page-container">
                <div className="nav-page-row">
                    <NavButton title="Add Cards" onClick={() => this.props.onPageChange("add")} />
                    <NavButton title="Edit Cards" onClick={() => this.props.onPageChange("edit")} />
                    <NavButton title="View Cards" onClick={() => this.props.onPageChange("view")} />
                </div>
            </div>
        );
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(MainPage)