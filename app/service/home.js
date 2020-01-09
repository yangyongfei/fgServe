const Service = require('egg').Service;

class HomeService extends Service { 
	 async index(){
		const user = this.app.mysql.get('user', { id: 1 });
		return user;
	 }
}

module.exports = HomeService;