import React from "react"
import { connect } from 'react-redux'

import ContactList from '../cmps/ContactList.jsx'
import { Header } from "../cmps/Header.jsx"
import { loadContacts, setFilterBy } from '../store/actions/contactActions'

class _MisterBitcoin extends React.Component {

    async componentDidMount(){
        this.props.loadContacts()
    }

    onSelectContact(contact){
        console.log(contact);
    }

    render () {
        return (
            <>
                <Header 
                    loadContacts = { this.props.loadContacts }
                    setFilterBy = { this.props.setFilterBy }/>
                <div className="contact-list">
                    {
                        this.props.contacts && <ContactList contacts={ this.props.contacts }/>
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contactModule.contacts,
    }
  }
  
const mapDispatchToProps = {
    loadContacts,
    setFilterBy,
}
  
// Connects the store with the component, injects it to the props
export const MisterBitcoin = connect(mapStateToProps, mapDispatchToProps)(_MisterBitcoin)