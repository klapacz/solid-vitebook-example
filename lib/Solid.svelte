<script lang="ts">
  import { afterUpdate } from "svelte";
  import { render as renderSolid, createComponent } from "solid-js/web";

  let container: HTMLDivElement | undefined;
  afterUpdate(() => {
    const { component, ...props } = $$props;

    container!.innerHTML = "";
    renderSolid(() => createComponent(component, props), container!);
  });
</script>

<div bind:this={container} />
