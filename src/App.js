import React from "react";
import axios from "axios";
import './App.css';

const baseURL = "http://127.0.0.1:5000/dict";

function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  var parsed = post.split("'");
  var word = [parsed[1], parsed[3]];
  var arr = word.map(JSON.parse);
  return (
    <div className="App">
      <table className="main-table">
        <tr>
          <th></th>
          {arr[0].map(item => (
            <th key={item}>{item}</th>
          ))}
        </tr>
        {arr[1].map(item => (
          <tr key={item}><th>{item}</th>
          {arr[0].map(item => (
            <td></td>
          ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
