import React from "react";

function Productlist()
{
    const products = {
        title: "Product List",
        categories: [
            {
                name: "Laptop",
                items: ["MSI thin", "Ryzen 9000", "RTX 4080 6GB"]
            },
            {
                name: "Mobile",
                items: ["Samsung", "Snapdragon 8th Gen", "100 mp Camera"]
            },
            {
                name: "Watch",
                items: ["Fossil", "Quartz Movement", "Premium Quality"]
            }
        ]
    };

    return (
        <>
            <h1>{products.title}</h1>
            <div className="card">
                {products.categories.map((category, index) => (
                    <div key={index}>
                        <h2>{category.name}</h2>
                        <ol>
                            {category.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ol>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Productlist;