
var normalCoin = cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        normalCoin.instance = this;
    },

    start () {

    },
    coinNormalOne:function(coinArray,coin1,defaultSprCoin1){
        coinArray[0].opacity = 0;
        let stop1 = cc.instantiate(coin1[0]);
        stop1.setPosition(coinArray[0].position);
        this.node.addChild(stop1);
        coinArray[0] = stop1;
        coinArray[0].setPosition(defaultSprCoin1);  
    },
    coinNormalTwo:function(coinArray,coin2,defaultSprCoin2){     
        this.coinArray[1].opacity = 0;
        let stop1 = cc.instantiate(coin2[0]);
        stop1.setPosition(coinArray[1].position);
        this.node.addChild(stop1);
        coinArray[1] = stop1;
        coinArray[1].setPosition(defaultSprCoin2);       
    },
    coinNormalThree:function(coinArray,coin3,defaultSprCoin3){
        coinArray[2].opacity = 0;
        let stop1 = cc.instantiate(coin3[0]);
        stop1.setPosition(coinArray[2].position);
        this.node.addChild(stop1);
        coinArray[2] = stop1;
        coinArray[2].setPosition(defaultSprCoin3);
    },
    // update (dt) {},
});
