function Friend({ friend, onDelete, onUpdate }) {
  return (
    <div className="friend flex fd-col ai-fs">
      <p>{friend.name}</p>
      <p>{friend.contacts}</p>
      <p>{friend.how_met}</p>
      <div className="friend-btn flex">
        <button
          className="btn-dark"
          onClick={() =>
            onUpdate(friend)
          }
        >
          Edit
        </button>
        <button className="btn-red" onClick={() => onDelete(friend.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Friend;
