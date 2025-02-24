function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }
    
    var typing=new Typed(".text", {
       strings: ["Nexus Fortune In Multimedia", "kelompok 5", "Ibnu", "Taro", "Hendrik", "Rezky"],
       typeSpeed: 100,
       backSpeed: 40,
       loop: true,
   });
   
   function startCarousel() {
            let images = document.querySelectorAll('.carousel img');
            let index = 0;
            
            setInterval(() => {
                images[index].classList.remove('active');
                index = (index + 1) % images.length;
                images[index].classList.add('active');
            }, 2500);
        }
        
        document.addEventListener("DOMContentLoaded", startCarousel);