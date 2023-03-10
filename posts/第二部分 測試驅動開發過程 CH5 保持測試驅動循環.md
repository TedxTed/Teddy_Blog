# 第二部分 測試驅動開發過程 CH5 保持測試驅動循環
###### tags: `測試驅動的面向對象軟件開發`
44
## 5.1簡介
- 我們怎樣在構建系統時編寫測試，然後怎樣通過測試儘早地取得有關內部品質問題的反饋
- 並且怎樣確保這些測試繼續支持變化，而不是成為進一步開發的障礙
## 5.2每個特徵都從一個驗收測試開始
- 編寫驗收測試時，只使用應用領域術語，不使用底層技術的術語->
    - 有助於理解系統應該做什麼，
    - 而不會將自己綁在任何內部實現相關的假定上，
    - 也不會讓測試因技術細節而變得複雜
- 在編寫之前編寫這樣的測試讓我們澄清目標
- 從測試開始讓我們能以用戶的角度來看系統，理解他們想要做的事，而不是實現的角度來猜測特徵
## 5.3分離測量進度的測試和捕捉回歸錯誤的測試
- 新的驗收測試描述了還未完成的工作
- 單元測試和集成測試如果想對開發團隊提供支持，就應該快速地執行並且總使通過
- 針對已完成特徵的驗收測試捕捉回歸錯誤
- 新的驗收測試代表正在進行的工作，在特徵完成之前是不會通過的
## 5.4從最簡單的成功場景開始測試
- 失敗的場景沒有為系統帶來太多價值
- 在一項特徵開始時關注失敗的場景隊士氣也不利
- 先從測試最簡單的成功場景開始->成功以後->可以先決定是先處理開發過程中注意到的可能失敗，還是繼續其他的成功場景
## 5.5編寫你願意讀的測試
- 每個測試都盡可能清楚表達系統或對象要執行的行為
- 在編寫測試時忽略測試暫時不會通過的這一事實
- 只關注他的文字，我們當作是哪些運行攝氏的支持代碼已存在的進行工作
- 測試開始很好讀時-> 開始構建支持這個測試的基礎設施->當測試如預期那樣失敗時，證明我們已經實現了足夠的支持代碼 -> 而且很清楚的出錯訊息描述了還需要做什麼
## 5.6看著測試失敗
- 若測試已預想不到的方式失敗，就表示我們的理解有誤->代表代碼可能不完整->先修正這些問題->得到正確的失敗時就會檢查訊息是否有幫助
- 堅持檢查出錯訊息的理由
    - 他檢查了我們正在編寫代碼的假定
    - 重點在於表達我們的意圖，這是開發可靠，可維護的系統基礎
- 可靠可維護的系統基礎就包括了測試和出錯訊息
## 5.7從輸入開發到輸出開發
- 從接收物不矮事件的對象開始，通過中間層，到達中心的領域模型，然後邊界對象生成外部可見的響應
## 5.8針對行為進行單元測試，而非針對方方法
- 一種常見的錯誤就是考慮針對方法進行測試
- 當我們注意力集中在被測試對象提供的特徵時會做得更好
- 被測試對象需要與他的鄰居協作，並調用多個方法
- 我們需要知道如何利用該類來實現一個目標，而不是測試所有通過其代碼的路徑
- 重要的事描述行為，而非API的特徵
    - 雖然為每個方法都寫了測試，但不能透過這些測試來理解每個對象的設計行為，即使是對象的職責是什麼，以及對象的不同方法是如何協作的
- 精心挑選測試名稱，使之能夠描述對象在測試場景的行為，這是很有幫助的
## 5.9聆聽測試
- 當發現一個特徵難以測試時，不要只問自己如何測試他，同時也要問一問為什麼他難以測試
- 如果代碼難以測試，最有可能的原因是設計需要改進
- 現在讓代碼難以測試，將來就會讓代碼難以修改
- 把編寫測試的過程當成（潛在維護問題的）早期有價值的警告，並在記憶清晰時利用這些提示來修復問題
## 5.10調整測試


