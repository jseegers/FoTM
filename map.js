
var imageA = new Image();
        var imageB = new Image();
        var imageC = new Image();
        var imageD = new Image();
        var journeyControls = new createjs.Container();
        var oldString = new String();
         function init() {
            var stage = new createjs.Stage("mapCanvas");
            stage.mouseMoveOutside = true;
            stage.name = "stage"
            stage.enableMouseOver();
            maskShape = new createjs.Shape();
            maskShape.x = maskShape.y = 0;
            maskShape.graphics.beginFill("#ff0000").drawRect(0, 0, 870, 360);
            imageUpdate("None");
            journeyControlHandler();
            var mapImageA = new createjs.Bitmap(imageA)
            mapImageA.x = -562;
            mapImageA.y = -155;
            var mapImageB = new createjs.Bitmap(imageB)
            mapImageB.x = 438;
            mapImageB.y = -155;
            var mapImageD = new createjs.Bitmap(imageD);
            mapImageD.x = -562;
            mapImageD.y = 845;
            var mapImageC = new createjs.Bitmap(imageC)
            mapImageC.x = 438;
            mapImageC.y = 845;

            var eastDir = new createjs.Bitmap("png/FotM_Map-Cardinal-E.png")
            eastDir.x = eastDir.y = 0;
            var westDir = new createjs.Bitmap("png/FotM_Map-Cardinal-W.png")
            westDir.x = 822;
            westDir.y = 300;
            var southDir = new createjs.Bitmap("png/FotM_Map-Cardinal-S.png")
            southDir.x = 822;
            southDir.y = 0;
            var northDir = new createjs.Bitmap("png/FotM_Map-Cardinal-N.png")
            northDir.x = 0;
            northDir.y = 300;

            var legendControls = new createjs.Container();
            legendControls.x = legendControls.y = 0;
            var lcShow = new createjs.Bitmap("png/FotM_Map-Legend_Show.png")
            lcShow.x = 55;
            lcShow.y = 10;
            var lcShowHover = new createjs.Bitmap("png/FotM_Map-Legend_Show-Hover.png")
            lcShowHover.x = 55;
            lcShowHover.y = 10;
            lcShowHover.alpha = 1;
            lcShowHover.visible = false;
            var lcHide = new createjs.Bitmap("png/FoTM_Map-Legend_Hide.png")
            lcHide.x = 55;
            lcHide.y = 10;
            lcHide.alpha = 0;
            var lcHideHover = new createjs.Bitmap("png/FoTM_Map-Legend_Hide-Hover.png")
            lcHideHover.x = 55;
            lcHideHover.y = 10;
            lcHideHover.alpha = 1;
            lcHideHover.visible = false;
            legendControls.addChild(lcHide, lcHideHover, lcShowHover, lcShow);
            legendControls.on("mousedown", function(evt){
              if (legendImage.alpha == 0){
                legendImage.alpha = 1;
                lcHide.alpha = 1;
                lcShow.alpha = 0;
                lcShowHover.visible = false;
                lcHideHover.visible = false;
              }
              else{
                legendImage.alpha = 0;
                lcHide.alpha = 0;
                lcShow.alpha = 1;
                lcShowHover.visible = false;
                lcHideHover.visible = false;
              }
            });
            legendControls.on("rollover", function(evt){
              if (legendImage.alpha == 0){
                lcShow.alpha = 0;
                lcShowHover.visible = true;
              }
              else{
                lcHide.alpha = 0;
                lcHideHover.visible = true;
              }
            });
            legendControls.on("rollout", function(evt){
              if (legendImage.alpha == 0){
                lcShow.alpha = 1;
                lcShowHover.visible = false;
              }
              else{
                lcHide.alpha = 1;
                lcHideHover.visible = false;
              }
            }) 
            var legendImage = new createjs.Bitmap("png/FoTM_Map-Legend_On.png")
            legendImage.x = legendImage.y = 0
            legendImage.alpha = 0;
            legendImage.on("mousedown", function(evt){
              legendImage.alpha = 0;
            });

            var dragger = new createjs.Container();
            dragger.x = dragger.y = 0;
            dragger.addChild(mapImageA, mapImageB, mapImageC, mapImageD);
            dragger.mask = maskShape;
            var nav = new createjs.Container();
            nav.x = nav.y = 0;
            nav.addChild(eastDir, westDir, southDir, northDir, journeyControls);

      var legend = new createjs.Container();
      legend.x = legend.y = 0;
      legend.addChild(legendImage)
      stage.addChild(dragger, nav, legendImage, legendControls);
      dragger.on("mousedown", function(evt){
        // this.parent.addChild(this);
        this.offset = {x:this.x-evt.stageX, y:this.y-evt.stageY};
      });
      dragger.on("pressmove", function(evt){
            
              if (evt.stageX + this.offset.x < 514 && evt.stageX + this.offset.x > -610){
                this.x = evt.stageX + this.offset.x;
              }
              if (evt.stageY + this.offset.y< 45 && evt.stageY + this.offset.y>-1585){
                  this.y = evt.stageY + this.offset.y;
              }
              stage.update();
            });
            dragger.on("pressup", function(evt){
              stage.update();
            })
            /*var array = [["baalath", -323, -654], ["pekra", 486,-1135], ["kirti", 451,-1000], ["moroth",513,-499], ["dume",464,-710], ["none",0,0]]*/
            var array = [["baalath", -480, 40], ["pekra", 480,-820], ["kirti", 325,-385], ["moroth",513,-200], ["dume",425,-350], ["none",0,0]]
       journeyControls.on("mousedown", function(evt){
        nameString = evt.target.name;
              replaceString = nameString.substring(nameString.length, nameString.length - 3)
              newString =nameString.replace(replaceString, "")
              for (var i=0; i<array.length; i++){
                if (newString == array[i][0]){
                  createjs.Tween.get(dragger).to({x:array[i][1], y:array[i][2]}, 500, createjs.Ease.linear);
                  // dragger.x = array[i][1];
                  // dragger.y = array[i][2];
                }
               };
            });
      createjs.Ticker.addEventListener("tick", stage);

        }
        function imageUpdate(name){
            imageA.src = "jpg/Naosaleyn_" + name + "_A.jpg";
            
            imageB.src = "jpg/Naosaleyn_" + name + "_B.jpg";
            
            imageC.src = "jpg/Naosaleyn_" + name + "_C.jpg";
            
            imageD.src = "jpg/Naosaleyn_" + name + "_D.jpg";
        }
        function journeyControlHandler(){
          
            var array = ["baal", "pekra", "kirti", "moroth", "dume", "none"]
            journeyControls.x = journeyControls.y = 0;
            journeyControls.name = "journeyControls"

            oldString = "none";
            var baal = new createjs.Container();
            baal.x = baal.y = 0;
            baal.name = "baalath"
            var baalOff = new createjs.Bitmap("png/FotM_Map-Journey_Menu_Baalath-Off.png")
            baalOff.name = "baalathOff"
            baalOff.x = 295;
            baalOff.y = 310; 
            var baalHover = new createjs.Bitmap("png/FotM_Map-Journey_Menu_Baalath-Hover.png")
            baalHover.x = 295;
            baalHover.y = 310;
            baalHover.name = "baalathHov"
            baalHover.visible = false; 
            var baalOn = new createjs.Bitmap("png/FotM_Map-Journey_Menu_Baalath-On.png")
            baalOn.x = 295;
            baalOn.y = 310;
            baalOn.name = "baalath_On"
            baalOn.visible = false; 
            baal.addChild(baalOff, baalHover, baalOn)


            var pekra = new createjs.Container();
            pekra.x = pekra.y = 0;
            pekra.name = "pekra"
            var pekraOff = new createjs.Bitmap("png/FotM_Map-Journey_Menu_Pekra-Off.png")
            pekraOff.name = "pekraOff"
            pekraOff.x = 390;
            pekraOff.y = 310; 
            var pekraHover = new createjs.Bitmap("png/FotM_Map-Journey_Menu_Pekra-Hover.png")
            pekraHover.x = 390;
            pekraHover.y = 310;
            pekraHover.name = "pekraHov"
            pekraHover.visible = false; 
            var pekraOn = new createjs.Bitmap("png/FotM_Map-Journey_Menu_Pekra-On.png")
            pekraOn.x = 390;
            pekraOn.y = 310;
            pekraOn.name = "pekra_On"
            pekraOn.visible = false; 
            pekra.addChild(pekraOff, pekraHover, pekraOn)

            var kirti = new createjs.Container();
            kirti.x = kirti.y = 0;
            kirti.name = "kirti"
            var kirtiOff = new createjs.Bitmap("png/FotM_Map-Journey_Menu_Kirti-Off.png")
            kirtiOff.name = "kirtiOff"
            kirtiOff.x = 470;
            kirtiOff.y = 310; 
            var kirtiHover = new createjs.Bitmap("png/FotM_Map-Journey_Menu_Kirti-Hover.png")
            kirtiHover.x = 470;
            kirtiHover.y = 310;
            kirtiHover.name = "kirtiHov"
            kirtiHover.visible = false; 
            var kirtiOn = new createjs.Bitmap("png/FotM_Map-Journey_Menu_Kirti-On.png")
            kirtiOn.x = 470;
            kirtiOn.y = 310;
            kirtiOn.name = "kirti_On"
            kirtiOn.visible = false; 
            kirti.addChild(kirtiOff, kirtiHover, kirtiOn)

            var moroth = new createjs.Container();
            moroth.x = moroth.y = 0;
            moroth.name = "moroth"
            var morothOff = new createjs.Bitmap("png/FotM_Map-Journey_Menu_Moroth-Off.png")
            morothOff.name = "morothOff"
            morothOff.x = 545;
            morothOff.y = 310; 
            var morothHover = new createjs.Bitmap("png/FotM_Map-Journey_Menu_Moroth-Hover.png")
            morothHover.x = 545;
            morothHover.y = 310;
            morothHover.name = "morothHov"
            morothHover.visible = false; 
            var morothOn = new createjs.Bitmap("png/FotM_Map-Journey_Menu_Moroth-On.png")
            morothOn.x = 545;
            morothOn.y = 310;
            morothOn.name = "moroth_On"
            morothOn.visible = false; 
            moroth.addChild(morothOff, morothHover, morothOn)

            var dume = new createjs.Container();
            dume.x = dume.y = 0;
            dume.name = "dume"
            var dumeOff = new createjs.Bitmap("png/FotM_Map-Journey_Menu_Dume-Off.png")
            dumeOff.name = "dumeOff"
            dumeOff.x = 640;
            dumeOff.y = 310; 
            var dumeHover = new createjs.Bitmap("png/FotM_Map-Journey_Menu_Dume-Hover.png")
            dumeHover.x = 640;
            dumeHover.y = 310;
            dumeHover.name = "dumeHov"
            dumeHover.visible = false; 
            var dumeOn = new createjs.Bitmap("png/FotM_Map-Journey_Menu_Dume-On.png")
            dumeOn.x = 640;
            dumeOn.y = 310;
            dumeOn.name = "dume_On"
            dumeOn.visible = false; 
            dume.addChild(dumeOff, dumeHover, dumeOn)

            var none = new createjs.Container();
            none.x = none.y = 0;
            none.name = "none"
            var noneOff = new createjs.Bitmap("png/FotM_Map-Journey_Menu_None-Off.png")
            noneOff.name = "noneOff"
            noneOff.x = 720;
            noneOff.y = 310;
            noneOff.visible = false; 
            var noneHover = new createjs.Bitmap("png/FotM_Map-Journey_Menu_None-Hover.png")
            noneHover.x = 720;
            noneHover.y = 310;
            noneHover.name = "noneHov"
            noneHover.visible = false; 
            var noneOn = new createjs.Bitmap("png/FotM_Map-Journey_Menu_None-On.png")
            noneOn.x = 720;
            noneOn.y = 310;
            noneOn.name = "none_On"
            noneOn.visible = true; 
            none.addChild(noneOff, noneHover, noneOn)

            var journey = new createjs.Bitmap("png/FotM_Map-Journey_Menu.png")
            journey.x = 105;
            journey.y = 305;
            journey.name = "journey"
            var curString = "whoo"
            journeyControls.addChild(journey, baal, pekra, kirti, moroth, dume, none)
            journeyControls.on("mousedown", function(evt){
              nameString = evt.target.name;
              if (curString != nameString){
                replaceString = nameString.substring(nameString.length, nameString.length - 3)
                newString =nameString.replace(replaceString, "")
                if (replaceString == "Off" || replaceString == "Hov"){
                  evt.currentTarget.getChildByName(oldString).getChildByName(oldString + "_On").visible = false;
                  evt.currentTarget.getChildByName(oldString).getChildByName(oldString + "Off").visible = true;
                  imageUpdate(newString);
                  evt.target.visible = false;
                  evt.target.parent.getChildByName(newString + "_On").visible = true;
                  oldString = newString;

                }
                else if(replaceString == "_On"){
                  imageUpdate("None");
                  evt.target.visible = false;
                  evt.target.parent.getChildByName(newString + "Off").visible = true;

                }
              }
              
              curString = nameString.replace("Hov", "_On")
              
            });
            journeyControls.on("mouseover", function(evt){

              nameString = evt.target.name;
              replaceString = nameString.substring(nameString.length, nameString.length - 3)
              newString =nameString.replace(replaceString, "");
              if (replaceString == "Off"){
                evt.target.visible = false;

                evt.target.parent.getChildByName(newString + "Hov").visible = true;
              }
              else {
                //nothing happens, it's already on
              }

              for (var i=0; i<journeyControls.getNumChildren(); i++){
                if (journeyControls.getChildAt(i).name != "journey" && journeyControls.getChildAt(i).name != newString){
                  turnOffString = journeyControls.getChildAt(i).name;
                  journeyControls.getChildAt(i).getChildByName(turnOffString + "Hov").visible = false;
                  journeyControls.getChildAt(i).getChildByName(turnOffString + "Off").visible = true;
                }
              }

            });
            journeyControls.on("mouseout", function(evt){
              nameString = evt.target.name;
              replaceString = nameString.substring(nameString.length, nameString.length - 3)
              newString =nameString.replace(replaceString, "")
              if (replaceString == "Hov"){
                evt.target.visible = false;
                evt.target.parent.getChildByName(newString + "Off").visible = true;
              }
            })
        }
       