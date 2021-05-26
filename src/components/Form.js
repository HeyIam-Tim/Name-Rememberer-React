import { useState } from "react";

function Form({ onAdd, onUpdate }) {
  const [name, setName] = useState("");
  const [contacts, setContacts] = useState("");
  const [how_met, setHow_met] = useState("");

  console.log('NAME: ', name)

  const onSubmitAdd = (e) => {
    e.preventDefault();

    onAdd({ name, contacts, how_met });

    setName("");
    setContacts("");
    setHow_met("");
  };

  const onSubmitUpdate = (e) => {
    e.preventDefault();

    onUpdate({ name, contacts, how_met });

    setName("");
    setContacts("");
    setHow_met("");
  };

  return (
    <div>
      {/* <form id="hidden-form1" className="form flex fd-col" onSubmit={onSubmitAdd}>
        <input
          name="name"
          type="text"
          className="name"
          placeholder="Add Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          name="contacts"
          type="text"
          className="contacts"
          placeholder="Add Contact Info"
          value={contacts}
          onChange={(e) => setContacts(e.target.value)}
          required
        />
        <textarea
          name="howMet"
          id="nowMet"
          cols="30"
          rows="7"
          className="howMet"
          placeholder="How you met?"
          value={how_met}
          onChange={(e) => setHow_met(e.target.value)}
          required
        ></textarea>
        <button className="btn-dark">Save New Friend</button>
      </form> */}



      <form id="hidden-form1" className="form flex fd-col" onSubmit={onSubmitUpdate}>
        <input
          name="name"
          type="text"
          className="name"
          placeholder="Add Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {/* <input
          name="contacts"
          type="text"
          className="contacts"
          placeholder="Add Contact Info"
          // value={friend ? friend.contacts : ''}
          value={friendToUpdate ? friendToUpdate.contacts : ''}
          onChange={(e) => setContacts(e.target.value)}
          required
        />
        <textarea
          name="howMet"
          id="nowMet"
          cols="30"
          rows="7"
          className="howMet"
          placeholder="How you met?"
          // value={friend ? friend.how_met : ''}
          value={friendToUpdate ? friendToUpdate.how_met : ''}
          onChange={(e) => setHow_met(e.target.value)}
          required
        ></textarea> */}
        <button className="btn-dark">Save Changes</button>
      </form>
    </div>
  );
}

export default Form;
