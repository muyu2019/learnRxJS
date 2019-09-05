# RxJS

## 一、 通过一个例子初识 RxJS

## 二、 什么是RxJS

### 2.1 对数据和数据流的理解

- 生活和工作中无时不刻和数据打交道
- 数据的生产者、数据的消费者
- 生活中的一些数据流，早上地铁的限流(数据流的创建、合并、回压控制、)
 
### 2.2 RxJS

#### ReactiveX http://reactivex.io/

> ReactiveX is a combination of the best ideas from the Observer pattern, the Iterator pattern, and functional programming
 
 RxJS Reactive Extensions Library for JavaScript

## 三、要学习的内容有哪些

### Observable (生产者，定义如何生产数据)

> represents the idea of an invokable collection of future values or events

### Observer (消费者，定义如何消费数据)

> is a collection of callbacks that knows how to listen to values delivered by the Observable

### Subscription ()

> represents the execution of an Observable, is primarily useful for cancelling the execution 

### Operators

> are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, reduce, etc.

- 创建类操作符
- 合并类操作符
- 辅助类操作符
- 过滤类操作符
- 异常错误处理类操作符

### Subject (进阶)

> is the equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.

### Schedulers (进阶)

> are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.

## 几个实际的案例

### 移动div

### api请求

### 接口错误处理

## 推荐

- ReactiveX: http://reactivex.io/
- RxJS: https://rxjs-dev.firebaseapp.com
- 深入浅出RxJS