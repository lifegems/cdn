var DB = (function() {
   var self = this;

   self.strBaseURL = "";
   self.strAPIKey  = "";

   function DB(strBaseURL, strAPIKey) {
      self.strBaseURL = strBaseURL;
      self.strAPIKey  = strAPIKey;
   }

   DB.prototype.get = function(strURI) {
      var fullurl = self.strBaseURL + strURI + "?apiKey=" + self.strAPIKey;
      return $.ajax({
         url: fullurl,
         type: "GET",
         contentType: "application/json"
      });
   }

   DB.prototype.post = function(strURI, data) {
      var fullurl = self.strBaseURL + strURI + "?apiKey=" + self.strAPIKey;
      return $.ajax({
         url: fullurl,
         data: JSON.stringify(data),
         type: "POST",
         contentType: "application/json"
      });
   }

   DB.prototype.removeItem = function(strURI, query) {
      var fullurl = self.strBaseURL + strURI + "?apiKey=" + self.strAPIKey + "&q=" + query;
      return $.ajax({
         url: fullurl,
         data: JSON.stringify([]),
         type: "PUT",
         contentType: "application/json"
      })
   }

   return DB;
})();
