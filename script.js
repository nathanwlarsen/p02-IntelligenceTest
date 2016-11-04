//Nathan Larsen
function user_input_1()
{
  var test_1;
  var input = document.getElementById("input_1").value;
  if(isNaN(input))
  {
    document.getElementById("message_text_test_1").innerHTML="Your answer must be a number.";
  }
  else if(input == 13)
  {
    test_1 = 1;
    document.getElementById("message_text_test_1").innerHTML="Your answer is correct!";
  }
  else
  {
    document.getElementById("message_text_test_1").innerHTML="Your answer is incorrect.";
  }
  if(input == "")
  {
    document.getElementById("message_text_test_1").innerHTML = "";
  }
  if(test_1 > 1)
  {
    test_1 = 1;
  }
  setCookie("results1", test_1, 1);
}

function user_input_2()
{
  var test_2;
  var input = document.getElementById("input_2").value;
  if(isNaN(input))
  {
    document.getElementById("message_text_test_2").innerHTML="Your answer must be a number.";
  }
  else if(input == 68)
  {
    test_2 = 1;
    document.getElementById("message_text_test_2").innerHTML="Your answer is correct!";
  }
  else
  {
    document.getElementById("message_text_test_2").innerHTML="Your answer is incorrect.";
  }
  if(input == "")
  {
    document.getElementById("message_text_test_2").innerHTML = "";
  }
  if(test_2 > 1)
  {
    test_2 = 1;
  }
  setCookie("results2", test_2, 1)
}

function user_input_3()
{
  var test_3;
  var input = document.getElementById("input_3").value;
  if(isNaN(input))
  {
    document.getElementById("message_text_test_3").innerHTML="Your answer must be a number.";
  }
  else if(input == 240)
  {
    test_3 = 1;
    document.getElementById("message_text_test_3").innerHTML="Your answer is correct!";
  }
  else
  {
    document.getElementById("message_text_test_3").innerHTML="Your answer is incorrect.";
  }
  if(input == "")
  {
    document.getElementById("message_text_test_3").innerHTML = "";
  }
  if(test_3 > 1)
  {
    test_3 = 1;
  }
  setCookie("results3", test_3, 1);
}

function show_results()
{
  var r1 = getCookie("results1");
  var r2 = getCookie("results2");
  var r3 = getCookie("results3");
  var results;
  results = (r1 + r2 + r3) / 3 * 100;
  results = results.toFixed(2);
  document.getElementById("show_results").innerHTML = "you scored a %" + results;
}




function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
