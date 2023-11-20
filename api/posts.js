const router = require('express').Router()

// 1回のリクエストで返す件数
const PER_PAGE = 5

// タイムライン/おすすめ
router.get('/recommendations', (req, res) => {
  const lastId = Number(req.query.lastId ?? 0)

  const data = []

  for (let i = lastId; i > 0; i--) {
    if (data.length >= PER_PAGE) break
    data.push(createPostItem(i))
  }

  res.json(data)
})

// タイムライン/フォロー
router.get('/follows', (req, res) => {
  const lastId = Number(req.query.lastId ?? 0)

  const data = []

  for (let i = lastId; i > 0; i--) {
    if (data.length >= PER_PAGE) break
    data.push(createPostItem(i))
  }

  res.json(data)
})

// 検索
router.get('/search', (req, res) => {
  const q = String(req.query.q ?? '')
  const data = []
  data.push(createPostItem(1, q))
  data.push(createPostItem(2, q))
  data.push(createPostItem(3, q))
  data.push(createPostItem(4, q))
  data.push(createPostItem(5, q))
  res.json(data)
})

// 作成
router.post('/', (req, res) => {
  res.send('posts api')
})

module.exports = router

// ダミーデータ生成
const createPostItem = (id, text = null) => {
  return {
    id: id,
    userName: 'ユーザー' + id,
    text: text ?? 'ダミーデータなう',
  }
}
