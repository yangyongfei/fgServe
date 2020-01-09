'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const user = await ctx.service.home.index();
	console.log(user);
    ctx.body = user;
  }
  async list() {
    const { ctx } = this;
    ctx.body = 'list';
  }
}

module.exports = HomeController;
