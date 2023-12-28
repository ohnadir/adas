import Container from "./components/Container"
import EmptyState from "./components/EmptyState"
import ProductListing from "./components/Listings/ProductListingCard"

export default function Home() {
  const productListing = [
    {
      "id" : 1,
      "name" : "Forum Low x The Grinch Shoes",
      "image" : "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/3569152bea8f4c4b989ea2e7a3fd135b_9366/the-grinch-forum-low-shoes-kids.jpg",
      "price" : 110,
      "category" : "Original",
      "tag" : "Best Seller"
    }
  ]
  if(productListing.length===0) {
    <Container>
      <EmptyState
        title="No Products Found!"
      />
    </Container>
  }
  return (
    <Container>
      <div>
        <div 
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {
            productListing?.map((listing: any)=>(
              <ProductListing
                key={listing.id}
                data={listing}
              />
            ))
          }
        </div>
      </div>
    </Container>
  )
}