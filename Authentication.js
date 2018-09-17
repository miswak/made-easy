const apiHost ='https://sws.spontly.com/mobileapi';

export default {
  async getCategories() {
    try { //GET
      const response = await fetch(apiHost +'/content/categories?token=eceede17f50442d284ed1a6b4a20b2f53918a928');
      const responseJson = await response.json();
      return responseJson;
    } catch(error) {
        console.error(`Error is : ${error}`)
    }
  },
  async fetchCategoryDetail(catId) {
    try { //GET
      const response = await fetch(apiHost +'/content?token=eceede17f50442d284ed1a6b4a20b2f53918a928&page=0&catid='+ catId);
      const responseJson = await response.json();
      return responseJson;
    } catch(error) {
        console.error(`Error is : ${error}`)
    }
  },


};
