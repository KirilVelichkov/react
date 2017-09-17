import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
    return _.round(_.sum(data) / data.length);
}

export default function Chart({ height, width, data, color }) {
    return (
        <div>
            <Sparklines height={height} width={width} data={data}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>
                Average: {average(data)}
            </div>
        </div>
    );
}