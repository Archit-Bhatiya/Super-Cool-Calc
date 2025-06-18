let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;  
        if(value == "="){
        try {
            string = eval(string);
            document.querySelector('input').value = string;
        } catch {
            document.querySelector('input').value = "Error";
            string = "";
        }
        }
        else if (value === "C" || value === "AC" || value === "⌫") {
            return;
        }

        else if(e.target.innerHTML == "C"){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        
    });
});

function clearAll() {
    string = "";
    document.querySelector('input').value = string;

}

function backspace() {
    string = string.slice(0, -1);
    document.querySelector('input').value = string;
}