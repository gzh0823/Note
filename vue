//子组件调用父组件函数
直接在子组件中通过this.$parent.event来调用父组件的方法
1）父
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
  子
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
  在子组件里用$emit向父组件触发一个事件，父组件监听这个事件
2）父
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
  子
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
  父组件把方法传入子组件中，在子组件里直接调用这个方法
3）父
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
  子
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
