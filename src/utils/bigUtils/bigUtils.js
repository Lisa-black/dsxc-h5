import Big from 'big.js/big.mjs';

class BigUtils{
    constructor() {
        this.Big = Big;
    }

    /**
     * @description: get Big Object.
     * @param {type} 
     * @return: Big
     */
    getBig() {
        return this.Big;
    }

    /**
     * 获取Big对象
     * @param {String,Number} param 
     */
    getBigObj(param) {
        let big = new (this.getBig())(param);

        return big;
    }

    /**
     * @description: 执行Big中的函数。
     * @param {String} fnName,函数的名称 
     * @param {Array} params,fnName参数的值 
     * @param {Number} toFixed,保留的小数位 
     */    
    fnPMTD(fnName,params, toFixed) {
        if (!Array.isArray(params)) {
            return NaN;
        }

        let len = params.length;
        let rs = NaN;

        for (let item = 0; item < len; item++){
            if (item === 0) {
                rs = this.getBigObj(params[item]);
            } else {              
                rs=rs[fnName](params[item]);
            }
        }

        if (typeof toFixed==='number'&&toFixed) {
            rs = rs.toFixed(toFixed).toString();
            return rs;
        }
        
        return rs.toString();
    }

    /**
     * 参数相加。
     * @param {Array} params Big函数中的参数。
     * @param {Number} toFixed 结果保留小数的位数
     */
    add(params,toFixed) {
        return this.fnPMTD('add', params, toFixed);
    }

    /**
     * 参数相减。
     * @param {Array} params Big函数中的参数。
     * @param {Number} toFixed 结果保留小数的位数。
     */
    minus(params, toFixed) {
        return this.fnPMTD('minus', params, toFixed);
    }

    /**
     * 参数相乘
     * @param {Array} params Big函数中的参数。
     * @param {Number} toFixed 结果保留小数的位数。
     */
    times(params, toFixed) {
        return this.fnPMTD('times', params, toFixed);
    }

    /**
     * 参数相除
     * @param {Array} params Big函数中的参数
     * @param {Number} toFixed 结果保留小数的位数。
     */
    div(params, toFixed) {
        return this.fnPMTD('div', params, toFixed);
    }

    /**
     * 参数相加，结果保留2位小数
     * @param {Array} params 每一个数组项是Big函数中的参数。
     */
    addDecimalTwo(params) {
        this.add(params, 2);
    }
    /**
     * 参数相加，结果保留3位小数
     * @param {Array} params 每一个数组项是Big函数中的参数。
     */
    addDecimalThree(params) {
        this.add(params, 3);
    }

    /**
     * 参数相减,结果保留2位小数
     * @param {Array} params 每一个数组项是Big函数中的参数。
     */
    minusDecimalTwo(params) {
        this.minus(params, 2);
    }

    /**
     * 参数相减,结果保留3位小数
     * @param {Array} params 每一个数组项是Big函数中的参数。
     */
    minusDecimalThree(params) {
        this.minus(params, 3);
    }
    
    /**
     * 参数相乘,结果保留2位小数
     * @param {Array} params 每一个数组项是Big函数中的参数。
     */
    timesDecimalTwo(params) {
        this.times(params, 2);
    }

    /**
     * 参数相乘,结果保留3位小数
     * @param {Array} params 每一个数组项是Big函数中的参数。
     */
    timesDecimalThree(params) {
        this.times(params, 3);
    }

    /**
     * 参数相除,结果保留2位小数
     * @param {Array} params 每一个数组项是Big函数中的参数。
     */
    divDecimalTwo(params) {
        this.div(params, 2);
    }

    /**
     * 参数相除,结果保留3位小数
     * @param {Array} params 每一个数组项是Big函数中的参数。
     */
    divDecimalThree(params) {
        this.div(params, 3);
    }

    /**
     * 加
     */
    paramsAdd() {
        let params = [...arguments];
        return this.fnPMTD('add', params);
    }

    /**
     * 减
     */
    paramsMinus() {
        let params = [...arguments];
        return this.fnPMTD('minus', params);
    }

    /**
     * 乘
     */
    paramsTimes() {
        let params = [...arguments];
        return this.fnPMTD('times', params);
    }

    /**
     * 除以
     */
    paramsDiv() {
        let params = [...arguments];
        return this.fnPMTD('div', params);
    }





    /**
     * 加,2位小数
     */
    paramsAddTFDTwo() {
        let params = [...arguments];
        return this.fnPMTD('add', params,2);
    }

    /**
     * 加,3位小数
     */
    paramsAddTFDThree() {
        let params = [...arguments];
        return this.fnPMTD('add', params,3);
    }


    /**
     * 减,2位小数
     */
    paramsMinusTFDTwo() {
        let params = [...arguments];
        return this.fnPMTD('minus', params,2);
    }

    /**
     * 减,3位小数
     */
    paramsMinusTFDThree() {
        let params = [...arguments];
        return this.fnPMTD('minus', params,3);
    }

    /**
     * 乘,2位小数
     */
    paramsTimesTFDTwo() {
        let params = [...arguments];
        return this.fnPMTD('times', params,2);
    }

    /**
     * 乘,3位小数
     */
    paramsTimesTFDThree() {
        let params = [...arguments];
        return this.fnPMTD('times', params,3);
    }

    /**
     * 除以,2位小数
     */
    paramsDivTFDTwo() {
        let params = [...arguments];
        return this.fnPMTD('div', params,2);
    }

    /**
     * 除以,3位小数
     */
    paramsDivTFDThree() {
        let params = [...arguments];
        return this.fnPMTD('div', params,3);
    }

}

export default BigUtils;