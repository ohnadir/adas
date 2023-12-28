import EmptyState from "../components/EmptyState";

const WishList = () => {
    const wishListings = [];
    if (wishListings.length === 0) {
        return (
            <EmptyState
              title="MY WISHLIST"
              subtitle="You haven't saved any items to your wishlist yet. Start shopping and add your favorite items to your wishlist."
            />
        );
      }
    return (
        <div>WishList</div>
    )
}

export default WishList