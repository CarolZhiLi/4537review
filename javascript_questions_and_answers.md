# Quiz 6: JavaScript misc 

## Question 1
**What could become the type of variable `v` after the execution of the JavaScript code snippet below?**

```js
let v = sessionStorage.getItem("key");
```

### Correct Answer
**string or null**

### Explanation
`sessionStorage.getItem("key")` returns:
- A **string** if the key exists.
- **null** if the key does not exist.

It never returns `undefined`.

---

## Question 2
**What is the correct way to write a JavaScript array?**

### Correct Answer
```js
let colors = ["red", "green", "blue"];
```

### Explanation
Arrays in JavaScript use **square brackets** with elements separated by commas.  
Other given options are invalid JavaScript syntax.

---

## Question 3
**What will the console log?**

```js
console.log(test);
let s = 1;
for (let i = 4; i < 40; ++i) {
    s = s * 2 + i;
}
var test = 1;
```

### Correct Answer
```
undefined
```

### Explanation
`var` declarations are **hoisted** to the top but initialized as `undefined`.  
When `console.log(test)` runs, the variable exists but has not yet been assigned `1`.

---

## Question 4
**Which one of these HTTP methods can be used to send an API request of size 1GB to a server?**

### Correct Answer
**POST**

### Explanation
- **GET** appends data to the URL, which has size limits (usually a few KB).
- **POST** sends data in the **request body**, making it suitable for large payloads.

---

## Question 5
**What will the console log?**

```js
setTimeout(function () {
    console.log(1);
    setTimeout(function () {
        console.log(3);
    }, 0);
    console.log(2);
}, 500);
console.log(4);
```

### Correct Answer
```
4
1
2
3
```

### Explanation
1. `console.log(4)` runs immediately (synchronous).
2. After 500ms, the first `setTimeout` runs: logs `1`, then schedules `3`.
3. Logs `2` next.
4. Finally, the inner `setTimeout` (0ms) logs `3`.

---

## Question 6
**The external JavaScript file (myJs.js) must contain the `<script>` tag.**

### Correct Answer
**False**

### Explanation
External JS files should **not** include `<script>` tags.  
They contain only JavaScript code and are linked via:

```html
<script src="myJs.js"></script>
```

---

## Question 7
**What will be logged on the console?**

```js
function hiGenerator(name) {
  return function () {
    console.log("Hi " + name);
  };
}
console.log(hiGenerator("Elan")());
```

### Correct Answer
```
Hi Elan
undefined
```

### Explanation
1. `hiGenerator("Elan")` returns a function that logs `"Hi Elan"`.
2. That function is immediately executed, logging `"Hi Elan"`.
3. The function itself returns `undefined`, which is then logged by the outer `console.log()`.


**Question 8:** What would be the value of the variable `counter` after the user has pressed the button five times?

```html
<input id="inputid" type="button"> click </input>
<script>
    let counter = 1;
    function foo() {
        counter++;
        console.log(counter);
    }
    document.getElementById('inputid').onclick = foo();
    console.log(counter);
</script>
```

*   **Answer:** The final value of `counter` will be **2**.
*   **Explanation:** The line `document.getElementById('inputid').onclick = foo();` contains a common mistake. The parentheses `()` after `foo` cause the function to be **executed immediately** when the script loads, not when the button is clicked. This increments `counter` from 1 to 2. The *return value* of `foo` (which is `undefined`) is then assigned to the `onclick` event handler. Because the handler is `undefined`, clicking the button does nothing. The value of `counter` remains 2, no matter how many times the button is pressed.


**Question 9:** An API request made by which one of these HTTP methods can be bookmarked?

*   GET
*   POST
*   POST and GET

*   **Answer:** **GET**
*   **Explanation:** GET requests include all necessary data in the URL's query parameters. Since a bookmark is just a saved URL, GET requests can be bookmarked and re-executed perfectly. POST requests send data in the request body, which is not part of the URL and cannot be bookmarked.


**Question 10:** What is the output of the code snippet below?

```javascript
<script>
    if (10 > 9) {
        let a = 999;
        a++;
    }
    console.log(a);
</script>
```

