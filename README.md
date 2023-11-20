## 起動

### HTML

```
npm run dev
```

### API

```
npm run api
```

## API Doc

post: 3080

タイムライン/フォロー
```
# 一回あたり5件を返す
# lastIdが5のとき4件を返す
# lastIdが1のとき0件を返す
GET: /posts/follows?lastId={number}
```

タイムライン/おすすめ
```
GET: /posts/recommendations?lastId={number}
```

タイムライン/検索
```
GET: /posts/search?q={string}
```

ポスト
```
POST: /posts
bodyParams
  text: string
  image?: file
```