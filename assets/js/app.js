var toDo = new Vue({
  el:'#to-do',
  data: {
    mostrar: false
  },
  methods: {
    cambiarMostrar: function() {
      this.mostrar = !this.mostrar
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

Vue.component ('cath-pendiente', {
  props: {
    nombre: String,
    pendientes: [
      {
        nombre: String,
        status: false
      }
    ],
    status: false
  },
  template: `
      <div>
        <strong> {{name}} </strong>
        <div>{{pendientes.name}}</div>
      </div>
    `
})
