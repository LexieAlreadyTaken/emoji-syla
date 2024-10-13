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

  // if (!post) return null;
  return (
    <div className="App">
      {post}
      {/* <h1>{post.title}</h1>
      <p>{post.body}</p> */}
    </div>
  );
}

export default App;
