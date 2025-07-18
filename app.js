const key = "ema_live_2CbPfsfvAGM2NwfKZ4Tu9cwB5VnbjM8AAToi7Aao";
const submitBtn = document.getElementById("submitBtn");
const resultCont = document.getElementById("resultCont");

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Clicked!");

    resultCont.innerHTML = `<img width="123" src="Spinner@1x-1.0s-200px-200px.svg" alt="loading...">`;

    const email = document.getElementById("username").value;
    const url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

    try {
        const res = await fetch(url);
        const result = await res.json();
        let str = ``;
        for (let key of Object.keys(result)) {
            if (result[key] !== "" && result[key] !== " ") {
                str += `<div>${key}: ${result[key]}</div>`;
            }
        }
        resultCont.innerHTML = str;
    } catch (error) {
        resultCont.innerHTML = `<div style="color:red;">Error fetching data</div>`;
        console.error("Fetch error:", error);
    }
});
