import React, { useEffect } from "react";
import { mainApi } from "../../api/Api";

const Home = () => {
  useEffect(() => {
    mainApi();
  }, []);
  return (
    <div>
      화재발생 장소, 시간
    </div>
  );
};

export default Home;
