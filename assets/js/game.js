  
  var playerName = window.prompt("what is your robot's name?");
   var playerHealth = 100;
   var playerAttack = 10;
   var playerMoney =10;
//note the lack of quotation marks around playerName

console.log(playerName, playerAttack, playerHealth);

var enemyName = "roborto" ;
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

   
    
    //subtract the value of 'playerAttack' from value of 'enemyHealth' and 
    //if player choses to fight, then fight
    if (promptFight === "Fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;

    console.log( playerName +  " attacked "  +  enemyName  + "." +  enemyName + " now has"  +  enemyHealth   + " health reamaining." );


    
     
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!.");
    }
    
    else {
        window.alert (enemyName + " still has " +enemyHealth + " health left!.");
    }
    // remove player's health by subtracting the amount set in the enemyAttack variable

    playerHealth = playerHealth -enemyAttack;

    console.log (enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    

    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } 
      else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }

   // if player choses to skip


     } else if (promptFight === "skip" || promptFight === "SKIP") {
         var confirmSkip =  window.confirm("Are you sure you'd like to quit?");
         if (confirmSkip){
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }


            else {
                fight()
            }
         


      window.alert(playerName + " has chosen to skip the fight!");
      
     } else {
    window.alert("You need to choose a valid option. Try again!");
  }
    
  console.log(promptFight);

};


fight();
