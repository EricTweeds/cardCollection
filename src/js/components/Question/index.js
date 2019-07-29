import React from "react";
import "./styles.css";

export default class Question extends React.Component {
    render() {
        return (
            <label className="question-container">
                <div className="question-label">{this.props.label}</div>
                <input className={"question-" + this.props.type} type={this.props.type} value={this.props.value} onChange={this.props.onChange} />
                {this.props.error? <span className="add-page-error">{this.props.errorMessage}</span> : null}
            </label>
        );
    }
}