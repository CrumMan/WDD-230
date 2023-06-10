const MILLIS_PER_DAY = 24 * 60 * 60 * 1000;
let day = new Date();
let lastVisitString = localStorage.getItem("lastVisit");
let visitspan = document.querySelector('#last-visit');

if (lastVisitString==null){        
    visitspan.textContent = '0'
}
else{
    lastVisitDate=new Date(lastVisitString);
    daysSinceLastVisit = Math.floor((day.getTime() - lastVisitDate.getTime()) / MILLIS_PER_DAY);
    visitspan.textContent = daysSinceLastVisit;
}
localStorage.setItem("lastVisit", day.toLocaleDateString());
// credit to 