import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { Translate } from "./pages";

const App = () => {
  return (
    <>
      <ToastContainer theme="dark" />
      <Translate />
    </>
  );
};

export default App;
