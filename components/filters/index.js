import React, { useState, useContext } from 'react';
import Dropdown from '../common/dropdown';
import FilterContext from '../../services/context';
import Button from '../common/button';

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
      <Button
        onClick={() => window.open(`https://thesameerahmed.com`, "_blank")}
        title="thesameerahmed.com"
        className="transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 inline-flex items-center justify-center mr-auto h-10 px-6 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle ease-in-out bg-transparent  cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
      >
        Hire Me!
      </Button>
      <Dropdown
        defaultMsg="Select Class"
        showIcon
        showClose
        value={classes}
        onChange={onAddClass}
        options={classOptions.map((item) => ({
          label: item,
          value: item,
          icon: item,
        }))}
      />
      <Dropdown value={sortOn} onChange={onSort} options={sortOptions} />
    </div>
  );
}
