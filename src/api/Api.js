import axios from "axios";

const PROXY_URL = window.location.hostname === "localhost" ? "" : "/proxy";
const API_KEY = process.env.REACT_APP_API_KEY;

//시도별 화재발생현황
export const mainApi = () => {
  const url = `${PROXY_URL}/getOcBysidoFireSmrzPcnd?serviceKey=${API_KEY}&pageNo=1&numOfRows=20&resultType=json&ocrn_ymd=20220103`;

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
