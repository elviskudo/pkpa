<template>
  <!-- The overlay will only be visible on small screens to emphasize the focus on the side navigation when it is open.-->
  <!--  it also allows to close side navigation when you click outside-->
  <div
    :class="
      state.open &&
        'tw-bg-black tw-fixed tw-h-screen tw-left-0 tw-opacity-40 tw-top-0 tw-w-screen tw-z-30 lg:tw-bg-transparent'
    "
    @click="toggle"
  />
</template>

<script>
export default {
  name: 'Overlay',
  inject: ['state', 'toggle']
}
</script>
