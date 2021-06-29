let time = 100;
const arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
for (let symbol of arr) {
  setTimeout(() => {
    process.stdout.write(symbol);
  }, time)
  time += 200;
}