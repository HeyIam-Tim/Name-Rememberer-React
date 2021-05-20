function AddNew({ colorBtn, text,  onAdd }) {
    return (
        <div className="add-new flex jc-se">
            <button className={colorBtn} onClick={onAdd}>{text}</button>
            <button className="btn-blue">Log out</button>
        </div>
    )
}

export default AddNew
