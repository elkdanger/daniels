(function($) {


$("#mybutton").click(function() {
 var name=$("#name").val()
 var password=$("#password").val()
 var surname=$("#surname").val()
 var form=$("#form")
 if(name.length==0) {
     form.append("<p>please enter your name</p>")
$("#name").addClass("error")
 } else{
     form.append("<p>hello "+name+" "+surname+"</p>")
     $("#name").removeClass("error")
 }
 if(password.length <10) {
    form.append("<p>sorry you must put in least 10 digit characters</p>")
 }
})


})(jQuery)