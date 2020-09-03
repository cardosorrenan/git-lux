<template>
  <div class="container">
    <div class="header">
      <Logo size="sm" @click.native="goToHome()" class="github" />
      <InputUser @update-info="updateInfo()" />
    </div>
    <div class="body">
      <div class="main-info">
        <img class="avatar" :src="user.avatar_url" :alt="user.html_url">
        <p class="info name">{{ user.name }}</p>
        <p class="info username">{{ user.login }}</p>
        <div class="item">
          <OrganizationIcon />
          <p class="info">{{ user.company }}</p>
        </div>
        <div class="item">
          <LocationIcon />
          <p class="info">{{ user.location }}</p>
        </div>
        <div class="item">
          <StarIcon />
          <p class="info">{{ user.login }}</p>
        </div>
        <div class="item">
          <RepositoryIcon />
          <p class="info">{{ user.public_repos }}</p>
        </div>
        <div class="item">
          <FollowersIcon />
          <p class="info">{{ user.followers }}</p>
        </div>
      </div>
      <div>
        <div class="repos" v-for="(repo, index) in repos" :key="index">
          <p class="name-repo">{{ repo.name }}</p>
          <p class="description-repo">{{ repo.description }}</p>
          <div class="item">
            <StarIcon />
            <p class="info">{{ repo.stargazers_count }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Logo from '../components/Logo.vue';
import InputUser from '../components/InputUser.vue';
import OrganizationIcon from '../assets/img/organization.svg';
import LocationIcon from '../assets/img/location.svg';
import StarIcon from '../assets/img/star.svg';
import RepositoryIcon from '../assets/img/repository.svg';
import FollowersIcon from '../assets/img/followers.svg';

export default ({
  name: 'User',
  components: {
    Logo,
    InputUser,
    OrganizationIcon,
    LocationIcon,
    StarIcon,
    RepositoryIcon,
    FollowersIcon,
  },
  data() {
    return {
      user: {},
      repos: [],
    };
  },
  created() {
    this.updateInfo();
  },
  methods: {
    updateInfo() {
      this.user = this.$store.state.user;
      if (!Object.keys(this.user).length) {
        this.$router.push('/');
      } else {
        this.repos = this.$store.state.repos;
      }
    },
    goToHome() {
      return this.$router.push('/');
    },
  },
});
</script>
<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }
  .header {
    display: flex;
    width: 90vw;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
  }
  .github {
    cursor: pointer;
  }
  .body {
    display: flex;
    flex-direction: row;
    width: 90vw;
    margin-top: 20px;
  }
  .main-info {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    width: 20vw;
  }
  .info {
    font-family: 'Rubik-Light';
    text-align: start;
  }
  .name {
    margin-top: 12px;
    font-size: 15pt;
  }
  .username {
    font-size: 12pt;
    padding-bottom: 10px;
    opacity: 0.5;
    border-bottom: 1px solid rgba(0,0,0,0.15);
  }
  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
  }
  .item p {
    margin-left: 5px;
    font-size: 11pt;
    opacity: 0.5;
  }
  .avatar {
    width: 220px;
    height: 220px;
  }
  .repos {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    width: 70vw;
    text-align: start;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.075);
  }
  .name-repo {
    font-family: 'Rubik-Light';
    font-size: 15pt;
    margin-bottom: 5px;
  }
  .description-repo {
    font-family: 'Rubik-Light';
    font-size: 12pt;
    opacity: 0.5;
    margin-left: 3px;
    margin-bottom: 5px;
  }
</style>
