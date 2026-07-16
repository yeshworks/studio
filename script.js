
// Existing Flip Card function
function flipCard() {
  const card = document.getElementById('myCard');
  card.classList.toggle('is-flipped');
}

// 1. Open Modal
function openDiscordModal(event) {
  event.stopPropagation(); // para hindi mag-trigger ng double click action
  const modal = document.getElementById('discordModal');
  modal.classList.add('active');
}

// 2. Close Modal
function closeDiscordModal(event) {
  const modal = document.getElementById('discordModal');
  modal.classList.remove('active');
  
  // Reset key tooltip kapag sinarado ang popup
  setTimeout(() => {
    document.getElementById('copyTooltip').innerText = "Copy to clipboard";
  }, 300);
}

// 3. Auto-Copy @username to Clipboard function
function copyDiscordTag(element) {
  const usernameText = "@yesh.wrks"; // Palitan mo ng exact discord handle mo
  
  // Gamitin ang Clipboard API ng browser
  navigator.clipboard.writeText(usernameText).then(() => {
    const tooltip = document.getElementById('copyTooltip');
    tooltip.innerText = "Copied! ⊹ ˖ Ი𐑼"; // Visual feedback
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
}

function shakeJar(event, element) {
  // Pinipigilan ang double trigger (touch + click) sa mga mobile screens
  if (event.type === 'touchstart') {
    event.preventDefault();
  }

  // Kung kasalukuyan pang umuuga, huwag munang patakbuhin ulit
  if (element.classList.contains('bottle-shake')) return;
  
  // Patugtugin ang coin/sparkle sound
  const coinSound = document.getElementById('coinSound');
  coinSound.currentTime = 0;
  coinSound.play().catch(error => console.log("Sound play blocked or loading:", error));
  
  // Idagdag ang shake class para umuga ang bote
  element.classList.add('bottle-shake');
  
  // Pagkatapos ng 400ms (kapag tapos na ang ugan), ililipat na ang user sa kabilang site
  setTimeout(() => {
    element.classList.remove('bottle-shake');
    window.open("https://ko-fi.com/yeshworks", "_blank"); // Dito mo ilagay ang link mo
  }, 400);
}


// Function para sa pag-flip ng card
function flipCard() {
  const card = document.getElementById('myCard');
  const flipSound = document.getElementById('flipSound');
  
  // I-set ang volume (0.3 = 30% volume)
  flipSound.volume = 0.07; 
  
  // Patugtugin ang flip sound (ire-reset sa simula para tumunog agad kahit mabilis pindutin)
  flipSound.currentTime = 0;
  flipSound.play().catch(error => console.log("Sound play blocked or loading:", error));
  
  // I-trigger ang pag-flip ng card
  card.classList.toggle('is-flipped');
}

// Function para sa pag-shake ng jar
function shakeJar(event, element) {
  // Pinipigilan ang double trigger (touch + click) sa mga mobile screens
  if (event.type === 'touchstart') {
    event.preventDefault();
  }

  // Kung kasalukuyan pang umuuga, huwag munang patakbuhin ulit
  if (element.classList.contains('bottle-shake')) return;
  
  // Patugtugin ang coin/sparkle sound
  const coinSound = document.getElementById('coinSound');
  
  // I-set ang volume (0.3 = 30% volume)
  coinSound.volume = 0.02; 
  
  coinSound.currentTime = 0;
  coinSound.play().catch(error => console.log("Sound play blocked or loading:", error));
  
  // Idagdag ang shake class para umuga ang bote
  element.classList.add('bottle-shake');
  
  // Pagkatapos ng 400ms (kapag tapos na ang ugan), ililipat na ang user sa kabilang site
  setTimeout(() => {
    element.classList.remove('bottle-shake');
    window.open("https://ko-fi.com/yeshworks", "_blank"); 
  }, 400);
}
