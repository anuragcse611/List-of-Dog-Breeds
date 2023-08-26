import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list"
import SearchBox from "./components/search-box/search-box"

class App extends Component {
  constructor() {
    super();

    this.state = {
      dogBreeds: [],
      searchField: "",
    };
  }
  componentDidMount() {
    const url = "https://dog-breeds2.p.rapidapi.com/dog_breeds";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9edf6fcf80msh3153e99f84b1530p19a8d4jsncf0db3779c87",
        "X-RapidAPI-Host": "dog-breeds2.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) =>
        this.setState(() => {
          console.log(data);
          return { dogBreeds: data };
        })
      );
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    const { dogBreeds, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredBreeds = dogBreeds.filter((element) => {
      return element.breed.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Dog Breeds</h1>
      <SearchBox
      className = "search-box"
      placeholder= "Search your breed..."
      onChangeHandler = {onSearchChange}/>

        <CardList breeds = {filteredBreeds}/>
      </div>
    );
  }
}

export default App;
