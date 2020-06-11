Vue.component("coinDetail", {
  props: ["coin"],
  data() {
    return {
      showPrices: false,
      value: 0,
    }
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices
    },
  },
  computed: {
    convertedValue() {
      if (!this.value) {
        return 0
      }
      return this.value / this.coin.prices
    },
  },
  template: `
  <div>
  <img v-bind:src="coin.img" v-bind:alt="coin.name" />
  <h1 v-bind:class="coin.changePercent > 10 ? 'green' : 'red'">
  {{title}}
  <span v-if="coin.changePercent > 10"> 👍</span>
  <span v-else-if="coin.changePercent == 10">😲</span>
  <span v-else>😢</span>
  <span v-on:click="toggleShowPrices"
    >Ver precio {{ showPrices ? '😲':'😞'}}</span
  >
  </h1>
  <input type="number" v-model="value" />
  <span>{{convertedValue}}</span>
  <ul v-show="showPrices">
        <li
          v-bind:class="{orange : p.value>coin.prices, red: p.value <= coin.prices}"
          v-for="(p,i) in coin.pricesWithDay"
          v-bind:key="p.day"
        >
          {{i}} {{p.day}} {{p.value}}
        </li>
      </ul>
  </div>
  `,
})
Vue.component("nameComponent", {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {},
  template: `
  <div>
    <button v-on:click="incremet">Click me</button>
    <span>{{ counter }}</span>
  </div>

`,
  methods: {
    incremet() {
      this.counter += 1
    },
  },
})
new Vue({
  el: "#app",
  data() {
    return {
      name: "Bitcoin",
      symbol: "BTC",
      img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      changePercent: 15,
      prices: 8500,
      value: 0,
      /* prices: [8400, 5545, 6645, 7848, 201, 2157, 6548], */
      color: "f4f4f4",
      pricesWithDay: [
        { day: "Lunes", value: "123" },
        { day: "Martes", value: "4321" },
        { day: "Miercoles", value: "535" },
        { day: "Jueves", value: "15252" },
        { day: "Viernes", value: "25252" },
        { day: "Sabado", value: "1616" },
        { day: "Domingo", value: "123123" },
      ],
      showPrices: false,
    }
  },
  computed: {
    title() {
      return `${this.name} - ${this.symbol}`
    },
    convertedValue() {
      if (!this.value) {
        return 0
      }
      return this.value / this.prices
    },
  },
  watch: {
    showPrices(newV, old) {
      console.log(newV, old)
    },
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices
      this.color = this.color.split("").reverse().join("")
    },
  },
})
