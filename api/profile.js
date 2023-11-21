const router = require('express').Router()

// タイムライン/おすすめ
router.get('/', (req, res) => {
  const data = createProfile()
  res.json(data)
})

module.exports = router

// ダミーデータ生成
const createProfile = () => {
  return {
    id: id,
    userName: 'ダミーユーザー',
    imageUrl: 'https://placehold.jp/150x150.png',
  }
}
