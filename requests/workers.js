export const getWorkers = async (axios) => {
  return (await axios.get('/workers')).data
}

export const getWorker = async (workerId, axios) => {
  return (await axios.get(`/workers/${workerId}`)).data
}
