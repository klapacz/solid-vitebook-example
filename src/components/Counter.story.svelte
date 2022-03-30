<script>
  import Solid from "../../lib/Solid.svelte";
  import Counter from "./Counter";
  import { Variant } from "@vitebook/client";
  import { ControlsAddon } from "@vitebook/client/addons";

  let props = {
    color: "",
  };
</script>

<Variant name="Default">
  <Solid component={Counter} {...props} />
</Variant>

<ControlsAddon>
  <label>
    Color <input type="text" bind:value={props.color} />
  </label>
</ControlsAddon>
