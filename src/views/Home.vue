<template>
  <div class="container">
    <Logo size="lg" />
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
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
  }
</style>
