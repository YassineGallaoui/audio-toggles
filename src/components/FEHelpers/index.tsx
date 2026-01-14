"use client";

import { GridHelper, StatsHelper } from "next-fe-helpers";


const FEHelpers = () => {
    return (
        <div style={{ position: 'absolute' }}>
            <GridHelper
                show={true}
                columnsColor={'transparent'}
                columnsBorderWidth={"0.1px"}
                columnsBorderColor={"#ffffff10"}
                columnsBorderStyle={"solid"}
            ></GridHelper>
            <StatsHelper></StatsHelper>
        </div>
    )
}

export default FEHelpers;