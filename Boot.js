var BunnyDefender = {};

BunnyDefender.Boot = function(game){}

BunnyDefender.Boot.prototype = {
    preload: function(){
        this.load.image('Preloader','images/loader_bar.png');
        this.load.image('titleimage','images/TitleImage.png');
    },
    
    create: function(){
        this.input.maxPointers = 1; // we will have only one pointer at atime no mateer a finger on screen of mobile or mouse pointer in desktop.
        this.stage.disableVisibilityChange = false;// so if while playing anyother game starts to run it will pause the game
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;// will show everything in the space and not gonna cut anything off if sized 
        this.scale.minWidth = 270 ;// minwidth assign so that on resizing limit should be there
        this.scale.minHeight = 480;
        this.scale.pageAlignHorizontally = true;// both of these options are to palce game stage at center
        this.scale.pageAlignVertically = true;
        this.scale.facePortrait = true;// to always show in portrait mode
        this.scale.setScreenSize(true);
        this.input.addPointer();
        this.stage.backgroundColor = '#171642';
        
        this.state.start('Preloader');
        
    },
}