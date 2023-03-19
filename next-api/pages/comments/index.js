import { useState } from "react";

function Comments() {
  const [comments, setcomments] = useState([]);
  const [comment, setComment] = useState("");

  async function fetchComments() {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setcomments(data);
  }

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment: comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setcomments((prevState) => [...prevState, data]);
  };

  const deleteComment = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    fetchComments();
  };
  return (
    <div>
      <h1>Comments</h1>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id} {comment.text}
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
          </div>
        );
      })}

      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button onClick={submitComment}>Submit Comment</button>
    </div>
  );
}

export default Comments;
