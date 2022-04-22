<script>
import HelloAlpha from './components/HelloAlpha.vue'
import HighlightText from './components/HighlightText.vue'

import { ElButton } from 'element-plus'
export default {
  components: { ElButton },
}

</script>

<template>

  <header>
    <img 
      alt    = "Alpha bot" 
      class  = "logo" 
      src    = "./assets/bot.svg" 
      width  = "180" 
      height = "180" 
    />

    <div class="wrapper">
      <HelloAlpha msg="Hey! I'm Alpha 👋" />
    </div>

  </header>

  <main>
    <HighlightText />    
  </main>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }



  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
