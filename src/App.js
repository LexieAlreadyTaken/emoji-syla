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
      {post}<br/>
      {word}<br/>
      {arr}
    </div>
  );
}

export default App;
