import React, { useState, useEffect } from "react";
import { mainApi } from "../../api/Api";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const clusterPositionsData = {
  positions: [
    {
      lat: 37.57,
      lng: 126.98,
    },
    {
      text: 1,
      lat: 35.1795543,
      lng: 129.0756416,
    },
    {
      text: 2,
      lat: 35.871389,
      lng: 128.601389,
    },
  ],
};

const KakaoMap = () => {
  const [db, setData] = useState([]);

  const [positions, setPositions] = useState([]);
  

  console.log(db)
  useEffect(() => {
    mainApi().then((data) => setData(data));
    setPositions(clusterPositionsData.positions);
  }, []);


  return (
    <div>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 36.2683,
          lng: 127.6358,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={13} // 지도의 확대 레벨
      >
        {positions.map((pos) => (
          <MapMarker
            key={`${pos.lat}-${pos.lng}`}
            position={{
              lat: pos.lat,
              lng: pos.lng,
            }}
          >
            <div style={{ padding: "5px", color: "#000" }}>
              {pos.text} <br />
            </div>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
};

export default KakaoMap;
