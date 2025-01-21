var money=800;
var age=10;
var student=true;
if (age<10) {
    console.log("Children-Free");
    
}
else if (student) {
    var discountStudent=money*50/100;
    var payable=money-discountStudent;
    console.log("payable:", payable+ "Tk");
    
}
else if (age>=60) {
    var discountSenior=money*15/100;
    var payable2=money-discountSenior;
  console.log("payable:", payable+ "Tk");

}
else{
    console.log( "payable:", money+ " Tk");
    
}