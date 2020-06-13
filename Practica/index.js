Vue.component('ComponentePelado', {
  template: `<h2>Groso Soy un componente pelado</h2>`,
});

Vue.component('componente2', {
  props: ['miprops'],
  template: `<p >{{miprops[0].name}}</p>`,
});

new Vue({
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
      ObjectCorrectProps: [
        {
          name: 'Genial',
        },
        {
          edad: 18,
        },
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
