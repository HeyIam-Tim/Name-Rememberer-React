function Friend({ name, contacts, how_met }) {
    return (
        <div className="friend flex fd-col ai-fs">
            <p>{name}</p>
            <p>{contacts}</p>
            <p>{how_met}</p>
            <div className="friend-btn flex">
                <button className="btn-dark">Edit</button>
                <button className="btn-red">Delete</button>
            </div>
        </div>
    )
}

export default Friend
