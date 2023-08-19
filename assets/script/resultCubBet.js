
var resultCubBet = cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        resultCubBet.instance = this;
    },

    start () {

    },
    cubResultShake: function (stop){
        let posx = stop.x;
        let posy = stop.y; 
        cc.tween(stop)
        .repeat(7,
            cc.tween().to(0.2,{  //color: cc.color(255,0,0,255) ,
            position: cc.v2(posx +48, posy +60),
            angle: 360,
        }, {easing: "easeOutCubic"})
                      .call(() => {  })
                      .to(0.1,{ // color: cc.color(255,255,255,255),
                        position: cc.v2(posx+80, posy+ 140),
                        angle: 360,
                    }, {easing: "easeOutCubic"})
                    .call(() => {   })
                    .to(0.1,{ //color: cc.color(255,255,255,255),
                      position: cc.v2(posx-10,posy +80 ),
                      angle: 360,
                  }, {easing: "easeOutCubic"})
                  .call(() => {  })
                    .to(0.1,{ //color: cc.color(255,255,255,255),
                      position: cc.v2(posx,posy ),
                      angle: 0
                  }, {easing: "easeOutCubic"})
        )
        .start();
    },
    cub2: function (stop){
        let posx = stop.x;
        let posy = stop.y; 
        cc.tween(stop)
        .repeat(7,
            cc.tween().to(0.2,{//  color: cc.color(255,0,0,255) ,
            position: cc.v2(posx -80, posy +140),
            rotation: 360,
        }, {easing: "easeOutCubic"})
                      .call(() => { })
                      .to(0.1,{  //color: cc.color(255,255,255,255),
                        position: cc.v2(posx-80, posy+ 140),
                        rotation: 360,
                    }, {easing: "easeOutCubic"})
                    .call(() => {  })
                    .to(0.1,{ //color: cc.color(255,255,255,255),
                      position: cc.v2(posx+10,posy + 80),
                      rotation: 360,
                  }, {easing: "easeOutCubic"})
                  .call(() => { })
                    .to(0.1,{ //color: cc.color(255,255,255,255),
                      position: cc.v2(posx,posy ),
                      rotation: 0
                  }, {easing: "easeOutCubic"})
        )
        .start();
    },
    // update (dt) {},
});
