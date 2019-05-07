function is_num(n) {
    return (typeof n === 'number') && !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = is_num;
