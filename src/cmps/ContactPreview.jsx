import { Link } from "react-router-dom"

export default function ContactPreview({ contact, onSelectContact }) {

    return (
        <article className="contact-preview">
            <Link to = { '/contact/' + contact._id }>
                <img src={ 'http://robohash.org/' + contact._id } alt="" />
                <p>{contact.name}</p>
            </Link>
        </article>
    )
}