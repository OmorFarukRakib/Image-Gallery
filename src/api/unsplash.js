import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID mKBxXzL_ZFidX8ZtLvnkIK5kIRQEssPvAbb33nRo8LI",
  },
});
