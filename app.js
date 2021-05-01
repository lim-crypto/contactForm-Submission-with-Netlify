//this is to copy the number to clipboard
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("cpnum");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  /* Copy the text inside the text field */
  document.execCommand("copy");
  console.log(1);
  document.querySelector('.fa-copy').textContent = 'copied';
  setTimeout(function () { document.querySelector('.fa-copy').textContent = ''; }, 3000);
}

document.getElementById("cpnum").addEventListener('click', myFunction);
