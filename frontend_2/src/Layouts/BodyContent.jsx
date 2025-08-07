import { useState } from "react";
import axios from "axios";
const BodyContent = () => {
  const [isPublished, setIsPublished] = useState(false);

  function togglePublish() {
    setIsPublished((prev) => !prev);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

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
    await axios.post("http://localhost:4000/", formData);
    form.reset();
    setIsPublished(false);
  }

  return (
    <div className="body-content">
      {/* <div className="form-container"> */}
      <form onSubmit={handleSubmit}>
        <div className="image-div">
          <input
            type="text"
            name="image"
            placeholder="image url or image path"
          />
        </div>
        <div className="title-div">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" placeholder="title" />
        </div>
        <div className="title-div">
          <label htmlFor="title">Author:</label>
          <input type="text" name="author" placeholder="author" />
        </div>
        <div className="article-div">
          <textarea
            name="article"
            id="article"
            placeholder="article"
            cols="95"
            rows="18"
          ></textarea>
        </div>
        <div className="checkbox-div">
          Publish
          <input
            type="checkbox"
            onChange={togglePublish}
            checked={isPublished}
          />
        </div>{" "}
        <button type="submit">Post</button>
      </form>
      {/* </div> */}
    </div>
  );
};

export default BodyContent;
