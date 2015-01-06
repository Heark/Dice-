

setFont( 'Comic Sans', 32, 'italic' )

// Below I'm creating the players & the enemies bases
$playerimage = new Image( 'opp.png' )
$bg = new Image( 'road.png' )
// Below i'm creating movement
    class player
        def new( X, Y )
             @X = 5
             @Y = 5
        end
        getset(@X)
        getset(@Y)
    end
$Player = new player(5, 5)
def drawPlayer()
    drawImage( $playerimage, $Player.getY(), $Player.getY() )
end
console( $Player.getx() )
// Drawing the background
def drawBackground()
    drawImage( $bg, 00, 00 )
end
// Drawing Movement
def movePlayer()
if getControls().isKeyDown( :d )
    $Player.setX( $Player.getX() + 1 )
end
end
onEachFrame() do
    drawBackground()
    showFPS()
    movePlayer()
    drawPlayer()
end



