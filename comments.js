//crate web server
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');
const { check, validationResult } = require('express-validator');
const { ensureAuthenticated } = require('../config/auth');

// @route   GET /comments
// @desc    Get all comments
// @access  Public
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }
);

// @route   GET /comments/:id
// @desc    Get one comment
// @access  Public
router.get('/:id', getComment, (req, res) => {
    res.json(res.comment);
}
);

// @route   POST /comments
