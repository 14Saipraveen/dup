
    function roll()
    {
      var result = 0;
      result = Math.floor((Math.random() * 6) + 1);
      return result;
    }
    
    function displayDice(dice)
    {
      var out = "";
      for (var i = 0; i < dice.length; i++)
      {
        out += "<img src='img/dice" + dice[i] + ".png'/>";
      }
      
      return out;
    }

    function play()
    {
      var humanDice = new Array();
      var computerDice = new Array();
      var humanTotal = 0;
      var computerTotal = 0;
      var out = "";
     for (var i = 0; i < 10; i++)
      {
        humanDice[i] = roll();
        humanTotal += humanDice[i];
        computerDice[i] = roll();
        computerTotal += computerDice[i];
      }
      
      out = displayDice(humanDice);
      document.getElementById('humanDice').innerHTML = out;
      
      out = displayDice(computerDice);
      document.getElementById('computerDice').innerHTML = out;
      
      document.getElementById('humanTotal').innerHTML = humanTotal;
      document.getElementById('computerTotal').innerHTML =  computerTotal;  
      
      if (humanTotal > computerTotal)
      {
        document.getElementById('humanTotal').className = 'total winner';
        document.getElementById('computerTotal').className = 'total loser';
        document.getElementById('msg').innerHTML = "Human Won!";
      }
      else if (computerTotal > humanTotal)
      {
        document.getElementById('humanTotal').className = 'total loser';
        document.getElementById('computerTotal').className = 'total winner';
        document.getElementById('msg').innerHTML = "Computer Won!";
      }
      else
      {
        document.getElementById('humanTotal').className = 'total draw';
        document.getElementById('computerTotal').className = 'total draw';
        document.getElementById('msg').innerHTML = "Draw!";
      }
    
    }
    
