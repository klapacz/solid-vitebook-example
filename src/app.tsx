import { Logo } from "./logo";
import { Button } from "./solid/Button";
import { Solid } from "@merged/react-solid";

export function App() {
  return (
    <>
      <Solid component={Button} children={"hello"} />
      <Logo />
    </>
  );
}
