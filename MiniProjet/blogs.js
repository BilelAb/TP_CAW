import React, { useState } from "react";
import { useRef } from "react";
import { arrayBlog } from "./myblogs";
import { ShowBlog } from "./showblog";

export default function Blogs() {
  const [id, setid] = useState(6);
  const [blog, setBlog] = useState(arrayBlog);
  const [popup, setPopup] = useState(false);
  const inputSubject = useRef("");
  const inputDescription = useRef("");
  const current = new Date();
  const currentDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const addBlog = (e) => {
    e.preventDefault();
    setBlog((oldBlog) => [
      ...oldBlog,
      {
        id: id,
        subject: inputSubject.current.value,
        description: inputDescription.current.value,
        date: currentDate,
        reply: "",
        aime: 0,
      },
    ]);
    togglePopup();
    setid(id + 1);
  };
  console.log(blog);
  const togglePopup = () => {
    setPopup(!popup);
  };
  if (popup) {
    document.body.classList.add("scroll");
  } else {
    document.body.classList.remove("scroll");
  }
  const deleteBlog = (blogId) => {
    setBlog(blog.filter((b) => b.id !== blogId));
  };

  console.log(blog);

  return (
    <div>
      <div className="divShow">
        <button onClick={togglePopup}>Add blog</button>
      </div>
      {popup && (
        <>
          <div className="popup">
            <div onClick={togglePopup} className="overlay"></div>
            <div className="popup-content">
              <form onSubmit={addBlog}>
                <label>subject</label>
                <input type={"text"} ref={inputSubject} required></input>
                <label>description</label>
                <input type={"text"} ref={inputDescription} required></input>

                <button>add blog</button>
              </form>
              <button onClick={togglePopup} className={"closePopup"}>
                annuler
              </button>
            </div>
          </div>
        </>
      )}

      <div className="blog">
        {blog.map((b) => (
          <ShowBlog key={b.id} blog={b} onDelte={deleteBlog} />
        ))}
      </div>
    </div>
  );
}
