const express = require('express')
const mongoose = require('mongoose');

const connectDatabase = () => { 
    mongoose.connect('mongodb+srv://admin:123zxc34@cluster0.hoxv5bc.mongodb.net/?retryWrites=true&w=majority')
}