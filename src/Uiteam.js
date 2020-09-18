import React, { Component } from "react";
import Teammember from "./Teammember";
import Welcome from "./Welcome";
import "tachyons";

export default class Uiteam extends Component {
 
  componentDidMount() {
    fetch("./data.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            teamMember: result.members
          });
        },
        
      )
  }

  state = {
    teamMember: [],
    visible: false,
    btntext: "Meet Memeber",
  };

  handelClick = () => {
    this.state.visible
      ? this.setState({ visible: false,btntext: "Meet Memebers" })
      : this.setState({ visible: true, btntext: "Exit Room" });
  };

  render() {
    const teamMem = this.state.teamMember.map((member) => {
      return <Teammember key={member.id} name={member.name} project={member.proj} />;
    });

    return (
      <div>
        <h1 className="tc">Welcome to UI team of Flynava</h1>
        {this.state.visible ? (
          <div className="flex justify-around">{teamMem}</div>
        ) : (
          <Welcome/>
        )}
        <div
          style={{ marginTop: 30 }}
          className="flex justify-center items-center-ns"
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handelClick}
          >
            {this.state.btntext}
          </button>
        </div>
      </div>
    );
  }
}
