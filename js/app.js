const navbar = document.getElementById('navbar');
const manu2ndLogo = document.getElementById('manu2ndLogo');
const lowerSearchBox = document.getElementById('lowerSearchBox');
const profileImage = document.getElementById('profileImage');
const helpLine = document.getElementById('helpLine');
const suggestions2 = document.getElementById('suggestions2');
const suggestions = document.getElementById('suggestions');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if(currentScroll === 0){
        navbar.style.transform = 'translateY(0)';
        manu2ndLogo.style.display = 'none';
        lowerSearchBox.style.display = 'none';
        profileImage.style.display = 'none';
        helpLine.style.display = 'block';
        suggestions.style.display = 'flex';
    }
    if(currentScroll > lastScroll){
        navbar.style.transform = 'translateY(-18vh)';
        suggestions2.style.display = 'none';
        suggestions.style.display = 'none';
    }
    if(currentScroll <= lastScroll && currentScroll!==0){
        navbar.style.transform = 'translateY(-10vh)';
        manu2ndLogo.style.display = 'block';
        lowerSearchBox.style.display = 'block';
        profileImage.style.display = 'block';
        helpLine.style.display = 'none';
        suggestions2.style.display = 'flex';
        suggestions.style.display = 'none';
    }

    lastScroll = currentScroll;
});



const searchBox1 = document.getElementById('searchBox1');
const searchBox2 = document.getElementById('searchBox20');

searchBox1.addEventListener('input', function (){
    searchBox2.value = this.value;
});

searchBox2.addEventListener('input', function (){
    searchBox1.value = this.value;
});