*   **Answer:** It will throw a **`ReferenceError`**.
*   **Explanation:** The `let` keyword creates a **block-scoped** variable. This means the variable `a` only exists within the curly braces `{}` of the `if` statement. The `console.log(a)` statement is outside of that block, so when it tries to access `a`, it cannot find it in its scope, resulting in a `ReferenceError: a is not defined`.

**Question 11:** What will the console log?

```javascript
setTimeout(function () {
    let a = 2;
    console.log(1);
    setTimeout(function () {
        console.log(2);
    }, 18849);
    console.log(3);
}, 18850);

if (a === 2) {
    console.log(4);
}

for (let i = 0; i < 100000; i++) {}
```

*   **Answer:** `uncaught ReferenceError: a is not defined`
*   **Explanation:** `setTimeout` is asynchronous. The JavaScript engine schedules the function to run later and immediately executes the next synchronous code, which is the `if (a === 2)` block. The variable `a` is declared with `let` *inside* the `setTimeout` callback, so it is not in scope where the `if` statement is. The script tries to access a non-existent variable and crashes with a `ReferenceError` before any timers can complete.

**Question 12:** What will the console log?

```javascript
function foo(n) {
    var s = 0;
    for (let i = 0; i < n; i++) {
        s += i;
    }
}

console.log(foo(3));
```

*   **Answer:** `undefined`
*   **Explanation:** The function `foo(3)` correctly calculates that the sum `s` is 3 (0 + 1 + 2). However, the function `foo` is missing a `return` statement. In JavaScript, a function that does not explicitly return a value implicitly returns `undefined`. Therefore, `console.log` prints `undefined`.

**Question 13:** What will the following code return?

```javascript
if (m = []) {
    console.log("Green");
} else {
    console.log("BLue");
}
var m = 10;
```

*   **Answer:** `Green`
*   **Explanation:**
    1.  **Hoisting:** The declaration `var m;` is hoisted to the top of the scope, so `m` is `undefined` when the `if` statement is evaluated.
    2.  **Assignment:** The condition `(m = [])` is an **assignment**, not a comparison. It assigns an empty array `[]` to `m`.
    3.  **Truthiness:** The value of an assignment expression is the value that was assigned. Therefore, the `if` statement becomes `if ([])`. In JavaScript, an empty array is an object, and all objects are "truthy".
    4.  Since the condition is true, the first block is executed, logging "Green".

**Question 14:** What will be logged on the console?

```html
<!DOCTYPE html>
<html>
<body>
<script>
function foo() {
    const a = 0;
    console.log(a);
    ++a;
}
</script>
</body>
</html>
```

*   **Answer:** Nothing will be logged on the console.
*   **Explanation:** The function `foo()` is **defined**, but it is never **called** or invoked anywhere in the script. Since the function is never executed, the code inside it, including `console.log(a)`, never runs.

**Question 15:** What is the correct JavaScript syntax to change the content of the HTML element `<p id="demo">This is a demonstration.</p>`?

*   `#demo.innerHTML = "Hello World!";`
*   `document.getElementsByName("p").innerHTML = "Hello World!";`
*   `document.getElement("p").innerHTML = "Hello World!";`
*   **`document.getElementById("demo").innerHTML = "Hello World!";`**

*   **Answer:** `document.getElementById("demo").innerHTML = "Hello World!";`
*   **Explanation:** This is the standard method for selecting a unique element by its `id` and then using the `.innerHTML` property to change its content. The other options use incorrect syntax or non-existent methods.


# Quiz 7: NodeJS, HTTP methods, fs, DB
**Question 1:** Which one of these modules is not a built-in module in Node.js?
*   http
*   url
*   **mysql**
*   fs

**Answer:** `mysql`. It's a third-party package that must be installed.

---

**Question 2:** Which one of these modules is used in Node.js for handling the file system?
*   os
*   path
*   file
*   **fs**

**Answer:** `fs` (File System).

**Question 3:** Which block of code will send the client 'You are connected!' when they connect to `http://localhost:8000`?

*   **Answer:**
    ```javascript
    const http = require('http');
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('You are connected!');
        res.end();
    }).listen(8000);
    ```
*   **Explanation:** This is the correct syntax. It uses the **response (`res`)** object to write the header and body, uses the correct status code (`200`), and listens on the correct port (`8000`). Other options incorrectly use the request (`req`) object, provide the port as the status code, or fail to specify a port in `.listen()`.

