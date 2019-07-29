import React from "react";
import "./styles.css";
import Question from "../../components/Question";

export default class AddPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }

    handleChange(event, field) {
        this.setState({[field]: event.target.value});
    }

    submitValues(brand, sport, year, number, player, team) {
        console.log(brand, sport, year, number, player, team);
    }

    validateInput() {
        const { brand, sport, year, number, player, team } = this.state;
        if (typeof brand !== "string") {
            this.setState({brandError: true});
            return;
        }
        if (typeof sport !== "string") {
            this.setState({sportError: true});
            return;
        }
        if (year < 1900 || year > 2020) {
            this.setState({yearError: true});
            return;
        }
        if (number === "") {
            this.setState({numberError: true});
            return;
        }
        if (typeof player !== "string") {
            this.setState({playerError: true});
            return;
        }
        if (typeof team !== "string") {
            this.setState({teamError: true});
            return;
        }
        this.setState({
            brand: "", brandError: false,
            sport: "", sportError: false,
            year: "", yearError: false,
            number: "", numberError: false,
            player: "", playerError: false,
            team: "", teamError: false,
            success: true
        });
        setTimeout(() => {
            this.setState({ success: false });
        }, 2000);
        this.submitValues(brand, sport, year, number, player, team);
    }

    render() {
        return (
            <div className="add-page-container">
                <div className="add-page-row">
                    <div>
                        <Question
                            type={"text"}
                            label={"Brand"}
                            value={this.state.brand}
                            onChange={(event) => this.handleChange(event, "brand")}
                            error={this.state.brandError}
                            errorMessage={"Please enter a Brand"}
                        />
                        <Question
                            type={"text"}
                            label={"Sport"}
                            value={this.state.sport}
                            onChange={(event) => this.handleChange(event, "sport")}
                            error={this.state.sportError}
                            errorMessage={"Please enter a Sport"}
                        />
                        <Question
                            type={"number"}
                            label={"Year"}
                            value={this.state.year}
                            onChange={(event) => this.handleChange(event, "year")}
                            error={this.state.yearError}
                            errorMessage={"Please enter a year between 1900-2020"}
                        />
                        <Question
                            type={"text"}
                            label={"Number"}
                            value={this.state.number}
                            onChange={(event) => this.handleChange(event, "number")}
                            error={this.state.numberError}
                            errorMessage={"Please enter a number > 0"}
                        />
                        <Question
                                type={"text"}
                                label={"Player"}
                                value={this.state.player}
                                onChange={(event) => this.handleChange(event, "player")}
                                error={this.state.playerError}
                                errorMessage={"Please enter a player"}
                            />
                            <Question
                                type={"text"}
                                label={"Team"}
                                value={this.state.team}
                                onChange={(event) => this.handleChange(event, "team")}
                                error={this.state.teamError}
                                errorMessage={"Please enter a team"}
                            />
                        <button className="btn btn-light" onClick={this.validateInput}>Submit</button>
                        {this.state.success ? <div className="add-page-success">Sent</div> : null}
                    </div>
                </div>
            </div>
        );
    }
}
