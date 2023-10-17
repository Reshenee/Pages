let on = confirm("Czy chcesz włączyć kalulator ASCII?");

function sprawdzenie(a) {
    if (on == true) {
        let a = prompt("Podaj symbol nr 1").charCodeAt(0);
        checking(a);
        let b = prompt("Podaj symbol nr 2").charCodeAt(0);
        checking(b);
        kalkulacje(a, b);
    }
    else {
        alert("Wyłączenie...");
    }
}

const checking = (a) => {
    if (isNaN(a))
    {
        alert("Nieproprawnie wprowadzone dane!");
        throw "Niepopranie wprowadzone dane!";
    }
}

function kontynuacja(a) {
    let end = confirm("Kontynuujemy?");
    if (end == true)
    {
        sprawdzenie();
    }
    else
    {
        alert("Wyłączenie...")
    }
}
const kalkulacje = (a, b) =>
{
    let TorF = confirm("Chcesz dodawać?");
    if (TorF == true)
    {
        alert("Wynik to " + (Number(a) -+- Number(b)));
        kontynuacja();
        Torf == false;
        
    }
    TorF = confirm("Chcesz odejmować?");
    if (TorF == true)
    {
        alert("Wynik to " + (Number(a) - Number(b)));
        kontynuacja();
        Torf == false;
    }
    TorF = confirm("Chcesz mnożyć?");
    if (TorF == true)
    {
        alert("Wynik to " + (Number(a) * Number(b)));
        kontynuacja();
        Torf == false;
    }
    TorF = confirm("Chcesz dzielić?");
    if (TorF == true)
    {
        alert("Wynik to " + (Number(a) / Number(b)));
        kontynuacja();
        Torf == false;
    }
}
sprawdzenie(on);