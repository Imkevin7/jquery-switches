function turn(event) {
        event.preventDefault();
        $(this).addClass('bg');
        var number = +$(this).closest('.box').find('p').text();
        var par = $(this).closest('.box').find('p');
        par.css('fontSize', '1.5em');
        switch (number) {
            case 1:
                par.text('one');
                break;
            case 2:
                par.text('two');
                break;
            case 3:
                par.text('three');
                break;
            case 4:
                par.text('four');
                break;
            case 5:
                par.text('five');
                break;
            case 6:
                par.text('six');
                break;
            case 7:
                par.text('seven');
                break;
            case 8:
                par.text('eight');
                break;
            case 9:
                par.text('nine');
                break;
            case 10:
                par.text('ten');
                break;
            case 11:
                par.text('eleven');
                break;
            case 12:
                par.text('twelve');
                break;
        }

    }

function reset() {
        location.reload();
    }