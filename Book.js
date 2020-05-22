export class Book
{

    constructor(title, author, description, pages, currentPage, read) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = 1;
        this.read = false;
    }

    readBook(page)
    {

        if (page < 1 || page > this.pages) {
            return 0;

        } else if (page >= 1 && page < this.pages) {
            this.currentPage = page;
            return 1;

        } else if (page === this.pages) {
            this.currentPage = page;
            this.read = true;
            return 1;
        }
    }

}

const firstBook = new Book("The New Organic Grower", "Eliot Coleman", "A Master's Manual of Tools and Techniques for the Home and Market Gardener, 30th Anniversary Edition", 200, 10, false);
const secondBook = new Book("The Winter Harvest Handbook", "Eliot Coleman", "Year Round Vegetable Production Using Deep-Organic Techniques and Unheated Greenhouses", 200, 10, false);
const thirdBook = new Book("How to Grow More Vegetables", "John Jeavons", "Than You Ever Thought Possible on Less Land with Less Water Than You Can Imagine", 200, 10, false);

export const books = [firstBook, secondBook, thirdBook];





