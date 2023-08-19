
var shakeCub = cc.Class({
    extends: cc.Component,

    properties: {
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        shakeCub.instance=this;
    },

    start () {

    },
    shakeCub3: function (stop){
    
        let posx = stop.x;
        let posy = stop.y; 
        cc.tween(stop)
        .repeat(7,
            cc.tween().to(0.2,{  //color: cc.color(255,0,0,255) ,
            position: cc.v2(posx -40, posy +120),
            rotation: 360,
        }, {easing: "easeOutCubic"})
                      .call(() => {  })
                      .to(0.1,{ // color: cc.color(255,255,255,255),
                        position: cc.v2(posx-10, posy +120),
                        rotation: 360,
                    }, {easing: "easeOutCubic"})
                    .call(() => {  })
                    .to(0.1,{// color: cc.color(255,255,255,255),
                      position: cc.v2(posx+ 24,posy +34 ),
                      rotation: 360,
                  }, {easing: "easeOutCubic"})
                  .call(() => { ; })
                    .to(0.1,{ //color: cc.color(255,255,255,255),
                      position: cc.v2(posx+40,posy+10),
                      rotation: 0
                  }, {easing: "easeOutCubic"})
                  .call(() => { })
                    .to(0.1,{ //color: cc.color(255,255,255,255),
                      position: cc.v2(posx,posy ),
                      rotation: 0
                  }, {easing: "easeOutCubic"})
        )
        .start();
    },
    betCoinSwitch: function(coinNode1,coin1,defaultSprCoin1){
        coinNode1.opacity = 0;
        let stop = cc.instantiate(coin1[0]);
        stop.setPosition(coinNode1.position);
        this.node.addChild(stop);
        coinNode1 = stop;
        coinNode1.setPosition(defaultSprCoin1);
    },
    clearArrayCoin: function (arrayTaiNode,arrayXuiNode){
        for(let coinmove of arrayTaiNode)
        {
            coinmove.destroy();
        }
        for(let coinmove of arrayXuiNode)
        {
            coinmove.destroy();  
        }
    },
    // update (dt) {},
});
