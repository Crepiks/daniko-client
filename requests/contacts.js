export const getContacts = async (axios) => {
  return (await axios.get('/contacts')).data
}
