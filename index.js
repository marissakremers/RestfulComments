// Start in a browser at this url: http://localhost:3000/comments
const path = require('path');
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid'); //For generating ID's
const express = require('express');
const app = express();

//For stylesheet
app.use(express.static(__dirname + '/public'));

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())
// To 'fake' put/patch/delete requests:
app.use(methodOverride('_method'))
// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Fake database:
let comments = [
    {
        id: uuid(),
        username: 'Mahatma Gandhi',
        comment: 'You must be the change you wish to see in the world.'
    },
    {
        id: uuid(),
        username: 'Malcolm X',
        comment: 'The future belongs to those who prepare for it today.'
    },
    {
        id: uuid(),
        username: 'Mark Twain',
        comment: 'If you tell the truth, you don\'t have to remember anything.'
    },
    {
        id: uuid(),
        username: 'Charles Swindoll',
        comment: 'Life is ten percent what happens to you and ninety percent how you respond to it.'
    }
]

// INDEX - display all comments (GET)
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

// NEW - form rendered to create new comment (GET)
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

// CREATE - creates a new comment for server (POST)
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments');
})

// SHOW - details about one particular comment (GET using id)
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})

// EDIT - renders a form to edit a comment (GET using id)
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})

// UPDATE - updates a particular comment (PATCH using id)
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);

    //get new text from req.body
    const newCommentText = req.body.comment;
    //update the comment with the data from req.body:
    foundComment.comment = newCommentText;
    //redirect back to index (or wherever you want)
    res.redirect('/comments')
})

// DELETE- removes a single comment (DELETE using id)
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

// Where the Express server listens from (bind and listen connections on specified host/port)
app.listen(3000, () => {
    console.log("ON PORT 3000!")
})




















