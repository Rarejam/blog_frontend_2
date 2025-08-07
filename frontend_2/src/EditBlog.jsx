import EditBlogContent from "./Layouts/EditBlogContent";
import HeadContent from "./Layouts/HeadContent";

const EditBlog = () => {
  return (
    <div className="container">
      <HeadContent headerLink="/" headerText="Create blog" />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "42px",
          color: "red",
        }}
      >
        Editing Blog
      </div>

      <EditBlogContent />
    </div>
  );
};

export default EditBlog;
