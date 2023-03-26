
      // start open box
       $('.home-one i') .click(function(){
          let boxing=$('.options-info').offset().left //-350
          let boxWidth=$('.home-one ').offset()//0
   console.log(boxWidth)
            if(boxing==0){
              $('.options-info').css({
                left: '-350px',
                transition: 'all 1s '
              })
              $('.fa-bars').css({
                left:`5%` ,
                transition: 'all 1s '
                
            })
          }else{
            $('.options-info').css({
              left:`0`,
              transition: 'all 1s '
             
          })
          $('.fa-bars').css({
            left:`20%` ,
            transition: 'all 1s '
            
        })
          }
        })
      // end open box
        
// start section 2 
// فكرتها لما ادوس علي address معين لو مقفول افتحه
// وباقي اقفلهم كلهم
$('.addressDetails1  ').click(function(){
  $(".theDetails1").slideToggle(500);
  $(".theDetails2").slideUp(500);
  $(".theDetails3").slideUp(500);
  $(".theDetails4").slideUp(500);
})


$('.addressDetails2  ').click(function(){
  $(".theDetails2").slideToggle(500);
  $(".theDetails1").slideUp(500);
  $(".theDetails3").slideUp(500);
  $(".theDetails4").slideUp(500);
})



$('.addressDetails3  ').click(function(){
  $(".theDetails3").slideToggle(500);
  $(".theDetails1").slideUp(500);
  $(".theDetails2").slideUp(500);
  $(".theDetails4").slideUp(500);
})



$('.addressDetails4  ').click(function(){
  $(".theDetails4").slideToggle(500);
  $(".theDetails1").slideUp(500);
  $(".theDetails2").slideUp(500);
  $(".theDetails3").slideUp(500);
})
// end section 2 
  // start count
  // باخد نسخة من التاريخ اللي عايزه
var countDownDate = new Date(" April 10, 2023 12:37:52").getTime();
// setInterval عشان تشتغل معايا علطول كل ما افتح
var myfunc = setInterval(function() {
  
 


  var now = new Date().getTime();

var time = countDownDate - now;


// معادلة دي تنفع مع اي تاريخ فقط هغير التاريخ اللي عايز اوصله وهي هتظبط معايا 
var days = Math.floor(time / (1000* 60 * 60 * 24));
var hours = Math.floor((time% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

var seconds = Math.floor((time % (1000* 60)) / 360);





$('.second').html(seconds);
$('.minute').html(minutes);
$('.hour').html(hours);
$('.day').html(days);


}, 1000)
//  end count


/*textarea*/
// بمسك max
var maxLength = 100;
$('textarea').keyup(function() {
  // بمسك length اللي موجود 
  var length = $(this).val().length;
  // بطرح من max ال length
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
              // هنا بقوله لو خلص 100 حرف اعرضله كلمة دي 
                 $("#hundrad").text("your available character finished");
                
            }
        else{
        // لو مخلصش اعرضه الرقم المتاح ليه
        $("#hundrad").text(AmountLeft);
        }
});










    


  
  
  






  
     
    






////////////////////////////////////
