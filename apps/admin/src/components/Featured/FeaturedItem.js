import { mdiArrowDownBold, mdiArrowUpBold } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

function FeaturedItem(props) {
  return (
    <div className="featured-item">
      <span className="featured-title">{props.title}</span>
      <div className="money-container">
        <span className="total-revanue">${props.revanue}</span>
        <span className="revanue-growth">
          {props.growth} %
          {props.growth < 0 ? (
            <Icon path={mdiArrowDownBold} color="red" size={1} />
          ) : (
            <Icon path={mdiArrowUpBold} color="green" size={1} />
          )}
        </span>
      </div>

      <span className="featured-sub">Compared to last month</span>
    </div>
  );
}

export default FeaturedItem;
