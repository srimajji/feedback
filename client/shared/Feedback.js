import ReactDOM from "react-dom";  
import Router from "react-router";  
import routes from "./routes/routes";

Router.run(routes, (Handler, state) => {
  ReactDOM.render(<Handler />, document.getElementById('feedback-app'));
});