new Vue({
  el: '#app',

  data() {
    return {
      tittle: '',
      time: '',
      courses: [],
    };
  },

  computed: {
    totalTime() {
      let time = 0;
      if (this.courses.length != 0) {
        this.courses.forEach((element) => {
          time += Number(element.time);
        });
      }
      return time;
    },
  },

  methods: {
    addCourser() {
      if (!this.tittle || !this.time) {
        return alert('Debe completar ambos campos');
      }
      this.courses.push({
        id: this.courses.length,
        tittle: this.tittle,
        time: this.time,
      });
      this.tittle = '';
      this.time = '';
    },
  },
});
