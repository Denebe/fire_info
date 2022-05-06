import React, { useState, useEffect } from "react";
import { centerApi } from "../../api/Api";
import * as Styled from "./styled";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";
let marker = [];

const { kakao } = window;

//받아온 지역 텍스트 데이터를 map함수로 돌리고 geocoder로 좌표로 변경한것을 배열로 저장
//배열로 저장된 좌표들을 지도에 뿌려준다
//text로 화재가 몇번 발생했는지 보여준다.

const DetailMap = (props) => {
  let navigate = useNavigate();
  const [db, setData] = useState([]);

  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  const [date, setDate] = useState("2022-04-10");
  const [mdate, setMdate] = useState("20220410");


  const onClick = () => {
      navigate('/')
  }
  console.log(props.props.city.slice(0, 2));
  const markerClick = (city) => {
    navigate("detail", {
      state: {
        city: city,
        date: mdate,
      },
    });
  };

  const dateChange = (e) => {
    setDate(e.target.value);
    setMdate(e.target.value.replace(/-/g, ""));
  };

  useEffect(() => {
    const ps = new kakao.maps.services.Places();

    for (let i = 0; i < db.length; i++) {
      if (db[i].sidoHqFrstCetrNm.slice(0, 2) == props.props.city.slice(0, 2)) {
        ps.keywordSearch(db[i].frstCetrNm, (data, status, _pagination) => {
          if (status === kakao.maps.services.Status.OK) {
            marker.push({
              position: {
                lat: data[0].y,
                lng: data[0].x,
              },
              content: data[0].place_name,
              random: Math.random(),
            });

            setMarkers(marker);
          }
        });
      }
    }
  }, [db, mdate]);

  useEffect(() => {
    centerApi(mdate).then((data) => setData(data));
  }, [mdate]);

  return (
    <Styled.Container>
      <Styled.BannerWrapper>
        <Styled.BannerTitle>전국 화재 발생 지역/횟수</Styled.BannerTitle>
        <button onClick={onClick}>
            뒤로가기
        </button>
        <Styled.DateChoice
          type="date"
          value={date}
          onChange={dateChange}
          max="2022-04-10"
        ></Styled.DateChoice>
      </Styled.BannerWrapper>
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: "100%",
          height: "500px",
        }}
        level={12}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <MapMarker key={marker.random} position={marker.position}>
            <div style={{ color: "#000" }}>{marker.content}</div>
          </MapMarker>
        ))}
      </Map>
    </Styled.Container>
  );
};

export default DetailMap;
