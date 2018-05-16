var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}


function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var name = katzDeliLine.shift();
    return `Currently serving ${name}.`;
  
}

function currentLine(katzDeliLine) {
  var position = i + 1;
  var names = "The line is currently: ";
  var name = katzDeliLine[i];

  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  for(var i = 0; i < katzDeliLine.length; i++) {
    if (position === katzDeliLine.length) {
      names += `${position}. ${name}`;
    }
    else {
      names += `${position}. ${name}, `;
    }
  }
  return names;
}






