//variable

const theme = document.querySelectorAll('.theme')

//event

theme.forEach((item) => {
    item.addEventListener('click', (event) => {
        console.log(event.target.id);

        //reset theme

        document.body.classList.remove("verdantTheme", "salmonTheme", "redTheme", "resetTheme");

        //interupteur

        switch(event.target.id){
            case "verdant":
                document.body.classList.add("verdantTheme");
                break;
            case "salmon":
                document.body.classList.add("salmonTheme");
                break;
            case "red":
                document.body.classList.add("redTheme");
                break;
            case "reset":
                document.body.classList.add("resetTheme");
            default:
                null;
        }
    })
})

var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})