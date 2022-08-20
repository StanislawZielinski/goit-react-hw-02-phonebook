import React, { Component } from "react";

class Contacts extends Component {

    render() {
        return (
            <div>
                <p className="contacts-title">Contacts</p>
                <p className="filter-title">filter contacts by name</p>
                <input className="input" onChange={(evt)=>this.setState({ ...this.setState, filter: evt.target.value })} />
                <ul>{this.renderContacts(this.state.filter, this.state.contacts)}</ul>
                </div>
    )}
}

export default Contacts