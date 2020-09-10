import axios from 'axios';
import config from '../config/config'

const baseUrl = config.webhost + config.webport
// axios.defaults.baseURL = 'https://devfrontend.gscmaven.com';
axios.defaults.headers.clientId = 175;
axios.defaults.headers.userid = 1;

/**
 * Method for calling APIs.
 * @param {String} method : Method using which the api is called(GET, POST, etc.)
 * @param {String} url : URL of the API
 * @param {Object} obj : Object/data to be sent as input.
 * @returns {Promise} Promise
 */

const call = (method, url, obj = {}) => {
  return new Promise((resolve, reject) => {
    //let token;
    let args = {
      method: method,
      url: baseUrl+url,
      data: obj
    }
    console.log('args', args);
    try {
      axios(args).then(response => {
        console.log("response console in called api:", response)
        if (response.status === 200)
          resolve(response);
        else
          response.message ? reject(response.status) : reject(response.error)
      }).catch(e => {
        console.log("Error console in called api:", e)
        // if (e.response && e.response.status === 400) {
        //   window.location = '/'
        //   localStorage.clear();
        // } else {
        //   console.log("Error console in called api:", e)
        //   reject(e);
        // }
        // reject(e);
      });

    } catch (error) {
      console.log('error is here ', error);
      reject(error)
    }


  })
}

export default call;
