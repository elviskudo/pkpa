<template>
  <li>
    <router-link :to="to">
      <span
        id="fonts"
        class="
          tw-flex
          tw-items-center
          tw-justify-start
          my-2
          tw-p-4
          tw-text-sm
          tw-w-full
          tw-bg-white
        "
        :class="$route.path === to ? 'tw-font-medium clr tw-rounded-sm tw-border-l-4 tw-border-yellow-400' : 'tw-text-black-33'"
      >
        <span>
          <slot />
        </span>
        <span class="tw-mx-4">
          {{ title }}
        </span>
      </span>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'SidenavItem',
  props: {
    to: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');

#fonts {
  font-family: 'Quicksand', sans-serif;
}
.clr {
  background-color: #fffaf2;
  color: #FF9900;
}
</style>
