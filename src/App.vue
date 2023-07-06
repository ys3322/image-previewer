<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped lang="scss">
#app {
  height: 100vh;
}
header {
  height: var(--header-height);
  line-height: var(--header-height);
  border-bottom: 1px solid tomato;
}
main {
  height: calc(100vh - var(--header-height));
  overflow-y: auto;
  background-color: var(--normal-bg);
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  a.router-link-exact-active {
    color: var(--color-text);
  }

  a.router-link-exact-active:hover {
    background-color: transparent;
  }

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  a:first-of-type {
    border: 0;
  }
}
</style>
