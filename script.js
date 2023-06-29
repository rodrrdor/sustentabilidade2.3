const cnv = document.getElementById("canvas");
const ctx = cnv.getContext("2d");
var trash00 = new Image(), trash01 = new Image(), trash02 = new Image(), trash03 = new Image();
var trash10 = new Image(), trash11 = new Image(), trash12 = new Image(), trash13 = new Image();
var trash20 = new Image(), trash21 = new Image(), trash22 = new Image(), trash23 = new Image();
var trash30 = new Image(), trash31 = new Image(), trash32 = new Image(), trash33 = new Image();
var score = 0, mistakes = 0, timer = 1800, totalTrash = 1, trashTotal = 1;
var mouse = {x: 0, y: 0, down: false, downX: 0, downY: 0, holds: false};
var wid = window.innerWidth, hei = window.innerHeight;
var trashCans = new Image(), car = new Image();
var carX = window.innerWidth, run = false;
var homeScreen = true, highScore = 0;
var trashes = [];

class Trash {
    constructor() {
        this.x = Math.random() * wid / 1.1 + wid / 20;
        this.y = Math.random() * hei / 4 + hei / 1.5;
        this.r = wid / 32;
        this.type = Math.ceil(Math.random() * 4) - 1;
        this.trash = Math.ceil(Math.random() * 4) - 1;
        this.hold = false;
    }

    update() {
        if (!mouse.holds) {
            let hipo = this.r - Math.sqrt((mouse.downX - this.x) * (mouse.downX - this.x)  + (mouse.downY - this.y) * (mouse.downY - this.y));
            if (hipo > 0) {
                this.hold = true;
                mouse.holds = true;
            }
        }

        if (!mouse.down) {
            this.hold = false;
            mouse.holds = false;
        }

        if (this.hold) {
            this.x = mouse.x;
            this.y = mouse.y;
        }

        let index = trashes.indexOf(this);
        if (this.x > (wid / 4) && this.x < (wid / 1.35) && this.y > (hei / 5) && this.y < (hei / 1.8) && !this.hold)
            if (this.x < wid / 2.7)
                (this.type == 0) ? win() : lose();

            else if (this.x < cnv.width / 2)
                (this.type == 1) ? win() : lose();

            else if (this.x < cnv.width / 1.6)
                (this.type == 2) ? win() : lose();

            else
                (this.type == 3) ? win() : lose();

        if (score + mistakes == trashTotal) {
            run = true;
            timer += 120;
        }

        function win() {
            score++;
            timer += 30;
            trashes.splice(index, 1);
        }

        function lose() {
            mistakes++;
            timer -= 30;
            trashes.splice(index, 1);
        }
    }

