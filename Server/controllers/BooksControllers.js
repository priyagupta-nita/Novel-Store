import Book from '../Models/bookModel.js'
import asyncHandler from 'express-async-handler'

const createBook = asyncHandler(async(req, res)=>{

        const {bookName, price, detail, address, city, state, zip} = req.body;
        //create a new book for sale
        const book = new Book({
            user: req.user._id,
            bookName,
            price,
            detail,
            address,
            city,
            state,
            zip,
            isActive: true
        })
        const createbook = await book.save();
        res.status(201).json(createbook);

});

const getBooks = asyncHandler(async(req, res)=>{
    // return all active books list
    Book.find({isActive: true}, (err, book)=>{
        res.status(201).json({
            book
        });
    })


});

const homeBooks = asyncHandler(async(req, res)=>{
    const {id, token} = req.body
    console.log("id is" ,id)

    //return books made by perticular user id
    Book.find({user: id}, (err, book)=>{
        res.status(201).json({
            book
        })
    })

})

export {createBook, getBooks, homeBooks}