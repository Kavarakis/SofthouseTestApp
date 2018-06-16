import fs from 'fs';
module.exports = (req, res) => {
    let data = JSON.stringify(req.body);
    try {
        fs.writeFile('jsonFile.json', data, (err) => {
            if (err) throw err;
            res.status(200).json({
                message: 'Successfully saved on disk!',
                data: data
            });
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to write on disk',
            error: err
        });
    }
}