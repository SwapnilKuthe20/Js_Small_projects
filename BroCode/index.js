
document.getElementById('subBtn').onclick = () => {

    let subCheck = document.getElementById('Subscribe').checked;

    subCheck ?
        document.getElementById("isSub").innerText = "You are Subscribe" :
        document.getElementById("isSub").innerText = "You are Not Subscribe"


    let master = document.getElementById('masterCard').checked;

    master ?
        document.getElementById('isPay').innerText = "MasterCard payment" :
        document.getElementById('isPay').innerText = "MasterCard Not select"

}







