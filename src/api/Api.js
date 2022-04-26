import axios from "axios";

const PROXY_URL = window.location.hostname === "localhost" ? "" : "/proxy";
const API_KEY = process.env.REACT_APP_API_KEY;

export const mainApi = () => {
  const url = `${PROXY_URL}/getOcFrstBychlrdFpcnd?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&resultType=json&ocrn_ymd=20070108`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url,
  };
  axios(options).then(
    (r) => {
      console.log("connect");
      console.log(r.data.response.body.items.item);
    },
    (error) => {
      console.log("에러");
      console.log(error.response.data);
    }
  );
};
