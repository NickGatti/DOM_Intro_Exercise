$().ready( function () {
    console.log( "Javascript is alive!" );

    let greeting = $( '#greeting' )

    greeting.text( 'Hello World!' )

    let newImg = $( '<img src="http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif"></img>' )

    greeting.append( newImg )

    let listItems = document.querySelectorAll( 'li' )

    $( '#essentials' ).css( 'background-color', 'yellow' )

    $( 'li' ).click( function () {
        $( 'li' ).removeClass( 'selected' )
        $( this ).addClass( 'selected' )
        $( 'img:eq(1)' ).attr( 'src', './images/' + $( this ).text() + '.jpeg' )
    } )

    let ghostMe = $( '#ghosting' )

    ghostMe.on( 'mouseover', ( () => {
        ghostMe.css( 'display', 'none' )
    } ) )

    let doubleWidth = $( '#resize' )

    doubleWidth.on( 'mouseenter', ( ( e ) => {
        e.stopPropagation()
        let oldWidth = doubleWidth.width()
        let removeIt = ( () => {
            doubleWidth.css( 'width', oldWidth )
            doubleWidth.off( 'mouseout', removeIt )
        } )
        doubleWidth.css( 'width', oldWidth * 2 )
        doubleWidth.on( 'mouseout', removeIt )
    } ) )
} )