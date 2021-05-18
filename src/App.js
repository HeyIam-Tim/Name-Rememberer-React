import Header from './components/Header'
import AddNew from './components/AddNew'
import Form from './components/Form'
import ListFriends from './components/ListFriends'

function App() {
  return (
    <div className="container">
      <Header />
      <AddNew />
      {/* <Form /> */}
      <ListFriends />
    </div>
  );
}

export default App;
