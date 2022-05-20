import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
// axios.defaults.baseURL = "http://localhost:3000/api/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default axios;
