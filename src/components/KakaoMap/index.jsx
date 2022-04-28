import React, { useState, useEffect } from "react";
import { mainApi } from "../../api/Api";
import * as Styled from "./styled";
import { Map } from "react-kakao-maps-sdk";

const { kakao } = window;

//받아온 지역 텍스트 데이터를 map함수로 돌리고 geocoder로 좌표로 변경한것을 배열로 저장
//배열로 저장된 좌표들을 지도에 뿌려준다
//text로 화재가 몇번 발생했는지 보여준다.

const KakaoMap = () => {
  const [db, setData] = useState([]);
  const [map, setMap] = useState();

  const [date, setDate] = useState('2022-04-10');
  const [mdate, setMdate] = useState('20220410')

  var geocoder = new kakao.maps.services.Geocoder();
  for (let i = 0; i < db.length; i++) {
    geocoder.addressSearch(db[i].sidoNm, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        var text = [];
        text.push(db[i].fireRcptMnb);

        let marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        var infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:30px;text-align:center;padding:6px 0;">${text}</div>`,
        });
        infowindow.open(map, marker);
      }
    });
  }

  const dateChange = (e) => {
    setDate(e.target.value)
    setMdate(e.target.value.replace(/\-/g, ''))
    console.log(e.target.value.replace(/\-/g, ''))
  }

  useEffect(() => {
    mainApi(mdate).then((data) => setData(data));
  }, [mdate]);

  return (
    <Styled.Container>
      <Styled.BannerWrapper>
        <Styled.BannerTitle>전국 화재 발생 지역/횟수</Styled.BannerTitle>

        <Styled.DateChoice
          type="date"
          value={date}
          onChange={dateChange}
          max="2022-04-10"
        ></Styled.DateChoice>
      </Styled.BannerWrapper>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 36.2683,
          lng: 128.6358,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "500px",
        }}
        level={13} // 지도의 확대 레벨
        onCreate={setMap}
      ></Map>
    </Styled.Container>
  );
};

export default KakaoMap;
