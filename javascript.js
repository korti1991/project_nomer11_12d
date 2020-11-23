var tips = [
'Eat a healthy diet. ',
'Consume less salt and sugar.   ',
 ' Reduce intake of harmful fats.  ' ,
  ' Avoid harmful use of alcohol.  ',
   'Do not smoke.  ',
 '  Be active.  ',
  ' Check your blood pressure regularly.  ',
  ' Drink only safe water.  ',
  ' Talk to someone you trust if you are feeling down.  ',
  ' Meditate regularly. ',
'  Do not drink sugar calories ',

 ' Avoid junk food ',

' Eat salmon  ',
 'Drink green tea  ',
 ' Sleep at least 7 hours every day  ',
 ' Keep a diary  ',
 ' Drink 2 liters water per day ',

 ' Eat vegetables and fruits ',
 ' Eats lots of protein ',
' Do cardio  ',

 ' Lift heavy weights '
  ]
  function newTip() {
	  var randomNumber = Math.floor(Math.random() * (tips.length));
	  document.getElementById('TipsDisplay').innerHTML = tips[randomNumber];
  }
