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

ポスト
```
POST: /posts
bodyParams
  text: string
  image?: file
```