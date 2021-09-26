// index.js
// 获取应用实例
var rand,sum;
function createRand(){
  rand=[];
  sum=0;
  for(var i=0;i<=6;i++){
    var r=Math.floor(Math.random()*31+1);
    rand.push(r);
  }
}
Page({
  onLoad:function(){
    createRand();
    this.setData({
      rand:rand
    })
  },
  newRand:function(){
    createRand();
    this.setData({
      rand:rand,
      sum:sum
    })
  }
})
