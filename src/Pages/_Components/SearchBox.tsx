import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useState } from "react";

const itemList = ["Men Jean", "Women Jean", "Men Track", "Watch", "Shopes"];

function SearchBox() {
  const [isShow, setIsShow] = useState(false);
  const [items, setItem] = useState(itemList);
  const [searchValue, setSearchValue] = useState("");

  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    if (value === "") {
      setIsShow(false);
      setItem(itemList);
    }
    if (value !== "") {
      setIsShow(true);

      const filterItem = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase()))
      setItem(filterItem)
    }


  }

  return (
    <div className="ml-10 flex items-center gap-2 w-[500px] p-2 rounded-md bg-slate-100 relative">
      <Search />
      <Input
        onChange={onChangeHandle}
        type="text"
        className="bg-white-100"
        placeholder="Search"
        value={searchValue}
      />

      {isShow && (
        <div className="w-[500px] bg-slate-200 absolute top-[60px] rounded-md left-[-1px] ">
          {items.map((item) => (
            <div
              style={{ borderBottom: "1px solid #D9D9D9" }}
              className="p-2 cursor-pointer text-center text-xl "
              onClick={() => {setSearchValue(item); setIsShow(false)}}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBox;
