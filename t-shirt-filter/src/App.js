import {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class  App extends Component{
  constructor(){
    super();

    this.state = {
      t_shirts: [],
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => 
      this.setState(
        () =>{
          return {t_shirts: users};
        },
        () => {
          console.log(this.state);
        }
      )
    );
  }


  render() {

    const filteredTshirts = this.state.t_shirts.filter((t_shirt) => {
      return t_shirt.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input 
        className = 'search-box' 
        type='search' 
        placeholder='search t-shirts' 
        onChange={(event) => {
          const searchField = event.target.value.toLocaleLowerCase();
          this.setState(() => {
            return { searchField };
            //return { t_shirts: filteredTshirts };
          });
        }}
      />

      {filteredTshirts.map((t_shirt) => {
          return (
          <div key={t_shirt.id}> 
            <h1>{t_shirt.name}</h1>
          </div>
          );
        })}   
      </div>
    );
  }
}

export default App;
