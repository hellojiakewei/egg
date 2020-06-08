'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
    successDataAndMsg(data,msg){
        const {ctx} = this;
        ctx.body={
            code:200,
            data,
            msg
        }
    }
    successMsg(msg){
        const {ctx} = this;
        ctx.body={
            code:200,
            msg
        }
    }
    error(msg){
        const {ctx} = this;
        ctx.body={
            code:400,
            msg
        }
    }
}

module.exports = BaseController;
