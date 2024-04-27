// Beento Variables
beenToCheckPoint = true;
beenToCastle = false;
beenToMarket = false;
beenToHome = false;

//

//Taken Action Variables
smuggled = false;
waited = false;


// Item Variables
knife = false;
money = false;
//

/* Locations
The checkpoint = first time you are at the checkpoint with two Guards.
checkPoint = other times you arrive at the checkpoint.
Home
The Castle
The Market

*/

//Global Variables location
var currentLocation = "The checkpoint";
var characterName = false;
var characterGender = false;
var belovedName = false;
var belovedGender = false;
var characterSet = false;
var counter = 0;
	
//reusable Functions
  //Roll Die
	// pick a random number between 1 and 6 for our roll of the die. This is from http://www.codecademy.com/courses/conditionals-application/0/2
	function rollDie() {	 
		die = Math.floor(Math.random()*6 + 1);
		console.log("You rolled a "+die);
	}

	//you can't do that
    function noCanDo() {
			$("<p>You can't do that right now. Type 'Help' for a list of actions or 'Location' to see where you are.</p>").insertBefore("#placeholder").hide().fadeIn(2000);
	}

//Game Begins

$(document).ready(function(){
	$("#console").fadeIn(2000);
	
	$("#player").submit(function(){
		player = $("#player_enter").val();
		console.log('player: ' + player);

	if(counter === 0){
		characterName = player;
		console.log("characterName: " + characterName);
		$("<p>Welcome " + characterName + ". Are you Male or Female?</p>").insertBefore("#character_placeholder").hide().fadeIn(2000);
		//player = '';
		//console.log('player: ' + player);
	}

	if(counter === 1){
		characterGender = player;
		console.log("characterGender: " + characterGender);
		$("<p>In this game, you will be trying to save your beloved from an evil Lord. What is their name?</p>").insertBefore("#character_placeholder").hide().fadeIn(2000);
  	}

	if(counter === 2){
	   	belovedName = player;
			console.log("belovedName: " + belovedName);
		 $("<p>" + belovedName + " awaits you. Are they Male or Female?</p>" ).insertBefore("#character_placeholder").hide().fadeIn(2000);
//+ "<p>
	}

	if(counter === 3) {
		characterSet = false;
				$("<p>Okay " + characterName + " it's time to save" + belovedName +"!</p>").insertBefore("#character_placeholder").hide().fadeIn(2000);
		belovedGender = player;
		console.log("player = belovedGender: " + belovedGender);
		$("#player").hide();
		$("#main_form").fadeIn(2000);
		$("#game_start").fadeIn(2000);
		
	}
			counter ++;
		$("#player_enter").val("");

	
if(counter >3){
	$("#main_form").submit(function(){
		input = $("#command_line").val().toUpperCase();
		//console.log('input: ' + input);

		function checkInput (command) {
			var check;

//Start Market
			function isMarket () {
				currentLocation = 'The Market';
				beenToMarket = true;
				console.log("you go to the market");
				$("<p>Good choice! Once you get to the market, you'll be close to the Castle. There will be many things available to help you prepare to sneak inside and search for the Princess (or Prince if player is female). The Guards allow you to pass, but not before searching your cart for any valuable items.</p>").insertBefore("#placeholder").hide().fadeIn(2000);

					$("<p>As the guards start searching the back of your cart, you look down and see the spot where you hid your knife and your money pouch. You could reach under the edge of the tarpaulin and grab one of them. They are well hidden, but if the guards find them, you'll likely lose both of them. But if the guards see you taking something, you'll catch their attention, you will definitely lose them. Should you try and smuggle one of them or wait hoping they don't find the hidding place?</p>").insertBefore("#placeholder").hide().fadeIn(2000);

					$("<p>Type Smuggle or Wait to make your decision</p>").insertBefore("#placeholder").hide().fadeIn(2000);
		     check = 'MARKET';
			}
//end Market

//start Smuggle
			function isSmuggle () {
				smuggled = true;
				if(currentLocation === 'The Market'){
				$("<p>The guards are getting close. You only have time to grab one. Which one do you want: The Money or The Knife?</p>").insertBefore("#placeholder").hide().fadeIn(2000);
				}
				 check = 'SMUGGLE';
			}
//end Smuggle

//start Knife

			function isKnife () {
				knife = true;
				$("<p>You take the Knife. Luckily the guards don't notice. You slip it into your belt under your clothes. </p>").insertBefore("#placeholder").hide().fadeIn(2000);
			//add random math outcome
			}
//end Knife

			//Wait function
			function isWait (){
				waited = true;
				if(currentLocation === 'The Market'){
				  $("<p>You choose to wait. You watch the guards walk around your cart, poking and prodding as they go. </p>").insertBefore("#placeholder").hide().fadeIn(2000);
					
				  rollDie();
				  if(die <= 3){
					  $("<p>The Guards find the items and you lose them. But at least they allow you to continue. Let's hope you can sell the crops in your cart and get some more money. You continue your way to the Market. When you arrive there...What do you want to do?</p>").insertBefore("#placeholder").hide().fadeIn(2000);
				  }
				  else if (die >3){
						$("<p>Your patience pays off. The guards don't find your items. They let you pass with both the knife and your money. You continue your way to the Market. When you arrive there...What do you want to do?</p>").insertBefore("#placeholder").hide().fadeIn(2000);
				  }
				}// end if currentlocation === market
				
				else {
					noCanDo();
				}

				 check = 'WAIT';
			}//end Wait

			//Functions at the Market
			function isSellCrops (){
				if(currentLocation === 'The Market'){
					//set sell crops variable and decide on value for them. Set up sell/buy system for items.
				$("<p>You sell the crops in cart to a local vendor for a good price. You can use the money to buy some items to help with the rescue.</p>").insertBefore("#placeholder").hide().fadeIn(2000);
				}
				else{
					noCanDo();
				}
				
				 check = 'SELL CROPS';
			}

			
//start Castle
			function isCastle () {
				$("<p>'You can't go to the Castle today,' one of the guard grumbles. You tell him you have crops to deliver directly to Lord's storehouse, but they don't accept that. If you want to go to the castle, you'll have to try something else. You could fight them, but you only have your knife, which won't go very far in fighting two fully equiped guards.</p>").insertBefore("#placeholder").hide().fadeIn(2000);

				$("<p>You could try bribing them with your money, but you won't have any left once you get to the Castle.</p>").insertBefore("#placeholder").hide().fadeIn(2000);

				$("<p>'Get a move on. You can't block the path,' the talkative guard says. 'If you don't move on, we're going to arrest you.' You probably shouldn't press the issue, but if you really want to get to the Castle, you'll have to either bribe the guards or prepare to take on two of them with only your knife. If not you could try asking them to let you go to the Market or even  returning home, but they seem iritated and might arrest you.</p>").insertBefore("#placeholder").hide().fadeIn(2000);

				 check = 'CASTLE';
			}
//end Castle

//start Fight
        	function isFight (){
     	  		$("<p>You pull your knife from its hiding place in the cart and face the guards. They look bemused at your pathetic weapon and your stance towards them. They draw their massive swords and laugh. You really have to question your decision. But you have no choice now and must make a valiant effort and fight. But as they approach you, you realise you don't really have a chance. You try to bribe them, but they laugh at your attempt. One of the guards wants to kill you. The other one stops him. They seem to be debating whether to kill you or not. You couldn't run if you wanted. So all you can do is wait.</p>").insertBefore("#placeholder").hide().fadeIn(2000);
            	rollDie();
            		if (die <= 3) {
                       	$("<p>The guards decide to kill you. Game over.</p>").hide().fadeIn(2000);
                   	} 
                   	else if (die > 3) {
                   		$("<p>The guards decide to arrest you. They put you in chains, and you wait for four hours until another pair of guards come to relieve them. They march you to the Castle and thow you in the dungeon. Everything seems desolate until you see your beloved beside you in chains. You are thrilled to see him/her until his/her eyes lock on you with an immense amount of anger. 'There is no way out with both of us in here' Game over!</p>").insertBefore("#placeholder").hide().fadeIn(2000);
                   	}
            	check = 'FIGHT';
            }
//end Fight

//start Bribe				
			function isBribe (){
				$("<p>The guards will only take money in the King's Currency. Of course these uppity guards would only take that. Nobody actually uses it except those who care about status. You can't remember if you've brought any coins in the King's Currency. You check your money pouch and don't find any. You have a hidden stash under the taurpaulin covering your cart. You search through there and don't find any either. The guards look annoyed. They don't let you pass and take all of your money. You return home without any money or your beloved. You need another plan.</p>").insertBefore("#placeholder").hide().fadeIn(2000);
				check = 'BRIBE';
			}
//end Bribe


//start Home
			function isHome () {
				$("<p>'I...um...' you stammer. You turn around and start back towards home. You know they are suspicious of you.</p>").insertBefore("#placeholder").hide().fadeIn(2000);
				 
				rollDie();
				if (die <= 5){
					$("<p>You start walking slowly away from the guards. You look over your shoulder and see them staring after you. One of them seems to move towards you, but in the end they just watch you walk out of sight. You arrive home and will need another plan to rescue your beloved.</p>").insertBefore("#placeholder").hide().fadeIn(2000);
				}
				else if (die > 5){
					$("<p>You start walking slowly away from the guards. You look over your shoulder and see them staring after you. One of them seems to move towards you. He stops briefly, looking at the other guard who points at you. The first guard runs quickly at you. Before you know it, he's pulled his sword out. You die instantly. Game Over!</p>").insertBefore("#placeholder").hide().fadeIn(2000);
				}
			check = 'HOME';
			}
//end Home

//start Help
			function isHelp () {
				$("#message_help").clone().insertBefore("#placeholder").fadeIn(2000);
				 check = 'HELP';
			}
//end Help
			
//start Location
			function isLocation () {
				$("<p>You are at " + currentLocation + "</p>").insertBefore("#placeholder").fadeIn(2000);
				console.log("Checkpoint " + beenToCheckPoint, "Castle " + beenToCastle, "Market " + beenToMarket, "Home " + beenToHome);
				 check = 'LOCATION';
			}
//end Location

//start Default
			function isDefault () {
				$("<p>I do not understand " + "'" + command + "'" + ".</p>").insertBefore("#placeholder").hide().fadeIn(2000);
				console.log("I don't know" + input);
				 check = 'default';
			}
//end Default
			
			var checks = {
				'GO TO MARKET': isMarket,
				'MARKET': isMarket,
				'GO MARKET': isMarket,
				'GO TO CASTLE': isCastle,
				'CASTLE': isCastle,
				'GO CASTLE': isCastle,
				'FIGHT': isFight,
				'BRIBE': isBribe,
				'HOME': isHome,
				'SMUGGLE': isSmuggle,
				'KNIFE': isKnife,
				'WAIT': isWait,
				'SELL CROPS': isSellCrops,
				//helper and default values:
				'HELP': isHelp,
				'LOCATION': isLocation,
				'default': isDefault,
			};
			//console.log(checks[command]);
			 (checks[command] || checks['default']) () ;

		}//end function checkInput



console.log("input:" + input);
//checkInput(input);
var check = checkInput(input);
console.log('check: ' + check);
$("#command_line").val("");
	
    	}); // end submit function
    }//end if counter
  });//end character sumbmit function
});//end .ready