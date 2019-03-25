Vue.filter('round', function(value, decimals) {
    if(!value) {
        value = 0;
    }

    if(!decimals) {
        decimals = 0;
    }

    value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);

    return value;
});

Vue.filter('slugify', function (value) {
    return value.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
});

Vue.filter('truncate', function(value, length) {
    if(value.length < length) {
        return value;
    }

    length = length - 3;

    return value.substring(0, length) + '...';
});