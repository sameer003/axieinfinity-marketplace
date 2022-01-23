import React, { useState } from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import Button from "../button";

export default function Dropdown({
  defaultMsg = "Select",
  value,
  onChange,
  options,
  showIcon = false,
  showClose = false,
}) {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const setValue = (value) => {
    onChange(value);
    toggle();
  };

  const getSelectedLabel = () => {
    if (value) {
      return options.filter((option) => option.value == value)[0].label;
    } else {
      return defaultMsg;
    }
  };

  return (
    <div className="flex flex-col relative">
      <Button
        className="flex justify-between w-44 items-center bg-transparent hover:bg-black text-white font-semibold hover:text-white py-2 px-4 border border-grey-500 hover:border-transparent rounded"
        onClick={toggle}
      >
        {getSelectedLabel()}{" "}
        {showClose && (
          <MdClose
            title="remove"
            className="ml-auto"
            onClick={(e) => {
              e.stopPropagation();
              toggle(false);
              setValue(null);
            }}
          />
        )}
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </Button>

      <div
        id="dropdown"
        className={`${
          show ? "" : "hidden"
        } absolute top-10 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}
      >
        <ul className="py-1" aria-labelledby="dropdownButton">
          {options.map((option) => {
            return (
              <li
                key={option.value}
                onClick={() => setValue(option.value)}
                className="flex justify-between items-center cursor-pointer py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                {option.label}
                {showIcon && (
                  <Image src={`/${option.icon}.svg`} width="20" height="20" />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
