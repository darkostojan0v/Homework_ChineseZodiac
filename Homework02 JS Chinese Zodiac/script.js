// (year - 4) % 12 - the formula
let input = prompt("Enter a year");
let numberinput = parseInt(input);
let year = (input - 4) % 12;

if (year === 0) {
    console.log('Rat');
    alert('This year in Chinese Zodiac is a rat');
} else if (year === 1) {
    console.log('Ox');
    alert('This year in Chinese Zodiac is a ox');
} else if (year === 2) {
    console.log('Tiger');
    alert('This year in Chinese Zodiac is a tiger');
} else if (year === 3) {
    console.log('Rabbit');
    alert('This year in Chinese Zodiac is a rabbit');
} else if (year === 4) {
    console.log('Dragon');
    alert('This year in Chinese Zodiac is a dragon');
} else if (year === 5) {
    console.log('Snake');
    alert('This year in Chinese Zodiac is a snake');
} else if (year === 6) {
    console.log('Horse');
    alert('This year in Chinese Zodiac is a horse');
} else if (year === 7) {
    console.log('Goat');
    alert('This year in Chinese Zodiac is a goat');
} else if (year === 8) {
    console.log('Monkey');
    alert('This year in Chinese Zodiac is a monkey');
} else if (year === 9) {
    console.log('Rooster');
    alert('This year in Chinese Zodiac is a rooster');
} else if (year === 10) {
    console.log('Dog');
    alert('This year in Chinese Zodiac is a dog');
} else if(year === 11) {
    console.log('Pig');
    alert('This year in Chinese Zodiac is a pig');
}