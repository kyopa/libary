
let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.info = function() {
    return title + " " + "by" + " " + author + " " + pages + " " + "pages" + " " + isRead;
};

const card = document.querySelector(".card");

const main = document.querySelector(".main");

const harryPotter = new Book("harry Potter", "JK ROwling", "240", "Not read yet");
const dune = new Book("Dune", "Frank Herbert", "520", "Not read yet");

const zeroToOne = new Book("Zero To one", "Peter Thiel", "210", "Has been read already");
let array = [];
let div;
let k = 0,
    o = 0,
    m = 0
    y = 0,
    h = 0,
    l = 0,
    u = 0;

function addBookToLibrary(bookToAdd) {
    myLibrary.push(bookToAdd);
    div = document.createElement("div");
    div.textContent = Object.values(bookToAdd);
    div.dataset.index = k;
    k++;
    main.appendChild(div);
    
    const remove = document.createElement("button");
    remove.textContent = "remove";
    remove.dataset.index = o;
    o++;

    const read = document.createElement("p");
    read.textContent = "Read?";
    read.dataset.index = m;
    m++;
    main.appendChild(read);

    const former = document.createElement("form");
    main.appendChild(former);

    const label = document.createElement("label");
    label.dataset.index = y;
    y++;
    label.textContent = "Yes";
    label.setAttribute("for", "yes")
    const input = document.createElement("input");
    input.dataset.index = h;
    h++;
    input.setAttribute("type", "radio");
    input.setAttribute("id", "yes");
    input.setAttribute("name", "read")

    const otherLabel = document.createElement("label");
    otherLabel.dataset.index = l;
    l++;
    otherLabel.textContent = "No";
    otherLabel.setAttribute("for", "no")
    const otherInput = document.createElement("input");
    otherInput.dataset.index = u;
    u++;
    otherInput.setAttribute("type", "radio");

    input.addEventListener("click" , (e) => {
        dataIndex = e.target.dataset.index;
        bookToAdd.isRead = "Yes";
        document.querySelector(`div[data-index="${dataIndex}`).textContent = Object.values(bookToAdd);

    })
    otherInput.addEventListener("click", (e) => {
        dataIndex = e.target.dataset.index;
        
        bookToAdd.isRead = "No";
        document.querySelector(`div[data-index="${dataIndex}`).textContent = Object.values(bookToAdd);
    })
    
    otherInput.setAttribute("id", "no")
    otherInput.setAttribute("name", "read")

    former.appendChild(label);
    former.appendChild(input);
    former.appendChild(otherLabel);
    former.appendChild(otherInput);

    main.appendChild(remove);
    remove.addEventListener("click", (e) => {
        
        let dataIndex = e.target.dataset.index;
        let element = document.querySelector(`div[data-index="${dataIndex}"]`);
        let readElement = document.querySelector(`p[data-index="${dataIndex}"]`)
        let buttonElement = document.querySelector(`button[data-index="${dataIndex}"]`);
        let labelEl = document.querySelector(`label[data-index="${dataIndex}"]`)
        let inputEl = document.querySelector(`input[data-index="${dataIndex}"]`)
        inputEl.remove();
        let otherInputEl = document.querySelector(`input[data-index="${dataIndex}"]`)
        otherInputEl.remove();
        labelEl.remove();
        let otherLabelEl = document.querySelector(`label[data-index="${dataIndex}"]`)
        otherLabelEl.remove();
        buttonElement.remove();
        readElement.remove();
        element.remove();
        myLibrary.splice(dataIndex, 1);
        
    })
}






const button = document.createElement("button");
button.textContent = "NEW BOOK";
main.appendChild(button);
button.addEventListener("click", () => {
    form.style.opacity = 1;
    btn.style.opacity = 1;
    button.style.opacity = 0;
})

const btn = document.createElement("button");
btn.textContent = "ADD BOOK TO LIBRARY";
btn.style.opacity = 0;
main.appendChild(btn);

btn.addEventListener("click", () => {
    let bookTitle = document.getElementById("book").value;
    const bookAuthor = document.getElementById("author").value;
    const numOfPages = document.getElementById("pages").value;
    const readOrNot = document.getElementById("is-read").value;
    bookTitle = new Book(bookTitle, bookAuthor, numOfPages, readOrNot);
    addBookToLibrary(bookTitle);

    button.style.opacity = 1;
    btn.style.opacity = 0;
    form.style.opacity = 0;

})

let form = document.getElementById("form")
form.style.opacity = 0;
form.reset();
form.style.opacity = 0;

