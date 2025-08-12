const timer = 5;
let level = 0;

function scroll() {
    setInterval(() => {
        const banners = document.querySelectorAll('.banner');    
        if (banners && banners?.length > 0) {
            const list = Array.from(banners);
            const total = banners.length;
            console.log(level, banners, list)
            list.at(level).classList.toggle('hidden');
            if (level < total -1) {
                level ++;
            } else if (level === total -1) {
                level = 0;
            }
            list.at(level).classList.toggle('hidden');
        }
    }, timer * 1000)
}

scroll();