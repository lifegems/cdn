var DB = (function DB() {
   console.log("test 2");
   var service = {
      Conn: Conn
   };
   
   var self = this;

   function Conn(strBaseURL, strAPIKey) {
      var ConnService = {
         get: get
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
      
      return ConnService;
   };

   return service;
})();
