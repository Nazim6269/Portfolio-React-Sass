class CategoryLocal {
  setLocal(key, category) {
    localStorage.setItem(key, JSON.stringify(category));
  }

  getLocal(key) {
    const json = localStorage.getItem(key);
    return JSON.parse(json);
  }
}

const categoryLocal = new CategoryLocal();
export default categoryLocal;
