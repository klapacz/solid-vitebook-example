import type { Component } from "solid-js";

export const Button: Component<{ color?: string }> = (props) => (
  <button style={{ color: props.color ?? "" }}>
    It's solid! {props.children}
  </button>
);
