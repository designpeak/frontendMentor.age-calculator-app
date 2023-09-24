let date = new Date();
const daysInMonth = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  



$(document).ready(function () { 

    $("#submitBtn").click(function () {
        if($("#day").val() > 31 || $("#day").val() < 1 || $("#day").val() == "" || daysInMonth[$("#month").val()] < $("#day").val()){
            $("#dayError").css("display", "block").text("Must be a valid day");
            $("#dayLabel").addClass("errorLabel");
            $("#day").addClass("error");
        }  else{
            $("#dayError").css("display", "none");
            $("#dayLabel").removeClass("errorLabel");
            $("#day").removeClass("error");
        } 

        if($("#month").val() > 12 || $("#month").val() < 1 || $("#month").val() == ""){
            $("#monthError").css("display", "block").text("Must be a valid month");
            $("#monthLabel").addClass("errorLabel");
            $("#month").addClass("error");
        } else{
            $("#monthError").css("display", "none").text("Must be a valid month");
            $("#monthLabel").removeClass("errorLabel");
            $("#month").removeClass("error"); 
        }

        if($("#year").val() > 9999 || $("#year").val() < 0 || $("#year").val() == ""){
            $("#yearError").css("display", "block").text("Must be a valid year");
            $("#yearLabel").addClass("errorLabel");
            $("#year").addClass("error");
        }else{
            $("#yearError").css("display", "none");
            $("#yearLabel").removeClass("errorLabel");
            $("#year").removeClass("error");
        }

        if($("#year").val() > date.getFullYear()){
            $("#yearError").css("display", "block").text("Must be in past");
            $("#yearLabel").addClass("errorLabel");
            $("#year").addClass("error");
        }


        if($(".errorLabel").length == 0){
            var currYear = date.getFullYear(); 
            var currMonth = date.getMonth() + 1;
            var currDay = date.getDate();
            
            var year = $("#year").val();
            var month = $("#month").val();
            var day = $("#day").val();


            let daysDifference = currDay - day;
            let monthsDifference = currMonth - month;
            let yearsDifference = currYear - year;

            if(daysDifference < 0){
                datesDifference = Math.abs(daysDifference);
                monthsDifference -= 1;
            }

            if(monthsDifference < 0){
                monthsDifference = 12 - Math.abs(monthsDifference);
                yearsDifference -= 1;
            }

            $("#yearHighlight").text(yearsDifference);
            $("#monthHighlight").text(monthsDifference);
            $("#dayHighlight").text(daysDifference);
    
        }
    });

});