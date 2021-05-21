import Friend from './Friend'

function ListFriends({ friendList, onDelete, onUpdate }) {
    return (
        <div className="list-friends flex flex-col">
            {friendList.map((friend) => (
                <Friend key={friend.id} friend={friend} onDelete={onDelete} onUpdate={onUpdate} />
            ))}
        </div>
    )
}

export default ListFriends
