import React, { useEffect } from "react";
import { mainApi } from "../../api/Api";
import KakaoMap from "../../components/KakaoMap";

const Home = () => {
  useEffect(() => {
    mainApi();
  }, []);
  return (
    <div>
      화재발생 장소, 시간
      <KakaoMap />
    </div>
  );
};

export default Home;
