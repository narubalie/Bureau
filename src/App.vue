<template>
  <div id="app">
    <ais-index app-id="appId" api-key="apiKey" index-name="indexName">
      <ais-search-box>
        <topNav></topNav>
        <router-view></router-view>
      </ais-search-box>
      <ais-results>
        <template slot-scope="{ result }">
          <h2>
            <a :href="result.url">
              {{ result.title }}
            </a>
          </h2>
          <p>{{ result.description }}</p>
        </template>
      </ais-results>
      <ais-pagination></ais-pagination>
    </ais-index>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    TopNav: resolve => require(['./components/organizms/1_TopNav/index.vue'], resolve)
  }
}
</script>

<style>
#app {
  font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
