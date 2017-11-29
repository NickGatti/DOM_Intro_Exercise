$().ready( function () {
    console.log( "Javascript is alive!" );

    let greeting = $( '#greeting' )

    greeting.text( 'Hello World!' )

    let newImg = $( '<img src="http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif"></img>' )

    greeting.append( newImg )

    let listItems = document.querySelectorAll( 'li' )

    let foodMap = {
        0: './images/milk.jpeg',
        1: './images/honey.jpeg',
        2: './images/water.jpeg',
        3: './images/wine.jpeg',
        4: './images/beer.jpeg'
    }

    $( '#essentials' ).css( 'background-color', 'yellow' )

    for ( let i = 0; i < listItems.length; i++ ) {
        listItems[ i ].addEventListener( 'click', ( ( event ) => {
            listItems[ i ].className = 'selected'
            document.querySelectorAll( 'img' )[ 1 ].src = foodMap[ i ]
            for ( let z = 0; z < listItems.length; z++ ) {
                if ( z !== i ) listItems[ z ].className = ''
            }
        } ) )
    }

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