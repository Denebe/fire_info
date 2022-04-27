import axios from "axios";
import instance from './ApiController';

const API_KEY = process.env.REACT_APP_API_KEY;

//시도별 화재발생현황
export const mainApi = async() => {

  return instance({
    url: `/getOcBysidoFireSmrzPcnd?serviceKey=${API_KEY}&pageNo=1&numOfRows=20&resultType=json&ocrn_ymd=20220103`,
    method: 'GET',
  });
};
