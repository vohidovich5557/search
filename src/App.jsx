import React from "react";
import { useGetData } from "./services/query/useGetData";
import useDebounce from './hook/useDebaunce';
import { Card } from "./components/card";


function App(){
 const [input, setInput] = React.useState("");
 const [page, setPage] = React.useState(1);
 const value = useDebounce(input);
 const {isLoading, data} = useGetData(value, page);
 const buttons = Math.floor(Number(data?.dataSize / Number(data?.limit)));
  return (
    <>
    <div>
      <input type="search" placeholder="search" value={input} onChange={(e) => setInput(e.target.value) } className="w-[500px] h-[30px] border-2 border-red-600 outline-none" />
    </div>
    <div className=" ml-auto mr-auto w-[700px] flex flex-col justify-center items-center">
      {data?.data.map((item) => (
        <Card 
        title={item.title}
        description={item.description}
        />
      ))}
      <div className="flex items-center justify-center gap-[10px]">
      {Array(buttons ? buttons : 0).fill(null).map((_,i) => <button
      onClick={() => setPage(i + 1)}
      className={`w-[20px] h-[20px] rounded-[10px] ${page === i + 1 ? "bg-red-600" : "bg-blue-600"}  bg-blue-600 text-white flex items-center justify-center`} key={i}>{i + 1}</button>)}
      </div>
    </div>
    </>
  )
};


export default App;