import React from "react";
import axios from "axios";
import './App.css';

const baseURL = "http://127.0.0.1:5000/";

function App() {
  const [post, setPost] = React.useState(null);
  const [input, setInput] = React.useState("");

  function updateInput(event) {
    setInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let data = {
      shengmu: "b", //mock data
      yunmu: "a", //mock data
      emoji: input
    };
    var formData = new FormData()
    formData.append('params', JSON.stringify(data))
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    axios.post(baseURL+"add", data, config).then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error)
    });
    setInput("");
  }

  React.useEffect(() => {
    axios.get(baseURL+"dict").then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  var parsed = post.split("'");
  var word = [parsed[1], parsed[3]];
  var arr = word.map(JSON.parse);
  arr[1].sort()
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
      
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="输入emoji" value={input} onChange={updateInput} />
        <input type="submit" value="提交" />
      </form>
    </div>
  );
}

export default App;
