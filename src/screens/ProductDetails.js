import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const { state } = location;
  const { details } = state;
  return (
    <div class="container mt-5 mb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="card">
            <div class="row">
              <div class="col-md-6">
                <div class="images p-3">
                  <div class="text-center p-4">  {" "}
                    <img src={details.image} width={"100%"} alt="detail" />{" "} </div> </div> </div>
              <div class="col-md-6 d-flex  align-items-center">
                <div class="product p-4">
                  <div class="mt-4 mb-3">  {" "}
                    <span class="text-uppercase text-muted brand">
                      {details.category}
                    </span>
                    <h5 class="text-uppercase">{details.name}</h5>
                    <div class="price d-flex flex-row align-items-center">
                      {" "}
                      <span class="act-price">${details.price}</span>
                    </div>
                  </div>
                  <div>{details.isInStock ? "available" : "Not Available"}</div>
                  <div class="cart mt-4 align-items-center">
                    {" "}
                    <button class="btn btn-info">
                      Add to cart
                    </button>{" "}
                    <i class="fa fa-heart text-muted"></i>{" "}
                    <i class="fa fa-share-alt text-muted"></i>{" "}
                  </div></div>  </div>  </div>  </div> </div> </div> </div>
  );
};

export default ProductDetails;
