const data = {
  name: 1,
  items: [
    { name: 2.1,
      items: [
        { name: 3.1 },
        { name: 3.2 },
        { name: 3.3 },
      ]
    },
    { name: 2.2 },
  ],
};


const printLevel = (arr, depth = 0) => {
  arr.forEach((el, i) => {
    const char = (i === arr.length - 1 && depth > 0) ? '└' : '├';
    const prevLines = depth > 0 ? '| '.repeat(depth) : '';

    console.log(`${prevLines}${char}${el.name}\r\n`);

    if (el.hasOwnProperty('items')) {
      printLevel(el.items, depth + 1);
    }
  });
};

printLevel([data]);