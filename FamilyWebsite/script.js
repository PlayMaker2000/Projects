// Coded by Xavier Vang
// Dev10 Enhanced Higher-Lower Assessment
// 2/11/2023

function openFamily(lastName) {
    var i;
    var x = document.getElementsByClassName("lname");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(lastName).style.display = "block";
  }

  function openPerson(firstName) {
    var i;
    var x = document.getElementsByClassName("fname");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(firstName).style.display = "block";
  }

  function openRelationship(relationship) {
    var i;
    var x = document.getElementsByClassName("rship");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(relationship).style.display = "block";
  }



