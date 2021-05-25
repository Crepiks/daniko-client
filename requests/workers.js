export const getWorkers = async (axios) => {
  return (await axios.get('/workers')).data
}
