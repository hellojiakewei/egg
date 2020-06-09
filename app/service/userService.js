
const Service = require('egg').Service;

class UserService extends Service {
    async list() {
        const {ctx} = this;
        return await ctx.model.User.find({});
    }

    /**
     * 保存用户记录
     * @returns {Promise<*>}
     */
    async save() {
        const {ctx} = this;
        // const user= ctx.model.User({
        //     record_id: "dsadddddddddddd",
        //     username:"jiakewei",
        //     password:"jiakewei110",
        //     email: "9776",
        //     age:333,
        //     phone: "17733780808"
        // });
        const user = ctx.model.User()
        console.log(user)
        const res = await ctx.model.User.methods.findUserByPhone("17733780805")

        return res
    }
}

module.exports = UserService;
