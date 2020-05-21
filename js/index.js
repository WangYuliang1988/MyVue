// Every Vue application starts by creating a new Vue instance with the Vue function.
// We often use the variable vm (short for ViewModel) to refer to our Vue instance.
var vm = new Vue({
  el: '#vm',
  // When a Vue instance is created, it adds all the properties found in its data object to Vue's reactivity system.
  // It should be noted that if you use Object.freeze(), it will prevent existing properties from being changed, which also means the reactivity system cannot track changes.
  data: {
    text: 'hi',
    num: 0,
    condition: false,
    array: [],
    error: null
  },
  // Each Vue instance runs functions called lifecycle hooks, giving users the opportunity to add their own code at specific stages.
  created: function () {
    // 'this' point to the vm instance
    console.log(this + ' created')
  },
  mounted: function () {
    console.log(this + ' mounted')
  },
  updated: function () {
    console.log(this + ' updated')
  },
  destroyed: function () {
    console.log(this + ' destroyed')
  }
})

// In addition to data properties, Vue instances expose a number of useful instance properties and methods.
// These are prefixed with '$' to differentiate them from user-defined properties. For example: 
console.log("vm.$el === document.getElementById('vm') is " + (vm.$el === document.getElementById('vm')))

var declarative = new Vue({
  el: "#declarative",
  data: {
    message: 'Hello, Vue!'
  }
});

var directive = new Vue({
  el: '#directive',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

var condition = new Vue({
  el: '#condition',
  data: {
    show: true
  }
});

var loop = new Vue({
  el: '#loop',
  data: {
    arr: [
      { text: 'JavaScript' },
      { text: 'Vue' }
    ]
  }
});

var event = new Vue({
  el: '#event',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverse: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

var twoWay = new Vue({
  el: '#two-way',
  data: {
    message: 'Hello Vue!'
  }
});

// 定义一个动态组件
Vue.component('todo', {
  props: ['thing'],
  template: '<li>{{ thing.text }}</li>'
})

var component = new Vue({
  el: "#component",
  data: {
    array: [
      {id: 0, text: 'Eat some bread.'},
      {id: 1, text: 'Drink some wine.'}
    ]
  }
});