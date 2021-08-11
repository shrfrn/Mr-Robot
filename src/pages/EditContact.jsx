import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import { connect } from 'react-redux'
import { getContactById, addContact, updateContact } from '../store/actions/contactActions.js'

class _EditContact extends Component {

    state = {
        contact: null,
    }
    async componentDidMount() {
        const { id } = this.props.match.params

        if(id){
            this.props.getContactById(id)
            this.setState({ contact: this.props.contact })
        } else {
            const newContact = contactService.getEmptyContact()
            this.setState({ contact: newContact })
            console.log(newContact);
        }
        console.log(this.props);
    }
    handleChange = ({ target }) => {
        const field = target.id
        const value = target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value }}))
    }
    saveContact = async (ev) => {
        ev.preventDefault()

        if(this.state.contact._id){
            console.log('updating');
            this.props.updateContact(this.state.contact)
        } else {
            console.log('adding');
            this.props.addContact(this.state.contact)
        }
        this.props.history.push('/')
    }
    goBack = () => {
        this.props.history.push('/')
    }
    render() {
        const contact = this.state.contact
        if(!contact) return (<p>Loading...</p>)

        const { _id, name, email, phone } = contact
        const imgUrl = _id ? _id : "placeholder"
        return (
            <form onSubmit = { this.saveContact } className="edit-contact">
                <img src={"http://robohash.org/placeholder/" + imgUrl} alt="" />
                <label htmlFor = { name }>name:
                    <input value = { name } onChange={ this.handleChange } id="name" type="text" />
                </label>
                <label htmlFor = { email }>email:
                    <input value = { email } onChange={ this.handleChange } id="email" type="email" />
                </label>
                <label htmlFor = { phone }>phone:
                    <input value = { phone } onChange={ this.handleChange } id="phone" type="text" />
                </label>
                <section className="action-btns">
                    <button onClick = { this.goBack } type="button">Back</button>
                    <button onClick = { this.saveContact } type="submit">Save</button>
                </section>
            </form>
        )
    }
}
const mapStateToProps = state => {
    return {
      contact: state.contactModule.currContact,
    //   loggedInUser: state.userModule.loggedInUser
    }
  }
  const mapDispatchToProps = {
    getContactById,
    addContact,
    updateContact,
  }
  export const EditContact = connect(mapStateToProps, mapDispatchToProps)(_EditContact)