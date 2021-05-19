function AddNew({ colorBtn, text,  onAdd }) {
    return (
        <div className="add-new flex jc-se">
            <h2>Add New Friend</h2>
             <button className={colorBtn} onClick={onAdd}>{text}</button>
            {/* <button className="btn-yellow" onClick={onAdd}>Close</button> */}
            {/* <button className="btn-green">Add</button> */}
            {/* <button className="btn-yellow">Logout</button> */}
        </div>
    )
}

export default AddNew
