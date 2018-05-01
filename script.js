$(document).ready(function() {
    console.log("Loaded Calculator");
    $("#calculate").click(function () {
        
        var dataPoints = [];

        var rawDataPoints = $("#datapoints").val();
        var rawClassCount = $("#classcount").val();

        var formatedDataPoints = rawDataPoints.split("\n");

        var classCount = parseInt(rawClassCount);

        for (var i = 0; i < formatedDataPoints.length; i++){
            
            var asInt = parseInt(formatedDataPoints[i]);

            dataPoints.push(asInt);

        }

        var minVal = Math.min(...dataPoints);
        var maxVal = Math.max(...dataPoints);

        var rangeVal = maxVal - minVal;

        var interval = Math.ceil(rangeVal/classCount);

        $("#minvalue").text(minVal);
        $("#maxvalue").text(maxVal);
        $("#rangevalue").text(rangeVal);
        $("#intervalvalue").text(interval);


        for (var i = 0; i < classCount; i++){

            var minInt = minVal + (i * interval);
            var maxInt = minVal + (i * interval) + (interval - 1);

            var freq = checkInRange(minInt, maxInt, dataPoints);

            console.log("New Class:")
            console.log(minInt);
            console.log(maxInt);
            console.log(freq);


            $("#freqTableData").append('<tr><th><h5>' + minInt + "-" + maxInt + '</h5></td><th><h5>' + freq + '</h5></td></tr>');


        }




    });
});

function checkInRange(minInt, maxInt, array){
    
    var count = 0;

    for (var i = 0; i < array.length; i++){
        if((minInt - 1) < array[i] && array[i] < (maxInt + 1)){
            count++;
        }
    }

    return count;


}