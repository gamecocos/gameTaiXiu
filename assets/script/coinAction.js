
var coinAction = cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        coinAction.instance=this;
    },

    start () {

    },
    coinMoveForWin: function (arrayNode){
            
        for(let coinmove of arrayNode)
        {
            cc.tween(coinmove)
                .repeat(1,
                    cc.tween().to(2,{position: cc.v2(962.823,-800)})).start()
        }
    },  
    coinMoveForLoss: function (arrayNode){
            
        for(let coinmove of arrayNode)
        {
            cc.tween(coinmove)
                .repeat(1,
                    cc.tween().to(2,{position: cc.v2(962,+1800)})).start()
            // console.log("-------------- check move coin ------------");    
        }
    },
    
    
    clearCoin_Tai:function(coinmove1,defaultSprCoin1,taiNodestop,arrayTaiNode){
        let posx = this.resultBetTaiXiu(-200,200);
        let posy = this.resultBetTaiXiu(-80,80);
        coinmove1.runAction(cc.sequence(
            cc.moveTo(0.1, cc.v2(taiNodestop.x+posx,taiNodestop.y-posy)),
            cc.callFunc(() =>{
                let coin = cc.instantiate(coinmove1);
                coin.setPosition(coinmove1.position);
                this.node.addChild(coin);
                arrayTaiNode.push(coin);
                coinmove1.setPosition(defaultSprCoin1);
                // AudioManager.instance.playCoinsInsert();
            }
        )));
    },
    clearCoin_Xiu:function(coinmove1,defaultSprCoin1,xiaNodestop,arrayXuiNode){
        let posx = this.resultBetTaiXiu(-200,200);
        let posy = this.resultBetTaiXiu(-80,80);
        coinmove1.runAction(cc.sequence(
            cc.moveTo(0.1, cc.v2(xiaNodestop.x+posx,xiaNodestop.y-posy)),
            cc.callFunc(() =>{
                let coin = cc.instantiate(coinmove1);
                coin.setPosition(coinmove1.position);
                this.node.addChild(coin);
                arrayXuiNode.push(coin);
                coinmove1.setPosition(defaultSprCoin1);
            }
        )));
    },
    resultBetTaiXiu: function (min,max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    // update (dt) {},
});
