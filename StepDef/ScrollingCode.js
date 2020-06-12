//Scroll the to spesified y cordinate
window.scrollTo(0,6000)
//Scroll to bottom of the page
window.scrollTo(0,document.body.scrollHeight)
//Scroll to view the elements
document.getElementById("test").scrollIntoView(true) 
ele.scrollIntoView(true)
// or in protractor 
// browser.executeScript("args[0].scrollIntoView(true)", Element)

//Lazy Scroll code handler
var initialScroll=document.body.scrollHeight
while(true){
    window.scrollTo(0,document.body.scrollHeight)
    var currentScroll=document.body.scrollHeight
    if(initialScroll==currentScroll){
        break;
    }
    initialScroll=currentScroll
}