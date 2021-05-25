export const getServices = async (axios) => {
  return (await axios.get('/services')).data
}
