let Main = document.querySelector('.Maindiv')
let HTML = ''
let score = 0

function LoadDivs() {
    let randomcolor = null
    let idb = 0
    for (let i = 0; i < 6; i++) {
       
        randomcolor = Math.floor(Math.random() * 0xFFFF).toString(16).padStart(4, "0")
        HTML += `<div class="Box" id="0"
        style="width: 300px; height: 300px; background-color: #${randomcolor};"
        data-color="#${randomcolor}"></div>`
        document.querySelector(".score").innerHTML = "Score:" + score
    }
    Main.innerHTML = HTML 
    const list = document.querySelectorAll(".Box")
    for (let i = 0; i < list.length; i++) {
        list[i].setAttribute("id", i);
    }
    }

LoadDivs()

function rgbToHex4(rgb) {
    let nums = rgb.match(/\d+/g);

    let hex = "#" + nums.slice(0, 3).map(x => {

        let h = Math.round(parseInt(x) / 17).toString(16);
        return h;
    }).join("");


    if (nums[3]) {
        let a = Math.round(parseInt(nums[3]) / 17).toString(16);
        hex += a;
    }

    return hex;
}



function GetRightBox() {
    let id = Math.floor(Math.random() * 6);
    let box = document.getElementById(id);
    let boxall = document.querySelectorAll(".Box");
    let hex = box.dataset.color;
    document.querySelector(".button").setAttribute("disabled", true)
    function name(e) {
        let got = e.currentTarget.dataset.color;

        if (hex === got) {
            console.log(true);
            document.querySelector(".findhex").style.color = "green"
            score++; 
            localStorage.setItem("score", score);
            document.querySelector(".score").innerHTML = "Score: " + score;
            document.querySelector(".button").removeAttribute("disabled");
        } else {
            document.querySelector(".findhex").style.color = "red"
            console.log(false);
        }
    }
    

    document.querySelector('.findhex').innerHTML = hex;

    boxall.forEach(b => {
        b.addEventListener("click", name, { once: true });
    });
}

function ResetGame() {
    HTML = '';
    Main.innerHTML = ''
    document.querySelector(".findhex").style.color = "white"
    LoadDivs();
    GetRightBox();
}

function GetHelp() {
    let picker = `<input type="color" name="" id="">`
    document.querySelector(".color").innerHTML = picker
}

GetRightBox()
