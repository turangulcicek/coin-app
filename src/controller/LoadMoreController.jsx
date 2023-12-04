import { useSyncExternalStore } from "react";
import LoadMoreView from "../views/LoadMoreView";
import { useSearchParams } from "react-router-dom";

const LoadMoreController = () => {
  const [params, setParams] = useSearchParams();
  const handleClick = () => {
    // güncel sayfa sayısını alma
    const pageNumber = params.get("page") || 1;
    // url güncelliyoruz + işareti sayıya çeviriyor number gibi
    setParams({ page: +pageNumber + 1 });
  };
  return <LoadMoreView handleClick={handleClick} />;
};

export default LoadMoreController;
