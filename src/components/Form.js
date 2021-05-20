import { useState } from 'react'

function Form({ onAdd }) {
    const [name, setName] = useState('')
    const [contacts, setContacts] = useState('')
    const [how_met, setHow_met] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({ name, contacts, how_met })

        setName('')
        setContacts('')
        setHow_met('')
    }

    return (
        <form className="form flex fd-col" onSubmit={onSubmit}>
            <input name="name" type="text" className="name" placeholder="Add Name" value={name} onChange={(e) => setName(e.target.value)} required/>
            <input name="contacts" type="text" className="contacts" placeholder="Add Contact Info" value={contacts} onChange={(e) => setContacts(e.target.value)} required/>
            <textarea name="howMet" id="nowMet" cols="30" rows="7" className="howMet" placeholder="How you met?" value={how_met} onChange={(e) => setHow_met(e.target.value)} required></textarea>
            <button className="btn-dark">Save New Friend</button>
        </form>
    )
}

export default Form
