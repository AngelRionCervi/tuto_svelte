let favoriteArticles = $state([]);

const favoriteArticleStore = {
  get articles() {
    return favoriteArticles;
  },
  init() {
    favoriteArticles = JSON.parse(localStorage.getItem("favoriteArticles")) || [];
  },
  addToFavorite(id, title) {
    const newFavoriteArticle = { id, title };
    favoriteArticles = [newFavoriteArticle, ...favoriteArticles];
    localStorage.setItem("favoriteArticles", JSON.stringify(favoriteArticles));
  },
  removeFromFavorite(id) {
    favoriteArticles = favoriteArticles.filter((article) => article.id !== id);
    localStorage.setItem("favoriteArticles", JSON.stringify(favoriteArticles));
  },
  getFavoriteArticleById(id) {
    const favoriteArticle = favoriteArticles.find((article) => article.id === id);

    return favoriteArticle;
  },
};

export default favoriteArticleStore;























// import { writable, get } from "svelte/store";

// const { subscribe, update, set } = writable([]);

// const favoriteArticleStore = {
//   subscribe,
//   init() {
//     const favorites = JSON.parse(localStorage.getItem("favoriteArticles"));

//     set(favorites || []);
//   },
//   addToFavorite(id, title) {
//     const newFavoriteArticle = { id, title };

//     update((store) => {
//       const favoriteArticles = [newFavoriteArticle, ...store];
//       localStorage.setItem("favoriteArticles", JSON.stringify(favoriteArticles));

//       return favoriteArticles;
//     });
//   },
//   removeFromFavorite(id) {
//     update((store) => {
//       const favoriteArticles = store.filter((article) => article.id !== id);
//       localStorage.setItem("favoriteArticles", JSON.stringify(favoriteArticles));

//       return favoriteArticles;
//     });
//   },
//   getFavoriteArticleById(id) {
//     const storeValues = get(favoriteArticleStore);
//     const favoriteArticle = storeValues.find((article) => article.id === id);

//     return favoriteArticle;
//   }
// };

// export default favoriteArticleStore;
