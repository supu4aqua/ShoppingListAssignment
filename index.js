//Function that add an item when Add Item button is clicked
function addItem(){
$('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    const item = $(this).find('input');
    //Below code will append li item to existing ul element
    //item.val() will get the value entered in the text input field
    $('ul').append("<li><span class=\"shopping-item\">" +
    item.val() + 
    "</span><div class=\"shopping-item-controls\">" +
    "<button class=\"shopping-item-toggle\">" +
    "<span class=\"button-label\">check</span>"+
    "</button>" +
    "<button class=\"shopping-item-delete\">"+
        "<span class=\"button-label\">delete</span>"+
      "</button>"+
    "</div></li>");
    //This will clear the input field
    item.val("");
});

}

//Function that checks or unchecks an item Check button is clicked
function checkItem(){
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
      });   
}

//Function that deletes an item when Delete button is clicked
function deleteItem(){
    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
}

$(addItem);
$(checkItem);
$(deleteItem);


//TEST CODE. PLEASE IGNORE
//$(updateItem);
/*
function updateItem(){
    //$('div').on('click','button',function(event) {
        $('li').on('click', '.button-label', function(event) {
        // $(this) refers to button that was clicked
        var buttonClicked = $(this).text(); 
       // console.log(buttonClicked);
        if(buttonClicked == "check"){
            //checkItem();
            //if(($(this).closest("li").find('.shopping-item shopping-item__checked')) == true){
              //  console.log("true");
            //}
            $(this).closest("li").toggleClass
            ("shopping-item__checked");
        }
       // else{
            //deleteItem();
            //$(this).closest('li').remove();
       // }
    });
}
*/

