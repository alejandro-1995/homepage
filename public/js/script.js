window.onload = function() {
  document.getElementById("form").onsubmit = function() {
    var form   = document.getElementById("form");
    var search = document.getElementById("search");
    var query  = search.value;

    if (query.charAt(0) != "-" || query.charAt(2) != " ") {
      form.setAttribute("action", "https://www.google.com.mx/search?q=search");
      return true;
    }

    var command = query.charAt(1);
        query   = query.substring(3, query.length);

    if (command == "u") {
      window.location.assign("https://" + query);
      return false;
    }

    if (command == "g") {
      form.setAttribute("action", "https://www.google.com.mx/search?q=search");
      search.value = query;
      return true;
    }

    alert("command not found");
    return false;
  };
};