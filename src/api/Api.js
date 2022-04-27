import instance from './ApiController';

const API_KEY = process.env.REACT_APP_API_KEY;

//시도별 화재발생현황
export const mainApi = async() => {

  return instance({
    url: `/getOcBysidoFireSmrzPcnd?serviceKey=${API_KEY}&pageNo=1&numOfRows=17&resultType=json&ocrn_ymd=20220103`,
    method: 'GET',
  });
};

//지역별 화재발생
export const placeApi = async() => {

  return instance({
    url: `getArFireByplceFpcnd?serviceKey=${API_KEY}&pageNo=1&numOfRows=100&resultType=json&ocrn_ymd=20220103`,
    method: 'GET',
  });
};