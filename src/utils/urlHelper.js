export default class UrlHelper {
  static convertUrlToHttps(url) {
    return url.replace(/^http:\/\//i, 'https://');
  }
}
