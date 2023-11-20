const router = require('express').Router()

router.get('/recommendations', (req, res) => {
  const page = Number(req.query || '1')


  res.send('posts api')
})

router.get('/recommendations', (req, res) => {
  res.send('posts api')
})

router.post('/', (req, res) => {
  res.send('posts api')
})

module.exports = router

// ダミーデータ生成
const createPostItem = (id) => {
  return {
    id: id,
    userName: 'ユーザー' + id,
    text: 'ダミーデータなう'
  }
}
