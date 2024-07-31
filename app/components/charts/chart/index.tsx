import React from 'react';
import { Dimensions} from 'react-native';
import {
    BarChart,
  } from "react-native-chart-kit";

import themes from '@app/themes';


type chartPropsType = {
    labels: string[];
    data: number[];
};
function Index({
    labels,
    data
}: chartPropsType) {
    return (
        <BarChart
            data={{
            labels: labels,
            datasets: [
                {
                    data
                }
            ]
            }}
            width={Dimensions.get("window").width} 
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1}
            chartConfig={{
            backgroundColor: themes.colors.primary,
            backgroundGradientFrom: themes.colors.primary,
            backgroundGradientTo:  themes.colors.seconday,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
            }
            }}
            style={{
                marginVertical: 8,
                borderRadius: 16
            }}
        />
    );
}

export default Index;

