function is_str(s) {
    return typeof s === 'string' || s instanceof String;
}

module.exports = is_str;
