import millify from "millify";
import LoadMoreController from "../controller/LoadMoreController";
import CardView from "./CardView";

const MainPageView = ({ coins, popular, navigate }) => {
  return (
    <div className="p-4 mt-4">
      <h2>Top Coin Lists</h2>
      <div className="d-flex  gap-3">
        {
          /* {popüler coinleri listele} */
          popular?.map((i) => (
            <CardView key={i.id} data={i} navigate={navigate} />
          ))
        }
      </div>

      <table className="table table-striped table-dark table-hover ">
        <thead>
          <tr>
            <th>#</th>
            <th>coin</th>
            <th>price</th>
            <th>market volume</th>
            <th>change 24h</th>
            <th>change % (24h)</th>
          </tr>
        </thead>
        <tbody>
          {coins ? (
            coins.map((coin, id) => (
              <tr
                onClick={() => navigate(`/coin/${coin.id}`)}
                key={id}
                className="coin"
              >
                <td>{id + 1}</td>
                <td>
                  <span className="me-1 text-warning fw-bold">
                    {coin.symbol}
                  </span>
                  <span>{coin.name}</span>
                </td>
                <td>${millify(coin.priceUsd)}</td>
                <td>{millify(coin.marketCapUsd)}</td>
                <td
                  className={
                    coin.volumeUsd24Hr >= 0 ? "text-success" : "text-danger"
                  }
                >
                  {millify(coin.volumeUsd24Hr)}
                </td>
                <td
                  className={
                    coin.changePercent24Hr >= 0 ? "text-success" : "text-danger"
                  }
                >
                  {millify(coin.changePercent24Hr)}%
                </td>
              </tr>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </tbody>
      </table>
      <div className="text-center">
        <LoadMoreController />
      </div>
    </div>
  );
};

export default MainPageView;
