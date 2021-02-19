const submitButton = document.getElementById("submitButton");
const cityName = document.getElementById("cityName");

const errMsg = document.getElementById("errorMsg");
const loc = document.getElementById("location");
const tem = document.getElementById("temperature");
const tempStatus = document.getElementById("tempStatus");

const dataHide = document.querySelector('.mainInfo');
const errorMsgHide = document.getElementById("errorMsg");

const day = document.getElementById("day");
const date = document.getElementById("date");

const getDay = () => {
    let d = new Date();
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    // console.log(days[date.getDay()]);
    return `${days[d.getDay()]}day`;
};

const getDate = () => {
    const d = new Date();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jly', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${d.getDate()}/${months[d.getMonth()]}/${d.getFullYear()}`;
};

day.innerText = getDay();
date.innerHTML = getDate();

// const changeStatus = (status) => {
// tempStatus.innerText = 'hi';
// tempStatus.innerHTML = "<i class='fa fa-sun'></i>";
// if(status == 'Clear') {
//     tempStatus.innerHTML = "<i class='fa fa-sun'></i>";
// } else if(status == 'Clouds') {

// } else if(status == 'Rain') {

// } else {

// }
// }



const getInfo = async (event) => {
    event.preventDefault();
    var q = cityName.value;

    if (q === "") {
        errMsg.innerText = `Please enter city name first !`;
        dataHide.classList.add('dataHide');
        errorMsgHide.classList.remove('dataHide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=a0d1e571893a8b7972a8f7b42e0b8392`;
            const response = await fetch(url);
            // console.log(response);
            const obj = await response.json();
            console.log(obj);
            var arr = [obj];
            loc.innerText = arr[0].name + ', ' + arr[0].sys.country;
            tem.innerText = arr[0].main.temp;
            tempStatus.innerText = arr[0].weather[0].main;
            dataHide.classList.remove('dataHide');
            errorMsgHide.classList.add('dataHide');
        } catch {
            errMsg.innerText = `Please enter city name properly !`;
            dataHide.classList.add('dataHide');
            errorMsgHide.classList.remove('dataHide');
        }
    }
}

submitButton.addEventListener('click', getInfo);