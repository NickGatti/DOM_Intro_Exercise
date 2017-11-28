console.log( "Javascript is alive!" );

greeting = document.querySelector( '#greeting' )

greeting.innerHTML = 'Hello, World!'

let newImg = document.createElement( 'img' )
newImg.src = 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif'

greeting.appendChild( newImg )

let listItems = document.querySelectorAll( 'li' )

for ( let i = 0; i < listItems.length; i++ ) {
    listItems[ i ].style.backgroundColor = 'yellow'
    listItems[ i ].addEventListener( 'click', ( ( event ) => {
        listItems[ i ].className = 'selected'
        for ( let z = 0; z < listItems.length; z++ ) {
            if ( z !== i ) listItems[ z ].className = ''
        }
    } ) )
}