<template>
  <div class="container">
    <Logo />
    <InputUser />
  </div>
</template>
<script>

import Logo from '../components/Logo.vue';
import InputUser from '../components/InputUser.vue';

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  components: {
    Logo,
    InputUser,
  },
};
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,700;1,300&display=swap");
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
  }
</style>
