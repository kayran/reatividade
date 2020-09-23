<template>
  <div>
    <h1>Calcule seu IMC</h1>
    <label>Seu Peso:
      <input
        autofocus
        type="number"
        step="0.1"
        @keyup="changeWeight($event.target.value)"
      >
    </label>
    <label>Sua Altura:
      <input
        type="number"
        step="0.1"
        @keyup="changeHeight($event.target.value)"
      >
    </label>
    <span>Seu IMC é: {{imc}}</span>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        weight: 0,
        height: 1,
      };
    },
    computed: {
      imc() {
        return this.weight / (this.height ** 2);
      },
    },
    methods: {
      changeWeight: function (weight) {
        this.weight = weight;
      },
      changeHeight: function (height) {
        this.height = height;
      },
    },
  };
</script>

<style>
  body {
    padding: 20px;
  }
</style>
