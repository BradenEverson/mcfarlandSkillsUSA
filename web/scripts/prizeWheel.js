$(document).ready(function(){
    document.querySelector("#spinWheel").addEventListener("click", function(){
        var min = 1024;
        var max = 9999;
    
        var deg = Math.floor(Math.random() * (min-max)) + max;
        var studentEmail = prompt("What Is Your Student Email?");
        if(studentEmail.includes("@mcfsd.org")){
            $.get("/prizeWheelDataPost",
            {"name": studentEmail},
            function(data, status){
                console.log(data);
                console.log("Added " + studentEmail + " as a student");
                document.querySelector("#box").setAttribute("style", "transform: rotate(" + deg + "deg);");
            });
        }else{
            alert("Invalid student email, must include @mcfsd.org");
            spinWheel();
        }
    });
});