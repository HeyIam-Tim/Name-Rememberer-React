import Friend from './Friend'

function ListFriends({ friendList, onDelete }) {
    return (
        <div className="list-friends flex flex-col">
            {friendList.map((friend) => (
                <Friend key={friend.id} friend={friend} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default ListFriends
