import React, { useState, useContext } from 'react';
import Dropdown from '../common/dropdown';
import FilterContext from '../../services/context';

const sortOptions = [
  {
    value: "IdAsc",
    label: "Lowest Id"
  },
  {
    value: "IdDesc",
    label: "Highest Id"
  },
  {
    value: "PriceDesc",
    label: "Highest Price"
  },
  {
    value: "PriceAsc",
    label: "Lowest Price"
  },
  {
    value: "Latest",
    label: "Latest"
  }
];

const classOptions = [
  "Beast",
  "Aquatic",
  "Plant",
  "Bug",
  "Bird",
  "Reptile",
  "Mech",
  "Dawn",
  "Dusk"
];

export default function Filters() {
  const [sortOn, setSortOn] = useState("PriceAsc");
  const [classes, setClasses] = useState(null);
  const {dispatch} = useContext(FilterContext);

  const onSort = (value) => {
    setSortOn(value)
    dispatch({ type: "SORT", id: value });
  }

  const onAddClass = (value) => {
    setClasses(value)
    dispatch({ type: "CLASS", classes: value });
  }
  

  return (
    <div className="flex w-full bg-gray-800 py-2 justify-end px-5 gap-2">
      <Dropdown defaultMsg="Select Class" showIcon showClose value={classes} onChange={onAddClass} options={classOptions.map(item => ({label:item, value:item, icon:item}))}/>
      <Dropdown value={sortOn} onChange={onSort} options={sortOptions}/>
    </div>
  );
}
