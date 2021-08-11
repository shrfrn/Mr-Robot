import { Component } from 'react'

export class ContactFilter extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
    }

    handleChange = ({ target }) => {
        var field = target.id
        var value = target.type === 'number' ? +target.value : target.value
     
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter(this.state)
        })
    }

    render() {
        return (
        <section className="filter-section">
            <p>Filter</p>
            <form className="contact-filter">
                <label htmlFor="name">name</label>
                <input type="text" id="name" onChange={this.handleChange} />
                

                <label htmlFor="email">email</label>
                <input type="text" id="email" onChange={this.handleChange} />
                

                <label htmlFor="phone">phone</label>
                <input type="text" id="phone" onChange={this.handleChange} />
                
            </form>
        </section>
        )
    }
}