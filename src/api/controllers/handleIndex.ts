
/*
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 */

const handleIndex = (req, res) => {
    console.log('here')
    var battlesnakeInfo = {
        apiversion: '1',
        author: 'JCSawyer',
        color: '#888888',
        head: 'default',
        tail: 'default'
    }
    res.status(200).json(battlesnakeInfo)
}

export default handleIndex;