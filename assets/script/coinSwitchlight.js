
var coinLight = cc.Class({
    extends: cc.Component,

    properties: {
      
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        coinLight.instance = this;
    },
    coinLight:function(coinArray,coin4,defaultSprCoin4){
        coinArray[3].opacity = 0;
        let stop = cc.instantiate(coin4[1]);
        stop.setPosition(coinArray[3].position);
        this.node.addChild(stop);
        coinArray[3] = stop;
        coinArray[3].setPosition(defaultSprCoin4);
    },
    coinSwitchLight:function(coinArray,coin5,defaultSprCoin5){
        coinArray[4].opacity = 0;
        let stop = cc.instantiate(coin5[1]);
        stop.setPosition(coinArray[4].position);
        this.node.addChild(stop);
        coinArray[4] = stop;
        coinArray[4].setPosition(defaultSprCoin5);
    },
    coinLightSwitch:function(coinArray,coin6,defaultSprCoin6){
        coinArray[5].opacity = 0;
        let stop = cc.instantiate(coin6[1]);
        stop.setPosition(coinArray[5].position);
        this.node.addChild(stop);
        coinArray[5] = stop;
        coinArray[5].setPosition(defaultSprCoin6);
    },
    start () {

    },

    // update (dt) {},
});
