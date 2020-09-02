<template>
  <div>
    <div v-if='!loading' class='input-container'>
      <input v-model='input' />
      <div @click='searchUser()' class='button-search'>
        <SearchIcon class='logo' />
      </div>
    </div>
    <div class="" v-else>
      <LoadingIcon class="loading animate__animated"/>
    </div>
  </div>
</template>
<script>

import { mapActions } from 'vuex';
import SearchIcon from '../assets/img/search.svg';
import LoadingIcon from '../assets/img/loading.svg';
import 'animate.css';

export default {
  name: 'InputUser',
  components: {
    SearchIcon,
    LoadingIcon,
  },
  data() {
    return {
      loading: false,
      input: '',
    };
  },
  methods: {
    ...mapActions(['getUsers']),
    async searchUser() {
      this.loading = true;
      const search = this.input;
      await this.getUsers(search).then(() => {
        this.loading = false;
        return this.$store.state.notFound
          ? this.$router.push('/user')
          : this.notFoundUser();
      });
    },
    notFoundUser() {
      return this.$swal({
        icon: 'question',
        title: '<p style="font-size: 10pt; font-weight: 300">not found user :(</p>',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });
    },
  },
};
</script>

<style scoped>
  input {
    width: 420px;
    height: 24px;
    border: 2px solid #000;
    display: block;
  }
  .input-container {
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
  .loading {
    display: inline-block;
    animation: rotateIn;
     /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s; /* don't forget to set a duration! */
    animation-iteration-count: infinite;
  }
  /* svg {
    fill: white !important;
    color: white !important;
    border-color: white !important;
    stroke: white !important;
    font-size: 5pt;
  } */
</style>
