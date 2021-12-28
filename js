//防抖 定义timer
function bounce(){
  clearTimeOut(this.timer)
  this.timer=setTimeOut(()=>{
    this.search()//执行
  },500)
}
