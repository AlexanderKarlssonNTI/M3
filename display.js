const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// canvas.width = "1000";
// canvas.height = "1000";

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;


let chars = {
    A: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    B: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    C: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    D: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 0, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    E: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    F: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    G: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    H: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    I: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    J: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    K: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 1, 1, 1, 0, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    L: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    M: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 0, 1, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    N: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 0, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 0, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    O: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    P: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    Q: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    R: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    S: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    T: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    U: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    V: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    W: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    X: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 1, 1, 0, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    Y: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    Z: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 1, 0,
        0, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    0: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    1: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    2: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 1, 0, 1, 1, 0,
        0, 0, 0, 0, 1, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 1, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    3: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    4: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 1, 1, 0, 1, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    5: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 1, 1, 0,
        0, 1, 1, 0, 1, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    6: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 1, 0, 1, 1, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    7: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    8: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    9: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    '.': [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    ',': [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    ';': [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    ':': [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    '$': [0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 1, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0],

    ';': [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    ';': [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    '!': [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    ' ': [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    a: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    b: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    c: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    d: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 1, 1, 1, 0,
        0, 0, 1, 0, 0, 1, 0,
        0, 0, 0, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    e: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    f: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    g: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 1, 0,
        0, 0, 1, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    h: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 0, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    i: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    j: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    k: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    l: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    m: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    n: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 1, 1, 0, 0,
        0, 1, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    o: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    p: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 0, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 1, 1, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    q: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 1, 1, 0,
        0, 0, 1, 0, 0, 1, 0,
        0, 0, 0, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    r: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 1, 1, 0, 0,
        0, 1, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    s: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    t: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    u: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    v: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    w: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    x: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    y: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 0, 1, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    z: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 1, 0,
        0, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    '"': [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0
    ],

    '/': [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0
    ],

    '?': [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 1, 1, 0,
        0, 0, 1, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 1, 0,
        0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0
    ],

    '%': [
        0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 0, 0, 1, 0,
        0, 1, 1, 0, 1, 1, 0,
        0, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 0,
        0, 1, 1, 0, 1, 1, 0,
        0, 1, 0, 0, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0
    ],

    '&': [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0
    ],

    '(': [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    ')': [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0
    ],

    '@': [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 1, 1, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 1, 1, 1, 0,
        0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0
    ],
}

class BITMAP {
    constructor() {
        this.WIDTH;
        this.HEIGHT;
        this.PLANE;
    }

    bitmapMaker(character) {
        let q = character.length;
        let bitmap = new Array(8).fill(0).map(() => new Array(7 * q).fill(0));

        // bitmap = chars['@'];
        let temp = "";
        for (let a = 0; a < q; a++) {
            for (let i = 0; i < 7; i++) {
                for (let j = 0; j < 8; j++) {
                    bitmap[j][i + (7 * a)] = chars[character[a]][j * 7 + i];
                }
            }
        }
        this.PLANE = bitmap;
        this.HEIGHT = 8;
        this.WIDTH = 7 * q;
        console.log(bitmap);
    }
}

const transpose = m => m[0].map((x, i) => m.map(x => x[i]));
class DISPLAY {
    #LOCK;

    constructor(width, height) {
        this.WIDTH = width;
        this.HEIGHT = height;
        this.PLANE = new Array(width * height).fill(0);
        // this.PLANE = new Array(width).fill(0).map(element => new Array(height).fill(0));
        this.ZOOM = 0;
        this.#LOCK;
    }

    to1D(x, y) {
        return y * this.WIDTH + x;
    }

    to2D(c) {
        return c
    }

    loop(func, domain) {
        for (let i = 0; i < this.WIDTH; i++) {
            for (let j = 0; i < this.HEIGHT; j++) {
                if (domain(i)(j)) {
                    this.PLANE[this.to1D(i, j)] = func(i)(j);
                }
            }
        }

        this.PLANE.map(func)
    }

    to2DArray() {
        let tempArr = [[]];
        for (let i = 0; i < this.WIDTH; i++) {
            for (let j = 0; j < this.HEIGHT; j++) {
                tempArr[i] = [];
                tempArr[i][j] = this.PLANE[this.to1D(i, j)];
            }
        }
        return tempArr;
    }

    putPixel(x, y, color) {
        this.PLANE[this.to1D(x, y)] = color;
    }

    line(x1, y1, x2, y2, color) {
        // const f = x => y => Math.sign((y2-y1)*x + (x1-x2)*y + (x2*y1-x1*y2));
        const f = x => y => (x - x2) * (y2 - y1) - (x2 - x1) * (y - y2);
        const A2 = (x2 - x1) ** 2 + (y2 - y1) ** 2;

        for (let i = 0; i < this.WIDTH; i++) {
            for (let j = 0; j < this.HEIGHT; j++) {
                let B2 = (i - x1) ** 2 + (j - y1) ** 2;
                let C2 = (x2 - i) ** 2 + (y2 - j) ** 2;

                if (A2 + B2 - C2 >= 0 && A2 + C2 - B2 >= 0 && 4*(f(i)(j) ** 2) - A2 < 0) {
                    this.PLANE[this.to1D(i, j)] = color;
                }
            }
        }
    }

    circle(x1, y1, diameter, color) {
        let radius = diameter / 2;
        for (let i = 0; i < this.WIDTH; i++) {
            for (let j = 0; j < this.HEIGHT; j++) {
                if (diameter % 2 === 0) {
                    if (((i - x1 + 0.5) ** 2 + (j - y1 + 0.5) ** 2) - radius ** 2 <= 0) {
                        this.PLANE[this.to1D(i, j)] = color;
                    }
                } else {
                    if (((i - x1) ** 2 + (j - y1) ** 2) - radius ** 2 <= 0) {
                        this.PLANE[this.to1D(i, j)] = color;
                    }
                }
                
                    // this.PLANE[this.to1D(i, j)] = -(((i - x1) ** 2 + (j - y1) ** 2) - radius ** 2);
                
            }
        }
    }

    rectangle(x1, y1, x2, y2, color) {
        // for (let i = x1; i < x2; i++) {
        //     for (let j = y1; j < y2; j++) {
        //         this.putPixel(i, j, color);
        //     }
        // }
        for (let i = 0; i < this.WIDTH; i++) {
            for (let j = 0; j < this.HEIGHT; j++) {
                if (i >= x1 && i <= x2 && j >= y1 && j <= y2) {
                    this.PLANE[this.to1D(i, j)] = color;
                }
            }
        }
    }

    clear(color) {
        this.PLANE = this.PLANE.map(() => color);
    }

    resize(width, height) {
        this.PLANE = new Array(width).fill(0).map(element => new Array(height).fill(0));
        this.WIDTH = width;
        this.HEIGHT = height;
        // return new DISPLAY(width, height);
    }

    blitToDisplay(BITMAP, width, height, bx, by, dx, dy) {
        for (let i = x; i < this.WIDTH && i - x < BITMAP.WIDTH; i++) {
            for (let j = y; j < this.HEIGHT && j - y < BITMAP.HEIGHT; j++) {
                if (BITMAP.PLANE[j - y][i - x] === 1) {
                    this.PLANE[j][i] = color;
                }
            }
        }
    }

    blitToBitmap(BITMAP, width, height, bx, by, dx, dy) {

    }

    textOut(x, y, color, string) {
        let temp = new BITMAP();
        temp.bitmapMaker(string);

        for (let i = x; i < this.WIDTH && i - x < temp.WIDTH; i++) {
            for (let j = y; j < this.HEIGHT && j - y < temp.HEIGHT; j++) {
                if (temp.PLANE[j - y][i - x] === 1) {
                    this.PLANE[this.to1D(i, j)] = color;
                }
            }
        }
    }

    scrollLeft2() {
        for (let i = 1; i < this.WIDTH; i++) {
            for (let j = 0; j < this.HEIGHT; j++) {
                this.PLANE[this.to1D(i-1,j)] = this.PLANE[this.to1D(i,j)];
            }
        }
        for(let i = 0; i < this.HEIGHT; i++) {
            this.PLANE[this.to1D(this.WIDTH-1,i)] = this.PLANE[i];
        }
    }

    modulo(a,b) {
        return a - b*Math.floor(a/b);
    }
        
    scrollLeftx() {
        for (let x = 0; x < this.WIDTH; x++) {
            for (let y = 0; y < this.HEIGHT; y++) {
                this.PLANE[this.to1D(this.modulo(x-1,this.WIDTH),y)] = this.PLANE[this.to1D(x,y)];
            }
        }
    }

    // scrollRight() {
    //     for (let x = 0; x < this.WIDTH; x++) {
    //         for (let y = 0; y < this.HEIGHT; y++) {
    //             this.PLANE[this.to1D(this.modulo(x+1,this.WIDTH-1),y)] = this.PLANE[this.to1D(x,y)];
    //         }
    //     }
    //}

    scrollLeft() {
        console.log("ScrollLeft påbörjas");
        for (let x = 0; x < this.WIDTH; x++) {
            for (let y = 0; y < this.HEIGHT; y++) {
                this.PLANE[this.to1D(x, y)] = this.PLANE[this.to1D(x+1, y)];
            }
        }
        for (let y = 0; y < this.HEIGHT; y++) {
            // this.PLANE[this.WIDTH-1][y] = 0;
            this.PLANE[this.to1D(this.WIDTH-1, y)] = 0;
        }
        console.log("ScrollLeft avslutas");
    }

    scrollRight() {
        console.log("ScrollRight påbörjad");
        for (let x = this.WIDTH-1; x > 0; x--) {
            for (let y = 0; y < this.HEIGHT; y++) {
                this.PLANE[this.to1D(x, y)] = this.PLANE[this.to1D(x-1, y)];
            }
        }
        for(let y = 0; y < this.HEIGHT; y++){
            // this.PLANE[0][y] = 0;
            this.PLANE[this.to1D(0, y)] = 0;
        }
        console.log("ScrollRight avslutats");
    }

    scrollUp() {
        for (let y = 0; y < this.HEIGHT-1; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                this.PLANE[this.to1D(x, y)] = this.PLANE[this.to1D(x, y+1)];
            }
        }
        for(let x = 0; x < this.WIDTH; x++){
            // this.PLANE[x][this.HEIGHT - 1] = 0;
            this.PLANE[this.to1D(x, this.HEIGHT - 1)] = 0;
        }
    }

    scrollDown() {
        // for (let y = this.HEIGHT; y > 0; y--) {
        //     for (let x = 0; x < this.WIDTH; x++) {
        //         this.PLANE[x][y] = this.PLANE[x][y-1];
        //     }
        // }

        // for (let x = 0; x < this.WIDTH; x++) {
        //     for (let y = 0; y < this.HEIGHT; y++) {
        //         this.PLANE[this.to1D(x,this.modulo(y+1,this.HEIGHT-1))] = this.PLANE[this.to1D(x,y)];
        for (let y = this.HEIGHT; y > 0; y--) {
            for (let x = 0; x < this.WIDTH; x++) {
                this.PLANE[this.to1D(x, y)] = this.PLANE[this.to1D(x, y -1)];
            }
        }
        for(let x = 0; x < this.WIDTH; x++){
            // this.PLANE[x][0] = 0;
            this.PLANE[this.to1D(x, 0)] = 0;
        }
    }

    // pscrollLeft() {
    //     console.log("ScrollLeft påbörjas");
    //     let tempArray = [];
    //     for(let i = 0; i < this.HEIGHT; i++){
    //         tempArray[this.to1D(0, i)];
    //     }
    //     for (let x = 0; x < this.WIDTH; x++) {
    //         for (let y = 0; y < this.HEIGHT; y++) {
    //             this.PLANE[this.to1D(x, y)] = this.PLANE[this.to1D(x+1, y)];
    //         }
    //     }
    //     for (let y = 0; y < this.HEIGHT; y++) {
    //         // this.PLANE[this.to1D(this.WIDTH-1, y)] = this.PLANE[this.to1D(0, y)];
    //         // this.PLANE[this.WIDTH-1][y] = 0;
    //         this.PLANE[this.to1D(this.WIDTH-1, y)] = tempArray[this.to1D(0, y)];
    //     }
    //     console.log("ScrollLeft avslutas");
    // }

    pscrollRight() {

    }

    pscrollUp() {

    }

    pscrollDown() {

    }

    render() {
        let dx = Math.round(canvas.width / this.WIDTH);
        let dy = Math.round(canvas.height / this.HEIGHT);
        for (let i = 0; i < this.WIDTH; i++) {
            for (let j = 0; j < this.HEIGHT; j++) {
                ctx.fillStyle = 'rgb(' + this.PLANE[this.to1D(i, j)] + ',' + this.PLANE[this.to1D(i, j)] + ',' + this.PLANE[this.to1D(i, j)] + ')';
                ctx.fillRect(i * dx, j * dy, dx, dy);
            }
        }
    }
}

// let hello = new DISPLAY(window.innerWidth,window.innerHeight);

let hello = new DISPLAY(10, 10);
// hello.circle(0, 0, 40, 5);

window.addEventListener('load', () => {
    // hello.render();
    // hello.rectangle(4, 4, 5, 5, 255);
    // hello.line(0,0,0,10,255);
    // hello.line(0,0,10,0,255);
    // hello.line(10,0,10,10,255);
    // hello.line(0,10,10,10,255);
    // hello.textOut(1, 1, 255, "M");
    // hello.textOut(10, 10, 200, "test test test");
    // hello.circle(145, 145, 50, 255);
    // hello.rectangle(190, 190, 210, 210, 230);
    // hello.line(190, 190, 450, 450, 200);
    // hello.line(450, 450, 470, 430, 200);
<<<<<<< HEAD
    hello.line(0, 9,9, 0, 255);
    // hello.line(0, 0, 10, 10, 255);
=======
    // hello.line(450, 450, 430, 445, 200);
    hello.line(0, 0, 10, 10, 255);
>>>>>>> b839260ddc87d2acbb92f252a6ff71c5f42e3d55
    // hello.putPixel(40,40,255);
    hello.render();
})

window.addEventListener('keydown', (event) => {
    if(event.key == 'ArrowLeft') {
        hello.scrollLeft();
    }
    if(event.key == 'ArrowRight') {
        hello.scrollRight();
    }
    if(event.key == 'ArrowDown') {
        hello.scrollDown();
    }
    if(event.key == 'ArrowUp') {
        hello.scrollUp();
    }
    hello.render();
})

// function render() {
//     hello.rectangle(8, 8, 9, 9, 255);
//     hello.textOut(450, 450, 255, "jag vet inte 123456789");
//     hello.textOut(10, 10, 200, "test test test");
//     hello.circle(145, 145, 50, 255);
//     hello.rectangle(190, 190, 210, 210, 230);
//     hello.line(190, 190, 450, 450, 200);
//     hello.line(450, 450, 470, 430, 200);
//     hello.line(450, 450, 430, 445, 200);
//     hello.line(0, 0, 10, 10, 255);
//     hello.putPixel(40,40,255);
//     hello.render();
//     requestAnimationFrame(render);
// }
// requestAnimationFrame(render);
