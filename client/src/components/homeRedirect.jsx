import React from "react";
import { Redirect } from "react-router";

export default function HomeRedirect(props) {
  // const redirect = props.redirect;
  return props.redirect ? <Redirect to="/" /> : null;
}
