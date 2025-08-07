import DeleteContent from "./Layouts/deleteContent";
import HeadContent from "./Layouts/HeadContent";

const DeleteRoute = () => {
  return (
    <div className="container">
      <HeadContent headerLink="/" headerText="Create Blog" />
      <DeleteContent />
    </div>
  );
};

export default DeleteRoute;
