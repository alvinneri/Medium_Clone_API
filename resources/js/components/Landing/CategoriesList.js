import React, { useEffect } from "react";

const CategoriesList = ({ category }) => {
    useEffect(() => {
        console.log(category);
    }, []);
    return (
        <div className="py-2 px-3 bg-gray-200 rounded-full m-2">
            <span>#{category}</span>
        </div>
    );
};

export default CategoriesList;
