let age = Number(prompt("Add meg az életkort:"));

if (age >= 0 && age <= 6) {
    document.write("Kisgyermekkor");
}
else if (age > 6 && age <= 12) {
    document.write("Gyermekkor");
}
else if (age > 12 && age <= 16) {
    document.write("Serdülőkor");
}
else if (age > 16 && age <= 20) {
    document.write("Ifjúkor");
}
else if (age > 20 && age <= 30) {
    document.write("Fiatal felnőtt kor");
}
else if (age > 30 && age < 60) {
    document.write("Felnőtt kor");
}
else if (age >= 60 && age <= 120) {
    document.write("Aggkor");
}
else {
    document.write("Hibás adat.")
}