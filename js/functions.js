// Selects all the preview text
function selectAll() {
  selectElementText(document.getElementById("preview"));
}

// Copies text to clipboard
function copyAll() {
  alert("Not implemented yet!");
}
  
// http://stackoverflow.com/questions/985272/jquery-selecting-text-in-an-element-akin-to-highlighting-with-your-mouse/2838358#2838358
function selectElementText(el, win) {
    win = win || window;
    var doc = win.document, sel, range;
    if (win.getSelection && doc.createRange) {
        sel = win.getSelection();
        range = doc.createRange();
        range.selectNodeContents(el);
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (doc.body.createTextRange) {
        range = doc.body.createTextRange();
        range.moveToElementText(el);
        range.select();
        range.execCommand("Copy");
    }
}
 $(document).ready(function(){
    $(".wmd-input").bind('keydown', function(e){
        var TABKEY = 9;
        if(e.keyCode == TABKEY) {
            this.value += "    ";
            if(e.preventDefault) {
                e.preventDefault();
            }
            return false;
        }
    }); 
});

function toHtml() {
OpenWindow=window.open("", "newwin", "height=842, width=750,toolbar=no,scrollbars=yes,menubar=no");
var target = document.getElementById('preview');
var wrap = document.createElement('body');
wrap.appendChild(target.cloneNode(true));
OpenWindow.document.write("<html>\
  <head>\
    <title>online markdown editor</title>\
    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
    \
    <!-- Styles -->\
    <link href=\"css/print_style.css\" rel=\"stylesheet\"></link>\
    </head>");
OpenWindow.document.write(wrap.innerHTML);
OpenWindow.document.close();
}
