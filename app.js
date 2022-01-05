const helloButton = document.querySelector('.hello-button')
const errorButton = document.querySelector('.button-error')
const successButton = document.querySelector('.button-success')
const infoButton = document.querySelector('.button-info')
const optionsButton = document.querySelector('.button-options')


helloButton.addEventListener('click',()=>{
    swal("Hello World Sweet Alert JS!");
})




errorButton.addEventListener('click',()=>{
    swal({
        title: "Error",
        text: "You clicked the button!",
        icon: "error",
        button: "Ok",
    });
});



successButton.addEventListener('click',()=>{
    swal({
        title: "Success",
        text: "You clicked the button!",
        icon: "success",
        button: "Ok",
    });
});





infoButton.addEventListener('click',()=>{
    swal({
        title: "Info",
        text: "You clicked the button!",
        icon: "info",
        button: "Ok",
    });
});



optionsButton.addEventListener('click',()=>{
    swal("Are you sure you want to do this?", {
        buttons: {
            cancel: "No",
            catch:  "Yes",
        },
    }).then(value => {
         if(value) {
             swal({
                 "title": "Success",
                 "icon": "success",
                 "button": "Ok"
             });
         }
          else{
              swal({
                  "title":"Error",
                  "icon":"error",
                  "button":"Ok"
              });
        }
    })
});


