class Calculator {
    constructor() {
        var self = this;
        self.data = {};
    }
    input(data) {
        data = data || {};

        // Validating and storing the provided data in the current object instance.
        switch (data.type) {
            /*
             *
             * Blueprint of input data stored in `data` attribute (self.data)
             * You might receive some of these for some calculators and some for the others.
             *
             */
            //  {
            //!     type (string) --> bet calculator slug
            //!  	oddsFormat (string) --> [fractions, decimal],
            //!  	eachWay (boolean),
            //  	eachWayOptions (string/integer) --> [Win-to-Win/Place-to-Place, Each Way All Each Way],
            //!  	addSelectionNote (boolean),
            //  	showRule4 (boolean),
            //!  	stakeType (string/integer) --> [Stake per bet, Total Stake],
            //!  	selections (object) --> [
            //  		/* An array object containing betting rows */
            //  		{
            //!4\4  			outcome (string/integer) --> [Winner, Lost, Void, Dead Heat],
            //!  			odds --> Is an integer when the `oddsFormat` is `decimal` and a two value array when it's `fractions`
            //  			/* Exists when eachWay is `true` */
            //!  			place (string/integer) --> [1/1, 1/2, 1/3, 1/4, 1/5, 1/6, 1/7, 1/8],
            //  			/* Exists when `addSelectionNote`` is `true` */
            //!  			selectionNote (string),
            //  			/* Exists when `showRule4` is `true` */
            //  			rule4 (integer) --> [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
            //  		}
            //  	],

            case "main":
                break;

            case "single":
                break;

            case "double":
                break;

            case "treble":
                break;

            case "accumulator":
                break;

            case "trixie":
                break;

            case "patent":
                break;

            case "yankee":
                break;

            case "canadian":
                break;

            case "super-yankee":
                break;

            case "heinz":
                break;

            case "super-heinz":
                break;

            case "goliath":
                break;

            case "lucky15":
                break;

            case "lucky31":
                break;

            case "lucky63":
                break;

            case "forecasts":
                break;

            case "heinz-flag":
                break;

            case "super-heinz-flag":
                break;

            case undefined:
            default:
                // code block
                console.error("Calculator Type Invalid/Not Provided.");
        }
    }
    output() {
        const { data } = this;
        switch (data.type) {
            /*
             *
             * Blueprint of output data required to populate the UI
             *
             */
            //  {
            //  	totalStake (string),
            //  	return (string),
            //  	profit (string),
            //  	betBreakdown (object) --> [
            //  		bets --> [
            //  			betType (string),
            //  			totalBets (string/integer),
            //  			bestWon (string/integer),
            //  			bestPlaced (string/integer),
            //  			bestLost (string/integer)
            //  		]
            //  		total --> [
            //  			totalBets (string/integer),
            //  			bestWon (string/integer),
            //  			bestPlaced (string/integer),
            //  			bestLost (string/integer)
            //  		]
            //  	]
            //  }

            case "main":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "single":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "double":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "treble":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "accumulator":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "trixie":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "patent":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "yankee":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "canadian":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "super-yankee":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "heinz":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "super-heinz":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "goliath":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "lucky15":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "lucky31":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "lucky63":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "forecasts":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "heinz-flag":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case "super-heinz-flag":
                var output = {};
                // Calculations, Populating the `output` object
                return output;
                break;

            case undefined:
            default:
                // code block
                console.error("Calculator Type Invalid/Not Provided.");
        }
    }
}

export default Calculator;
