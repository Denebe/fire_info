import React, { useEffect, useState } from "react";
import { mainApi } from "../../api/Api";
import KakaoMap from "../../components/KakaoMap";

const Home = () => {

  const [db, setData] = useState([])
  useEffect(() => {
    mainApi().then((data) => setData(data));;
  }, []);
  return (
    <div>
      화재발생 장소, 시간
      <KakaoMap place={db}/>
    </div>
  );
};

export default Home;
