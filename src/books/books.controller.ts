import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService){}
@Get()
async getBooks(){
    const books = await this.booksService.getBooks();
    return books;
}
@Get(':bookID')
async getBook(@Param('bookID') bookID){
    const book = await this.booksService.getBook(bookID);
    return book;
}
@Post()
async addBook(@Body() CreateBookDTO: CreateBookDTO)
{
    const book = await this.booksService.addBook(CreateBookDTO);
    return book;

}
}
