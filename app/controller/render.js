'use strict';

const Controller = require('egg').Controller;

class ViewController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.set({ 'Cache-Control': 'no-cache' });
        await ctx.render('index.html', {});
    }
}

module.exports = ViewController;
