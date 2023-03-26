// f1: changes the text in <h1>
function f1() {
    $('#myTitle').text('New Title');
}

// f2: changes the text in <div>
function f2() {
    $('#div1').text('New Text in Div');
}

// f3: inserts some text after the text in <div>
function f3() {
    $('#div1').after('<p>New Text After Div</p>');
}

// f4: changes the title of the web page
function f4() {
    $('title').text('New Title of Page');
}

// f5: toggles between hide() and show() the text in <div>
function f5() {
    $('#div1').toggle();
}