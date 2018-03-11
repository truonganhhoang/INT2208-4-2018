function changeFollowBtnState(event) {
  this.className
  var btn = event.target;
  var str = btn.innerHTML;
  if(str.search('Followed') == -1) {
    btn.innerHTML = 'Followed';
    btn.className = 'btn btn-success ml-auto';
  }
  else {
    btn.innerHTML = 'Follow';
    btn.className = 'btn btn-outline-success ml-auto';
  } 
}

function signOut() {
  if (confirm("Sign out?")) {
    window.location.href = "1.html";
  }
}