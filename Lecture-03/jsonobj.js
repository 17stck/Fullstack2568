const bookobj = {
    title: "Becoming",
    author: "Michelle Obama",
    isAvailable: false,
};

const bookJSON = JSON.stringify(bookobj);
console.log(bookJSON); // แสดงผลเป็น JSON string
console.log(typeof bookJSON); // string

const parsedBook = JSON.parse(bookJSON);
console.log(parsedBook);
console.log(parsedBook.title); // Becoming
console.log(typeof parsedBook);