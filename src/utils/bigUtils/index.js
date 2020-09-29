import BigUtils from './bigUtils';

export default {
  install:function (vm) {
        vm.prototype.$bigUtils = function () {
            return new BigUtils();
        };

        /**
         * +
         */
        vm.prototype.$bigMathAdd = function () {
            let bigUtils = new BigUtils();
            let params = [...arguments];
            return bigUtils.paramsAdd(...params);
        };

        /**
         * -
         */
        vm.prototype.$bigMathMinus = function () {
            let bigUtils = new BigUtils();
            let params = [...arguments];
            return bigUtils.paramsMinus(...params);
        };

        /**
         * *
         */
        vm.prototype.$bigMathTimes = function () {
            let bigUtils = new BigUtils();
            let params = [...arguments];
            return bigUtils.paramsTimes(...params);
        };

        /**
         * /
         */
        vm.prototype.$bigMathDiv = function () {
            let bigUtils = new BigUtils();
            let params = [...arguments];
            return bigUtils.paramsDiv(...params);
        };

        /**
         * +,toFixed(2)
         */
        vm.prototype.$bigMathAddTFDTwo=function () {
            let bigUtils = new BigUtils();
            let params = [...arguments];
            return bigUtils.paramsAddTFDTwo(...params);
        }

        /**
         * +,toFixed(3)
         */
        vm.prototype.$bigMathAddTFDThree=function () {
            let bigUtils = new BigUtils();
            let params = [...arguments];
            return bigUtils.paramsAddTFDThree(...params);
        }

        /**
         * -,toFixed(2)
         */
        vm.prototype.$bigMathMinusTFDTwo=function () {
            let bigUtils = new BigUtils();
            let params = [...arguments];
            return bigUtils.paramsMinusTFDTwo(...params);
        }

        /**
         * -,toFixed(3)
         */
        vm.prototype.$bigMathMinusTFDThree=function () {
            let bigUtils = new BigUtils();
            let params = [...arguments];
            return bigUtils.paramsMinusTFDThree(...params);
        }

        /**
         * *,toFixed(2)
         */
        vm.prototype.$bigMathTimesTFDTwo=function () {
            let bigUtils = new BigUtils();
            let params = [...arguments];
            return bigUtils.paramsTimesTFDTwo(...params);
        }

        /**
         * *,toFixed(3)
         */
        vm.prototype.$bigMathTimesTFDThree=function () {
            let bigUtils = new BigUtils();
            let params = [...arguments];
            return bigUtils.paramsTimesTFDThree(...params);
        }

        /**
         * /,toFixed(2)
         */
        vm.prototype.$bigMathDivTFDTwo=function () {
            let bigUtils = new BigUtils();
            let params = [...arguments];
            return bigUtils.paramsDivTFDTwo(...params);
        }

        /**
         * /,toFixed(3)
         */
        vm.prototype.$bigMathDivTFDThree=function () {
            let bigUtils = new BigUtils();
            let params = [...arguments];
            return bigUtils.paramsDivTFDThree(...params);
        }       


  }
}