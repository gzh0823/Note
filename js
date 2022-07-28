//防抖 定义timer
function bounce(){
  clearTimeOut(this.timer)
  this.timer=setTimeOut(()=>{
    this.search()//执行
  },500)
}

//渲染html
render: (h, params) => {
   return h('span', {
           domProps: {
              className:'***',
              innerHTML:  data
           }
      })
}

//扩展运算符半深半浅拷贝，只能深拷贝第一层
