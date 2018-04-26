# Project Euler Problem #3
[![CircleCI](https://circleci.com/gh/nhunhea/project-euler-problem-3.svg?style=svg)](https://circleci.com/gh/nhunhea/project-euler-problem-3)

## Largest Prime Factor
[source] : https://projecteuler.net/problem=3
Yaitu menemukan faktor prima terbesar dari suatu bilangan.  Contoh : faktor dari 13195 yaitu 5, 7, 13 dan 29. Maka faktor prima terbesar yaitu 29.

## Cara kerja
Project ini menggunakan metode brute-force, dengan i = 2, yaitu bilangan prima pembagi terkecil. kemudian digunakan for untuk mengincrement i, yaitu faktor. didalam for ada if untuk memeriksa apakah bilangan(num) habis dibagi i (faktor). Jika iya maka bilangan(num) dibagi dengan i (faktornya). lalu ada var x untuk membantu menyimpan nilai i. for akan berhenti jika i (faktor) sudah lebih besar atau sama dengan bilangan (num). lalu nilai yang dikerluarkan adalah nilai x yang menyimpan i (faktor) tadi.

## Cara testing
Pada direktori test terdapat 5 file test. Masing-masing bernilai yaitu 
```
600851475143 dengan faktor prima terbesar 6857
13195 dengan faktor prima terbesar 29
88 dengan faktor prima terbesar 11
1658 dengan faktor prima terbesar 829
28 dengan faktor prima terbesar 7
```
Langkah testing program
``` 
npm init
npm test
```
sebelumnya instal **jest** terlebih dahulu
``` npm install --save-dev jest ```

## Hasil testing 
```
╭─evania@Evanias-MacBook-Air ~/Documents/project-euler-problem-3  ‹master*›
╰─$ npm test
> project-euler-problem-3@1.0.0 test /Users/evania/Documents/project-euler-problem-3
> jest
 PASS  test/problem34.test.js
 PASS  test/problem33.test.js
 PASS  test/problem3.test.js
 PASS  test/problem35.test.js
 PASS  test/problem32.test.js
Test Suites: 5 passed, 5 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.154s, estimated 2s
```
