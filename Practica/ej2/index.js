var app = new Vue({
  el: '#app',
  data: {
    seen: true,
    help: 'Fecha ' + new Date().toDateString(),
    showOtherMessage: false,
    value: '',
    todos: [
      { text: '1º Primero' },
      { text: '2º Segundo' },
      { text: '3º Tercero' },
      { text: '4º Cuarto' },
      { text: '5º Quinto' },
    ],
  },
  methods: {
    alertConsole: () => {
      console.log('Hey Alert Please');
    },
  },
});

app.seen = false;
