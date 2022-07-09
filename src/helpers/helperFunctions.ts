
export const groupingByData = (payload: any, property: string): void => {
    const groupByProperty = payload?.reduce((group: { [x: string]: any[]; }, data: { [x: string]: any; }) => {
        const fieldProperty = data[property];
        group[fieldProperty] = group[fieldProperty] ?? [];
        group[fieldProperty].push(data);
        return group;
    }, {});

    return groupByProperty;
};

export const sortingToDate = (data: any): any => {
    return data.sort(function (startVal: any, endVal: any) {
        let startDate: any = new Date(startVal.created);
        let endDate: any = new Date(endVal.created);
        return startDate - endDate;
    });
};

export const formalizeLabelArray = (data: Array<any>): Array<string> => {
    let labels = [];
    for (const item of data) {
        labels.push(item.name);
    }
    return labels;
};

export const formalizeDataSetArray = (data: Array<any>, groupingByField: any, groupingFieldName: string) => {
    let datas: any = {
        totalPercent: 0,
        dataSetArray: []
    };

    let dataPercentArray: Array<number> = [];
    let total: number = 0;

    for (const item of data) {
        const result = groupingByField[item[groupingFieldName]];
        total += result?.length;
        dataPercentArray.push(result?.length);
    }

    datas.totalPercent = total;
    datas.dataSetArray = dataPercentArray;

    return datas;
};

export const calculatePercentOfDatas = (data: any) => {
    const { totalPercent, dataSetArray } = data;
    const percents: Array<number> = [];

    for (const item of dataSetArray) {
        let percent: number = Math.round((item * 100) / totalPercent);
        percents.push(percent);
    };

    return percents;
};

export const calculateTotalAmountByField = (data: any, fieldData: Array<any>, fieldName: string) => {
    const resultObject: any = {};

    for (let i = 0; i < fieldData.length; i++) {
        const fieldItem: string = fieldData[i][fieldName];
        const element: Array<any> = data[fieldItem];
        let total: number = 0;

        if (element) {
            for (let j = 0; j < element.length; j++) {
                total += Math.round(element[j]?.amount);
                resultObject[fieldItem] = total;
            }
        }
    }

    return resultObject;
};

export const calculateFinalTotalAmount = (data: Array<number>) => {
    let summaryTotal: number = 0;
    for (const item of Object.values(data)) {
        summaryTotal += item;
    }

    return summaryTotal;
};