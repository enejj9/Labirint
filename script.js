var c=document.getElementById('rudar').getContext('2d');

//canvas
var W=650, H=550;

//game
var gameSpeed=16;
var loopCount=0;			// v milisekundah
var gameStarted, gameOver;
var restart=false;
var time, timeLimit, min, sec, hintTime;		// v milisekundah

//maze
var mazeW, mazeH, mazeX, mazeY, mazeStartX, mazeStartY, mazeEndX, mazeEndY;
var mazePathX= [2,306,322,642,2,18,98,114,146,178,194,210,226,258,274,290,306,338,370,386,402,418,434,450,482,498,514,530,594,626,2,50,66,82,114,130,178,194,210,226,242,338,386,418,450,530,578,594,610,642,18,50,82,98,114,130,162,210,242,258,274,290,306,322,338,354,386,418,434,450,466,514,562,578,594,610,18,50,66,82,114,130,146,194,242,258,290,306,322,338,354,386,418,434,482,498,514,546,578,594,610,626,50,66,98,114,130,178,194,306,322,338,354,370,386,418,434,466,482,498,514,546,562,610,626,642,2,50,82,98,130,146,162,210,226,306,322,338,354,370,434,530,546,562,578,594,18,34,66,82,98,114,130,162,178,210,226,242,258,274,306,322,338,354,402,418,482,498,562,578,594,610,18,34,50,82,162,178,194,226,242,258,290,306,322,386,402,418,450,466,482,498,514,562,578,642,66,130,162,178,194,210,226,242,274,290,338,354,402,466,482,498,530,546,562,578,610,626,2,18,34,66,82,130,146,178,210,242,258,274,290,322,386,450,466,498,514,610,626,642,18,50,82,114,130,146,194,210,274,322,338,354,386,402,450,466,498,514,562,578,626,642,34,50,82,98,130,194,210,226,290,306,338,370,402,434,482,530,546,562,578,594,18,34,50,66,82,98,178,210,226,258,274,290,306,322,354,466,498,514,530,562,578,594,610,626,2,18,34,50,66,82,146,162,274,290,306,338,386,418,450,466,498,546,562,578,594,610,18,50,82,98,114,130,146,162,194,210,226,242,290,322,354,402,418,434,450,466,498,530,546,562,578,594,2,50,66,114,130,146,162,178,194,210,226,274,290,306,338,354,434,450,482,498,514,546,562,594,610,642,34,50,98,162,194,210,258,322,354,402,434,498,514,530,578,610,34,66,98,130,162,194,226,290,322,338,354,370,434,466,514,546,562,578,594,610,626,642,18,34,66,82,162,178,194,226,242,306,322,354,370,450,466,482,498,514,530,546,626,642,50,66,98,114,130,194,210,258,274,306,322,338,370,386,418,450,466,482,498,514,530,546,578,594,34,66,82,98,130,162,178,210,258,290,306,322,338,370,434,450,482,530,546,562,610,626,2,18,50,66,114,130,162,194,242,274,290,322,354,370,418,434,466,514,530,578,610,642,2,34,50,66,98,146,162,194,242,258,274,290,306,322,354,370,434,482,498,530,594,610,18,34,66,82,98,114,130,146,178,194,226,242,258,274,306,386,418,434,466,482,514,546,610,626,2,50,114,162,178,210,226,274,290,306,322,354,370,386,418,434,450,498,546,578,594,610,2,34,66,98,178,194,242,258,274,386,418,466,482,514,530,546,578,594,626,642,34,50,66,82,114,130,162,226,258,290,322,354,386,418,434,450,482,498,530,546,562,594,18,34,82,98,146,178,226,242,258,290,306,322,386,402,418,434,466,498,514,562,578,626,18,50,66,82,98,146,210,226,290,306,322,338,370,386,418,434,466,498,514,530,562,594,2,322,338,642,2,2,18,18,18,18,18,18,18,18,18,18,18,18,18,18,34,34,34,34,34,34,34,34,34,34,34,34,34,34,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,114,114,114,114,114,114,114,114,114,114,114,114,114,114,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,146,146,146,146,146,146,146,146,146,146,146,146,146,146,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,194,194,194,194,194,194,194,194,194,194,194,194,194,194,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,258,258,258,258,258,258,258,258,258,258,258,258,258,258,274,274,274,274,274,274,274,274,274,274,274,274,274,274,290,290,290,290,290,290,290,290,290,290,290,290,290,290,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,322,322,322,322,322,322,322,322,322,322,322,322,322,322,338,338,338,338,338,338,338,338,338,338,338,338,338,338,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,370,370,370,370,370,370,370,370,370,370,370,370,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,434,434,434,434,434,434,434,434,434,434,434,434,434,434,450,450,450,450,450,450,450,450,450,450,450,450,450,450,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,482,482,482,482,482,482,482,482,482,482,482,482,482,482,498,498,498,498,498,498,498,498,498,498,498,498,498,498,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,514,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,530,546,546,546,546,546,546,546,546,546,546,546,546,546,546,546,546,562,562,562,562,562,562,562,562,562,562,562,562,562,562,578,578,578,578,578,578,578,578,578,578,578,578,594,594,594,594,594,594,594,594,594,594,594,594,594,594,594,594,594,594,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,626,626,626,626,626,626,626,626,626,626,626,626,626,626,626,626,626,626,626,626,642,642];
var mazePathY= [2,2,2,2,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,178,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,194,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,226,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,242,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,258,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,274,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,306,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,338,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,354,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,370,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,402,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,418,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,434,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,482,482,482,482,2,482,34,82,98,114,146,210,242,258,274,354,434,450,466,482,2,18,82,98,130,162,210,226,290,306,322,386,450,466,18,34,82,98,114,146,162,178,194,210,274,290,306,322,354,386,418,466,2,50,82,98,130,146,178,226,242,274,322,354,402,418,434,466,2,18,50,130,146,162,178,194,226,242,274,370,386,418,450,466,2,34,66,82,114,130,162,178,194,242,306,370,386,418,434,466,18,82,98,146,178,242,258,274,290,338,370,450,466,482,18,34,114,130,162,178,210,258,306,322,354,370,386,418,434,466,2,50,82,114,130,178,194,258,290,322,354,370,402,434,18,66,146,162,178,194,210,226,242,258,274,290,306,338,354,402,418,466,18,34,66,82,130,146,162,178,210,274,290,306,322,354,386,402,466,482,2,18,66,82,114,162,210,274,370,386,402,418,450,482,34,66,82,98,162,194,210,226,274,306,338,354,370,418,434,466,18,34,50,114,130,146,178,242,258,274,290,306,322,354,370,434,450,466,50,82,114,130,146,194,210,226,274,290,322,338,370,386,418,466,114,226,242,258,306,338,354,370,386,402,418,434,466,482,2,18,34,82,114,146,178,194,226,274,338,370,450,482,66,82,98,114,130,146,210,226,258,306,354,370,386,434,18,34,50,66,114,146,178,194,210,242,290,306,322,370,386,402,418,434,450,466,66,114,130,178,194,210,258,290,322,338,418,450,466,482,34,50,114,130,146,162,194,242,274,290,354,402,450,466,18,66,82,98,130,146,162,194,210,226,258,274,290,306,322,354,370,386,434,482,34,82,98,162,178,226,242,290,354,370,402,466,2,18,50,98,114,130,146,162,194,210,226,258,274,290,322,386,418,450,2,18,34,50,66,114,162,178,258,290,306,322,338,434,450,466,50,66,82,98,130,146,178,274,290,306,338,354,370,402,450,482,18,82,98,130,162,194,210,226,242,258,290,306,354,386,34,50,66,82,98,146,178,194,242,290,306,402,434,482,2,18,34,50,66,82,98,114,178,210,226,242,258,274,306,354,386,450,466,482,66,82,114,130,178,194,210,258,290,306,402,418,434,450,2,18,50,66,98,114,146,194,242,274,290,338,370,402,18,34,50,66,98,114,146,178,210,226,258,274,290,306,338,354,386,434,34,50,82,98,114,130,146,178,226,242,274,290,306,370,386,418,450,466,18,66,82,130,162,178,194,226,242,258,274,290,370,386,402,482,2,34,66,114,130,146,274,354,370,402,418,450,466,482,18,50,66,98,178,226,242,258,306,370,386,402,34,50,98,114,146,162,178,194,210,226,258,274,290,322,338,434,450,466,50,82,98,114,146,162,178,226,242,258,274,306,322,338,386,434,466,482,2,18,34,50,66,114,130,146,194,258,274,290,306,338,354,370,402,434,466,482,2,482];
var mazeSolutinPathX= [314,362,362,426,426,458,458,506,506,554,554,506,506,426,426,394,394,378,378,362,362,346,346,330,330,314,314,266,266,250,250,218,218,202,202,186,186,138,138,122,122,90,90,106,106,74,74,58,58,74,74,42,42,74,74,58,58,26,26,42,42,58,58,74,74,122,122,170,170,202,202,186,186,202,202,218,218,170,170,154,154,138,138,154,154,170,170,186,186,202,202,250,250,298,298,282,282,314,314,330,330,346,346,330,330];
var mazeSolutinPathY= [10,10,26,26,10,10,26,26,10,10,74,74,90,90,122,122,138,138,170,170,154,154,170,170,186,186,202,202,234,234,250,250,202,202,186,186,122,122,138,138,90,90,58,58,42,42,58,58,74,74,106,106,154,154,170,170,186,186,202,202,218,218,234,234,250,250,266,266,282,282,298,298,314,314,330,330,426,426,410,410,442,442,458,458,474,474,458,458,442,442,474,474,442,442,458,458,474,474,458,458,442,442,474,474,482];
var mazeColor, mazeTextColorOrder, mazeTextGrd;

