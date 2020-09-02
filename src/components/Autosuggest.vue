<template>
  <div class="autosuggest-container">
    <vue-autosuggest
      :suggestions="[{data:['Frodo', 'Samwise', 'Gandalf', 'Galadriel', 'Faramir', 'Éowyn']}]"
      :input-props="{
        style: 'width: 420px; height: 24px; border: 2px solid #000; display: block',
      }"
      class="autosuggest"
    >
      <template slot-scope="{suggestion}">
        <span class="w-100 my-suggestion-item field">{{suggestion.item}}</span>
      </template>
    </vue-autosuggest>
    <div class="button-search">
      <SearchIcon class="logo" />
    </div>
  </div>
</template>

<script>

import { VueAutosuggest } from 'vue-autosuggest';
import SearchIcon from '../assets/img/search.svg';

export default {
  name: 'AutoSuggest',
  components: {
    VueAutosuggest,
    SearchIcon,
  },
};
</script>

<style scoped>
  .autosuggest-container {
    display: flex;
    align-items: center;
  }
  .button-search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 28px;
    background-color: black;
  }
  svg {
    fill: white !important;
    color: white !important;
    border-color: white !important;
    stroke: white !important;
    font-size: 5pt;
  }
</style>
