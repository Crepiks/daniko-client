<template>
  <div v-if="photos.length > 0" class="gallery">
    <div
      class="gallery__active"
      :style="{ backgroundImage: `url(${baseUrl + activePhoto.image.path})` }"
    />
    <div class="gallery__images">
      <div
        class="gallery__image"
        v-for="photo in photos"
        :key="photo.id"
        :style="{ backgroundImage: `url(${baseUrl + photo.image.path})` }"
        @click="changeActivePhoto(photo.id)"
      ></div>
    </div>
  </div>
</template>

<script>
import { getPhotos } from '@/requests/photos.js'
import config from '@/config/config'

export default {
  async asyncData({ params, $axios }) {
    const photos = await getPhotos($axios)
    return photos
  },

  data: () => ({
    activePhoto: {
      id: 0,
      image: {
        path: '',
      },
    },
    photos: [
      {
        id: 0,
        image: {
          path: '',
        },
      },
    ],
    baseUrl: config.apiUrl,
  }),

  methods: {
    changeActivePhoto(photoId) {
      this.photos.forEach((photo) => {
        if (photo.id == photoId) {
          this.activePhoto = photo
        }
      })
    },
  },

  mounted() {
    console.log(this.photos)
    this.activePhoto = this.photos[0]
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
  background-color: #dbdbdb;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  box-shadow: 0 0 30px #3c3c3c10;
}

.gallery__images {
  padding: 15px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 80px;
  column-gap: 15px;
  row-gap: 15px;
  border-radius: 10px;
  overflow-y: auto;
  background-color: #dbdbdb40;
}

.gallery__image {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 5px;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
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
