import React, { useRef, useState } from "react";

export function ShowBlog({ blog: fblog, onDelte }) {
  const [blog, setBlog] = useState(fblog);

  const [showReply, setShowReply] = useState(false);
  const [reply, setReply] = useState(blog.reply);

  const commentRef = useRef("");

  const deleteblog = (idBlog) => {
    onDelte(idBlog);
  };

  const showReplys = () => {
    setShowReply(!showReply);
  };

  const addReply = () => {
    setBlog({
      id: blog.id,
      subject: blog.subject,
      description: blog.description,
      date: blog.date,
      aime: blog.aime,
      reply: commentRef.current.value,
    });
    setReply(commentRef.current.value);
  };
  const adore = () => {
    setBlog((oldBlog) => {
      return { ...oldBlog, aime: oldBlog.aime + 1 };
    });
    console.log(blog);
  };

  return (
    <div>
      <div className="oneblog">
        <h2>{blog.subject}</h2>
        <p>{blog.description}</p>
        <date>{blog.date}</date>

        <button className="reply" onClick={showReplys}>
          Show Reply
        </button>

        <button className="like" onClick={adore}>
          Like <span>{blog.aime}</span>
        </button>
        <button className="delete" onClick={deleteblog.bind(this, blog.id)}>
          Delete
        </button>
      </div>
      <div className="comment">
        {showReply && (
          <div>
            {reply.length > 0 ? (
              <input disabled value={blog.reply} />
            ) : (
              <>
                <input ref={commentRef} placeholder="leave Comment" />
                <button onClick={addReply}>Comment</button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
