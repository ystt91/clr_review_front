import React from 'react';
import ListComponent from "../../components/products/ListComponent";

function ListPage(props) {
    return (
        <div className="w-full p-4 bg-white">
            <div className="text-3xl m-4 font-extrabold">
                Products List Page
            </div>

            <ListComponent/>
        </div>
    );
}

export default ListPage;