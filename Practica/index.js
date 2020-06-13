const app = new Vue({
  el: '#app',
  data() {
    return {
      seen: true,
      help: 'Fecha ' + new Date().toDateString(),
      showOtherMessage: false,
      value: '',
      todos: [
        { text: '1º Primero', name: 'Gustavo' },
        { text: '2º Segundo', name: 'Mopa' },
        { text: '3º Tercero', name: 'Jepshi' },
        { text: '4º Cuarto', name: 'Gian' },
        { text: '5º Quinto', name: 'Reptor' },
      ],
    };
  },
  //v-on
  methods: {
    alertConsole: () => {
      console.log('Hey Alert Please');
    },
  },
});

//app.seen = false;
