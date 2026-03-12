# 快速修改指南（中文）

## 先回答你最關心的問題

`assets/js/content.js` **不是 HTML**，也**不是所見即所得**編輯器。

它比較像這樣：
- 你在填一份網站資料表
- 你改名字、文字、連結、照片路徑
- 網頁會自動把這些資料排版成網站

所以平常你**不用去改 `index.html`**。

---

## 你通常只會改這個檔案

- `assets/js/content.js`

例如這段：

```js
profile: {
  name: 'Yi Yang',
  title: 'Research Fellow',
  affiliation: 'Academia Sinica',
  photo: 'assets/img/profile-placeholder.svg'
}
```

你之後只要把它改成：

```js
profile: {
  name: 'Yi Yang',
  title: 'Research Fellow',
  affiliation: 'Academia Sinica',
  photo: 'assets/img/yi-yang.jpg'
}
```

就可以了。

---

## 這次新增了什麼

### 1. 首頁機構 icon 連結
你可以在 `homeAffiliations` 裡改：
- 中研院物理所
- 成大物理系
- 以及未來新增的合聘單位

### 2. 實驗室介紹
你可以在 `labIntro` 裡改整個 lab 的介紹文字。

### 3. member 卡片下面的論文
每位學生或 alumni 都可以加 `papers`。
有網址就會變成可點連結；沒有網址就只顯示標題文字。

---

## 加照片的方法

### 你的照片
把檔案放在：
- `assets/img/`

例如：
- `assets/img/yi-yang.jpg`

然後去 `content.js` 改：

```js
photo: 'assets/img/yi-yang.jpg'
```

### 成員照片
把檔案放在：
- `assets/img/members/`

例如：
- `assets/img/members/alice-chen.jpg`

然後在對應 member 那一筆改：

```js
{
  name: 'Alice Chen',
  photo: 'assets/img/members/alice-chen.jpg',
  topic: 'Detector simulation',
  years: '2025-present',
  note: 'PhD student'
}
```

如果照片路徑沒填對，網站會自動顯示 placeholder，不會整頁壞掉。

---

## 怎麼加學生論文

在 member 那一筆底下，加上 `papers`：

```js
{
  name: 'Alice Chen',
  photo: 'assets/img/members/alice-chen.jpg',
  topic: 'Detector simulation',
  years: '2025-present',
  note: 'PhD student',
  papers: [
    { title: 'First paper title' },
    { title: 'Second paper title', url: 'https://example.org/paper' }
  ]
}
```

規則是：
- 只有 `title`：只顯示文字
- 有 `url`：標題會變成可以點的連結

---

## 怎麼改首頁的機構 icon 連結

改 `homeAffiliations`：

```js
homeAffiliations: [
  {
    icon: 'iop',
    label: 'Institute of Physics, Academia Sinica',
    subtitle: 'Official site',
    url: 'https://www.phys.sinica.edu.tw/index_en.php'
  },
  {
    icon: 'ncku',
    label: 'Department of Physics, National Cheng Kung University',
    subtitle: 'Official site',
    url: 'https://phys.ncku.edu.tw/en/'
  },
  {
    icon: 'plus',
    label: 'Future Joint Appointment',
    subtitle: 'Reserved space for another institution',
    placeholder: true
  }
]
```

如果以後要新增學校，可以直接複製一筆再改名字和網址。

---

## 在 GitHub 上怎麼改

1. 把整個網站資料夾上傳到 GitHub repository
2. 打開 `assets/js/content.js`
3. 按右上角鉛筆圖示
4. 修改文字
5. 按 Commit changes
6. GitHub Pages 會自動更新

---

## 你最常會改的地方

### 1. 個人資料
- `profile`

### 2. 最新 paper
- `latestNews`

### 3. 首頁機構連結
- `homeAffiliations`

### 4. 實驗室介紹
- `labIntro`

### 5. 成員名單與照片
- `members`

### 6. member 底下的論文
- `members` 裡每個人的 `papers`

### 7. 論文列表
- `publications`

### 8. 地圖位置
- `mapLocations`

### 9. 聯絡資訊
- `contact`

---

## 修改時要注意

請保留：
- 單引號 `'   '`
- 逗號 `,`
- 大括號 `{ }`
- 中括號 `[ ]`

你可以放心改的通常是：
- 引號裡面的文字
- 連結網址
- 名單內容
- 照片檔名

---

## 我建議你的做法

第一步先用這個版本上 GitHub Pages。
這樣你之後只要改 `content.js` 和照片檔，就能維護網站。

等你內容穩定後，我再幫你做第二步：
- 幫你把 members / publications 換成正式資料
- 幫你把網址接到正式 domain
- 如果你想讓更新更像填表單，我也可以再幫你把 `content.js` 改得更簡單
