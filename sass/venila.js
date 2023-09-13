const tabimg = document.getElementById('tab-img')
const tabh = document.getElementById('tab-h')
const tabp = document.getElementById('tab-p')
let xh0 = `Bookmark in one click`
let xp0 =`Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`
let xh1 = `Intelligent search`
let xp1 = `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`
let xh2 = `Share your bookmarks`
let xp2 = `
Easily share your bookmarks and collections with others. Create a shareable 
link that you can send at the click of a button.`
document.querySelector('.hh1').classList.add('adding-border')

function tabSwitch(dummy){
if(dummy == 'SB'){
    console.log(dummy + 'bs');
    tabimg.setAttribute('src','./images/illustration-features-tab-1.svg')
    tabp.innerText = xp0
    tabh.innerText = xh0
    document.querySelector('.hh1').classList.add('adding-border')
    document.querySelector('.hh2').classList.remove('adding-border')
    document.querySelector('.hh3').classList.remove('adding-border')
}
else if(dummy == 'SS'){
    console.log(dummy + 'ss');
    tabimg.setAttribute('src','./images/illustration-features-tab-2.svg')
    tabp.innerText = xp1
    tabh.innerText = xh1
    document.querySelector('.hh1').classList.remove('adding-border')
    document.querySelector('.hh2').classList.add('adding-border')
    document.querySelector('.hh3').classList.remove('adding-border')
}
else if(dummy == 'ES'){
    console.log(dummy + 'es');
    tabimg.setAttribute('src','./images/illustration-features-tab-3.svg')
    tabp.innerText = xp2
    tabh.innerText = xh2
    document.querySelector('.hh1').classList.remove('adding-border')
    document.querySelector('.hh2').classList.remove('adding-border')
    document.querySelector('.hh3').classList.add('adding-border')
}
}

const D = document.getElementById('d-content') 
let TF = true
function openHeimer(w){
  const x = D.childNodes[w]
  const y = x.childNodes[5]
  const z = y.style.display
  //y.style.display = 'block'
  if(TF){
  y.style.display = 'block'
 // console.log(z);
  }
  else{
    y.style.display = 'none'
  }
  TF=!TF
  console.log(TF);
  console.log(z);
}




