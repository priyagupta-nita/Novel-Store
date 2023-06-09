import mongoose from 'mongoose'


//book schema
const bookSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "User",
        },
        bookName:{
            type: String,
            require: true
        },
        price:{
            type: String,
            require: true
        },
        detail:{
            type: String,
            require: true
        },
        address:{
            type: String,
            require: true
        },
        city:{
            type: String,
            require: true
        },
        state:{
            type: String,
            require: true
        },
        zip:{
            type: String,
            require: true
        },
        isActive:{
            type: Boolean,
            require: true
        }
    }
)

//create model from schema
const Book = mongoose.model("Book", bookSchema)

export default Book;