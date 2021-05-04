<template>
  <div class="gallery-page">
    <div
      class="gallery-main"
      :style="{ backgroundImage: `url(${activeImage.path})` }"
    ></div>
    <div class="gallery">
      <div class="gallery-images">
        <div
          class="gallery-image"
          v-for="image in gallery"
          :key="image.id"
          :style="{ backgroundImage: `url(${image.path})` }"
          @click="changeActiveImage(image.id)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import gallery from '@/data/gallery.js'

export default {
  data() {
    return {
      gallery: gallery,
      activeImage: {
        id: 0,
        path: '',
      },
    }
  },

  mounted() {
    this.activeImage = this.gallery[0]
  },

  methods: {
    changeActiveImage(imageId) {
      gallery.forEach((image) => {
        if (image.id == imageId) {
          this.activeImage = image
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.gallery {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  &-main {
    position: fixed;
    margin-bottom: 50px;
    width: 700px;
    height: 500px;
    border-radius: 10px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  &-images {
    width: calc(100% - 750px);
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
    row-gap: 15px;
  }

  &-image {
    width: 100%;
    height: 100px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 5px;
    cursor: pointer;
    transition: 150ms ease-in-out;

    &:hover {
      transform: scale(1.03);
    }
  }
}
</style>
