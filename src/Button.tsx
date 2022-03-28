import type { Component } from "solid-js";

export const Button: Component = (props) => (
  <button>It's solid! {props.children}</button>
);
