$(function() {
    $(".form").submit(function() {
      if ($(".search").val().substring(0, 3) == "-g ") {
        $(this).attr("action", "https://www.google.com.mx/search?q=search");
        $(".search").val($(".search").val().substring(3, $(".search").val().length));
        return true;
      }
      else if ($(".search").val().substring(0, 3) == "-u ") {
        window.location.assign("https://" + $(".search").val().substring(3, $(".search").val().length));
        return false;
      }
      else if ($(".search").val().substring(0, 3) == "-w ") {
        $(this).attr("action", "https://www.google.com.mx/search?q=search");
        $(".search").val($(".search").val().substring(3, $(".search").val().length) + " site:w3schools.com");
        return true;
      }
      else if ($(".search").val().substring(0, 3) == "-c ") {
        $(this).attr("action", "https://www.google.com.mx/search?q=search");
        $(".search").val($(".search").val().substring(3, $(".search").val().length) + " site:cplusplus.com");
        return true;
      }
      else {
        $(this).attr("action", "https://www.google.com.mx/search?q=search");
        return true;
      }
  });
});