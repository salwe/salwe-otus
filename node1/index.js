const getStringEnd = count => {
    if (count <= 1) return 'likes this';
    if (count > 1 && count <= 3) return 'like this';
    return 'others like this';
};

const getLikesCount = (names, logLength) => {
    const zeroLikesMsg = 'No one likes this';
    if (!names) return zeroLikesMsg;

    const arrLength = names.length;
    const endString = getStringEnd(arrLength);
    logLength && logLength(arrLength);

    if (!arrLength) return zeroLikesMsg;
    if (arrLength === 1) return `${names[0]} ${endString}`;
    if (arrLength === 2) return `${names[0]} and ${names[1]} ${endString}`;
    if (arrLength === 3) return `${names[0]}, ${names[1]} and ${names[2]} ${endString}`;
    if (arrLength > 3) {
        const othersCount = arrLength - 2;
        return `${names[0]}, ${names[1]} and ${othersCount} ${endString}`;
    }
};

module.exports = getLikesCount;
