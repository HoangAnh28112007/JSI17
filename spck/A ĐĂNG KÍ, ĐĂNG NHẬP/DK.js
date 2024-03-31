const dang_ky = () =>{
    const email = document.querySelector(".email").value
    const pass = document.querySelector(".password").value
    const data = {
        name: email,
        password: pass
    };

    fetch("", {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data)
    })
}

window.location.href = "./DN.html"
    alert("! Sign up successed !")
