var myScore = 85;   // আমার স্কোর
var friendScore = 75; // আমার বন্ধুর স্কোর

if (myScore > 80) {
    // যদি িআমার স্কোর ৮০-এর বেশি হয়, তাহলে বন্ধুর স্কোর চেক 
    if (friendScore > 80) {
        console.log("Go for a lunch.");
    } 
    else if (friendScore >= 60 && friendScore<80) {
        console.log("Tell your friend, good luck next time.");
    } 
    else if (friendScore >= 40 && friendScore<60) {
        console.log("Keep your friend's message unseen.");
    } 
    else {
        console.log("Block your friend.");
    }
} 
else {
    console.log("Go to home, sleep and act sad.");
}
