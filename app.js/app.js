const theme = document.querySelectorAll('.theme')

theme.forEach((item) => {
    item.addEventListener('click', (event) => {
        console.log(event.target.id);
        document.body.classList.remove("verdantTheme", "salmonTheme", "redTheme", "resetTheme");
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

//variable

$animate = $('.animate')

 $(span).on('keypress', function(e) {
     if(e.which == 13){
         $($animate).toggleClass('animate');
     }
 })