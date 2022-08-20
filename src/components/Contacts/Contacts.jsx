import React, { Component } from "react";

class Contacts extends Component {

    render() {
        return (
            <div>
                <p className="contacts-title">Contacts</p>
                <p className="filter-title">filter contacts by name</p>
                <input className="input" onChange={this.props.onChange} />
                <ul>{this.props.renderContacts(this.props.filter, this.props.contacts)}</ul>
                </div>
    )}
}

export default Contacts