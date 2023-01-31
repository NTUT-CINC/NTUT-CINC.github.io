# 中文測試

### 上集解答

```Kotlin
fun main(){
    var score =readln().toInt()
    if(score<40){
		println("D")
    }
    else if(score<60){
		println("B")
    }
    else if(score<90){
		println("C")
    }
    else{
		println("A")
    }
}

```

大家都有做對嗎？

可能很多人會用&&限制資料的範圍，不過其實我們可以善加利用 if 判斷事物的時間順序喔。

---

## 迴圈

迴圈也是電腦程式設計中一個不可或缺的東西，想像一下今天要你顯示 hello 三遍，你會怎麼做？

```kotlin
println("Hello")
println("Hello")
println("Hello")

```

那如果要五十遍呢？

```kotlin
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
println("Hello")
```

細心的小夥伴肯定發現了，我其實只顯示 49 次而已，真的太容易出錯了對吧。

所以顯然這樣子不對，我們應該使用更好的工具，而迴圈就是讓我們可以不斷執行重複的程式碼喔。

先來教第一種寫法 while 迴圈，語法長這樣

```kotlin
while(布林值){

}

```

使用方法其實跟 if 一模一樣，只要括號內為 true，但是跟 if 不一樣，他每次執行都會先看是否為 true，只要為 true 就執行裡面的程式碼，然後再重新判斷一次。

比如剛剛說要顯示 hello 50 次，就可以這樣寫。

```kotlin
var i = 1
while(i<=50){
	println("Hello")
	i+=1
}
```

再來介紹第二種迴圈寫法，這種其實更適合剛剛的範例，因為程式碼可以更節儉，這個寫法叫做 for，長這樣。

```kotlin
for(i in a..b){

}
```

這一個寫法跟下面這個幾乎一模一樣喔，會讓我們的迴圈中有一個變數 i 可以用（當然也可以不叫 i，自己取）

```kotlin
var i = a
while(i<=b){

	i+=1
}
```

所以今天比如今天我們要輸出 N 以內的數字我們可以這樣寫

```kotlin
var n = 10
for(i in 0..n){
	println(i)
}
```

這個寫法的優點是他可以在我們遍歷整數的時候看起來更直覺漂亮，不過有些時候還是 while 比較好用，至於哪些時候，就有待讀者自己去發掘啦。

另外其實 kotlin 還有很多種迴圈寫法喔，不過這裡就不再介紹了～

### 課堂練習～

你知道 fizzbuzz 嗎？他是一個很有名的迴圈練習程式，我們來試試看吧。

總共輸出 N 行，如果行數是 3 的倍數就輸出 fizz，5 的倍數就輸出 buzz，15 的倍數就輸出 fizzbuzz，如果是以外的

比如 16 的 fizzbuzz 就是

```kotlin
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
16
```

### 輸入

一個正整數代表要 N 行的 fizzbuzz

### 輸出

輸出 N 行的 fizzbuzz
