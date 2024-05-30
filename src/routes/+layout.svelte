<script>
  import favoriteArticlesStore from "$lib/stores/favoriteArticlesStore.svelte.js";
</script>

<div class="layout">
  <div class="content">content...</div>
</div>

<style>
  .layout {
    height: 100vh;
    width: 100%;
    color: whitesmoke;
    background-color: darkslategray;
    display: flex;
    justify-content: center;
  }

  .content {
    font-size: 20px;
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 50px 32px 32px 32px;
  }
</style>
