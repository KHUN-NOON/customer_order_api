const multer = require('multer')
const path = require('path')
const fs = require('fs')

const storage = (sub_folder = null) => multer.diskStorage({
    destination: (req, file, cb) => {
        if ( sub_folder !== '' || sub_folder === null ) {
            const dir = path.join(__dirname, '../uploads' + `/${sub_folder}`)

            fs.mkdirSync(dir, { recursive: true })

            cb(null, dir)
        } else {
            const dir = path.join(__dirname, '../uploads')

            fs.mkdirSync(dir, { recursive: true })

            cb(null, dir)
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = (sub_folder) => multer({ storage: storage(sub_folder), fileFilter: fileFilter })

module.exports = upload