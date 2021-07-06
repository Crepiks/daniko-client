export const getServices = async (axios) => {
  return (await axios.get('/services')).data
}

export const getService = async (serviceId, axios) => {
  return (await axios.get(`/services/${serviceId}`)).data
}
