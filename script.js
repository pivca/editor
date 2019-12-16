$(document).ready(function(){
    
var brojRedova=1;
PrvoGenerisanje();








function GenerisanjeRedova(n,koriguj){
    
    for (let index = brojRedova+1; index <n+brojRedova+1;index++) {

        var strP="<p class=\""+index+"\">"+index+"</p>";
        $("#numbers").append(strP);
        $("#editor").append("<div id=\""+index+"\"><br></div>");
    }

    brojRedova=brojRedova +n;
    //alert(brojRedova);
    koriguj();
    
}
function PrvoGenerisanje(){
    n=100;
    for (let index = 1; index <n+brojRedova;index++) {
        var strP="<p class=\""+index+"\">"+index+"</p>";
        $("#numbers").append(strP);
        $("#editor").append("<div id=\""+index+"\"><br></div>");
    }

    brojRedova=brojRedova +n-1;
}

function KorigovanjeAdd(){
   // alert("pozvana");
    var i=1;
    $('#editor').children('div').each(function () {
        //alert(this.id); // "this" is the current element in the loop
        if(i>brojRedova){
            $(this).remove();
            

        }
        else{
            $(this).attr("id",i);
        i++;}
        
       
    });
    
}
function KorigovanjeDelete(){
    // alert("pozvana");
     var i=1,j=1;
     var numObrisanih=0;
     $('#editor').children('div').each(function () {
         //alert(this.id); // "this" is the current element in the loop
         if(i>brojRedova){
             $(this).remove();
            
             
 
         }
         else{
             $(this).attr("id",i);
             i++;
        }
         
        
        console.log(brojRedova);
        
     });
     brojRedova=i-1;

   

     $('#numbers').children('p').each(function () {
        //alert(this.id); // "this" is the current element in the loop
        if(j>brojRedova){
            $(this).remove();
            j++;

        }
        else{
            $(this).attr("class",j);
        j++;}
        
       
    });
     
   //komentar 

 }
 



//slusamo koje dugme se klikne,da ili generisemo novi red ili obrisemo
$("#editor").on('keyup', function(event) {
    
   if(event.keyCode==13){
      GenerisanjeRedova(1,KorigovanjeAdd);
   }
   else if(event.keyCode==8){
       KorigovanjeDelete();
   }
    
 });


});








