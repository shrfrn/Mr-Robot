import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { ContactFilter } from './ContactFilter.jsx'

function _Header({ loadContacts, setFilterBy }) {

    function onChangeFilter(filterBy){
        setFilterBy(filterBy)
        loadContacts(filterBy)
    }

    return (
        <nav className="header">
            <h1>Mr. Robot</h1>
            <ContactFilter onChangeFilter = { onChangeFilter }/>
            <Link to='/edit/'>
                <button>+</button>
            </Link>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        filterBy: state.contactModule.filterBy
    //   loggedInUser: state.userModule.loggedInUser
    }
}
//   export const Header = connect(mapStateToProps)(withRouter(_Header))
export const Header = connect(mapStateToProps)(_Header)  