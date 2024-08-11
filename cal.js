const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");
let currentAudio = null; 

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    const message = getAgeMessage(age);
    resultEl.innerText = message;
    resultEl.style.animation = "slideIn 1.5s ease-in-out"; 
    playMusic(age);
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

function getAgeMessage(age) {
  if (age < 10) {
    return `Wow, you're just ${age} years old! Enjoy your childhood! 🎉`;
  } else if (age < 18) {
    return `You're ${age} years old, teenage life is exciting! 🌟`;
  } else if (age < 30) {
    return `You're ${age} years old, the world is yours to explore! 🚀`;
  } else if (age < 50) {
    return `At ${age} years, you're in the prime of your life! 🌟`;
  } else if (age < 70) {
    return `${age} years old and still going strong! 💪`;
  } else {
    return `${age} years old, a life full of wisdom and experiences! 🧓`;
  }
}

function playMusic(age) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  let musicUrl = "";

  if (age < 10) {
    musicUrl = "Y2meta.app - BUTTERFLY Rhyme--Butterfly butterfly...by SREENIVASULU BIKKI,Kalyandurg(M),Anantapur(D),A.P. (128 kbps).mp3"; // Replace with the actual file URL
  } else if (age < 18) {
    musicUrl = "Padhoge Likhoge (MS Dhoni Ringtone).mp3"; 
  } else if (age < 30) {
    musicUrl = "daarupeeke_bFG6rg4H.mp3"; 
  } else if (age < 50) {
    musicUrl = "Mujhse-Shadi-Karogi-Romantic-Hindi-Song-1.mp3"; RL
  } else if (age < 70) {
    musicUrl = "_Kisi_Ki_Muskurahaton_Pe_Ho_Nisar_Ringtone_(by Fringster.com).mp3"; 
  } else {
    musicUrl = "05abhimujhmeinkahinagneepathlebewafacomringtone-15753.mp3"; 
  }

  // Play the new music
  currentAudio = new Audio(musicUrl);
  currentAudio.play();
}

btnEl.addEventListener("click", calculateAge);
