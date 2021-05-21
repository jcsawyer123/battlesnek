
/*
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 */

const handleStart = (req, res) => {
    res.status(200).send('Start')
}

export default handleStart;