**Question 4:** Given `const address = "http://localhost:8000/admin.html?user=123";` and `const parsed = url.parse(address, true);`, what line of code will print out `/admin.html`?
*   `console.log(parsed.path)`
*   **`console.log(parsed.pathname)`**
*   `console.log(parsed.search)`
*   `host`

**Answer:** `console.log(parsed.pathname)`. The `pathname` property contains only the path portion of the URL, without the query string.

**Question 5:** Using a GET request to send over user credentials (username and password) to the server is considered safe and ok.
*   **Answer:** False.
*   **Explanation:** This is highly insecure because credentials appear in the URL, browser history, and server logs. Sensitive data should be sent in the body of a POST request over HTTPS.

---

**Question 6:** After creating a user profile, you want to edit your information. Which HTTP request is appropriate for this task?
*   **Answer:** PUT.
*   **Explanation:** `PUT` is the standard HTTP method for updating an existing resource.

**Question 7:** Which of the following statements is false?
*   There are no size limits in data for both GET and POST.
*   GET is used for requesting data and POST is for sending data from the server.
*   ...

*   **Answer:** Both statements listed are false.
*   **Explanation:** GET requests have a URL length limit (around 2000 characters). POST requests are for sending data **from the client to the server**, not the other way around.

**Question 8:** In order to retrieve information about the database, having the following code on the *client-side* is sufficient and is considered good practice.
```javascript
const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});
// ...
```
*   **Answer:** False.
*   **Explanation:** This is extremely dangerous. Placing database credentials on the client-side would expose them to anyone viewing the page source. Database connections must always be handled on the server-side.

**Question 9:** Which block of code will successfully delete the file 'file.txt'?

*   **Answer:**
    ```javascript
    fs.unlink('file.txt', (err) => {
      if (err) throw err;
      console.log('file.txt was deleted');
    });
    ```
*   **Explanation:** The correct function in Node.js's native `fs` module for deleting a file is `fs.unlink()`. Other function names like `remove` or `delete` do not exist in the core module.

**Question 10:** Given a project with `index.js` in the root and `math.js` inside a `modules` folder, what statements can be used to import `math.js` into `index.js`?
*   **Answer:** Both `const math = require('./modules/math.js')` and `const math = require('./modules/math')` are correct.
*   **Explanation:** The `./` indicates a relative path. Node.js's `require` function can resolve the module with or without the `.js` extension.


# Quiz 8: Promise basic
**Question 1:** Select native async functions in Vanilla JS below.

1.  `setTimeout()`
2.  `setInterval()`
3.  `forEach()`
4.  `console.log()`

*   **Answer:** `1, 2`
*   **Explanation:** `setTimeout` and `setInterval` are asynchronous. They hand a task off to the browser's timer API and allow the rest of the JavaScript code to continue executing without waiting. `forEach` and `console.log` are synchronous; they block execution until they are complete.

**Question 2:** What is the correct output order?

```javascript
const fn1 = () =>
    new Promise((resolve, reject) => {
        console.log(1);
        resolve('success');
    });

fn1().then((res) => {
    console.log(res);
});

console.log('start');
```

*   **Answer:** `1`, `start`, `success`
*   **Explanation:**
    1.  The function passed to the `new Promise` constructor (the "executor") runs **synchronously**. So, `console.log(1)` runs first.
    2.  `resolve('success')` fulfills the promise and queues the `.then()` callback to run later in the microtask queue.
    3.  Execution continues with the next synchronous line: `console.log('start')`.
    4.  After the main script finishes, the event loop processes the microtask queue, running the `.then()` callback and logging `success`.

**Question 3:** What is the correct output order?

```javascript
const promise = new Promise((resolve, reject) => {
    console.log(1);
    console.log(2);
});

promise
    .then(() => {
        console.log(3);
    })
    .then(() => {
        console.log(4);
    });
console.log(5);
```

*   **Answer:** `1`, `2`, `5`
*   **Explanation:** The promise executor runs synchronously, logging `1` and `2`. However, `resolve()` is never called, so the promise remains in the **pending** state forever. The `.then()` callbacks are only executed when a promise is fulfilled, so they will never run. After the promise is created, the synchronous `console.log(5)` is executed.

