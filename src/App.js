import React from "react";
import axios from "axios";
import './App.css';

const baseURL = "http://127.0.0.1:5000/";

function App() {
  const [post, setPost] = React.useState(null);
  const [input, setInput] = React.useState("");
  const [coord, setCoord] = React.useState("");

  function updateInput(event) {
    setInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let data = {
      syllable: "bai", //mock data
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
  function save() {
    axios.get(baseURL+"save").then((response) => {
      console.log("saved!")
    })
    .catch(function (error) {
      console.log(error)
    });
  }
  function handleCoord(event, jtem, item) {
    console.log(event, jtem, item)
    // const index = event.target.dataset.index
    // const item = this.state.toClickList[index];

    // setCoord(item.coord);
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
            <th key={'col'+item}>{item}</th>
          ))}
        </tr>
        {arr[1].map(item => (
          <tr key={'row'+item}><th>{item}</th>
          {arr[0].map(jtem => (
            <td key={jtem+item} onClick={(e)=>handleCoord(e,jtem,item)}></td>
          ))}
          </tr>
        ))}
      </table>
      
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="输入emoji" value={input} onChange={updateInput} />
        <input type="submit" value="提交" />
      </form>
      <button onClick={save}>保存到文件</button>
    </div>
  );
}

export default App;
