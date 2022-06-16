const path = require('path');

module.exports = {
    context:__dirname,
    entry:'./js/wpsl-gmap.js',
    output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: './js/wpsl-gmap.min.js',
    },
    module: {
        rules: [
	    {
                test: /\.js$/,
	        exclude: /node_modules/,
	        use: 'babel-loader',
	    }
        ]
    }

}

