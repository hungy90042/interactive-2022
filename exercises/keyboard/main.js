var noteObject = {
  a:  {
    note: "a"
  }, 

  b: {
    note: "b"
  },

  c: {
    note: "c"
  },

    d: {
    note: "d"
  },

    e: {
    note: "e"
  },

  f: {
    note: "f"
  },

  g: {
    note: "g"
  },

  h: {
    note: "h"
  },

  i: {
    note: "i"
  },

  k: {
    note: "k"
  },

  l: {
    note: "l"
  },

  m: {
    note: "m"
  },

  n: {
    note: "n"
  },

  o: {
    note: "o"
  },

  p: {
    note: "p"
  },

  r: {
    note: "r"
  },

  s: {
    note: "s"
  },

  t: {
    note: "t"
  },

  w: {
    note: "w"
  },

  y: {
    note: "y"
  },

};


$(window).keydown(function(e) {
  $(".message").text("");
  
  var key = e.key;
  console.log(key);

  var image = document.createElement("img");
  
  
  if (key in noteObject) {
    // this is a valid key (A, S, D, F, G, H, J, K, L)
    
    var actualNote = noteObject[key].note;
    console.log(actualNote);
    
    //these two lines play audio based on the key pressed 
    var audio = new Audio('assets/' + actualNote + '.wav');
    audio.play(); 

    image.src = 'assets/' + actualNote + '.jpg';
  } else {
    // this is not a valid key
    
    image.src = "assets/blank.jpg";
  
  }

  $('body').append(image);

});
