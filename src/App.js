import { useState, useEffect } from 'react'
import Header from './components/Header'
import AddNew from './components/AddNew'
import Form from './components/Form'
import ListFriends from './components/ListFriends'
import NothingToShow from './components/NothingToShow'

function App() {
  const [showAddFriendForm, setShowAddFriendForm] = useState(true)
  const [friendList, setFriendList] = useState([])

  
  useEffect(() => {
    const getFriendList = async () => {
      const friendListFromServer = await fetchFriendList()
      setFriendList(friendListFromServer)
    }

    getFriendList()
  }, [])

  // fetch friend list
  const fetchFriendList = async () => {
    const res = await fetch('http://127.0.0.1:8000/index-api')
    const data = await res.json()
    console.log('DATA: ', data)
    return data
  }

  return (
    <div className="container">
      <Header />
      <AddNew colorBtn={showAddFriendForm ? 'btn-yellow' : 'btn-green'} text={showAddFriendForm ? 'Close' : 'Add'} onAdd={() => setShowAddFriendForm(!showAddFriendForm)} />
      {showAddFriendForm && <Form />}
      {friendList.length > 0 ? (<ListFriends friendList={friendList} />) : (<NothingToShow />) }
    </div>
  );
}

export default App;