**Question 4:** Which choice about Promise is incorrect?
*   A Promise is an object representing the eventual completion or failure of an asynchronous operation.
*   Essentially, a Promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
*   **A pending promise can not be fulfilled with a value or rejected with a reason (error).**
*   A Promise is always in one of the three states: I. pending, II. fulfilled, III. rejected.

*   **Answer:** The incorrect statement is "A pending promise can not be fulfilled with a value or rejected with a reason (error)".
*   **Explanation:** This is incorrect because the entire point of a promise being in the `pending` state is that it is waiting to be either fulfilled or rejected.


**Question 5:** What is the output of the code?

```javascript
new Promise(function (resolve, reject) {
    console.log('Promise');
    resolve();
})
.then(function () {
    console.log('Resolve 1');
})
.then(function () {
    console.log('Resolve 2');
});
console.log('console.log');
```

*   **Answer:**
    ```
    Promise
    console.log
    Resolve 1
    Resolve 2
    ```
*   **Explanation:** The Promise executor runs synchronously (`Promise`). Then, the next synchronous code runs (`console.log`). Finally, after the main script is done, the chained `.then()` callbacks in the microtask queue are executed in order (`Resolve 1`, `Resolve 2`).

**Question 6:** Which is the correct output of the code?

```javascript
let promiseObj = new Promise((resolve, reject) => {
    resolve('hello 1');
    resolve('hello 2');
    resolve('hello 3');
    reject('error');
});

promiseObj.then((data) => console.log(data));
```

*   **Answer:** `hello 1`
*   **Explanation:** A promise can only be settled (fulfilled or rejected) **once**. The first call to `resolve('hello 1')` fulfills the promise. All subsequent calls to `resolve` and `reject` are ignored. The `.then()` handler therefore receives the first resolved value.

**Question 7:** What is the state of `promiseObj` after the code below gets executed?

```javascript
let promiseObj = new Promise((resolve, reject) => {
    resolve('hello 1');
    resolve('hello 2');
    resolve('hello 3');
    reject('error');
});

promiseObj.then((data) => console.log(data));
```

*   **Answer:** `fulfilled`
*   **Explanation:** A promise settles only once. The first call, `resolve('hello 1')`, immediately moves the promise's state from `pending` to `fulfilled`. All subsequent calls are ignored, so the final state remains `fulfilled`.

**Question 8:** Which function doesn't return a Promise?

```javascript
// Option 1
function fn1() {
    return Promise.resolve('hello world');
}

// Option 2
async function fn2() {
    return 'hello world';
}

// Option 3
function fn4() {
    return new Promise((resolve, reject) => {
        reject('hello world');
    });
}

// Option 4
function fn3() {
    new Promise(() => {
        return 'hello world';
    });
}
```

*   **Answer:** `fn3`
*   **Explanation:** `fn1`, `fn2` (async functions always return promises), and `fn4` all explicitly return a promise. `fn3` creates a promise but **does not return it**. Since it has no `return` statement, it implicitly returns `undefined`.

**Question:** What is the correct order of the output?

```javascript
setTimeout(() => {
    console.log(1);
}, 1);

console.log(2);

new Promise((resolve) => {
    console.log(3);
    resolve();
}).then(() => {
    console.log(4);
});
```

*   **Answer:** `2, 3, 4, 1`
*   **Explanation:**
    1.  `setTimeout` schedules a **macrotask**.
    2.  `console.log(2)` runs synchronously. Output: `2`.
    3.  The `Promise` executor runs synchronously. Output: `3`.
    4.  The `.then()` callback is scheduled as a **microtask**.
    5.  After the main script, the event loop runs all **microtasks** first. Output: `4`.
    6.  Finally, the event loop runs the **macrotasks**. Output: `1`.

**Question 10:** What is the correct output of the code below?

```javascript
function timer(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(time);
        }, time);
    });
}

const timers = [timer(1000), timer(1000), timer(3000), timer(4000)];

Promise.race(timers).then((res) => {
    console.log(res);
});
```

