<template>
  <div class="not-found">
    <img
      src="@/static/images/not-found-image.svg"
      alt="Страница не найдена"
      class="not-found-image"
    />
    <h1 class="not-found-title">Упс... Страница не найдена</h1>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.not-found {
  padding-top: 70px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &-image {
    margin-bottom: 50px;
    width: 300px;
  }

  &-title {
    color: $main-dark;
    font-size: 30px;
  }
}
</style>
