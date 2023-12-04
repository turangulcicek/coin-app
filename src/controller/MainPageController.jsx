import axios from "axios";
import MainPageView from "../views/MainPageView";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
const MainPageController = () => {
  const [coins, setCoins] = useState([]);
  const [popular, setPopular] = useState(null);
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const page = params.get("page");
  useEffect(() => {
    axios.get(`/assets?limit=15&offset=${page ? page : 1}`).then((res) => {
      setCoins(coins.concat?.(res.data.data));
      if (!popular) {
        setPopular(res.data.data.slice(0, 3));
      }
    });
  }, [page]);

  return <MainPageView navigate={navigate} popular={popular} coins={coins} />;
};

export default MainPageController;
