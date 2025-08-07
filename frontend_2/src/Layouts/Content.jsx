import BodyContent from "./BodyContent";
import HeadContent from "./HeadContent";

const Content = () => {
  return (
    <div className="container">
      <HeadContent headerLink="/delete" headerText="Delete Blog" />
      <BodyContent />
    </div>
  );
};

export default Content;
