/**
 * # USAGE
 * 
 * // establish a connection
 * var conn = new DB.Conn(
 *    "https://my.api.baseurl.com",
 *    "APIKEY"
 * );
 * 
 * // run a GET request
 * conn.get("CollectionName").then(function(d) {
 *    alert(d);
 * });
 * 
 * // run a POST request
 * conn.post("CollectionName", {"_id": "01", "name": "My Test"}).then(function(d) {
 *    alert("Success!");
 * });
 */

var DB = (function DB() {
   var service = {
      Conn: Conn
   };
   
   var self = this;

   function Conn(strBaseURL, strAPIKey) {
      var ConnService = {
         get: get,
         post: post,
         removeItem: removeItem
      };
      
      self.strBaseURL = strBaseURL;
      self.strAPIKey  = strAPIKey;
      
      function get(strURI) {
         var fullurl = self.strBaseURL + strURI + "?apiKey=" + self.strAPIKey;
         return $.ajax({
            url: fullurl,
            type: "GET",
            contentType: "application/json"
         });
      }
      
      function post(strURI, data) {
         var fullurl = self.strBaseURL + strURI + "?apiKey=" + self.strAPIKey;
         return $.ajax({
            url: fullurl,
            data: JSON.stringify(data),
            type: "POST",
            contentType: "application/json"
         });
      }
      
      function removeItem(strURI, query) {
         var fullurl = self.strBaseURL + strURI + "?apiKey=" + self.strAPIKey + "&q=" + query;
         return $.ajax({
            url: fullurl,
            data: JSON.stringify([]),
            type: "PUT",
            contentType: "application/json"
         })
      }
      
      return ConnService;
   };

   return service;
})();
