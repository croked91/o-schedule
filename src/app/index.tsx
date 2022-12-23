import "antd/dist/reset.css";
import { Routing } from "pages";
import { withProviders } from "./providers";

const App = () => {
  return <Routing />;
};

export default withProviders(App);
