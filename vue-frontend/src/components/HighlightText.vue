<script setup>
import { ref, h } from "vue";
import { useRoute } from "vue-router";
import { getHighlightedText } from "../data/api/requests";
import { parseHighlightTextResponse } from "../data/parseResponse";


const textarea = ref('Allergies, allergies everywhere');
let items = ref();

function handleClick() {

  getHighlightedText(textarea.value)
    .then(response => {
      items.value = parseHighlightTextResponse(response);
      console.log(items);
    })
    .catch(error => {
      console.log(error);
    });
}

function handleSymptomFilter() {
  // TODO
}

</script>

<template>

  <h3>Enter your text below</h3>
  <el-input 
    v-model     = "textarea" 
    :rows       = "4" 
    type        = "textarea" 
    placeholder = "" 
    color       = "#00bd7e"
  />

  <el-row>
    <el-button 
      @click = "handleClick"
      type   = "success"
      color  = "#00bd7e" 
      plain
    >
      Highlight Away
    </el-button>
    
    <el-button
      @click = "handleSymptomFilter"
      disabled
    >
      Add filters
    </el-button>
  </el-row>

  <div/>

  <template v-for = "item in items">
    <span v-if = "!item.highlight">         {{ item.value + ' ' }} </span>
    <a    v-if = "item.highlight" href="#"> {{ item.value + ' '}}  </a>
  </template>

</template>

<style scoped>

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.2rem;
  color: var(--color-heading);
}

div {
  margin-bottom: 0.9rem;
}
</style>
