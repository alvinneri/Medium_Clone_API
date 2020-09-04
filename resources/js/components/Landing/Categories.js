import React, { useEffect } from "react";
import CategoriesList from "./CategoriesList";

const Categories = () => {
    const categoriesArr = [
        "Programming",
        "Culture",
        "Health",
        "Business",
        "Productivity",
        "Business",
        "Business",
        "Business",
        "Business",
        "Business",
        "Business",
        "Business",
        "Business",
        "Business"
    ];

    return (
        <div className="flex flex-wrap justify-center py-5">
            {categoriesArr.map(category => {
                return <CategoriesList category={category} />;
            })}
        </div>
    );
};

export default Categories;
