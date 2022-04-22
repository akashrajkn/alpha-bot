<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      I’m a bot, built to make the highlighting task easier for you. All hail the humans.
    </h3>
    <br>
    Try <a>online highlighting</a>!
  </div>
</template>

<style scoped>
h1 {
  font-weight: 400;
  font-size: 2.3rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
