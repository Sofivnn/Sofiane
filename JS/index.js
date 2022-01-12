


    var timesRun = 0;
    var refreshIntervalId = setInterval(() => {
            const stars = document.createElement('span');
            const home = document.getElementById('home').appendChild(stars);
            stars.classList.add('stars');

            stars.style.top = Math.random() * 100 + "%";
            stars.style.left = Math.random() * 100 + "%";
            
            timesRun += 1;
            if(timesRun === 80){
                clearInterval(refreshIntervalId);
                console.log(timesRun);
            }

        }, 100);



    const navbar = document.querySelector('.navbar');

    window.addEventListener("scroll", (e)=>{
        if (scrollY >75) {
            navbar.style.boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            navbar.style.background= "rgba(14, 26, 39)"
        }else if (scrollY<100) {
            navbar.style.boxShadow="0px 0px 0px rgba(0, 0, 0, 0.0)"
            navbar.style.background= "transparent"

        }
    })