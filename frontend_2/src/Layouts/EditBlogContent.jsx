import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditBlogContent = () => {
  const { id } = useParams();
  //redirects the user to any other page(this is a react hook useNavigate())
  const navigate = useNavigate();

  const [isPublished, setIsPublished] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [article, setArticle] = useState("");

  useEffect(() => {
    async function getEditData() {
      try {
        const res = await fetch(`http://localhost:4000/${id}`);
        const data = await res.json();
        // get the data.blog from the api because the api also has other data like comment etc
        const blog = data.blog;
        console.log(blog);
        setImage(blog.image || "");
        setTitle(blog.title || "");
        setAuthor(blog.author || "");
        setArticle(blog.article || "");
        setIsPublished(Boolean(blog.isPublished));
      } catch (err) {
        console.log(err);
      }
    }
    getEditData();
  }, [id]);

  function togglePublish() {
    setIsPublished((prev) => !prev);
  }

  async function handleEdit(e) {
    e.preventDefault();

    const image = e.target.image.value;
    const title = e.target.title.value;
    const article = e.target.article.value;
    const author = e.target.author.value;

    const formData = {
      image,
      title,
      article,
      isPublished,
      author,
    };
    try {
      await axios.put(`http://localhost:4000/${id}`, formData);
      alert("Blog updated!");
      navigate("/delete");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="body-content">
      <form onSubmit={handleEdit}>
        <div className="image-div">
          <input
            type="text"
            name="image"
            placeholder="image url or image path"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="title-div">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="title-div">
          <label htmlFor="title">Author:</label>
          <input
            type="text"
            name="author"
            placeholder="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="article-div">
          <textarea
            name="article"
            id="article"
            placeholder="article"
            cols="95"
            rows="18"
            value={article}
            onChange={(e) => setArticle(e.target.value)}
          ></textarea>
        </div>
        <div className="checkbox-div">
          Publish
          <input
            value={isPublished}
            type="checkbox"
            onChange={togglePublish}
            checked={isPublished}
          />
        </div>{" "}
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditBlogContent;