    draw() {
        if (this.type == 0) {
            if (this.trash == 0)
                ctx.drawImage(trash00, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);

            else if (this.trash == 1)
                ctx.drawImage(trash01, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);

            else if (this.trash == 2)
                ctx.drawImage(trash02, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);

            else
                ctx.drawImage(trash03, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
            return;
        }
        if (this.type == 1) {
            if (this.trash == 0)
                ctx.drawImage(trash10, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);

            else if (this.trash == 1)
                ctx.drawImage(trash11, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);

            else if (this.trash == 2)
                ctx.drawImage(trash12, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);

            else
                ctx.drawImage(trash13, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
            return;
        }
        if (this.type == 2) {
            if (this.trash == 0)
                ctx.drawImage(trash20, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);

            else if (this.trash == 1)
                ctx.drawImage(trash21, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);

            else if (this.trash == 2)
                ctx.drawImage(trash22, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);

            else
                ctx.drawImage(trash23, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
            return;
        }
        if (this.type == 3) {
            if (this.trash == 0)
                ctx.drawImage(trash30, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);

            else if (this.trash == 1)
                ctx.drawImage(trash31, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);

            else if (this.trash == 2)
                ctx.drawImage(trash32, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);

            else
                ctx.drawImage(trash33, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
        }
    }
}

(function init() {
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;

    trashCans.src = "images/trashCans.png";
    car.src = "images/car.png";

    trash00.src = "images/trash00.png";
    trash01.src = "images/trash01.png";
    trash02.src = "images/trash02.png";
    trash03.src = "images/trash03.png";

    trash10.src = "images/trash10.png";
    trash11.src = "images/trash11.png";
    trash12.src = "images/trash12.png";
    trash13.src = "images/trash13.png";

    trash20.src = "images/trash20.png";
    trash21.src = "images/trash21.png";
    trash22.src = "images/trash22.png";
    trash23.src = "images/trash23.png";

    trash30.src = "images/trash30.png";
    trash31.src = "images/trash31.png";
    trash32.src = "images/trash32.png";
    trash33.src = "images/trash33.png";
    
    for (let trash = 0; trash < totalTrash; trash++)
        trashes.push(new Trash());

    addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    addEventListener("mousedown", () => {
        mouse.downX = mouse.x;
        mouse.downY = mouse.y;
        mouse.down = true;
    });

    addEventListener("mouseup", () => {
        mouse.down = false;
    });

    requestAnimationFrame(main);
}());

function main() {
    update();
    draw();
    requestAnimationFrame(main);
}

function update() {
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;
    wid = cnv.width;
    hei = cnv.height;

    if (homeScreen) {
        if (wid / 2 - 250 < mouse.x && hei / 2 - 100 < mouse.y && wid / 2 + 250 > mouse.x && hei / 2 + 100 > mouse.y)
            if (mouse.down) {
                cnv.requestFullscreen();
                homeScreen = false;
            }
        return;
    }

    for (let trash in trashes)
        trashes[trash].update();

    if (highScore < score - mistakes) highScore = score - mistakes;
    
    if (run) {
        carX -= wid / 10;
        if (carX <= 0 - wid / 1.3) {
            run = false;
            carX = wid;
            totalTrash++;
            trashTotal += totalTrash;
            for (let trash = 0; trash < totalTrash; trash++)
                trashes.push(new Trash());
        }
    }
    (timer > 0) ? timer-- : reset();
}

function draw() {
    drawRect("#20a0ff", 0, 0, wid, hei);
    drawRect("black", 0, hei / 1.8, wid, hei / 2);
    drawRect("gray", 0, hei / 1.9, wid, hei / 15);
    drawArc("yellow", wid / 20, hei / 13, (wid / 18 + hei / 18) / 2);

    for (let i = 5; i < wid; i += wid / 10)
        drawRect("white", i, hei / 1.3, wid / 20, hei / 30);

    if (homeScreen) {
        drawRect("orange", wid / 2, hei / 2, 500, 200, true);
        drawRect("coral", wid / 2, hei / 2, 450, 150, true);
        write("Sustentabilidade", 120, 1);
        write("Começar", 80, hei / 153);
        return;
    }

    ctx.drawImage(trashCans, wid / 4, hei / 5, wid / 2, hei / 2.75);

    for (let trash in trashes.reverse())
        trashes[trash].draw();
    trashes.reverse();

    ctx.drawImage(car, carX, hei / 1.65, wid / 1.3, hei / 2.75);

    write("Maior Pontuação: " + highScore, 40, 1);
    write("Acertos: " + score, 40, 2);
    write("Erros: " + mistakes, 40, 3);
    write("Tempo: " + (timer / 60).toFixed(0), 40, 4);

    function write(text, size, space) {
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.font = size + "px Comic Sans MS";
        ctx.fillText(text, wid / 2, space * size);
    }
    
    function drawRect(color, x, y, w, h, middle) {
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        (middle) ? ctx.fillRect(x - w / 2, y - h / 2, w, h) : ctx.fillRect(x, y, w, h);
        ctx.stroke();
    }
    
    function drawArc(color, x, y, r) {
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}

function reset() {
    homeScreen = true;
    trashes = [];
    score = 0; mistakes = 0; 
    totalTrash = 1; trashTotal = 1;
    timer = 3600;

    for (let trash = 0; trash < totalTrash; trash++)
        trashes.push(new Trash());
}