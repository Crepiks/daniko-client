<template>
  <div class="gallery">
    <div
      class="gallery__active"
      :style="{ backgroundImage: `url(${activeImage.path})` }"
    />
    <div class="gallery__images">
      <div
        class="gallery__image"
        v-for="image in gallery"
        :key="image.id"
        :style="{ backgroundImage: `url(${image.path})` }"
        @click="changeActiveImage(image.id)"
      ></div>
    </div>
  </div>
</template>

<script>
// import { getPhotos } from '@/requests/photos.js'
import gallery from '@/data/gallery.js'

export default {
  // async asyncData({params, $axios}) {
  //   const photos = await getPhotos($axios)
  //   return photos
  // },
  // async mounted() {
  //   const photos = await getPhotos(this.$axios)
  //   console.log(photos)
  // },
  data: () => ({
    gallery: gallery,
    activeImage: {
      id: 0,
      path: '',
    },
  }),
  methods: {
    changeActiveImage(imageId) {
      gallery.forEach((image) => {
        if (image.id == imageId) {
          this.activeImage = image
        }
      })
    },
  },
  mounted() {
    this.activeImage = this.gallery[0]
  },
}
</script>

<style lang="scss" scoped>
.gallery {
  width: 100%;
  height: calc(100vh - 200px);
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 20px;
}

.gallery__active {
  height: 60vh;
  border-radius: 10px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.gallery__images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 80px;
  column-gap: 15px;
  row-gap: 15px;
  box-sizing: border-box;
  overflow-y: auto;
}

.gallery__image {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 5px;
  cursor: pointer;
}

@media all and (max-width: 800px) {
  .gallery {
    height: auto;
    grid-template-columns: 1fr;
  }

  .gallery__images {
    height: 70vh;
    margin-top: 40px;
    grid-template-columns: repeat(4, 1fr);
  }
}

@media all and (max-width: 500px) {
  .gallery__images {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
