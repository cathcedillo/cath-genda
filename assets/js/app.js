var toDo = new Vue({
  el:'#to-do',
  data: {
    mostrar: true,
    data: {
      listaVacia: 'No tienes ningún pendiente, por ahora',
      listaP: 'Tus pendientes son:'
    },
    template: '<div class="conten-lista"></div>'
  },
  methods: {
    crearEspLista: function () {

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
