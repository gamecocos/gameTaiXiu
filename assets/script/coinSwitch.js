

var coinSwith = cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        coinSwith.instance = this;
    },
    coinBet:function(coinArray,coin1,defaultSprCoin1){
        coinArray[0].opacity = 0;
        let stop = cc.instantiate(coin1[1]);
        stop.setPosition(coinArray[0].position);
        this.node.addChild(stop);
        coinArray[0] = stop;
        coinArray[0].setPosition(defaultSprCoin1);
    },
    coinSwitch:function(coinArray,coin2,defaultSprCoin2){
        coinArray[1].opacity = 0;
        let stop = cc.instantiate(coin2[1]);
        stop.setPosition(coinArray[1].position);
        this.node.addChild(stop);
        coinArray[1] = stop;
        coinArray[1].setPosition(defaultSprCoin2);
    },
    coinBetSwitch:function(coinArray,coin3,defaultSprCoin3){
        coinArray[2].opacity = 0;
        let stop = cc.instantiate(coin3[1]);
        stop.setPosition(coinArray[2].position);
        this.node.addChild(stop);
        coinArray[2] = stop;
        coinArray[2].setPosition(defaultSprCoin3);
    },
    start () {

    },

    // update (dt) {},
});
