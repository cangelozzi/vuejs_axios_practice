//! Example for CUSTOM AXIOS instances

import axios from 'axios';

const axios_instance = axios.create({
  baseURL: "https://vuejs-axios-project.firebaseio.com"
});

// defaults JUST to this axios instance
axios_instance.defaults.headers.common['SOMETHING'] = 'something';

// export axios instance
export default axios_instance;