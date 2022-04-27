import React, { useState, useEffect } from "react";
import { mainApi } from "../../api/Api";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const { kakao } = window;

//받아온 지역 텍스트 데이터를 map함수로 돌리고 geocoder로 좌표로 변경한것을 배열로 저장
//배열로 저장된 좌표들을 지도에 뿌려준다
//text로 화재가 몇번 발생했는지 보여준다.

const KakaoMap = () => {
  const [db, setData] = useState([]);
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  var geocoder = new kakao.maps.services.Geocoder();
  for (let i = 0; i < db.length; i++) {
    geocoder.addressSearch(db[i].sidoNm, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        var text = []
        text.push(db[i].fireRcptMnb) 
        // 결과값으로 받은 위치를 마커로 표시합니다
        let marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        var infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${text}</div>`
        });
        infowindow.open(map, marker);
      }

      
    });
  }

  useEffect(() => {
    mainApi().then((data) => setData(data));
  }, []);

  return (
    <div>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 35.2683,
          lng: 128.6358,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "800px",
        }}
        level={13} // 지도의 확대 레벨
        onCreate={setMap}
      ></Map>
    </div>
  );
};

export default KakaoMap;