//player
var playerX, playerY, playerR, playerSpeed;
var playerPathX, playerPathY;
var moveDown, moveUp, moveLeft, moveRight, hintPressed, hintDraw;
var difficulty, hints;
var resultsTime = [], resultsName = [], resultsDiff = [];

var interval= init();

/** GAME LOOP **/
	function gameLoop(){
		update();
		render();
	}


/** UPDATE **/
	function update(){
		updateGameVariables();	
		updateInfoPannel();
		movePlayer();
		restrictPlayer();
		//moveplayerPath();
		
		//HINTS
		if(hintPressed && hints>0 && gameStarted)
			hintUse(0);
		else if(hintPressed && hints<=0 && gameStarted){
			var audio = new Audio('music/error.mp3');
			audio.play();
			hintPressed=false;
		}else if(hintTime>0)
			hintUse(1);
	}

		function updateGameVariables(){
			if(restart){
				clearInterval(interval);
				interval= init();
			}				
			
			if(loopCount>=1000)
				loopCount=0;
			else
				loopCount+=gameSpeed;
			
			if(gameStarted){
				time+=100/6;
			}
			
			if(playerX==mazeEndX&&playerY+playerR>=mazeEndY-3&&!gameOver)
				finishGame(0);
		}
		
		function updateInfoPannel(){
			if(timeLimit-time<0&&!gameOver){
				var audio = new Audio('music/long_beep.mp3');
				audio.play();
				finishGame(1);
			}else if(!gameOver && timeLimit-time>=0){
				sec=Math.floor(((timeLimit-time)/1000)%60);
				min=Math.floor(((timeLimit-time)/1000/60)%60);
				if(timeLimit-time<=5000 && loopCount>=1000){
					var audio = new Audio('music/beep.mp3');
					audio.play();
				}
			}
		}

		function movePlayer(){	
			if(moveDown){
				playerY+=playerSpeed;
				gameStarted=true;
			}
			if(moveUp){
				playerY-=playerSpeed;
				gameStarted=true;
			}
			if(moveRight){
				playerX+=playerSpeed;
				gameStarted=true;
			}
			if(moveLeft){
				playerX-=playerSpeed;
				gameStarted=true;
			}
		}

		function restrictPlayer(){
			for(i=0;i<mazePathX.length-1;i+=2){
				if(i>=666){
					if(playerX+playerR+playerSpeed==mazePathX[i]+mazeX&&(playerY>=mazePathY[i]+mazeY&&playerY<=mazePathY[i+1]+mazeY))			//omeji X stene
						playerX-=playerSpeed;
					else if(playerX-playerR-playerSpeed==mazePathX[i]+mazeX&&(playerY>=mazePathY[i]+mazeY&&playerY<=mazePathY[i+1]+mazeY))
						playerX+=playerSpeed;
					
					var d; // koren iz katete 1 in katete 2 => kateta 1=playerR  kateta 2=X toÄka Ärte		***Omejevanje X pokonÄne Ärte***
					if((playerX-playerR<=mazePathX[i]+mazeX && playerX+playerR>=mazePathX[i]+mazeX) && (playerY+playerR>=mazePathY[i]+mazeY && playerY+playerR<=mazePathY[i+1]+mazeY)){
						d=Math.sqrt(Math.pow(playerR,2)+Math.pow(mazePathX[i]+mazeX,2));
						if(d>playerR)
							playerY-=playerSpeed;
					}else if((playerX-playerR<=mazePathX[i]+mazeX && playerX+playerR>=mazePathX[i]+mazeX) && (playerY-playerR>=mazePathY[i]+mazeY && playerY-playerR<=mazePathY[i+1]+mazeY)){
						d=Math.sqrt(Math.pow(playerR,2)+Math.pow(mazePathX[i]+mazeX,2));
						if(d>playerR)
							playerY+=playerSpeed;
					}
				}else{
					if((playerY+playerR+playerSpeed==mazePathY[i]+mazeY&&playerX>=mazePathX[i]+mazeX&&playerX<=mazePathX[i+1]+mazeX))			//omeji Y stene
						playerY-=playerSpeed;
					else if(playerY-playerR-playerSpeed==mazePathY[i]+mazeY&&(playerX>=mazePathX[i]+mazeX&&playerX<=mazePathX[i+1]+mazeX))
						playerY+=playerSpeed;
					
					var d; // koren iz katete 1 in katete 2 => kateta 1=playerR  kateta 2=X toÄka Ärte		***Omejevanje Y preÄne Ärte***
					if((playerY-playerR<=mazePathY[i]+mazeY && playerY+playerR>=mazePathY[i]+mazeY) && (playerX+playerR>=mazePathX[i]+mazeX && playerX+playerR<=mazePathX[i+1]+mazeX)){
						d=Math.sqrt(Math.pow(playerR,2)+Math.pow(mazePathX[i]+mazeX,2));
						if(d>playerR)
							playerX-=playerSpeed;
					}else if((playerY-playerR<=mazePathY[i]+mazeY && playerY+playerR>=mazePathY[i]+mazeY) && (playerX-playerR>=mazePathX[i]+mazeX && playerX-playerR<=mazePathX[i+1]+mazeX)){
						d=Math.sqrt(Math.pow(playerR,2)+Math.pow(mazePathX[i]+mazeX,2));
						if(d>playerR)
							playerX+=playerSpeed;
					}
				}
			}
			
			if(playerX+playerR>mazeW+mazeX-4)		//omeji X os
				playerX-=playerSpeed;
			else if(playerX-playerR<mazeX+3)
				playerX+=playerSpeed;
			
			if(playerY+playerR>mazeH+mazeY+10)		//omeji Y os
					playerY-=playerSpeed;
				else if(playerY-playerR<mazeY-5)
					playerY+=playerSpeed;
		}

		/*function moveplayerPath(){
			
			//Prazni tabele poti
			if(playerPathX[playerPathX.length-1]==playerX || playerPathY[playerPathY.length-1]==playerY){
				playerPathX.pop();
				playerPathY.pop();
			}
			//if(playerPathY[playerPathY.length-1]==playerY){
			//	playerPathY.pop();
			//}
			
			//Polni tabele pot
			if(playerPathX[playerPathX.length-1]+2==playerX || playerPathX[playerPathX.length-1]-2==playerX){
				playerPathX.push(playerX);
			}
			if(playerPathY[playerPathY.length-1]+2==playerY || playerPathY[playerPathY.length-1]-2==playerY){
				playerPathY.push(playerY);
			}
		}*/
		
		function hintUse(a){
			switch(a){
				case 0:
					hints--;
					hintPressed=false;
				case 1:
					//prikaĹži namig
					if(hintTime<8){
						hintDraw=true;
						hintTime++;
					}else{
						hintTime=0;
						hintDraw=false;
					}
					
					//Odbij Äas
				break;
			}
		}
				
		function changeDifficulty(a){
			if(!gameStarted){
				switch(a){
					case 1:
						timeLimit=120000;
						hints=5;
					break;
					case 2:
						timeLimit=60000;
						hints=3;
					break;
					case 3:
						timeLimit=55000;
						hints=1;
					break;
				}
				
				difficulty=a;
			}
		}
		
		function finishGame(a){
			switch(a){
				case 0:					//Win
					sec=Math.floor(((time)/1000)%60);
					min=Math.floor(((time)/1000/60)%60);
					
					var name = prompt("Bravo, zmagal si v "+min+"m "+sec+"s!", "Janez");
					playerX+=1000;
					playerY+=1000;
					
					resultsName.push(name);
					resultsTime.push(time);
					resultsDiff.push(difficulty);
					
					//Razvrsti rezultate
					var j, tNumber, tName, tDiff;
					for (var i = 0; i < resultsTime.length-1; i++) {
						j = i;
						for (var k = i; k < resultsTime.length; k++) {
							if (resultsTime[k] < resultsTime[j])
								j = k;
						}
						tNumber = resultsTime[i];
						tName = resultsName[i];
						tDiff = resultsDiff[i];
						
						resultsTime[i] = resultsTime[j];
						resultsName[i] = resultsName[j];
						resultsDiff[i] = resultsDiff[j];
						
						resultsTime[j] = tNumber;
						resultsName[j] = tName;
						resultsDiff[j] = tDiff;
					}
					
					var endTime=0, diffi=0;
					document.getElementById("rezultati").innerHTML="";
					for(i=0;i<resultsTime.length;i++){
						endTime=resultsTime[i];
						sec=Math.floor(((endTime)/1000)%60);
						min=Math.floor(((endTime)/1000/60)%60);
						
						name=resultsName[i];
						
						diffi=resultsDiff[i];
						document.getElementById("rezultati").innerHTML=document.getElementById("rezultati").innerHTML+"</br>"+name+" "+min+"m "+sec+"s"+" "+diffi;
					}
					
					gameOver=true;
					
					window.alert("Äe Ĺželite ponovno igrati, pritistnite tipko R.");
				break;
				case 1:					//Lose
					window.alert("Äas se je iztekel, izgubil si!");
					
					playerX+=1000;
					playerY+=1000;
					
					gameOver=true;
					
					window.alert("Äe Ĺželite ponovno igrati, pritistnite tipko R.");
				break;
			}
		}
