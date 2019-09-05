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