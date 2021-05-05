<template>
  <div>
    <nuxt-link class="button" :to="`/${to}`"><slot></slot></nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 25px;
  color: $white;
  font-size: 18px;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: $primary;
  transition: 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

@media(max-width: 1024px) {
  .button {
    padding: 15px 30px;
    font-size: 24px;
  }
}
</style>