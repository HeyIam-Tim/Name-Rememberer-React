import Friend from './Friend'

function ListFriends({ friendList }) {
    return (
        <div className="list-friends flex flex-col">
            {friendList.map((friend) => (
                <Friend key={friend.id} name={friend.name} contacts={friend.contacts} how_met={friend.how_met} />
            ))}
        </div>
    )
}

export default ListFriends
