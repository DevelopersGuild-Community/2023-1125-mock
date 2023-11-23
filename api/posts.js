const router = require('express').Router()

// 1回のリクエストで返す件数
const PER_PAGE = 5

// タイムライン/おすすめ
router.get('/recommendations', (req, res) => {
  const lastId = Number(req.query.lastId ?? 100)

  const data = []

  for (let i = lastId - 1; i > 0; i--) {
    if (data.length >= PER_PAGE) break
    data.push(createPostItem(i, 'おすすめポスト'))
  }

  // 1秒sleep
  setTimeout(() => {
    res.json(data)
  }, 1000)
})

// タイムライン/フォロー
router.get('/follows', (req, res) => {
  const lastId = Number(req.query.lastId ?? 100)

  const data = []

  for (let i = lastId - 1; i > 0; i--) {
    if (data.length >= PER_PAGE) break
    data.push(createPostItem(i))
  }

  // 1秒sleep
  setTimeout(() => {
    res.json(data)
  }, 1000)
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

  // 1秒sleep
  setTimeout(() => {
    res.json(data)
  }, 1000)
})

// 詳細
router.get('/:postId', (req, res) => {
  // 1秒sleep
  setTimeout(() => {
    res.json({
      id: String('1'),
      userName: 'ユーザー' + '1',
      userImageUrl: 'https://placehold.jp/150x150.png',
      postText: '詳細データなう',
      postImageUrl: 'https://placehold.jp/600x600.png',
    })
  }, 1000)
})

// 作成
router.post('/', (req, res) => {
  // 1秒sleep
  setTimeout(() => {
    res.json({
      id: '999',
    })
  }, 1000)
})

module.exports = router

// ダミーデータ生成
const createPostItem = (id, text = null) => {
  return {
    id: String(id),
    userName: 'ユーザー' + id,
    userImageUrl: 'https://placehold.jp/150x150.png',
    postText: text ?? 'ダミーデータなう',
    postImageUrl: 'https://placehold.jp/600x600.png',
  }
}
