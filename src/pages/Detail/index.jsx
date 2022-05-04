import React, { useState, useEffect } from "react";
import DetailMap from '../../components/DetailMap'
import { useLocation } from "react-router";
import { peopleApi } from "../../api/Api";

const Detail = () => {
  const location = useLocation();
  const { city, wdate } = location.state;

  const [db, setDb] = useState([]);

  useEffect(() => {
    peopleApi(wdate).then((data) => setDb(data));
    console.log(db)
    console.log(wdate)
  }, [city]);

  return (
    <div>
      {db
        .filter((data) => data.sidoNm === city)
        .map((data) => (
          <div key={data.sidoNm}>
            <h1>지역: {data.sidoNm}</h1>
            <h1>인명피해 : {data.lifeDmgPercnt}</h1>
            <h1>부상자인원 : {data.injrdprPercnt}</h1>
          </div>
        ))}
        <DetailMap props={location.state}/>
    </div>
  );
};

export default Detail;
