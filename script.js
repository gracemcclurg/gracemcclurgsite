var mobileSlidesIndex = 1;
showMobileSlides(mobileSlidesIndex);

function plusMobileSlides(n) {
  showMobileSlides((mobileSlidesIndex += n));
}

function currentMobileSlide(n) {
  showMobileSlides((mobileSlidesIndex = n));
}
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 900) {
    const employRow = document.querySelector(".employRow");
    if (!employRow) return; // Safeguard in case the element isn't on the page

    const columns = Array.from(employRow.querySelectorAll(".buttonCol"));
    const rows = [];

    const maxRows = Math.max(...columns.map(col => col.children.length));

    for (let row = 0; row < maxRows; row++) {
      for (let col = 0; col < columns.length; col++) {
        const btn = columns[col].children[row];
        if (btn) {
          rows.push(btn);
        }
      }
    }

    employRow.innerHTML = "";

    rows.forEach(btn => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("buttonCol");
      wrapper.style.width = "100%";
      wrapper.appendChild(btn);
      employRow.appendChild(wrapper);
    });

    console.log("✅ Buttons reordered to row-major for mobile.");
  }
});




function showMobileSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mobileSlides");
  var dots = document.getElementsByClassName("mobileDot");
  if (n > slides.length) {
    mobileSlidesIndex = 1;
  }
  if (n < 1) {
    mobileSlidesIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[mobileSlidesIndex - 1].style.display = "block";
  dots[mobileSlidesIndex - 1].className += " active";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

var acmAwardModal = document.getElementById("acmAwardModal");
var acmAwardButton = document.getElementById("acmAward");
var acmAwardSpan = document.getElementById("acmAwardClose");
acmAwardButton.onclick = function () {
  acmAwardModal.style.display = "block";
};
acmAwardSpan.onclick = function () {
  acmAwardModal.style.display = "none";
};

var acmModal = document.getElementById("acmModal");
var acmButton = document.getElementById("acm");
var acmSpan = document.getElementById("acmClose");
acmButton.onclick = function () {
  acmModal.style.display = "block";
};
acmSpan.onclick = function () {
  acmModal.style.display = "none";
};

var aiProjectModal = document.getElementById("aiProjectModal");
var aiProjectButton = document.getElementById("aipr");
var aiProjectSpan = document.getElementById("aiProjectClose");
aiProjectButton.onclick = function () {
  aiProjectModal.style.display = "block";
};
aiProjectSpan.onclick = function () {
  aiProjectModal.style.display = "none";
};

var bioModal = document.getElementById("bioModal");
var bioButton = document.getElementById("bio");
var bioSpan = document.getElementById("bioClose");
bioButton.onclick = function () {
  bioModal.style.display = "block";
};
bioSpan.onclick = function () {
  bioModal.style.display = "none";
};

var ftModal = document.getElementById("ftModal");
var ftButton = document.getElementById("ft");
var ftSpan = document.getElementById("ftModalClose");
ftButton.onclick = function () {
  ftModal.style.display = "block";
};
ftSpan.onclick = function () {
  ftModal.style.display = "none";
};

var birdModal = document.getElementById("birdModal");
var birdButton = document.getElementById("bird");
var birdSpan = document.getElementById("birdClose");
birdButton.onclick = function () {
  birdModal.style.display = "block";
};
birdSpan.onclick = function () {
  birdModal.style.display = "none";
};

var brownModal = document.getElementById("brownModal");
var brownButton = document.getElementById("brown");
var brownSpan = document.getElementById("brownClose");
brownButton.onclick = function () {
  brownModal.style.display = "block";
};
brownSpan.onclick = function () {
  brownModal.style.display = "none";
};

var coloringModal = document.getElementById("coloringModal");
var coloringButton = document.getElementById("coloring");
var coloringSpan = document.getElementById("coloringClose");
coloringButton.onclick = function () {
  coloringModal.style.display = "block";
};
coloringSpan.onclick = function () {
  coloringModal.style.display = "none";
};

var cpuModal = document.getElementById("cpuModal");
var cpuButton = document.getElementById("cpuScheduler");
var cpuSpan = document.getElementById("cpuClose");
cpuButton.onclick = function () {
  cpuModal.style.display = "block";
};
cpuSpan.onclick = function () {
  cpuModal.style.display = "none";
};

var cseAwardModal = document.getElementById("cseAwardModal");
var cseAwardButton = document.getElementById("cseAward");
var cseAwardSpan = document.getElementById("cseAwardClose");
cseAwardButton.onclick = function () {
  cseAwardModal.style.display = "block";
};
cseAwardSpan.onclick = function () {
  cseAwardModal.style.display = "none";
};

var cvModal = document.getElementById("cvModal");
var cvButton = document.getElementById("cv");
var cvSpan = document.getElementById("cvClose");
cvButton.onclick = function () {
  cvModal.style.display = "block";
};
cvSpan.onclick = function () {
  cvModal.style.display = "none";
};

var edisModal = document.getElementById("edisModal");
var edisButton = document.getElementById("edis");
var edisSpan = document.getElementById("edisClose");
edisButton.onclick = function () {
  edisModal.style.display = "block";
};
edisSpan.onclick = function () {
  edisModal.style.display = "none";
};

/*var gattonModal = document.getElementById("gattonModal");
var gattonButton = document.getElementById("gatton");
var gattonSpan = document.getElementById("gattonClose");
gattonButton.onclick = function () {
  gattonModal.style.display = "block";
};
gattonSpan.onclick = function () {
  gattonModal.style.display = "none";
};*/

var graphProjectModal = document.getElementById("graphProjectModal");
var graphProjectButton = document.getElementById("graph");
var graphProjectSpan = document.getElementById("graphProjectClose");
graphProjectButton.onclick = function () {
  graphProjectModal.style.display = "block";
};
graphProjectSpan.onclick = function () {
  graphProjectModal.style.display = "none";
};

var icpcModal = document.getElementById("icpcModal");
var icpcButton = document.getElementById("icpc");
var icpcSpan = document.getElementById("icpcClose");
icpcButton.onclick = function () {
  icpcModal.style.display = "block";
};
icpcSpan.onclick = function () {
  icpcModal.style.display = "none";
};

var isiModal = document.getElementById("isiModal");
var isiButton = document.getElementById("isi");
var isiSpan = document.getElementById("isiClose");
isiButton.onclick = function () {
  isiModal.style.display = "block";
};
isiSpan.onclick = function () {
  isiModal.style.display = "none";
};

var knotModal = document.getElementById("knotModal");
var knotButton = document.getElementById("knot");
var knotSpan = document.getElementById("knotClose");
knotButton.onclick = function () {
  knotModal.style.display = "block";
};
knotSpan.onclick = function () {
  knotModal.style.display = "none";
};

var microModal = document.getElementById("microModal");
var microButton = document.getElementById("microsoft");
var microSpan = document.getElementById("microClose");
microButton.onclick = function () {
  microModal.style.display = "block";
};
microSpan.onclick = function () {
  microModal.style.display = "none";
};

var mlModal = document.getElementById("mlModal");
var mlButton = document.getElementById("ml");
var mlSpan = document.getElementById("mlClose");
mlButton.onclick = function () {
  mlModal.style.display = "block";
};
mlSpan.onclick = function () {
  mlModal.style.display = "none";
};

var mobileProjectModal = document.getElementById("mobileProjectModal");
var mobileProjectButton = document.getElementById("mobilePR");
var mobileProjectSpan = document.getElementById("mobileProjectClose");
mobileProjectButton.onclick = function () {
  mobileProjectModal.style.display = "block";
};
mobileProjectSpan.onclick = function () {
  mobileProjectModal.style.display = "none";
};

var neuroMod = document.getElementById("neuroModal");
var neuroButton = document.getElementById("neuro");
var neuroSpan = document.getElementById("neuroClose");
neuroButton.onclick = function () {
  neuroMod.style.display = "block";
};
neuroSpan.onclick = function () {
  neuroMod.style.display = "none";
};

var pmModal = document.getElementById("pmModal");
var pmButton = document.getElementById("pm");
var pmSpan = document.getElementById("pmClose");
pmButton.onclick = function () {
  pmModal.style.display = "block";
};
pmSpan.onclick = function () {
  pmModal.style.display = "none";
};

var slpModal = document.getElementById("slpModal");
var slpButton = document.getElementById("slp");
var slpSpan = document.getElementById("slpClose");
slpButton.onclick = function () {
  slpModal.style.display = "block";
};
slpSpan.onclick = function () {
  slpModal.style.display = "none";
};

var smartWatchModal = document.getElementById("smartWatchModal");
var smartWatchButton = document.getElementById("smartWatch");
var smartWatchSpan = document.getElementById("smartWatchClose");
smartWatchButton.onclick = function () {
  smartWatchModal.style.display = "block";
};
smartWatchSpan.onclick = function () {
  smartWatchModal.style.display = "none";
};

var sweMicroModal = document.getElementById("sweMicroModal");
var sweMicroButton = document.getElementById("sweMicro");
var sweMicroSpan = document.getElementById("sweMicroClose");
sweMicroButton.onclick = function () {
  sweMicroModal.style.display = "block";
};
sweMicroSpan.onclick = function () {
  sweMicroModal.style.display = "none";
};

var wordWingsModal = document.getElementById("wordWingsModal");
var wordWingsButton = document.getElementById("wordWings");
var wordWingsSpan = document.getElementById("wordWingsClose");
wordWingsButton.onclick = function () {
  wordWingsModal.style.display = "block";
};
wordWingsSpan.onclick = function () {
  wordWingsModal.style.display = "none";
};




/*var uoflMod = document.getElementById("uoflModal");
var uoflButton = document.getElementById("uofl");
var uoflSpan = document.getElementById("uoflClose");
uoflButton.onclick = function () {
  uoflMod.style.display = "block";
};
uoflSpan.onclick = function () {
  uoflMod.style.display = "none";
};*/

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == microModal) {
    microModal.style.display = "none";
  }
  if(event.target == wordWingsModal){
    wordWingsModal.style.display = "none";
  }
  if (event.target == cvModal) {
    cvModal.style.display = "none";
  }
  if (event.target == sweMicroModal) {
    sweMicroModal.style.display = "none";
  }
  if(event.target == birdModal){
    birdModal.style.display = "none";
  }
  if (event.target == cseAwardModal) {
    cseAwardModal.style.display = "none";
  }
  if (event.target == coloringModal) {
    coloringModal.style.display = "none";
  }
  if (event.target == mobileProjectModal) {
    mobileProjectModal.style.display = "none";
  }
  if (event.target == aiProjectModal) {
    aiProjectModal.style.display = "none";
  }
  if (event.target == slpModal) {
    slpModal.style.display = "none";
  }
  if (event.target == smartWatchModal) {
    smartWatchModal.style.display = "none";
  }
  if (event.target == cpuModal) {
    cpuModal.style.display = "none";
  }
  if (event.target == graphProjectModal) {
    graphProjectModal.style.display = "none";
  }
   if (event.target == ftModal) {
    ftModal.style.display = "none";
  }
  if (event.target == isiModal) {
    isiModal.style.display = "none";
  }
  if (event.target == acmModal) {
    acmModal.style.display = "none";
  }
  if(event.target == acmAwardModal){
    acmAwardModal.style.display = "none";
  }
  if (event.target == icpcModal) {
    icpcModal.style.display = "none";
  }
  if (event.target == brownModal) {
    brownModal.style.display = "none";
  }
  if (event.target == bioModal) {
    bioModal.style.display = "none";
  }
  if (event.target == edisModal) {
    edisModal.style.display = "none";
  }
  if (event.target == mlModal) {
    mlModal.style.display = "none";
  }
  if (event.target == pmModal) {
    pmModal.style.display = "none";
  }
  if (event.target == knotModal) {
    knotModal.style.display = "none";
  }
  if (event.target == neuroMod) {
    neuroMod.style.display = "none";
  }
};
