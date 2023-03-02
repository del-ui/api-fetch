
import './App.css';
import { fetchData } from '../components/ApiData';

class MyComponent extends React.Component {
  componentDidMount() {
    fetchData()
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  // ...
}


export default App;
