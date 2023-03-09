const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const cat1 = document.getElementById('cat1');
const cat2 = document.getElementById('cat2');
const cat3 = document.getElementById('cat3');
const cat4 = document.getElementById('cat4');
const res1 = document.getElementById('res1');
const res2 = document.getElementById('res2');
const res3 = document.getElementById('res3');
const res4 = document.getElementById('res4');



async function fetchData (){
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        img1.src = data[0].icon
        img2.src = data[1].icon
        img3.src = data[2].icon
        img4.src = data[3].icon
        cat1.innerText = data[0].category;
        cat2.innerText = data[1].category;
        cat3.innerText = data[2].category;
        cat4.innerText = data[3].category;
        res1.innerText = data[0].score;
        res2.innerText = data[1].score;
        res3.innerText = data[2].score;
        res4.innerText = data[3].score;
        
    } catch (error) {
        console.log(error);
    }
}
fetchData();