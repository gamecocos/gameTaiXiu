
var coinStyle = cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        coinStyle.instance =this;
    },

    start () {

    },
    styleCoinFour:function(coinArray,coin4,defaultSprCoin4){
        coinArray[3].opacity = 0;
        let stop1 = cc.instantiate(coin4[0]);
        stop1.setPosition(coinArray[3].position);
        this.node.addChild(stop1);
        coinArray[3] = stop1;
        coinArray[3].setPosition(defaultSprCoin4);
    },
    styleCoinFive:function(coinArray,coin5,defaultSprCoin5){
        coinArray[4].opacity = 0;
        let stop1 = cc.instantiate(coin5[0]);
        stop1.setPosition(coinArray[4].position);
        this.node.addChild(stop1);
        coinArray[4] = stop1;
        coinArray[4].setPosition(defaultSprCoin5);
    },
    styleCoinSix:function(coinArray,coin6,defaultSprCoin6){
        coinArray[5].opacity = 0;
        let stop1 = cc.instantiate(coin6[0]);
        stop1.setPosition(this.coinArray[5].position);
        this.node.addChild(stop1);
        coinArray[5] = stop1;
        coinArray[5].setPosition(defaultSprCoin6);
    },
    // update (dt) {},
});
