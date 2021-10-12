$('#colorpickers').on('input', function () {
    $('#hexcolors').val(this.value);
});
$('#hexcolors').on('input', function () {
    $('#colorpickers').val(this.value);
});


// 2nd

$('#colorpicker').on('input', function () {
    $('#hexcolor').val(this.value);
});
$('#hexcolor').on('input', function () {
    $('#colorpicker').val(this.value);
});

// 3rd
$('#colorpicker2').on('input', function () {
    $('#hexcolor2').val(this.value);
});
$('#hexcolor2').on('input', function () {
    $('#colorpicker2').val(this.value);
});

// 4rth
$('#colorpickers1').on('input', function () {
    $('#hexcolors1').val(this.value);
});
$('#hexcolors1').on('input', function () {
    $('#colorpickers1').val(this.value);
});