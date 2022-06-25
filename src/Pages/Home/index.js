import "./index.css";
import React, { useEffect } from "react";
import { selectLoading, selectZingNewContent } from "./store/selector";
import { getZingNewContent } from "./store/action";
import { compose } from "recompose";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
const Home = (props) => {
  // action
  const { zingNewShow } = props;
  // data
  const { zingNewContent, isLoading } = props;
  useEffect(() => {
    zingNewShow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zingNewContent]);
  const showData = zingNewContent.filter((el) => el.isShow === true);
  const data1 = showData.filter((el) => el.type === 1);
  const data2 = showData.filter((el) => el.type === 2);
  const data3 = showData.filter((el) => el.type === 3);
  return (
    <div className="containerHome container" loading={isLoading}>
      <div className="col col-content">
        {data1.map((item, index) => (
          <div className="row-5 left-content" key={index}>
            <img src={item.image} alt="" />
            <Link to="/titleId">
              <h4>{item.title}</h4>
            </Link>
          </div>
        ))}
      </div>
      <div className="col col-content">
        {data2.map((item, index) => (
          <div className="row center-content" key={index}>
            <img src={item.image} alt="" />
            <Link to="/titleId">
              <h2>{item.title}</h2>
            </Link>
            <p>{item.description}</p>
            <h3>{item.content}</h3>
          </div>
        ))}
      </div>
      <div className="col col-content col-tablet">
        {data3.map((item, index) => (
          <div className="row-2 right-content" key={index}>
            <img src={item.image} alt="" />
            <Link to="/titleId">
              <h4>{item.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// data State to Props
const mapStateToProps = createStructuredSelector({
  zingNewContent: selectZingNewContent,
  isLoading: selectLoading,
});

//action contact with API
const mapDispatchToProps = (dispatch) => ({
  zingNewShow: (payload) => dispatch(getZingNewContent(payload)),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Home);
