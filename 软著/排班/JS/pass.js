function setStyle(event) {
        let el=document.getElementById("user-list");
        let current=el.querySelector(".active");
        if (event.target.className==="active") {
            event.target.className="";
        } else {
            if (current) {
                current.className = "";
                event.target.className = "active";
            }
        }
    }
document.getElementById("user-list").onclick = function () {



        switch (location.hash) {
            case "#/store":
                let a1 = document.getElementById("--1");
                a1.href="http://localhost:63342/web/WEB%E5%BC%80%E5%8F%91.html?_ijt=u3244ntbdhr38i2mbg9in40ape&_ij_reload=RELOAD_ON_SAVE";

                break;
            case "#/rather":
                let a2 = document.getElementById("--2");
                a2.href="https://www.baidu.com";

                break;
            case "#/class":
                let a3 = document.getElementById("--3");
                a3.href="https://www.baidu.com";
                break;
            case "#/break":
                let a4 = document.getElementById("--4");
                a4.href="https://www.baidu.com";
                break;

        }
    }


