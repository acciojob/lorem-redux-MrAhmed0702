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
      <h4>A short Naration of Lorem Ipsum</h4>

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