/** UPDATE **/

/** RENDER **/
	function render(){
		drawBG();
		drawInfoPanel();
		drawMaze();
		
		if(hintDraw)
			drawMazeSolution();
		
		//drawPlayerPath();
		drawPlayer();
	}

		function drawBG(){
			/*c.fillStyle='#FB1';
			c.fillRect(0, 0, W, H)*/
			
			c.clearRect(0, 0, W, H);
		}
		
		function drawInfoPanel(){
			document.getElementById("cas").innerHTML="Äas:	&nbsp "+min+"m "+sec+"s";
			document.getElementById("tezavnost").innerHTML="TeĹžavnost:	&nbsp "+difficulty;
			document.getElementById("namigi").innerHTML="Namigi:	&nbsp "+hints;
		}

		function drawPlayer(){
			c.beginPath();
			c.lineWidth=2;
			c.strokeStyle='#000';
			c.arc(playerX, playerY, playerR, 0, 2 * Math.PI);
			c.stroke();
			c.fillStyle='red';
			c.fill();
			c.closePath();
		}
		
		/*function drawPlayerPath(){
			c.beginPath();
			c.strokeStyle='#ABC';
			c.strokeWidth=14;
			for(i=0;i<playerPathX.length;i+=2){
				c.moveTo(playerPathX[i], playerPathY[i])
				c.lineTo(playerPathX[i+1], playerPathY[i+1]);
			}
			c.closePath();
			c.stroke();
		}*/

		function drawMaze(){
			c.strokeStyle = "#FC0";
			c.lineWidth = 2;
			
			for(i=0;i<mazePathX.length;i+=2){
				c.beginPath();
				c.moveTo(mazePathX[i]+mazeX,mazePathY[i]+mazeY);
				c.lineTo(mazePathX[i+1]+mazeX,mazePathY[i+1]+mazeY);
				c.stroke();
				c.closePath();
			}
			
			if(loopCount%(gameSpeed*6)==0){
				if(!gameStarted)
					mazeTextGrd=c.createLinearGradient(mazeStartX-28,mazeStartY-10,mazeStartX+20,mazeStartY-5);
				else
					mazeTextGrd=c.createLinearGradient(mazeEndX-12, mazeEndY+20,mazeEndX+32, mazeEndY+40);
				
				for(i=0;i<=1;i+=0.25){
					if(mazeTextColorOrder>3)
						mazeTextColorOrder=0;
					mazeTextGrd.addColorStop(i,mazeColor[mazeTextColorOrder])
					mazeTextColorOrder++;
				}
			}
			c.fillStyle=mazeTextGrd;
			c.font = 'bold 18pt Calibri';
			if(!gameStarted)
				c.fillText("START", mazeStartX-28, mazeStartY-10);
			else
				c.fillText("FINISH", mazeEndX-30, mazeEndY+25);
		}

		function drawMazeSolution(){
			c.strokeStyle = "#0FA";
			c.lineWidth = 2;
			
			c.beginPath();
			c.moveTo(mazeSolutinPathX[i], mazeSolutinPathY[i]);
			
			for(i=0;i<mazeSolutinPathX.length;i++){
				c.lineTo(mazeSolutinPathX[i]+mazeX,mazeSolutinPathY[i]+mazeY);
			}
			
			c.stroke();
			c.closePath();
		}
