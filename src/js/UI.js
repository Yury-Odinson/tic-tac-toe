import { game } from "./declaration.js";

export function drawAlert(text) {
    const alert = document.createElement("div");
    alert.classList.add("alertWin");
    const textAlert = document.createElement("span");
    textAlert.classList.add("alertWin__text");
    textAlert.append(text);
    alert.append(textAlert);
    game.append(alert);
    return animationAlert(alert);
}

function animationAlert(block) {
    const animation = block.animate([
        {
            opacity: 0, offset: 0
        },
        {
            opacity: 1, offset: 0.3
        },
        {
            opacity: 1, offset: 0.8
        },
        {
            opacity: 0, offset: 1
        }
    ], {
        duration: 2500,
    });

    animation.onfinish = () => {
        block.remove();
    };
}
