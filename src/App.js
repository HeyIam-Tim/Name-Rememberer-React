import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddNew from "./components/AddNew";
import Form from "./components/Form";
import ListFriends from "./components/ListFriends";
import NothingToShow from "./components/NothingToShow";

function App() {
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [friendList, setFriendList] = useState([]);


  useEffect(() => {
    const getFriendList = async () => {
      const friendListFromServer = await fetchFriendList();
      setFriendList(friendListFromServer);
    };

    getFriendList();
  }, []);

  // fetch friend list
  const fetchFriendList = async () => {
    const res = await fetch("http://127.0.0.1:8000/index-api/");
    const data = await res.json();
    console.log("DATA: ", data);
    return data;
  };

  // fetch friend
  const fetchFriend = async (id) => {
    const res = await fetch(`http://127.0.0.1:8000/name-rememberer/${id}/`);
    const data = await res.json();
    console.log("DATA: ", data);
    return data; 
  };

  // update friend
  const [friend1, setFriend1] = useState({
    id: null,
    name: '',
    contacts: '',
    how_met: ''
  });
  const updateFriend = async (friend) => {
    // const friendToUpdate = await fetchFriend(friend.id);
    // const updFriend = {
    //   ...friendToUpdate,
    //   name: friend.name,
    //   contacts: friend.contacts,
    //   how_met: friend.how_met,
    // };

    // const res = await fetch(`http://127.0.0.1:8000/name-rememberer/${friend.id}/`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(updFriend),
    // });

    // const data = await res.json();

    // setFriendList(
    //   friendList.map((through_friend) =>
    //     through_friend.id === friend.id
    //       ? {
    //           ...through_friend,
    //           name: data.name,
    //           contacts: data.contacts,
    //           how_met: data.how_met,
    //         }
    //       : through_friend
    //   )
    // );

    
    setFriend1(...friend1, friend1.id=friend.id, friend1.name=friend.name, friend1.contacts=friend.contacts, friend1.how_met=friend.how_met);    

    console.log('ID: ', friend);
    console.log('FRIEND1: ', friend1);
  };

  // add friend
  const addFriend = async (friend) => {
    const res = await fetch("http://127.0.0.1:8000/index-api/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(friend),
    });

    const data = await res.json();

    setFriendList([...friendList, data]);
  };

  // delete friend
  const deleteFriend = async (id) => {
    await fetch(`http://127.0.0.1:8000/name-rememberer/${id}/`, {
      method: "DELETE",
    });

    setFriendList(friendList.filter((friend) => friend.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <AddNew
        colorBtn={showAddFriendForm ? "btn-yellow" : "btn-green"}
        text={showAddFriendForm ? "Close" : "Add"}
        onAdd={() => setShowAddFriendForm(!showAddFriendForm)}
      />

      {showAddFriendForm && <Form onAdd={addFriend} onUpdate={updateFriend} friend={friend1} />}
      {friendList.length > 0 ? (
        <ListFriends
          friendList={friendList}
          onDelete={deleteFriend}
          onUpdate={updateFriend}
        />
      ) : (
        <NothingToShow />
      )}
    </div>
  );
}

export default App;