/** RENDER **/

/** INIT **/
	function init(){
		initMaze();
		initPlayer();
		initGame();
		
		return setInterval(gameLoop, gameSpeed);
	}

		function initPlayer(){
			playerX=mazeStartX;
			playerY=mazeStartY;
			playerR=6;
			playerSpeed=1;
			
			playerPathX=[playerX];
			playerPathY=[playerY];
		}

		function initMaze(){
			mazeW=645;
			mazeH=485;
			mazeX=Math.round((W-mazeW)/2);
			mazeY=Math.round((H-mazeH)/2);
			mazeStartX=314+mazeX;
			mazeStartY=2+mazeY;
			mazeEndX=mazeX+330;
			mazeEndY=mazeY+mazeH-2;
			
			mazeColor= ["yellow", "red", "blue", "green"]
			mazeTextColorOrder=0;
		}
		
		function initGame(){
			time=0;
			hintTime=0;
			changeDifficulty(1);
			gameStarted=false;
			gameOver=false;
			restart=false;
			
			hintDraw=false;
			
			moveLeft=false;
			moveUp=false;
			moveRight=false;
			moveDown=false;
		}
/** INIT **/

/** KEY LISTENERS **/
	document.onkeydown = function(e) {
		switch (e.keyCode) {
			case 37:
				moveLeft=true;
			break;
			case 65:
				moveLeft=true;
			break;
			case 38:
				moveUp=true;
			break;
			case 87:
				moveUp=true;
			break;
			case 39:
				moveRight=true;
			break;
			case 68:
				moveRight=true;
			break;
			case 40:
				moveDown=true;
			break;
			case 72:
				hintPressed=true;
			break;
			case 83:
				moveDown=true;
			break;
			case 82:
				restart=true;
			break;
		}
	};

	document.onkeyup = function(e) {
		switch (e.keyCode) {
			case 37:
				moveLeft=false;
			break;
			case 65:
				moveLeft=false;
			break;
			case 38:
				moveUp=false;
			break;
			case 87:
				moveUp=false;
			break;
			case 39:
				moveRight=false;
			break;
			case 68:
				moveRight=false;
			break;
			case 40:
				moveDown=false;
			break;
			case 83:
				moveDown=false;
			break;
		}
	};
/** KEY LISTENERS **/