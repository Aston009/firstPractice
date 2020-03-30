let soldier = {
    HP: 400,
    armor: 100
}

let Joahn = {
    HP: 200
}

Joahn.__proto__ = soldier;

console.log(Joahn.armor);