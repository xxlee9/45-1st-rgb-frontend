import React from "react";
import FilterComponent from "../FilterComponent/FilterComponent";
import "./LeftFilter.scss";

function LeftFilter({ filter }) {
  return (
    <div className="leftFilter">
      <div className="show">
        <label for="checkbox">Show only available artwork</label>
        <input type="checkbox" id="checkbox" />
      </div>
      <div className="filters">
        {filter.map(content => {
          return <FilterComponent content={content} key={content.ids} />;
        })}
      </div>
    </div>
  );
}

export default LeftFilter;
