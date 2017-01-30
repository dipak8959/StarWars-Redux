export default class UrlParser {
  static getUrlParams(search) {
        let hashes = search.slice(search.indexOf('?') + 1).split('&'),
            params = {};
        hashes.map(hash => {
            let [key, val] = hash.split('=');
            params[key] = decodeURIComponent(val);
        });
        return params;
  }
}
