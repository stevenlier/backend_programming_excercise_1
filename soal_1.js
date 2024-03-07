function Prima(angka) {
    if (angka < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(angka); i++) {
        if (angka % i == 0) {
            return false;
        }
    }
    return true;
}

console.log("Bilangan prima : ")
for (let num = 1; num <= 1000; num++) {
    if (Prima(num)) {
        console.log(num);
    }
}
    