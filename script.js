    document.addEventListener('DOMContentLoaded', () => {
        const drumPads = document.querySelectorAll('.drum-pad');
        const display = document.getElementById('display');
        //Adding Click Event Listeners to Drum Pads:
        drumPads.forEach(pad => {
            pad.addEventListener('click', playSound)
        })

        //The playSound function is executed when a drum pad is clicked.

        function playSound() {
        const key = this.dataset.key;
        const sound = new Audio(this.dataset.sound)
        sound.play().catch(error => console.error(error));

        display.innerText = `Sound: ${key}`
        }
        //Adding Keydown Event Listener:

        document.addEventListener('keydown', (e) => {
        const keyPressed = e.key.toUpperCase();
        const pad = document.querySelector(`.drum-pad[data-key="${keyPressed}"]`)
    
        if (pad) {
            pad.click();
        }
        });
    });
    