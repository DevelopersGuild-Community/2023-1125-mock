const router = require('express').Router()

// プロフィール
router.get('/', (req, res) => {
  console.log('プロフィール')
  const data = createProfile()
  res.json(data)
})

module.exports = router

// ダミーデータ生成
const createProfile = () => {
  return {
    id: 999,
    userName: 'ダミーユーザー',
    userImageUrl: 'https://placehold.jp/150x150.png',
  }
}
