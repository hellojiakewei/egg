
const Service = require('egg').Service;

class UserService extends Service {
    async list() {
        const {ctx} = this;
        return await ctx.model.User.find({});
    }
    async save() {
        const {ctx} = this;
        const user= ctx.model.User({
            record_id: "dsadddddddddddd",
            username:"jiakewei",
            password:"jiakewei110",
            email: "9776",
            age:333,
            phone: "17733780808"
        });
        await user.save()
        // const user = await ctx.model.User.findUserByPhone("17733780805")
        // console.log(user)
        // return user
    }
}

module.exports = UserService;
