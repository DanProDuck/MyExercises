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
    return (
      <div className="App">
      {
        this.state.t_shirts.map((t_shirt) => {
          return <div key={t_shirt.id}> 
            <h1>{t_shirt.name}</h1>
          </div>
        })
      }  
      </div>
    );
  }
}

export default App;
