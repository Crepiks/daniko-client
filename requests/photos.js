export const getPhotos = async (axios) => {
  return (await axios.get('/photos')).data
}
