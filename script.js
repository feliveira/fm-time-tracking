const DAILY = document.querySelector("#daily");
const WEEKLY = document.querySelector("#weekly");
const MONTHLY = document.querySelector("#monthly");


const data = fetch("./data.json")
.then(r => r.json())
.then(d => {
    const changeOption = value => {
        let period = '';
        if(value === 'daily'){
            DAILY.classList.add("active");
            WEEKLY.classList.remove("active");
            MONTHLY.classList.remove("active");
            period = 'Yesterday';
        }
        else if(value === 'weekly'){
            WEEKLY.classList.add("active");
            DAILY.classList.remove("active");
            MONTHLY.classList.remove("active");
            period = 'Last Week';
        }
        else{
            MONTHLY.classList.add("active");
            DAILY.classList.remove("active");
            WEEKLY.classList.remove("active");
            period = 'Last Month';
        }

        document.querySelector("#work-value").innerText = `${d[0].timeframes[value]["current"]}hrs`;
        document.querySelector("#previous-work-value").innerText = `${period} - ${d[0].timeframes[value]["previous"]}hrs`;

        document.querySelector("#play-value").innerText = `${d[1].timeframes[value]["current"]}hrs`;
        document.querySelector("#previous-play-value").innerText = `${period} - ${d[1].timeframes[value]["previous"]}hrs`;

        document.querySelector("#study-value").innerText = `${d[2].timeframes[value]["current"]}hrs`;
        document.querySelector("#previous-study-value").innerText = `${period} - ${d[2].timeframes[value]["previous"]}hrs`;

        document.querySelector("#exercise-value").innerText = `${d[3].timeframes[value]["current"]}hrs`;
        document.querySelector("#previous-exercise-value").innerText = `${period} - ${d[3].timeframes[value]["previous"]}hrs`;

        document.querySelector("#social-value").innerText = `${d[4].timeframes[value]["current"]}hrs`;
        document.querySelector("#previous-social-value").innerText = `${period} - ${d[4].timeframes[value]["previous"]}hrs`;

        document.querySelector("#selfcare-value").innerText = `${d[5].timeframes[value]["current"]}hrs`;
        document.querySelector("#previous-selfcare-value").innerText = `${period} - ${d[5].timeframes[value]["previous"]}hrs`;
    };
    DAILY.addEventListener("click", () => {
        changeOption("daily");
    });
    
    WEEKLY.addEventListener("click", () => {
        changeOption("weekly");
    });
    
    MONTHLY.addEventListener("click", () => {
        changeOption("monthly");
    });

    document.addEventListener("DOMContentLoaded", changeOption("weekly"))

});



data();