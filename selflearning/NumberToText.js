//we are  separating out the individual digits 
// by using modulus and division 
//we can use a function also 
function myFunction() {

    //var a = 12345678//12345670
    var total
    var a = document.getElementById("NumberToConvert").value;

    var onecroreplace = Math.floor(a / 10000000);
    if (onecroreplace > 9) {
        total = "number not supported ";
    }
    else {
        //we are removing induvidal digits 
        //and converting them 
        var lastsevendigitsplace = a % 10000000;
        var tenlakhsplace = Math.floor(lastsevendigitsplace / 1000000);
        var lastsixdigits = lastsevendigitsplace % 1000000;
        var lakhsplace = Math.floor(lastsixdigits / 100000);
        var lastfivedigits = lastsixdigits % 100000;
        var tenthousandplace = Math.floor(lastfivedigits / 10000);
        var fourdigits = lastfivedigits % 10000;
        var thousandsplace = Math.floor(fourdigits / 1000)
        var b = fourdigits - thousandsplace * 1000;
        var hunderdthplace = Math.floor(b / 100);
        var c = b - hunderdthplace * 100;
        var tensplace = Math.floor(c / 10);
        var onesplace = c - tensplace * 10;

        total =
            crore() +
            lakhs() +
            thousands() +
            hundred() +
            Tens()

    }
   
    // var total = 
    //     crore() +
    //     joningofTensandOnesplace(tenlakhsplace, lakhsplace) + ' lakhs ' +
    //     joningofTensandOnesplace(tenthousandplace, thousandsplace) + " thousands " +
    //     convertUnitsToText(hunderdthplace) + " hundred and " +
    //     joningofTensandOnesplace(tensplace, onesplace)



    var totalTest = convertUnitsToText(onecroreplace) + " crore " +
        tenlakhsplace + '' + lakhsplace + ' lakhs' + tenthousandplace + ''
        + thousandsplace + " thousands " +
        convertUnitsToText(hunderdthplace) + " hundred and " + c
    console.log(totalTest); // 15
    //alert(total);

    document.getElementById("display").innerHTML = total;

    function crore() {
        if (onecroreplace === 0) {
            return "";
        }
        return convertUnitsToText(onecroreplace) + " crore ";
    }

    function lakhs() {
        if (tenlakhsplace === 0 && lakhsplace === 0) {
            return "";
        }
        return joningofTensandOnesplace(tenlakhsplace, lakhsplace) + ' lakhs ';
    }

    function thousands() {
        if (tenthousandplace === 0 && thousandsplace === 0) {
            return "";
        }
        return joningofTensandOnesplace(tenthousandplace, thousandsplace) + " thousands ";
    }

    function hundred() {
        if (hunderdthplace === 0) {
            return "";
        }
        return convertUnitsToText(hunderdthplace) + " hundred ";
    }

    function Tens() {
        if (tensplace === 0 && onesplace === 0) {
            return "";
        }
        return "and " + joningofTensandOnesplace(tensplace, onesplace);
    }




    function joningofTensandOnesplace(inputTensplace, inputunitsPlace) {

        if (inputTensplace === 1) {
            var concanateToConvert = "" + inputTensplace + inputunitsPlace
            return multpleOfOne(concanateToConvert)
        }
        else

            var inwords = convertTensPlace(inputTensplace) + '' + convertUnitsToText(inputunitsPlace)
        return inwords;
    }
    //begin of convertUnitsToText
    function convertUnitsToText(numberinput) {
        switch (numberinput) {
            case 1:
                text = "one";
                break;
            case 2:
                text = "two";
                break;
            case 3:
                text = "three";
                break;
            case 4:
                text = "four";
                break;
            case 5:
                text = "five";
                break;
            case 6:
                text = "six";
                break;
            case 7:
                text = "seven";
                break;
            case 8:
                text = "eight";
                break;
            case 9:
                text = "nine";
                break;
            default:
                text = "";
        }
        return text;
    }//end of convertUnitsToText

    //begin of convertTensToText
    function convertTensPlace(tensplacenumbertoconvert) {
        switch (tensplacenumbertoconvert) {
            case 0:
                text = "";
                break;
            case 1:
                text = "ten"; //we will write a other function
                break;
            case 2:
                text = "twenty";
                break;
            case 3:
                text = "thirty";
                break;
            case 4:
                text = "fourty";
                break;
            case 5:
                text = "fifty";
                break;
            case 6:
                text = "sixty";
                break;
            case 7:
                text = "seventy";
                break;
            case 8:
                text = "eighty";
                break;
            case 9:
                text = "ninty";
                break;
            default:
                text = " ";
        }
        return text;
    }//end of convertTensToText

    function multpleOfOne(params) {
        switch (parseInt(params)) {
            case 10:
                text = "Ten";
                break;
            case 11:
                text = "eleven";
                break;
            case 12:
                text = "twelve";
                break;
            case 13:
                text = "thirteen";
                break;
            case 14:
                text = "fourteen"
                break;
            case 15:
                text = "fifteen";
                break;
            case 17:
                text = "seventeen";
                break;
            case 18:
                text = "eighteen";
                break;
            case 19:
                text = "ninteen";
                break;
            case 16:
                text = "sixteen";
                break;
            default:
                break;
        }
        return text
    }
    //End length of number 
    function getlength(number) {
        return number.toString().length;
    }//End length of number 

}
