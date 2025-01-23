let kezdet = Number(prompt("Az intervallum kezdete:"));
let veg = Number(prompt("Az intervallum vége:"));

for (let i = kezdet; i <= veg; i++) {
    if (i % 2 == 0) {
        document.write(`<br>${i}`);
    }
}
