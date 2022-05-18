import axios from "axios";

// axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

export default axios;
