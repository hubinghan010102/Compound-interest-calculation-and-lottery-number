// index.js
// 获取应用实例
var n1,n2,sum;
Page({
  Num1:function(e){
    n1=parseInt(e.detail.value);
  },
  Num2:function(e){
    n2=parseFloat(e.detail.value);
  },
  calc:function(){
    sum=n1;
    for(var i=1;i<=5;i++){
      sum=sum*(1+n2);
    }
    this.setData({
      sum:sum
    })
  }
})