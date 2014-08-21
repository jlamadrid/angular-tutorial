'use strict';

/**
 *
 */
angular.module('tradeloguiApp')
    .factory("tradeRepository", function () {
        /**
         * Notice that that trades variable is defined in the factory
         * function, rather than as part of the service object.
         * I don’t want consumers of the service to be able to modify the
         * data, and placing it outside of the service object
         * means that it isn’t accessible to service consumers.
         * @type {number}
         */
        var trades = [
            {
                "longShort": 'Long',
                "ticker": 'MSFT',
                "comment": 'MSFT rocks',
                "rating": 4
            },
            {
                longShort: 'Short',
                ticker: 'IBM',
                comment: 'IBM Stinks!',
                rating: 3
            }
        ];

        /**
         * service object = public API
         */
        return {
            addTrade: function (trade) {
                trades.push(trade);
            },

            getTrades: function () {
                return trades;
            }
        };

    }
);