*   **Answer:** `1000`
*   **Explanation:** `Promise.race()` resolves or rejects as soon as the **first** promise in the array settles. In this case, the two `timer(1000)` promises are the fastest. As soon as one of them resolves after 1000ms, the race is over, and the `.then()` block receives its value, `1000`.

**Question 11:** What type would this function return upon invocation?

```javascript
function fun() {
    new Promise(() => {
        return 'hello world';
    })
}
```

*   **Answer:** `undefined`
*   **Explanation:** The function `fun` creates a `Promise` but does not have a `return` statement for it. Functions in JavaScript that do not have an explicit `return` statement implicitly return `undefined`.

# Quiz 9: Web architecture pattern

**Question 1:** In the context of web application architecture, what is the primary focus?
*   **Answer:** Reliability, scalability, security, ease of implementation, and modularity.

**Question 2:** Which of the following is a direct benefit of studying architectural patterns?
*   **Answer:** Helps evaluate efficiency, robustness, security, and maintenance costs.

**Question 3:** A monolithic architecture is typically simple to build and deploy but can become hard to scale and maintain as complexity grows.
*   **Answer:** True.

**Question 4:** In a Microservice Architecture, how do services typically communicate with each other?
*   **Answer:** Via API calls.

**Question 5:** Large companies like Netflix or Discord often use a single, unchanging architectural pattern throughout their existence.
*   **Answer:** False.

**Question 6:** In a Microservice Architecture, if one service fails (e.g., the user profile service), what is a likely consequence for other services?
*   **Answer:** Other services can potentially continue operating if they don't depend on the failed one.

### Q26: Architectural Patterns

**Question 7:** In the API-centric architecture, what is the common format for data payloads in API responses?
*   **Answer:** JSON.

**Question 8:** Match the architectural pattern with its primary characteristic.
*   **Answer:**
    *   Trigger actions asynchronously via events â†’ **Event-Driven Architecture**
    *   System broken into small, independent services â†’ **Microservice Architecture**
    *   Enforces separation of concerns (UI, logic, data) â†’ **Layered Architecture**
    *   All components bundled in a single deployable unit â†’ **Monolithic Architecture**

**Question 9:** Which architecture is most suitable for a large-scale system like Netflix or Amazon that requires high scalability and independent team ownership?
*   **Answer:** Microservices Architecture.

**Question 10:** Select the advantages of a Microservice Architecture.
*   **Answer:**
    *   Enables adding new components without shutting down the entire system.
    *   Allows different teams to work on different services.
    *   Improves scalability and flexibility.

**Question 11:** Place the following architectural patterns in the order that a growing tech startup would typically adopt them, from earliest to latest.
*   **Answer:**
    1.  Monolithic
    2.  Layered
    3.  Microservices

**Question 12:** In a Layered (n-Tier) Architecture, what is the primary purpose of separating the data access layer from the business logic layer?
*   **Answer:** To ensure regulatory compliance, testability, and maintainability.

**Question 13:** The Model-View-Controller (MVC) pattern is best for web frameworks when...
*   **Answer:** the core business logic must be completely decoupled from all external systems.

**Question 14:** What is a key development benefit of an API-centric, service-based architecture?
*   **Answer:** It enables a new service to be written in a different technology stack (e.g., Node.js) and hooked up to an existing app (e.g., Django).

**Question 15:** In a monolithic architecture, adding a new feature often requires recompiling and redeploying the entire application.
*   **Answer:** True.

**Question:** What is the primary purpose of the Hexagonal Architecture (Ports & Adapters) pattern?
*   **Answer:** To decouple core business logic from external systems like databases and UIs.
*   **Explanation:** The goal of this pattern is to isolate the application's core logic from outside concerns (like the database, UI, or third-party APIs). This makes the core logic independent of technology choices, easier to test, and more maintainable.
# Quiz 5: Local Storage & JSON 

## Question 1
**Which is the correct method to access a value 'string' stored in localStorage with the key 'token'?**

- `window.localStorage.getItem('string');`
- `window.localStorage.getItem('token');`
- `window.localStorage.get('string');`
- `window.localStorage.get('token');`

### Correct Answer
`window.localStorage.getItem('token');`

### Explanation
Use `localStorage.getItem(key)` to retrieve a value by its key. The key is `'token'`; `getItem` returns the stored string or `null` if missing. There is no `get()` method on `localStorage`.

