import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { apolloClient } from "./libs/apolloClient.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
);
