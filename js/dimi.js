function removeLine($elementId) {
    console.log($elementId);
    let $Item = document.getElementById("card8Line");
    $Item.hidden = true;
    console.log("removing line from card 8")
}

function addLine($elementId) {
    console.log($elementId);
    let $Item = document.getElementById("card8Line");
    $Item.hidden = false;
    console.log("adding line to card 8")
}

