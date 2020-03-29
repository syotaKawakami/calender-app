import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./redux/rootReducer";
import CalendarBoard from "./components/CalendarBoard/container";

// storeを作成。storeにreducerを登録する
const store = createStore(rootReducer);

const App = () => (
  // Providerコンポーネントを使うことでstoreをreact-reduxから使えるようにする
  <Provider store={store}>
    <CalendarBoard />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
