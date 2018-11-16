var vm = new Vue({
  el:'#app',
  data: {
    mostrar: false,
    show: false,
    errors: [],
    categ: null,
    borrador: '',
    new_tarea: null,
    tareas: [
      {
        nombre: 'Lavar ropa',
        status: false,
        edit: false
      },
      {
        nombre: 'Cocinar',
        status: false,
        edit: false
      },
      {
        nombre: 'Alimentar al gato',
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
    createCateg: function() {
      if (this.categ === null || this.categ === '') {
        this.errors.push('Nombre categoria required.');
      }
      this.tareas.push({
        nombre: this.categ,
        status: false
      });
      this.categ = '';
    },
    createTarea: function() {
      if (this.new_tarea === null || this.new_tarea === '') {
        this.errors.push('Nueva tarea required.');
      } else {
        this.tareas.push({
          nombre: this.new_tarea,
          status: false,
          edit: false
        });
        this.new_tarea = '';
      }
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
    },
    regrPendientes: function () {
      this.tarea.status == false;
    },
    checkForm: function (e) {
      if (this.categ && this.new_tarea) {
        return true;
        createCateg();
        createTarea();
      }

      this.errors = [];

      if (!this.categ) {
        this.errors.push('Nombre categoria required.');
      }
      if (!this.new_tarea) {
        this.errors.push('Nueva tarea required.');
      }

      e.preventDefault();
    }
  }
})
