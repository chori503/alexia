$(document).ready(function () {
    $( "#yes" ).click(function() {
       $("#exampleModalCenter").modal('hide');
       $("#modalYes").modal('show');
      });

      $( "#no" ).click(function() {
        $("#exampleModalCenter").modal('hide');
        $("#modalNo").modal('show');
       });
});