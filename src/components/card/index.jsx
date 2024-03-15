import React from "react";



export const Card = ({title, description}) => {
    return (
        <>
        <div className="w-[500px] h-auto border-2 border-blue-600 px-[20px] py-[10px]">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        </>
    )
};