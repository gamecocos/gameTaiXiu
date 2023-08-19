// var AudioManager = require('audio-manager');

cc.Class({
    extends: cc.Component,

    properties: {
        // playbgSound:{
        //     default:null,
        //     type:cc.AudioClip
        // }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
      //  AudioManager.instance.playbgSound();
    },
    loadUI: function() {
        cc.director.loadScene('GameScence');
    }

    // update (dt) {},
});
