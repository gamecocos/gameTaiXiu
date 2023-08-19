///deifnes an helper (singleton) class to play ausio assets
var AudioManager = cc.Class({
    extends: cc.Component,

    properties: {
        //PUBLIC PROPERTIES
        //the properties below define all the audio clips that the class can play
        coinsWin: {
            default: null,
            type: cc.AudioClip
        },
        coinsInsert: {
            default: null,
            type: cc.AudioClip
        },
        diceSound: {
            default: null,
            type: cc.AudioClip
        },
        timerSound:{
            default: null,
            type: cc.AudioClip
        },
        
        bgSound: {
            default: null,
            type: cc.AudioClip
        }
    },
    //defines the static (singleton) instance
    statics: {
        instance: null
    },

    playbgSound () {
        cc.audioEngine.playMusic(this.bgSound, false);
    },
    playCoinsWin () {
        cc.audioEngine.playMusic(this.coinsWin, false);
    },
    playCoinsInsert () {
        cc.audioEngine.playEffect(this.coinsInsert, false);
    },
    playDiceSound () {
        cc.audioEngine.playEffect(this.diceSound, false);
    },
    playTimeSound () {
        cc.audioEngine.playEffect(this.timerSound, false);
    },
    playStop:function(AudioClip){
        if(!AudioClip){
            return;
        }
    },
    onLoad () {
        //init the singleton instance
        AudioManager.instance = this;
    }

});
