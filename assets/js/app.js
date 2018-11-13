var vm = new Vue({
  el:'#app',
  data: {
    mostrar: true,
    show: false,
    new_tarea: '',
    tareas: [
      {
        nombre: 'Prueba',
        status: false,
        edit: false
      },
      {
        nombre: 'Prueba',
        status: false,
        edit: true
      },
      {
        nombre: 'Prueba',
        status: true,
        edit: false
      }
    ]
  },
  methods: {
    cambiarMostrar: function() {
      this.mostrar = !this.mostrar
    },
    changeShow: function() {
      this.show = !this.show
    },
    createTarea: function() {
      this.tareas.push({
        nombre: this.new_tarea,
        status: false,
        edit: false
      });
      this.new_tarea = '';
    }
  }
})
