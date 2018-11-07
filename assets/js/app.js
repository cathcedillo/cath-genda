var toDo = new Vue({
  el:'#to-do',
  data: {
    mostrar: false,
    template: '<div class="conten-lista"></div>'
  },
  methods: {
    crearEspLista: function () {
      this.mostrar = !this.mostrar
    }
  }
})

 var Pendiente = {
  name: String,
  finished: false,
  lista: [
    {name: String, status:false}
  ]
}
