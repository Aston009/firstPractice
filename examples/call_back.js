function learnJS(lang, callback) {
    console.log('I learn ' + lang);
    callback();
}

learnJS('Javascript', function() {
    console.log('3-d lesson');
})

function done () {
    console.log('3-d lesson');
}

learnJS('Javascript', done);