---

## Question 2
**Which of the following methods is not a built-in method for parsing and/or converting values to JSON?**

- `JSON.parse()`
- `JSON.convert()`
- `JSON.stringify()`
- `None of the above`

### Correct Answer
`JSON.convert()`

### Explanation
The JSON API provides `JSON.parse()` (string -> object) and `JSON.stringify()` (object -> string). `JSON.convert()` does not exist.

---

## Question 3
**Which is the correct method to clear all data from local storage?**

- `window.localStorage.removeAll();`
- `window.localStorage.clearAll();`
- `window.localStorage.clear();`
- `window.localStorage.remove();`

### Correct Answer
`window.localStorage.clear();`

### Explanation
`clear()` removes all keys in the origin's local storage. To remove a single key, use `removeItem(key)`. Methods like `removeAll()`, `clearAll()`, or `remove()` do not exist.
emoveItem(key). Methods like 
emoveAll(), clearAll(), or 
emove() do not exist.

---

## Question 4
**What is the output of this code?**

```js
window.localStorage.setItem('value', 'string');
const str = window.localStorage.getItem('value');
console.log(str);
```

- `key`
- `string`
- `value`
- `undefined`

### Correct Answer
`string`

### Explanation
`getItem('value')` returns the stored string `'string'`. `getItem` never returns `undefined`; if the key is absent it returns `null`.

---

## Question 5
**Suppose the file `http://myDomain.com/write.html` writes into localStorage using `localStorage.setItem('something', 'some data')`. Which page(s) could access that content using `localStorage.getItem('something')`?**

- `http://myDomain.com/read.html` and `http://myDomain.com/fetch.html` and `http://myDomain.com/get.html`
- only `http://myDomain.com/read.html`
- `http://myDomain.com/read.html` and `https://myDomain.com/read.html`

### Correct Answer
`http://myDomain.com/read.html` and `http://myDomain.com/fetch.html` and `http://myDomain.com/get.html`

### Explanation
localStorage is scoped to the origin (scheme + host + port). All three pages share the same origin. Changing the scheme (HTTP vs HTTPS) changes the origin and cannot access the same storage.

---

## Question 6
**Where can you view Local Storage in Chrome DevTools?**

- Elements tab
- Memory tab
- Application tab
- Sources tab

### Correct Answer
Application tab

### Explanation
Open DevTools > Application > Storage > Local Storage to inspect keys and values per origin.

---

## Question 7
**Storing nested objects in JSON is allowed. This is valid JSON:**

```json
{"object": {"nestedObject": { "key": "value" }}}
```

- True
- False

### Correct Answer
True

### Explanation
JSON supports nested objects and arrays. Keys must be double-quoted, and the example follows valid JSON syntax.

---

## Question 8
**Data stored in localStorage is persistent between different browsers (e.g., data stored in Firefox is accessible in Chrome).**

- True
- False

### Correct Answer
False

### Explanation
localStorage is browser-specific and origin-specific. Data does not sync across different browsers.

---

## Question 9
**What is the output of the following code?**

```js
const key = 'key';
window.localStorage.setItem(key, 'string');
const value = window.localStorage.getItem(key);
window.localStorage.removeItem(key);
window.localStorage.setItem(key, 'newString');
console.log(value);
```

- `'string'`
- `'value'`
- `'key'`
- `'newString'`

### Correct Answer
'string'

### Explanation
`value` holds the result of the earlier `getItem` call, which is 'string'. Later removing or resetting the key doesn't change the existing variable.

---

## Question 10
**Suppose an item is stored in the local storage of `https://aaa.com/labs/1/index.html`. Which of the following can access it?**

- A: `https://lab.aaa.com/1/index.html`
- B: `https://aaa.com/labs/5/hello.html`
- C: `http://localhost:3000/labs/1/index.html`
- Both A and B

### Correct Answer
B: `https://aaa.com/labs/5/hello.html`

### Explanation
Only pages with the same origin (same scheme, host, and port) share localStorage. Subdomains like `lab.aaa.com` are a different origin; `http://localhost:3000` also differs in both host and scheme.

---

# Quiz 6: JavaScript misc 
