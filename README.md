# Zengin-CSV

このプロジェクトは https://github.com/zengin-code/zengin-js を使って全銀データをCSV形式に変換するためのものです。

# CSV例
```
bank_code,bank_name,bank_name_kana,bank_name_hira,branch_code,branch_name,branch_name_kana,branch_name_hira
1000,信金中央金庫,シンキンチユウオウキンコ,しんきんちゆうおうきんこ,001,北海道,ホツカイドウ,ほつかいどう
1000,信金中央金庫,シンキンチユウオウキンコ,しんきんちゆうおうきんこ,003,東北,トウホク,とうほく
1000,信金中央金庫,シンキンチユウオウキンコ,しんきんちゆうおうきんこ,004,本店,ホンテン,ほんてん
```

# Usage

```
output/zengin-data.csv
```
ご利用ください

# Update

もしzengin-jsの更新を取り込みたい場合は

```bash
# cloene this repository
npm install
npm run gen
```
