var input_box = document.getElementById("calculation");
var historyData = [];
var expressionData = "";
var resultData = "";

function ClickButton(input) {
  var input_val=input_box.value;
  expressionData=input_val+input;
  input_box.value=expressionData;

}

function CalculateValue() {
  var input = input_box.value;
  input = input.replace('"', "").replace("'", "");
  var result = eval(input);
  resultData = result;
  historyData.push({ expression: expressionData, result: resultData });
  showhist();
  resultData = "";
  expressionData = "";
  input_box.value = result;
}

function ClearData() {
  input_box.value = "";
}

function showhist() {
  var hist = document.getElementById("history");
  var string = "";
  for (var key in historyData) {
    string +="" +historyData[key]["expression"] +" = " +historyData[key]["result"] +"<br>";
  }

  hist.innerHTML = string;
}