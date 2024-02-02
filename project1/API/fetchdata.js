/**
 * fetchData - Fetches product data from te scecified url
 * 
 * @param {string} url - the URL from which to fect the data 
 * 
 * @returns -  a promise tat resolves with a array of product data
 */
const fetchData = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
     return data
  }
  catch (error){
    console.log('error :', error.message)
  }
}
module.exports ={
  fetchData
}