import { useState } from "react";

// function Form({ onAdd, onUpdate }) {
function Form({ onAdd, onUpdate, friend }) {
  const [name, setName] = useState(friend.name ? friend.name : "");
  const [contacts, setContacts] = useState(friend.contacts ? friend.contacts : "");
  const [how_met, setHow_met] = useState(friend.how_met ? friend.how_met : "");
  // const [name, setName] = useState("");
  // const [contacts, setContacts] = useState("");
  // const [how_met, setHow_met] = useState("");
  // const [name, setName] = useState(friend ? friend.name : "");
  // const [contacts, setContacts] = useState(friend ? friend.contacts : "");
  // const [how_met, setHow_met] = useState(friend ? friend.how_met : "");


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
      {/* <form id="hidden-form" className="form flex fd-col" onSubmit={onSubmitAdd}>
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
          // value={friend ? friend.name : ''}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          name="contacts"
          type="text"
          className="contacts"
          placeholder="Add Contact Info"
          // value={friend ? friend.contacts : ''}
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
          // value={friend ? friend.how_met : ''}
          value={how_met}
          onChange={(e) => setHow_met(e.target.value)}
          required
        ></textarea>
        <button className="btn-dark">Save Changes</button>
      </form>
    </div>
  );
}

export default Form;
