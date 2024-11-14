
const fs = require('fs');



(function() {
  'use strict';

  const zenginData  = require('../node_modules/zengin-code/lib/zengin-data.js')

  
    const header = ['bank_code', 'bank_name', 'bank_name_kana', 'bank_name_hira', 'branch_code', 'branch_name', 'branch_name_kana', 'branch_name_hira']
    // ヘッダー行
    const rows =[header]; // ヘッダー行

    // CSV用のデータを整形
    // 各銀行と支店データを取得して行を追加
    for (const bankCode in zenginData) {
        const bank = zenginData[bankCode];
        
        for (const branchCode in bank.branches) {
            const branch = bank.branches[branchCode];
            rows.push([
            bank.code,
            bank.name,
            bank.kana,
            bank.hira,
            branch.code,
            branch.name,
            branch.kana,
            branch.hira
            ]);
        }
    }

    // CSVの文字列に変換
    const csvContent = rows.map(row => row.join(',')).join('\n');

    // CSVファイルに書き込み
    const path = 'output/'
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    } 
    const filename = 'zengin-code.csv'
    fs.writeFileSync(path + 'filename', csvContent);

    console.log('CSVファイルが生成されました: ' . filename);
})()

