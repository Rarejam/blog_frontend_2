import App from "./App";
import DeleteRoute from "./DeleteRoute";
import EditBlog from "./EditBlog";
import Content from "./Layouts/Content";

const router = [
  {
    path: "/",
    Element: <App />,
    children: [
      {
        index: true,
        element: <Content />,
      },
      {
        path: "/delete",
        element: <DeleteRoute />,
      },
      {
        path: "/edit/:id",
        element: <EditBlog />,
      },
    ],
  },
];
export default router;
