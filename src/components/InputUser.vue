<template>
  <div>
    <div v-if='!loading' class='input-container'>
      <form @submit="searchUser()">
        <input v-model='input'/>
      </form>
      <div @click='searchUser()' class='button-search'>
        <SearchIcon class='logo' />
      </div>
    </div>
    <div class="loading-container" v-else>
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
    ...mapActions(['getUserWithRepos']),
    async searchUser() {
      const search = this.input;
      if (search.length > 0) {
        this.loading = true;
        await this.getUserWithRepos(search)
          .then(() => {
            this.loading = false;
            return this.$route.name !== 'User'
              ? this.$router.push('/user') : this.updateInfo();
          })
          .catch(() => {
            this.loading = false;
            this.notify('not found user :(');
          });
      } else {
        this.notify('empty field :(');
      }
    },
    updateInfo() {
      this.$emit('update-info');
    },
    notify(title) {
      return this.$swal({
        title: `<p style='font-size: 12pt; font-family: RobotoMono-Bold'>${title}</p>`,
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });
    },
  },
  watch: {
    '$store.data.notFinded': {
      handler(value) {
        return !value ? this.notify('not found user :(') : 1;
      },
    },
  },
};
</script>

<style scoped>
  input {
    width: 420px;
    height: 30px;
    border: 2px solid #000;
    display: block;
    padding-left: 10px;
    font-family: "RobotoMono-ItalicLight";
    border-radius: 0px;
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
    height: 34px;
    background-color: black;
    border-radius: 0px;
  }
  .loading {
    height: 30px;
    display: inline-block;
    animation: rotateIn;
    animation-duration: 1s; /* don't forget to set a duration! */
    animation-iteration-count: infinite;
  }

</style>
