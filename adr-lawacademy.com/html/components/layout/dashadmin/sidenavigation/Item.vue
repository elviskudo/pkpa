<template>
  <li>
    <router-link :to="to">
      <span
        class="
          tw-flex
          tw-items-center
          tw-justify-start
          tw-my-2
          tw-p-4
          tw-text-sm
          tw-w-full
          hover:tw-text-black-33
          tw-bg-white
        "
        :class="$route.path === to ? 'tw-font-medium tw-text-black-33' : 'tw-text-black-33'"
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
