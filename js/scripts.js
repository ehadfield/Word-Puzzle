$(function() {
  $("#form1").submit(function(event) {
    var input = $("input#string").val();
    var arr = input.split("");
    var vowels = ["a", "e", "i", "o", "u"];

  for(var i = 0; i < arr.length; i++) {
  	if  (vowels.includes(arr[i])) {
     arr[i] = "_";
     var wordPuzzle = arr.join(" ");
     $("#wordPuzzle").text(wordPuzzle);
    }

  }




    event.preventDefault();
  });
});
