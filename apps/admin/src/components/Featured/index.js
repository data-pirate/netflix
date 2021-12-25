import React from "react";
import "./featured.css";
import FeaturedItem from "./FeaturedItem";

const featuredItems = [
    {
        title: 'revanue',
        revanue: 2211,
        growth: 11
    },
    {
        title: 'cost',
        revanue: 91,
        growth: 1
    },
    {
        title: 'sales',
        revanue: 1800,
        growth: -5
    },
]

function Featured() {
  return (
    <div className="featured">
      {featuredItems.map(each => <FeaturedItem {...each} key={each.title}/>)}
    </div>
  );
}

export default Featured;
