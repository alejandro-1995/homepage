addEventListener("load", function() {
    $("#form").submit(function() {
      if ($("#search").val().substring(0, 3) == "-g ") {
        $(this).attr("action", "https://www.google.com.mx/search?q=search");
        $("#search").val($("#search").val().substring(3, $("#search").val().length));
      }
      else if ($("#search").val().substring(0, 3) == "-d ") {
        $(this).attr("action", "https://duckduckgo.com/?q=search");
        $("#search").val($("#search").val().substring(3, $("#search").val().length));
      }
      else $(this).attr("action", "https://www.google.com.mx/search?q=search");
      return true;
  });
});