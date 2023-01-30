<template>
  <div id="app">
    <HeaderView />
    <HomeView />
  </div>
</template>

<script>
import "./styles/global.css";
import HeaderView from "./components/HeaderView.vue";
import HomeView from "./pages/HomeView.vue";

export default {
  name: "App",
  components: {
    HeaderView,
    HomeView,
  },
};
</script>
