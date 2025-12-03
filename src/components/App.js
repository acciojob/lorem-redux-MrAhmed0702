import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/actions";

function App() {
  const dispatch = useDispatch();
  const { loading, posts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>A short Narration of Lorem Ipsum</h1>

      {loading && <h4>Loading...</h4>}

      {!loading && (
        <ul>
          {posts.map((p, i) => (
            <li key={i}>{p.title} - {p.body}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
