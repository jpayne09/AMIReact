import React, { useMemo, useState, useEffect } from "react";

function Inventory(props) {
        const productTag = props.assetData.AssetTag;

        return (
            <main className="main">
                <div>
                        <tr>
                            <th>
                                AssetTag
                            </th>
                        </tr>
                        <tbody>{props.assetData.map((i) => {
                            return(
                                <div>{i.AssetTag}</div>
                            );
                        })}</tbody>
                </div>            
            </main>
        );
}

export default Inventory ;