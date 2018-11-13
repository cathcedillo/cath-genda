var toDo = new Vue({
  el:'#to-do',
  data: {
    mostrar: false,
    new_task: '',
    task: [
      {
        nombre: 'Prueba',
        status: false,
        edit: false
      }
    ]
  },
  methods: {
    cambiarMostrar: function() {
      this.mostrar = !this.mostrar
    },
    createTask: function() {
      this.tasks.push({
        nombre: this.new_task,
        status: false,
        edit: false
      });
      this.new_task = '';
    }
  }
})

var taken = new Vue({
  el:'#taken',
  data: {
    mostrar: false
  },
  methods: {
    cambiarMostrar: function() {
      this.mostrar = !this.mostrar
    }
  }
})
