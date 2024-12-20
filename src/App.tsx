import { hot } from "react-hot-loader/root";
import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import ExpenseDashboard from "./components/ExpenseDashboard";

function App() {
  return (
        <ExpenseDashboard />    
  );
}

export default hot(App);
