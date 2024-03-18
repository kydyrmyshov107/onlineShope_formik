import { useGetFavoriteQuery } from "../../redux/api/favorite";

const Favorite = () => {
  const { data: FavoriteCards = [], isLoading } = useGetFavoriteQuery();
  return (
    <div className="container">
      {isLoading ? (
        <>
          <h3>Loading ..</h3>
        </>
      ) : (
        FavoriteCards.map((item) => (
          <div key={item._id}>
            <img src={item.photoUrl} alt="image" />
            <p>{item.productName}</p>
            <p>{item.quantity}</p>
            <p>price:{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorite;
