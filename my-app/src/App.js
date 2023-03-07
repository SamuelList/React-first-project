import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState('')
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);


  console.log('rendered')
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonster(newFilteredMonster);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };
  return (
    <div className="App">
      <h1 className="app-title">The People</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search People"
        className="monsters-search-box"
      />
      <br></br>
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder="Title change"
        className="title-search-box"
      />

      <CardList monsters={filteredMonster} />
    </div>
  );
};



export default App;
