import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import interwind from "../assets/interwind.gif";

const DeleteContent = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogFunction = async () => {
      try {
        const res = await fetch("http://localhost:4000/");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    };
    blogFunction();
  }, []);

  async function reFetchBlogs() {
    try {
      const res = await fetch("http://localhost:4000/");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteBlog(id) {
    try {
      await axios.delete(`http://localhost:4000/delete/${id}`);
      await reFetchBlogs();
      alert("Blog deleted successfully");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    reFetchBlogs();
  });

  return (
    <div className="home-blog-content">
      {blogs.length === 0 ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <img
            src={interwind}
            alt="Loading..."
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
            }}
          />
        </div>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} style={{ textDecoration: "none" }}>
            <div className="blog" key={blog.id}>
              {!blog.image ? (
                <div
                  className="home-blog-image"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "48px",
                  }}
                >
                  No Image
                </div>
              ) : (
                <div
                  className="home-blog-image"
                  style={{ backgroundImage: `url(${blog.image})` }}
                ></div>
              )}
              <div className="blog-title">{blog.title}</div>
              <div className="blog-date">
                By {blog.author} on {new Date(blog.date).toLocaleString()}
              </div>
              <div className="blog-description">{blog.article}</div>
              <div
                className="blog-published"
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: "10px",
                }}
              >
                {blog.isPublished == true ? "published ✅" : "Not published"}
              </div>
              <div className="btn-div">
                <button
                  onClick={() => {
                    deleteBlog(blog.id);
                  }}
                >
                  delete
                </button>

                <Link
                  to={`/edit/${blog.id}`}
                  style={{
                    width: "10%",
                  }}
                >
                  <button
                    style={{
                      width: "100%",
                    }}
                  >
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DeleteContent;
