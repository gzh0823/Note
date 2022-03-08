//子组件调用父组件函数

1）直接在子组件中通过this.$parent.event来调用父组件的方法
 （父）
  <template>
    <div>
      <child></child>
    </div>
  </template>
  <script>
    import child from '~/components/dam/child';
    export default {
      components: {
        child
      },
      methods: {
        fatherMethod() {
          console.log('测试');
        }
      }
    };
  </script>
 （子）
  <template>
    <div>
      <button @click="childMethod()">点击</button>
    </div>
  </template>
  <script>
    export default {
      methods: {
        childMethod() {
          this.$parent.fatherMethod();
        }
      }
    };
  </script>
  --------------------------------
2）在子组件里用$emit向父组件触发一个事件，父组件监听这个事件
 （父）
  <template>
    <div>
      <child @fatherMethod="fatherMethod"></child>
    </div>
  </template>
  <script>
    import child from '~/components/dam/child';
    export default {
      components: {
        child
      },
      methods: {
        fatherMethod() {
          console.log('测试');
        }
      }
    };
  </script>
 （子）
  <template>
    <div>
      <button @click="childMethod()">点击</button>
    </div>
  </template>
  <script>
    export default {
      methods: {
        childMethod() {
          this.$emit('fatherMethod');
        }
      }
    };
  </script>
  -------------------------------
3）父组件把方法传入子组件中，在子组件里直接调用这个方法
 （父）
  <template>
    <div>
      <child :fatherMethod="fatherMethod"></child>
    </div>
  </template>
  <script>
    import child from '~/components/dam/child';
    export default {
      components: {
        child
      },
      methods: {
        fatherMethod() {
          console.log('测试');
        }
      }
    };
  </script>
 （子）
  <template>
    <div>
      <button @click="childMethod()">点击</button>
    </div>
  </template>
  <script>
    export default {
      props: {
        fatherMethod: {
          type: Function,
          default: null
        }
      },
      methods: {
        childMethod() {
          if (this.fatherMethod) {
            this.fatherMethod();
          }
        }
      }
    };
  </script>
  =================================================================
//父组件调用子组件函数
  
1) 通过ref直接调用子组件的方法
 （父）
  <template>
      <div>
          <Button @click="handleClick">点击调用子组件方法</Button>
          <Child ref="child"/>
      </div>
  </template>    
  <script>
  import Child from './child';

  export default {
      methods: {
          handleClick() {
                this.$refs.child.sing();
          },
      },
  }
  </script>
 （子）
  <template>
    <div>我是子组件</div>
  </template>
  <script>
  export default {
    methods: {
      sing() {
        console.log('我是子组件的方法');
      },
    },
  };
  </script>
  -------------------------------
2）通过组件的$emit、$on方法
 （父）
  <template>
      <div>
          <Button @click="handleClick">点击调用子组件方法</Button>
          <Child ref="child"/>
      </div>
  </template>    

  <script>
  import Child from './child';

  export default {
      methods: {
          handleClick() {
                 this.$refs.child.$emit("childmethod")    //子组件$on中的名字
          },
      },
  }
  </script>
 （子）
  <template>
    <div>我是子组件</div>
  </template>
  <script>
  export default {
      mounted() {
          this.$nextTick(function() {
              this.$on('childmethods', function() {
                  console.log('我是子组件方法');
              });
          });
       },
  };
  </script>
=====================================================================
  
