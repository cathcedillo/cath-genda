var vm = new Vue({
  el:'#app',
  data: {
    mostrar: true,
    show: true,
    errors: [],
    borrador: '',
    categ: null,
    new_tarea: null,
    contT: 0,
    contF: 0,
    pendientes: [
      {
        categoria: 'Hogar',
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
        ],
        status: false
      },
      {
        categoria: 'Escuela',
        tareas: [
          {
            nombre: 'Tarea matematicas',
            status: false,
            edit: false
          },
          {
            nombre: 'Limpiar mochila',
            status: false,
            edit: false
          }
        ],
        status: false
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
    checkForm: function (e) {
      if (this.categ && this.new_tarea) {
        return true;
        createCateg();
      }

      this.errors = [];

      if (!this.categ) {
        this.errors.push('Nombre categoria required.');
      }
      if (!this.new_tarea) {
        this.errors.push('Nueva tarea required.');
      }
      e.preventDefault();
    },
    createCateg: function() {
      if (this.pendientes.includes(this.categ)) {
        this.pendientes[indexOf(this.categ)].tareas.push({
            nombre: this.new_tarea,
            status: false,
            edit: false
          });
          this.new_tarea = '';
      } else {
        this.pendientes.push({
          categoria: this.categ,
          tareas: [
            {
              nombre: this.new_tarea,
              status: false,
              edit: false
            }
          ],
          status: false
        });
        this.categ = '';
        this.new_tarea = '';
      }
    },
    cambiarStatus: function (tarea) {
      tarea.status = !tarea.status;
    },
    editarTarea: function (indx,tarea) {
      this.pendientes[indx].tareas.forEach(function (tarea) {
        tarea.edit = false;
      });
      this.borrador = tarea.nombre;
      tarea.edit = true;
    },
    actualizarTarea: function (tarea) {
      tarea.nombre = this.borrador;
      tarea.edit = false;
      this.borrador = '';
    },
    deshacerTarea: function (tarea) {
      tarea.edit = false;
    },
    eliminarTarea: function (indx,index) {
      this.pendientes[indx].tareas.splice(index, 1);
    },
    statusTareas: function (indx) {
      this.pendientes[indx].tareas.forEach(function (tarea) {
        if (tarea.status === false) {
          return true;
        }
      });
    }
  }
})
