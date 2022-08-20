import React, { Component } from "react";
import { nanoid } from 'nanoid';
import "./Phonebook.css"
import Form from "components/Form/Form";
// import Contacts from "components/Contacts/Contacts"
import Filter from "components/Filter/Filter"

class Phonebook extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const name = form.elements.name.value;
        const phoneNumber = form.elements.number.value;
        this.setState({...this.state, contacts:[...this.state.contacts,{name:name, id:nanoid(), number:phoneNumber} ]})
        form.reset();
    }
    renderContacts = (filterValue, contacts) => {
        if (!filterValue) {
            return contacts.map(contact =>
            { return <li className="contacts" key={contact.id}>{contact.name}: {contact.number} </li> })
        };
        const filterFunction = contacts.filter((el) => el.name.toLowerCase().includes(filterValue.toLowerCase()));
        console.log(filterFunction);

            return (
            filterFunction.map(contact =>
            { return <li className="contacts" key={contact.id}>{contact.name}: {contact.number} </li> })
        )
    }
    onChange = (evt) => this.setState({ ...this.setState, filter: evt.target.value });

    render() {
        return (
            <div>
                <Form handleSubmit={this.handleSubmit} />
                <div>
                <Filter onChange={this.onChange} />
                    <ul>{this.renderContacts(this.state.filter, this.state.contacts)}</ul>
                 </div>
            </div>
    )}
}

export default Phonebook