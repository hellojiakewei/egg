module.exports =  function (app) {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        record_id: { type: String,required:true },
        username: { type: String,required: true },
        password: { type: String,required: true },
        email: { type: String,required: true },
        age:{type:Number,required:true,min:6,max:500},
        phone: {type: String, unique:true,required: [true, 'User phone number required']
        },
        date:{type:Date,default:Date.now()}
    });
    UserSchema.statics={
        findUserByPhone: function(phone) {
            return this.find({phone: phone})
        }
    }
    return mongoose.model('User', UserSchema,'user')
};
