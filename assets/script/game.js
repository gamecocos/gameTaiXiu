var coinAction = require('coinAction')
    , shakeCub   = require('shakeCub')
    , coinSwitch = require('coinSwitch')
    , coinLight  = require('coinSwitchlight')
    , resultCubBet = require('resultCubBet')
    , normalCoin = require('normalCoin')
    , coinStyle  = require('coinStyle')
    , CryptoJS =  require('CryptoJS')
    , Sound = require('SoundMN');
    // , AudioManager = require('audio-manager');

cc.Class({
    extends: cc.Component,

    properties: {

        musicSound:[Sound],
        sfxSound:[Sound],
        musicSource:{
            default:null,
            type:cc.AudioSource
        },
        sfxSource:{
            default:null,
            type:cc.AudioSource
        },

        musicSlider:{
            default:null,
            type: cc.Slider
        },
        sfxSlider:{
            default:null,
            type: cc.Slider
        },
        setting:{
            default: null,
            type:cc.Node
        },






        coin1:{
            default:[],
            type: [cc.Prefab]
        },
        coin2:{
            default:[],
            type: [cc.Prefab]
        },
        coin3:{
            default:[],
            type: [cc.Prefab]
        },
        coin4:{
            default:[],
            type: [cc.Prefab]
        },
        coin5:{
            default:[],
            type: [cc.Prefab]
        },
        coin6:{
            default:[],
            type: [cc.Prefab]
        },
        coinArray:{
            default:[],
            type: [cc.Node]
        },
        coinmoveArray:{
            default:[],
            type:[cc.Node]
        },
        //------------------
        valuecoin1:{
            default:true,
            visible: false,
            type:cc.Boolean
        },
        valuecoin2:{
            default:true,
            visible: false,
            type:cc.Boolean
        },
        valuecoin3:{
            default:true,
            visible: false,
            type:cc.Boolean
        },
        valuecoin4:{
            default:true,
            visible: false,
            type:cc.Boolean
        },
        valuecoin5:{
            default:true,
            visible: false,
            type:cc.Boolean
        },
        valuecoin6:{
            default:true,
            visible: false,
            type:cc.Boolean
        },
        taiNode:{
            default: null,
            type: cc.Node
        },
        xiaNode:{
            default:null,
            type: cc.Node
        },
        taiNodestop:{
            default: null,
            type: cc.Node
        },
        xiaNodestop:{
            default:null,
            type: cc.Node
        },
        //----------------------
        arrayTaiNode:{
            default:[],
            visible:false,
            type: [cc.Node]
        },
        arrayXuiNode:{
            default:[],
            visible:false,
            type: [cc.Node]
        },
        //----------------------------
        valuecretedite:{
            default:0,
            type:cc.Integer
        },
        creditLabel:{
            default:null,
            type: cc.Label
        },
        taiLabel:{
            default:null,
            type: cc.Label
        },
        xiuLabel:{
            default:null,
            type: cc.Label
        },
        taivalue:{
            default:0,
            visible:false,
            type:cc.Integer
        },
        xiuvalue:{
            default:0,
            visible:false,
            type:cc.Integer
        },
        cubArray:{
            default:[],
            type:[cc.Node]
        },   
        timeLabel:{
            default:null,
            type: cc.Label
        },
        timecount:{
            default:0,
            visible: false,
            type: cc.Integer
        },
        stopscub:{
            default:[],
            type:[cc.Prefab]
        },
        totalValuesDice:{
            default:0,
            visible:false,
            type:cc.Integer

        },
        valueWin:{
            default:null,
            visible:false,
            type:cc.Integer
        },
        labelWin:{
            default:null,
            type:cc.Label
        },
        refnode:{
            default:null,
            type:cc.Node
        },
        exitnode:{
            default:null,
            type:cc.Node
        },
        Nodetaiwin:{
            default:null,
            type:cc.Node
        },
        NodeXiuwin:{
            default:null,
            type:cc.Node
        },
        TaiGlow: {
            default:null,
            type: cc.Animation
        },
        XiuGlow: {
            default:null,
            type: cc.Animation
        },








        
        copy:{
            default:null,
            type: cc.Node
        },
        md5Label:{
            default:null,
            type: cc.Label
        },










    },
    statics:{       
        defaultSprCoin1: null,
        defaultSprCoin2: null,
        defaultSprCoin3: null,
        defaultSprCoin4: null,
        defaultSprCoin5: null,
        defaultSprCoin6: null,
    },
    onLoad () {
        this.md5Label.string = CryptoJS.MD5("TAIXIUMD5");
        this.copy.on(cc.Node.EventType.TOUCH_START, this.copyMD5, this);
        this.PlayMusic("Music");
        this.allButtonFun();
        this.timeToBet();
    },
    timeToBet:function(){
        this.timecount = 20;
        this.schedule(function(){
            this.valueWin=0;
            if(this.timecount > 0 ){
                    this.PlaySFX("Time");
                    this.timeLabel.string = ""+this.timecount;
                    this.labelWin.string = this.valueWin+"K";
                    // AudioManager.instance.playTimeSound();
                }
                if(this.timecount ==-1){
                    this.cubArray[0].opacity = 0;
                    this.cubArray[1].opacity = 0;
                    this.cubArray[2].opacity = 0;
                    this.timeLabel.string = "GO";
                   
                    this.cub();
                }
                if(this.timecount < 0 && this.timecount > -5){
                    //  AudioManager.instance.playDiceSound(); 
                    this.PlaySFX("Dice");
                }
                if(this.timecount == -7){
                    this.totalfun();
                    this.moveCoin();
                    
                    // 
                    this.cubArray[0].opacity = 255;
                    this.cubArray[1].opacity = 255;
                    this.cubArray[2].opacity = 255;
                   //shakeCub.instance.clearArrayCoin();
                }
                if(this.timecount == -10 ){
                    this.NodeXiuwin.opacity=0;
                    this.Nodetaiwin.opacity=0;
                    shakeCub.instance.clearArrayCoin(this.arrayTaiNode,this.arrayXuiNode);
                    this.timecount = 20;
                }
                
                this.timecount--;

        },1);
    },
    totalfun:function(){
        if(this.totalValuesDice <=10){
            this.PlaySFX("Win");
            this.TaiGlow.play("winAnim");
            this.NodeXiuwin.opacity=255;
            this.Nodetaiwin.opacity=0;
            this.valueWin = this.xiuvalue *2;
            this.valuecretedite = this.valuecretedite +this.valueWin;
            this.labelWin.string = this.valueWin+"K";
            this.creditLabel.string = this.valuecretedite+"K";
            coinAction.instance.coinMoveForWin(this.arrayXuiNode);
            coinAction.instance.coinMoveForLoss(this.arrayTaiNode);
        }
        else{
                this.PlaySFX("Win");
                this.XiuGlow.play("winAnim");
                this.Nodetaiwin.opacity=255;
                this.NodeXiuwin.opacity=0;
                this.valueWin = this.taivalue *2;
                this.valuecretedite = this.valuecretedite +this.valueWin;
                this.labelWin.string = this.valueWin+"K";
                this.creditLabel.string = this.valuecretedite+"K";
                coinAction.instance.coinMoveForLoss(this.arrayXuiNode);
                coinAction.instance.coinMoveForWin(this.arrayTaiNode);         
            }
    },
//---------------------------------------------------------------
    coin1function: function(){

        if (this.valuecoin1 ==true) {
            this.PlaySFX("Tap");
           shakeCub.instance.betCoinSwitch(this.coinArray[0], this.coin1, this.defaultSprCoin1);
        }
    },
    coin2function: function(){

        if (this.valuecoin2 ==true) {
            this.PlaySFX("Tap");
            shakeCub.instance.betCoinSwitch(this.coinArray[1], this.coin2, this.defaultSprCoin2);          
        } 
    },
    coin3function: function(){

        if (this.valuecoin3 ==true) {
            this.PlaySFX("Tap");
            shakeCub.instance.betCoinSwitch(this.coinArray[2], this.coin3, this.defaultSprCoin3); 
        }
    },
    coin4function: function(){

        if (this.valuecoin4 ==true) {
            this.PlaySFX("Tap");
            shakeCub.instance.betCoinSwitch(this.coinArray[3], this.coin4, this.defaultSprCoin4);          
        } 
    },
    coin5function: function(){

        if (this.valuecoin5 ==true) {
            this.PlaySFX("Tap");
            shakeCub.instance.betCoinSwitch(this.coinArray[4], this.coin5, this.defaultSprCoin5); 
        }
    },
    coin6function: function(){

        if (this.valuecoin6 ==true) {
            this.PlaySFX("Tap");
            shakeCub.instance.betCoinSwitch(this.coinArray[5], this.coin6, this.defaultSprCoin6);        
        } 
    },
    
//---------------------------------------------------------------
    coin1Bet:function(){
        if (this.valuecoin1 ==true) {
            coinSwitch.instance.coinBet(this.coinArray,this.coin1,this.defaultSprCoin1);
             this.valuecoin1=false;
             this.valuecoin2 =true;
             this.valuecoin3 =true;
             this.valuecoin4 =true;
             this.valuecoin5 =true;
             this.valuecoin6 =true;
             this.coin2function();
             this.coin3function();
             this.coin4function();
             this.coin5function();
             this.coin6function();          
         } else {    
            normalCoin.instance.coinNormalOne(this.coinArray,this.coin1,this.defaultSprCoin1);
             this.valuecoin1=true;
         }
     },
    coin2Bet: function(){
        if (this.valuecoin2 ==true) {
            coinSwitch.instance.coinSwitch(this.coinArray,this.coin2,this.defaultSprCoin2);
            this.valuecoin2=false;
            this.valuecoin1=true;
            this.valuecoin3=true;
            this.valuecoin4=true;
            this.valuecoin5=true;
            this.valuecoin6=true;
            this.coin1function();
            this.coin3function();
            this.coin4function();
            this.coin5function();
            this.coin6function();
            
        } else {
            this.valuecoin2=true;
            normalCoin.instance.coinNormalTwo(this.coinArray,this.coin2,this.defaultSprCoin2)
        }
        
    },
    coin3Bet: function(){
        if (this.valuecoin3 ==true) {
            coinSwitch.instance.coinBetSwitch(this.coinArray,this.coin3,this.defaultSprCoin3);
            this.valuecoin3=false;
            this.valuecoin1=true;
            this.valuecoin2=true;
            this.valuecoin4=true;
            this.valuecoin5=true;
            this.valuecoin6=true;
            this.coin1function();
            this.coin2function();
            this.coin4function();
            this.coin5function();
            this.coin6function();
            
        } else {
            normalCoin.instance.coinNormalThree(this.coinArray,this.coin3,this.defaultSprCoin3)
            this.valuecoin3=true;
        }
    },
    coin4Bet: function(){
        if (this.valuecoin4 ==true) {
            coinLight.instance.coinLight(this.coinArray,this.coin4,this.defaultSprCoin4);
            this.valuecoin4=false;
            this.valuecoin1=true;
            this.valuecoin2=true;
            this.valuecoin3=true;
            this.valuecoin5=true;
            this.valuecoin6=true;
            this.coin1function();
            this.coin2function();
            this.coin3function();
            this.coin5function();
            this.coin6function();
            
        } else {
            coinStyle.instance.styleCoinFour(this.coinArray,this.coin4,this.defaultSprCoin4)
            this.valuecoin4=true;
        }
    },
    coin5Bet: function(){
        if (this.valuecoin5 ==true) {
            coinLight.instance.coinSwitchLight(this.coinArray,this.coin5,this.defaultSprCoin5);
            
            this.valuecoin5=false;
            this.valuecoin1=true;
            this.valuecoin2=true;
            this.valuecoin3=true;
            this.valuecoin4=true;
            this.valuecoin6=true;
            this.coin1function();
            this.coin2function();
            this.coin3function();
            this.coin4function();
            this.coin6function();
            
        } else {
            coinStyle.instance.styleCoinFive(this.coinArray,this.coin5,this.defaultSprCoin5)
            this.valuecoin5=true;
        }
    },
    coin6Bet: function(){
        if (this.valuecoin6 ==true) {
            coinLight.instance.coinLightSwitch(this.coinArray,this.coin6,this.defaultSprCoin6)
            this.valuecoin6=false;
            this.valuecoin1=true;
            this.valuecoin2=true;
            this.valuecoin3=true;
            this.valuecoin4=true;
            this.valuecoin5=true;
            this.coin1function();
            this.coin2function();
            this.coin3function();
            this.coin4function();
            this.coin5function();
        } else {
            coinStyle.instance.styleCoinSix(this.coinArray,this.coin6,this.defaultSprCoin6)
            this.valuecoin6=true;
        }
    }, 
    allButtonFun:function(){
        this.buttonanimation(this.taiNode);
        this.buttonanimation(this.xiaNode);
        this.buttonanimation(this.refnode);
        this.buttonanimation(this.exitnode);

        this.buttonanimation(this.coinArray[0]);
        this.buttonanimation(this.coinArray[1]);
        this.buttonanimation(this.coinArray[2]);
        this.buttonanimation(this.coinArray[3]);
        this.buttonanimation(this.coinArray[4]);
        this.buttonanimation(this.coinArray[5]);

        this.defaultSprCoin1 = this.coinArray[0].position;
        this.defaultSprCoin2 = this.coinArray[1].position;
        this.defaultSprCoin3 = this.coinArray[2].position;
        this.defaultSprCoin4 = this.coinArray[3].position;
        this.defaultSprCoin5 = this.coinArray[4].position;
        this.defaultSprCoin6 = this.coinArray[5].position;

        this.coinArray[0].on(cc.Node.EventType.TOUCH_START, this.coin1Bet,this);
        this.coinArray[1].on(cc.Node.EventType.TOUCH_START, this.coin2Bet,this);
        this.coinArray[2].on(cc.Node.EventType.TOUCH_START, this.coin3Bet,this);
        this.coinArray[3].on(cc.Node.EventType.TOUCH_START, this.coin4Bet,this);
        this.coinArray[4].on(cc.Node.EventType.TOUCH_START, this.coin5Bet,this);
        this.coinArray[5].on(cc.Node.EventType.TOUCH_START, this.coin6Bet,this);

        this.taiNode.on(cc.Node.EventType.TOUCH_START, this.Tai,this);
        this.xiaNode.on(cc.Node.EventType.TOUCH_START, this.Xiu,this);
        this.exitnode.on(cc.Node.EventType.TOUCH_START, this.exitFun,this);
        this.refnode.on(cc.Node.EventType.TOUCH_START, this.refreshScence,this);
    },
    Tai: function(){
        
            if(this.timecount <= 0) return;  
            if(this.valuecoin1 ==false)
            {
                // AudioManager.instance.playCoinsInsert();
                this.PlaySFX("Insert");
                if(this.valuecretedite >= 1){
                    coinAction.instance.clearCoin_Tai(this.coinmoveArray[0],this.defaultSprCoin1,this.taiNodestop,this.arrayTaiNode);
                    this.valuecretedite -=1;
                    this.taivalue+=1;
                    this.taiLabel.string = ""+this.taivalue+"K";
                    this.creditLabel.string = this.valuecretedite+"K";
                } 
            }
            if(this.valuecoin2 ==false)
            {
                if(this.valuecretedite >= 5){
                    // AudioManager.instance.playCoinsInsert();
                    this.PlaySFX("Insert");
                    coinAction.instance.clearCoin_Tai(this.coinmoveArray[1],this.defaultSprCoin2,this.taiNodestop,this.arrayTaiNode);
                    this.valuecretedite -=5;
                    this.taivalue+=5;
                    this.taiLabel.string = ""+this.taivalue+"K";
                    this.creditLabel.string = this.valuecretedite+"K";
                }else{

                }
            }
            if(this.valuecoin3 ==false)
            {
            if(this.valuecretedite >= 10){
                // AudioManager.instance.playCoinsInsert();
                this.PlaySFX("Insert");
                coinAction.instance.clearCoin_Tai(this.coinmoveArray[2],this.defaultSprCoin3,this.taiNodestop,this.arrayTaiNode);
                this.valuecretedite -=10;
                    this.taivalue+=10;
                    this.taiLabel.string = ""+this.taivalue+"K";
                    this.creditLabel.string = this.valuecretedite+"K";
            }
            }
            if(this.valuecoin4 ==false)
            {
                if(this.valuecretedite >= 20)
                {
                    // AudioManager.instance.playCoinsInsert();
                    this.PlaySFX("Insert");
                    coinAction.instance.clearCoin_Tai(this.coinmoveArray[3],this.defaultSprCoin4,this.taiNodestop,this.arrayTaiNode);
                    this.valuecretedite -=20;
                    this.taivalue+=20;
                    this.taiLabel.string = ""+this.taivalue+"K";
                    this.creditLabel.string = this.valuecretedite+"K";
                }
            }
            if(this.valuecoin5 ==false)
            {
                if(this.valuecretedite >= 50)
                {
                    // AudioManager.instance.playCoinsInsert();
                    this.PlaySFX("Insert");
                    coinAction.instance.clearCoin_Tai(this.coinmoveArray[4],this.defaultSprCoin5,this.taiNodestop,this.arrayTaiNode);
                    this.valuecretedite -=50;
                    this.taivalue+=50;
                    this.taiLabel.string = ""+this.taivalue+"K";
                    this.creditLabel.string = this.valuecretedite+"K";
                }
            }
            if(this.valuecoin6 ==false)
            {
                if(this.valuecretedite >= 100){
                    // AudioManager.instance.playCoinsInsert();
                    this.PlaySFX("Insert");
                    coinAction.instance.clearCoin_Tai(this.coinmoveArray[5],this.defaultSprCoin6,this.taiNodestop,this.arrayTaiNode);
                    this.valuecretedite -=100;
                    this.taivalue+=100;
                    this.taiLabel.string = ""+this.taivalue+"K";
                    this.creditLabel.string = this.valuecretedite+"K";
            }}
    },
    //----------------------------------------------------------------------------------
    Xiu: function(){
        
        if(this.timecount <= 0) return;  
        if(this.valuecoin1 ==false)
        {
            // AudioManager.instance.playCoinsInsert();
            this.PlaySFX("Insert");
            if(this.valuecretedite >= 1){
                coinAction.instance.clearCoin_Xiu(this.coinmoveArray[0],this.defaultSprCoin1,this.xiaNodestop,this.arrayXuiNode);
                this.valuecretedite -=1;
                this.xiuvalue+=1;
                this.xiuLabel.string = ""+this.xiuvalue+"K";
                this.creditLabel.string = this.valuecretedite+"K";
                console.log(" check value :  ------- : "+this.xiuvalue);
            } 
        }
        if(this.valuecoin2 ==false)
        {
            if(this.valuecretedite >= 5){
                // AudioManager.instance.playCoinsInsert();
                this.PlaySFX("Insert");
                coinAction.instance.clearCoin_Xiu(this.coinmoveArray[1],this.defaultSprCoin2,this.xiaNodestop,this.arrayXuiNode);
                this.valuecretedite -=5;
                this.xiuvalue+=5;
                this.xiuLabel.string = ""+this.xiuvalue+"K";
                this.creditLabel.string = this.valuecretedite+"K";
                console.log(" check value :  ------- : "+this.xiuvalue);
            }else{

            }
        }
        if(this.valuecoin3 ==false)
        {
           if(this.valuecretedite >= 10){
            // AudioManager.instance.playCoinsInsert();
            this.PlaySFX("Insert");
            coinAction.instance.clearCoin_Xiu(this.coinmoveArray[2],this.defaultSprCoin3,this.xiaNodestop,this.arrayXuiNode);
            this.valuecretedite -=10;
                this.xiuvalue+=10;
                this.xiuLabel.string = ""+this.xiuvalue+"K";
                this.creditLabel.string = this.valuecretedite+"K";
                console.log(" check value :  ------- : "+this.xiuvalue);
           }
        }
        if(this.valuecoin4 ==false)
        {
            if(this.valuecretedite >= 20)
            {
                // AudioManager.instance.playCoinsInsert();
                this.PlaySFX("Insert");
                coinAction.instance.clearCoin_Xiu(this.coinmoveArray[3],this.defaultSprCoin4,this.xiaNodestop,this.arrayXuiNode);
                this.valuecretedite -=20;
                this.xiuvalue+=20;
                this.xiuLabel.string = ""+this.xiuvalue+"K";
                this.creditLabel.string = this.valuecretedite+"K";
                console.log(" check value :  ------- : "+this.xiuvalue);
            }
        }
        if(this.valuecoin5 ==false)
        {
            if(this.valuecretedite >= 50)
            {
                // AudioManager.instance.playCoinsInsert();
                this.PlaySFX("Insert");
                coinAction.instance.clearCoin_Xiu(this.coinmoveArray[4],this.defaultSprCoin5,this.xiaNodestop,this.arrayXuiNode);
                this.valuecretedite -=50;
                this.xiuvalue+=50;
                this.xiuLabel.string = ""+this.xiuvalue+"K";
                this.creditLabel.string = this.valuecretedite+"K";
            }
        }
        if(this.valuecoin6 ==false)
        {
            if(this.valuecretedite >= 100){
                
                // AudioManager.instance.playCoinsInsert();
                this.PlaySFX("Insert");
                coinAction.instance.clearCoin_Xiu(this.coinmoveArray[5],this.defaultSprCoin6,this.xiaNodestop,this.arrayXuiNode);
                this.valuecretedite -=100;
                this.xiuvalue+=100;
                this.xiuLabel.string = ""+this.xiuvalue+"K";
                this.creditLabel.string = this.valuecretedite+"K";  
        }}
    },
    
    cub:function(){

        let index1 = coinAction.instance.resultBetTaiXiu(0,5);
        let index2 = coinAction.instance.resultBetTaiXiu(0,5);
        let index3 = coinAction.instance.resultBetTaiXiu(0,5);
        var stop3 = cc.instantiate(this.stopscub[index3]);
        this.node.addChild(stop3);
        stop3.setPosition(cc.v2(this.cubArray[2].position));
        this.cubArray[2] = stop3;
        shakeCub.instance.shakeCub3(this.cubArray[2]);

        var stop1 = cc.instantiate(this.stopscub[index1]);
        this.node.addChild(stop1);
        stop1.setPosition(cc.v2(this.cubArray[0].position));
        this.cubArray[0] = stop1;
        resultCubBet.instance.cubResultShake(this.cubArray[0]);

        var stop2 = cc.instantiate(this.stopscub[index2]);
        this.node.addChild(stop2);
        stop2.setPosition(cc.v2(this.cubArray[1].position));
        this.cubArray[1] = stop2;
        resultCubBet.instance.cub2(this.cubArray[1]);
        
        var valDice1 = 0;
        var valDice2 = 0;
        var valDice3 = 0;
       
        if( index1 == 0 ){
            valDice1 = 1;
        }else if( index1 == 1 ){
            valDice1 = 2;
        }else if( index1 == 2 ){
            valDice1 = 3;
        }else if( index1 == 3 ){
            valDice1 = 4;
        }else if( index1 == 4 ){
            valDice1 = 5;
        }else{
            valDice1 = 6;
        }
        if( index2 == 0 ){
            valDice2 = 1;
        }else if( index2 == 1 ){
            valDice2 = 2;
        }else if( index2 == 2 ){
            valDice2 = 3;
        }else if( index2 == 3 ){
            valDice2 = 4;
        }else if( index2 == 4 ){
            valDice2 = 5;
        }else{
            valDice2 = 6;
        }
        if( index3 == 0 ){
            valDice3 = 1;
        }else if( index3 == 1 ){
            valDice3 = 2;
        }else if( index3 == 2 ){
            valDice3 = 3;
        }else if( index3 == 3 ){
            valDice3 = 4;
        }else if( index3 == 4 ){
            valDice3 = 5;
        }else{
            valDice3 = 6;
        }
        this.totalValuesDice = valDice1+valDice2+valDice3;
        this.md5Label.string = CryptoJS.MD5(this.totalValuesDiceChar);
    },
    copyMD5: function() {
        console.log("MD5 Copy");
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            console.log("copy");
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "copyText", "(Ljava/lang/String;)V", this.md5Label.string);   
        }
    },
    moveCoin:function()
    {
        // this.PlaySFX("Collect");
        this.taivalue= 0;
        this.xiuvalue=0;
        this.taiLabel.string = "0K";
        this.xiuLabel.string = "0K";
    },
    
    buttonanimation: function(stop){
        let button = stop.addComponent(cc.Button);
        button.transition = cc.Button.Transition.SCALE;
        button.duration = 0.1;
        button.zoomScale = 1.03;
    }, 
    start () {
        this.valuecretedite =2000;
        this.creditLabel.string = this.valuecretedite+"K";
        this.coin1function();
        this.coin2function();
        this.coin3function();
        this.coin4function();
        this.coin5function();
        this.coin6function();
    },
    update (dt) {},


    back:function() {
        this.PlaySFX("Tap");
        cc.audioEngine.stopAll();
        cc.director.loadScene("load");
    },

    PlayMusic:function(name){
        let s = this.musicSound.find(s => s.n === name)
        if(s == null){
            console.log("not found")
        }else{
            this.musicSource.clip = s.clip
            this.musicSource.play();
        }
    },

    PlaySFX:function(name){
        let s = this.sfxSound.find(s => s.n === name)
        if(s == null){
            console.log("not found")
        }else{
            this.sfxSource.clip = s.clip
            this.sfxSource.play();
        }
    },

    MusicVolum:function(){
        this.musicSource.volume=this.musicSlider.progress
         if(this.musicSource.volume == 0){
            this.musicSprite.spriteFrame = this.offMusicSpriteFrame
            this.state1 = false
        }else{
            this.musicSprite.spriteFrame = this.onMusicSpriteFrame
            this.state1 = true
        }
    },

    SFXVolume:function(){
        this.sfxSource.volume = this.sfxSlider.progress
        if(this.sfxSource.volume == 0){
            this.sfxSprite.spriteFrame = this.offSFXSpriteFrame
            this.state2 = false
        }else{
            this.sfxSprite.spriteFrame = this.onSFXSpriteFrame
            this.state2 = true
        }
    },

    Show_stt() {
        this.PlaySFX("Tap");
        this.setting.setPosition(0,0)
    },

    Hide_stt() {
        this.PlaySFX("Tap");
        this.setting.setPosition(80000,932.136)
    }
});
