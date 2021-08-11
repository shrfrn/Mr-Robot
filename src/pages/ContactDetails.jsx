import { Component } from 'react'
import { connect } from 'react-redux'
import { getContactById, removeContact } from '../store/actions/contactActions.js'

class _ContactDetails extends Component {

    async componentDidMount() {
        const { id } = this.props.match.params
        this.props.getContactById(id)
    }
    goBack = () => {
        this.props.history.push('/')
    }
    editContact = () => {
        this.props.history.push('/edit/' + this.props.match.params.id)
    }
    deleteContact = async () => {
        const { id } = this.props.match.params
        this.props.removeContact(id)
        this.goBack()
    }

    render () {
        const { contact } = this.props
        if(!contact) return (<p>Loading...</p>)

        const { name, email, phone } = contact
        return (
            <section className="contact-details">
                <img src={ 'http://robohash.org/' + contact._id } alt="" />
                <h1>{name}</h1>
                <p>{email}</p>
                <p>{phone}</p>
                <section className="action-btns">
                    <button onClick={ this.goBack }>Back</button>
                    <button onClick={ this.editContact }>Edit</button>
                    <button onClick={ this.deleteContact }>x</button>
                </section>
            </section>
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
    removeContact,
  }
  export const ContactDetails = connect(mapStateToProps, mapDispatchToProps)(_ContactDetails)