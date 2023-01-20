const affirmations = [
    'I forgive myself and set myself free.',
    'I believe I can be all that I want to be.',
    'I am in the process of becoming the best version of myself.',
    'I have the freedom & power to create the life I desire.',
    'I choose to be kind to myself and love myself unconditionally.',
    'My possibilities are endless.',
    'I am worthy of my dreams.',
    'I am enough.',
    'I deserve to be healthy and feel good.',
    'I am full of energy and vitality and my mind is calm and peaceful.',
    'Every day I am getting healthier and stronger.',
    'I honor my body by trusting the signals that it sends me.',
    'I manifest perfect health by making smart choices.'
]

const mantras = [
    'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
    'Don’t let yesterday take up too much of today.',
    'Every day is a second chance.',
    'Tell the truth and love everyone.',
    'I am free from sadness.',
    'I am enough.',
    'In the beginning it is you, in the middle it is you and in the end it is you.',
    'I love myself.',
    'I am present now.',
    'Inhale the future, exhale the past.',
    'This too shall pass.',
    'Yesterday is not today.',
    'The only constant is change.',
    'Onward and upward.',
    'I am the sky, the rest is weather.'
]

// ids

const clearBtn = document.getElementById('clear-message')
const divImg = document.getElementById('img-mediate')
const divMsg = document.getElementById('message')
const receiveBtn = document.getElementById('receive-message')
const affirmation = document.getElementById('affirmation')
const mantra = document.getElementById('mantra')

// receive affirmation or mantra

receiveBtn.onclick = () => {
    if (!affirmation.checked && !mantra.checked) {
        alert('Please select affirmation or mantra');
    }
    else if (affirmation.checked) {
        for (let i = 0; i < affirmations.length; i++) {
            let affirmationsCount = Math.floor(Math.random() * affirmations.length)
            divMsg.innerHTML = affirmations[affirmationsCount];
            divImg.style.display="none";
            clearBtn.style.display="block";
        }
    } else { 
        for (let i = 0; i < mantras.length; i++) {
            let mantrasCount = Math.floor(Math.random() * mantras.length)
            divMsg.innerHTML = mantras[mantrasCount];
            divImg.style.display="none";
            clearBtn.style.display="block";
        }
    }
}

// display image, hide clear button and message

clearBtn.onclick = () => {
    divImg.style.display = "block"
    divMsg.innerHTML = null;
    clearBtn.style.display = "none"
  }

