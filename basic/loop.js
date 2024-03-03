for (let i = 0; i < 10; i++) {
    if (i === 3) {
        console.log("It is 3");
        continue;
    }

    if (i === 5) {
        console.log("5 stop the loop");
        break;
    }
    console.log("Number : " + i);
}

const user = {
    name: "Youngrae",
    province: "경기도",
    city: "성남시",
}

for (let x in user) {
    console.log(`${x} : ${user[x]}`);
}

let i = 0;

while (i < 10) {
    console.log("Number : " + i);
    i++;
}

let j = 0;

do {
    console.log("Number : " + j);
    j++;
} while (j < 10)

const locations = ["서울", "부산", "경기도", "대구"];

for (let i = 0; i < locations.length; i++) {
    console.log("for : " + locations[i]);
}

locations.forEach((location, index, array) => {
    console.log(`forEach : ${index} : ${location}`);
    console.log(array);
});

locations.map((location) => {
    console.log("map : " + location);
})
