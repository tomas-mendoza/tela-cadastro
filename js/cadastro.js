const params = new URLSearchParams(window.location.search);

if(params.size > 0) {
  for(const param of params) {
    if(param[1] && param[1] != 'null') {
      document.getElementById(param[0]).value = param[1];
    }
  }
}
