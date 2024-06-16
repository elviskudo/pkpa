<template>
  <v-app>
    <v-alert
      color="pink darken-1"
      dark
    >
      {{ message }}
    </v-alert>
  </v-app>
  <!-- <div class="notification is-danger">
    {{ message }}
  </div> -->
</template>

<script>
export default {
  name: 'ErrorNotification',
  props: {
    message: {
      type: String,
      default: '',
      useDefaultForNull: true
    }
  }
}
</script>
