let mystery = [
    {
        none1: `too many`,
        username: `nomas`,
        password: `some1more`,
        arr:[2,5,6]
    },
    {
        none1: `too manyX`,
        username0: `nomasX`,
        password0: `some1moreX`,
        arr:[2,5,6,0]
    }
];

function logi(username0, password0) {
    for (let i = 0; i < mystery.length; i++) {
        console.log(username0, password0)
    }
}


logi(`nomas`, `some1more`)

