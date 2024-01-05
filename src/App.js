import { Provider } from "react-redux";
import "./App.css";
import TextArea from "./components/TextArea";
import store from "./helpers/store";

const App =()=> {
  return (
    <div className="App">
      <div className="container">
        <TextArea />
      </div>
    </div>
  );
}
const Wrapper = () => {
  return(
  <Provider store={store}>
    <App/>
  </Provider>
  );
}
export default Wrapper;
