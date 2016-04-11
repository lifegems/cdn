var DB = (function DB() {
   console.log("test 2");
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
