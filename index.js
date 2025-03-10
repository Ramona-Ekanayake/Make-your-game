
class Player {
    constructor(){
        this.position = {
            x: 20,
            y: 600
        }
        this.width = 50
        this.height = 50
        this.velocity = {
            x: 10,
            y: 10
        }
    }
    draw() {
        const playerDiv = document.createElement('div')
        playerDiv.setAttribute("id", "mainPlayer")
        playerDiv.style.backgroundColor = "red"
        
        
        
        playerDiv.style.position = "absolute"; // Ensure the div is positioned
        playerDiv.style.left = this.position.x + "px";
        playerDiv.style.top = this.position.y + "px";
        playerDiv.style.width = this.width + "px";
        playerDiv.style.height = this.height + "px";

        document.body.appendChild(playerDiv)
    }

    updateYPosition() {
        this.position.y += this.velocity.y
        this.draw()
    }
}

 const player = new Player()
 player.draw()


 const animiate = () => {
    
 }
 requestAnimationFrame(animiate)

 const platformImageWidth = 580
 const platformImageHeight = 125
class Platform {
    constructor({x, y}){
        this.position = {
            x,
            y
        }
        
        this.width = platformImageWidth
        this.height = platformImageHeight
     }
    
   draw() {
        let platformDiv = document.createElement('div')
        platformDiv.setAttribute("id", "platform")
        platformDiv.style.position = "absolute"; 
        platformDiv.style.left = this.position.x + "px";
        platformDiv.style.top = this.position.y + "px";
        platformDiv.style.width = this.width + "px";
        platformDiv.style.height = this.height + "px";
        platformDiv.style.backgroundImage = `url(image/platform.png})`;
        platformDiv.style.backgroundSize = 'cover';
        document.body.appendChild(platformDiv)
    }
}

    const platforms = Platform[new Platform({x:platformImageWidth-3, y: 475}),
         new Platform({x: platformImageWidth*2 +100, y: 475})];
     
   
    platforms.forEach((platform) => {
        platform.draw()
    }
    )
   

    platforms.forEach((platform) => {
        platform.draw()
   
// Check for vertical collision between player and platform
if (
    player.position.y + player.height <= platform.position.y &&   // Player's bottom is above platform
    player.position.y + player.height + player.velocity.y > platform.position.y &&  // Player is falling or moving downward
    player.position.x + player.width > platform.position.x &&   // Player's right side is within platform's left side
    player.position.x < platform.position.x + platform.width    // Player's left side is within platform's right side
) {
    // Collision detected: Player is landing on top of the platform
    player.velocity.y = 0;  // Stop falling
}
});

