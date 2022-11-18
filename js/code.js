// get reference of html components
const btnPush = document.querySelector('#btn-push');
const btnDisplay = document.querySelector('#btn-display');
const edtName = document.querySelector('#name');
// array for storing names
let names = [];
// function for clearing input
function clearInput(edit){
    edit.value = '';
}
// when clicking push button
btnPush.addEventListener('click', function(e){
    if (['', ' '].includes(edtName.value)) {
        alert('Enter a value');
        return;
    }
    e.preventDefault();
    names.push(edtName.value);
    // clear the name edit
    clearInput(edtName);
});
// when clicking display button
btnDisplay.addEventListener('click', function(e){
    e.preventDefault();
    if (names.length === 0) {
        alert('There is nothing to display!');
        return
    }
    console.clear();
    console.table(names);
});
