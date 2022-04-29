import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { peopleApi } from "../../api/Api";

const Detail = () => {
  const location = useLocation();
  const { city, date } = location.state;

  const [db, setDb] = useState([]);

  useEffect(() => {
    peopleApi(date).then((data) => setDb(data));
  }, [date]);

  return (
    <div>
      {db
        .filter((data) => data.sidoNm === city)
        .map((data) => (
          <div key={data.sidoNm}>
            <h1>인명피해 : {data.lifeDmgPercnt}</h1>
            <h1>부상자인원 : {data.injrdprPercnt}</h1>
          </div>
        ))}
    </div>
  );
};

export default Detail;
