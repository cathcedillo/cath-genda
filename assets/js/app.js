var vm = new Vue({
  el:'#app',
  data: {
    mostrar: true,
    show: true,
    borrador: '',
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
        edit: false
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
    },
    cambiarStatus: function (tarea) {
      tarea.status = !tarea.status;
    },
    editarTarea: function (tarea) {
      this.tareas.forEach(function (tarea) {
        tarea.edit = false;
      });
      this.borrador = tarea.nombre;
      tarea.edit = true;
    },
    deshacerTarea: function (tarea) {
      tarea.edit = false;
    },
    actualizarTarea: function (tarea) {
      tarea.nombre = this.borrador;
      tarea.edit = false;
    },
    eliminarTarea: function (index) {
      this.tareas.splice(index, 1);
    },
    eliminarCompletadas: function () {
      this.tareas = this.tareas.filter(function (tarea) {
        return !tarea.status;
      });
    }
  }
})
