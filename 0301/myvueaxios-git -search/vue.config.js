//  module.exports={
//      devServer:{
//           proxy:"http://127.0.0.1:5000"
//      }
//  }
module.exports = {
	devServer: {
		proxy: {
			'^/api': {
				target: 'http://127.0.0.1:5000',
				pathRewrite: {
					'^/api': ''
				},
				changeOrigin: true
			}
		}
	}
};
