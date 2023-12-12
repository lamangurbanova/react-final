import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import PropductItem from "../../Components/ProductItem/PropductItem";
import { connect } from "react-redux";
import { getHomeProductAction } from "../../Redux/Actions/productAction";

const Store = (props) => {

  console.log(props.products);

  useEffect(() => {
    // AOS.init();
    return props.getHomeProductAction();
  }, []);

  return (
    <div className="store d-flex flex-column align-items-center">
      <div className="text text-center pt-5" data-aos="fade-up">
        <p>ONLINE STORE</p>
        <h1 className="m-0">Discover Sweet Delicious</h1>
      </div>
      <div className="cards pt-5">
        <div className="container">
          <div className="m-0 g-5 d-lg-flex d-none row w-100">
            {
              props.products.isLoading ? (
                <div className=""> Loading..  </div>
              ) :
              props.products.products.length > 0 ? (
                props.products.products.map((item, index) => {
                return (
                  <PropductItem
                    key={index}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                  />
                );
              })
            ) : (
              <h1>Data not found</h1>
            )}
          </div>
        </div>
      </div>
      <Link to={"/products"}>
        <Button title="Online Store" />
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.homeProducts,
  };
};

export default connect(mapStateToProps, { getHomeProductAction }) (Store);
