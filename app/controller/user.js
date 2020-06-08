'use strict';

const BaseController = require('./base');

class UserController extends BaseController {
    async list() {
        const {ctx} = this;
        const result = await ctx.service.userService.list();
        this.successDataAndMsg(result, "查询成功")
    }

    /**
     * 新增用户信息
     * @param user user试题对象
     * @returns {Promise<void>}
     */
    async save(user) {
        const {ctx} = this;
        const result = await ctx.service.userService.save();
        console.log(result)
        this.successDataAndMsg(result, "保存成功")
    }
}

module.exports = UserController;
