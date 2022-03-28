import { Button } from "../src/Button";
import { Solid } from "@merged/react-solid";
import { Variant } from "@vitebook/preact";
import { ControlsAddon } from "@vitebook/preact/addons";

const ButtonStory = () => {
  return (
    <>
      <Variant name="Default">
        <Solid component={Button} />
      </Variant>

      <Variant name="Children">
        <Solid component={Button} children={<i>hello</i>} />
      </Variant>

      <Variant name="Colored">
        <Solid component={Button} color="red" />
      </Variant>
    </>
  );
};

export default ButtonStory;
