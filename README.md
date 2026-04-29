# 免費廣告增量健檢測驗

這是一個可部署到 GitHub Pages 的純靜態網站 MVP。使用者可以匿名完成 11 題測驗，快速判斷廣告帳戶是否可能存在 attribution bias、retargeting cannibalization、低價值轉換、資料量不足，以及是否具備 incrementality test 的基本條件。

## 檔案結構

```text
.
├── index.html
├── quiz.html
├── result.html
├── style.css
├── script.js
└── README.md
```

## 本機預覽

可以直接用瀏覽器開啟 `index.html`，也可以在專案資料夾啟動簡單的靜態伺服器：

```bash
python3 -m http.server 8088
```

接著打開：

```text
http://127.0.0.1:8088/
```

## 部署到 GitHub Pages

1. 將這些檔案放在 GitHub repository 的 root，或放在 GitHub Pages 指定發布的資料夾。
2. 到 GitHub repository 的 `Settings` → `Pages`。
3. 在 `Build and deployment` 選擇 `Deploy from a branch`。
4. 選擇要發布的 branch，例如 `main`。
5. 選擇發布資料夾，例如 `/root`。
6. 儲存後等待 GitHub Pages 完成部署。

如果這個專案放在既有網站的子資料夾中，也可以用子路徑方式部署，例如：

```text
https://你的帳號.github.io/free-ad-incrementality-checkup/
```

## 替換 GA4 Measurement ID

開啟 `script.js`，將下列設定改成你的 GA4 Measurement ID：

```js
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
```

例如：

```js
const GA_MEASUREMENT_ID = "G-ABC1234567";
```

如果維持 `G-XXXXXXXXXX`，網站不會載入 GA4，也不會報錯。

## 事件追蹤

網站支援 GA4 `gtag` event tracking，並透過 `trackEvent(eventName, params)` 統一送出事件。

目前追蹤事件：

- `page_view`：每個頁面載入時觸發。
- `start_checkup_click`：首頁點擊「開始免費健檢」時觸發。
- `quiz_completed`：完成測驗時計算分數並觸發。
- `consultation_cta_click`：結果頁點擊諮詢 CTA 時觸發。

### GA4 收集資料範圍

目前程式只送出匿名事件與少量結果摘要，不送出個別答案或個資。

| 事件 | 送出的參數 | 用途 |
| --- | --- | --- |
| `page_view` | `page_path`, `page_title` | 了解使用者看過哪些頁面。 |
| `start_checkup_click` | `destination` | 了解首頁 CTA 點擊量。 |
| `quiz_completed` | `score`, `level` | 了解完成測驗後的分數與結果類型。 |
| `consultation_cta_click` | `destination` | 了解結果頁預約 CTA 點擊量。 |

目前不送出：

- 每一題的個別答案。
- email、姓名、電話、公司名稱。
- 廣告帳戶 ID、截圖、營收數字。
- Google Ads、Meta Ads 或 MMP 資料。
- 可識別特定個人的自訂 user ID。

## 隱私與安全

- 不需要登入。
- 不收 email。
- 不收公司名稱。
- 不上傳任何廣告資料。
- 不串接 Google Ads、Meta Ads 或 MMP API。
- 不使用後端與資料庫。
- 不使用 `localStorage` 儲存答案。
- 不把個別答案放在 URL。
- 結果只在瀏覽器端即時計算。
- URL 只會傳遞原始總分 `score` 與結果層級 `level`，頁面上會換算成 0–100 的風險分數顯示。
- 不使用 API key。
- 不使用第三方表單。
- 若啟用 GA4，請在正式網站加入隱私聲明，說明匿名事件追蹤用途。

## 調整題目與結果

所有題目、選項、分數與結果文案都集中在 `script.js` 的 `CHECKUP_CONFIG` 設定區。未來調整測驗內容時，優先修改該設定即可。

## 未來可擴充項目

- 加入 Email capture。
- 產出 PDF。
- 串接 Calendly。
- 加入更進階的 scoring model。
- 加入多語系。
