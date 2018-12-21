const claims = require('./claims.json')

const parseClaim = claim => {
    const claimData = claim.split(' ');
    const coordinates = claimData[2].replace(':', '').split(',')
    const dimensions = claimData[3].split('x');
    return {
        coordinates: {
            x: parseInt(coordinates[0]),
            y: parseInt(coordinates[1])
        },
        dimensions: {
            width: parseInt(dimensions[0]),
            height: parseInt(dimensions[1])
        },
    }
}

const claimedSquares = {}

claims.forEach(c => {
    const claimData = parseClaim(c);

    for (let x = claimData.coordinates.x; x <= claimData.coordinates.x + claimData.dimensions.width; x++) {
        for (let y = claimData.coordinates.y; y <= claimData.coordinates.y + claimData.dimensions.width; y++) {
            if (claimedSquares[`${x}:${y}`] == undefined) {
                claimedSquares[`${x}:${y}`] = 1;
            } else {
                claimedSquares[`${x}:${y}`]++;
            }
        }
    }
});

const total = Object.values(claimedSquares).filter(v => v > 1).length

console.log('total', total);