function Form() {
    return (
        <form className="form flex fd-col">
            <input name="name" type="text" className="name" placeholder="Add Name" required/>
            <input name="contacts" type="text" className="contacts" placeholder="Add Contact Info" required/>
            <textarea name="howMet" id="nowMet" cols="30" rows="7" className="howMet" placeholder="How you met?" required></textarea>
            <button className="btn-dark">Save New Friend</button>
        </form>
    )
}

export default Form
