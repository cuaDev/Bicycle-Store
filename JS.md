# 1. Code structure
## a. Câu lệnh 
- Câu lệnh dùng để thực hiện các tác vụ
- Các câu lệnh có thể viết trên cùng một dòng nhưng phải ngăn cách giữa các câu lệnh băng dấu ";".
## b. Dấu chấm phẩy
- Dấu chấm phẩy có thể bỏ qua
``````
alert('Hello')
alert('World')
``````
## c. Nhận xét ( comment)
- Dùng để nhận xét các mã làm gì và tại sao
- Có 2 cách nhận xét:
    1. Nhận xét 1 dòng: bắt đầu bằng 2 kí tự gạch chéo (" // ")
    ``````
    // This comment occupies a line of its own
    alert('Hello');
    ``````
    2. Nhận xét đa dòng: bắt đầu bằng dáu chéo lên và hoa thị (" /* ") và kết thúc bằng dấu hoa thị và dấu chéo lên (" */ ")
    ``````
    /* An example with two messages.
    This is a multiline comment.
    */
    alert('Hello');
    alert('World');
    ``````
> Không có chuyện nhận xét lồng nhau 
# 2. ES5 và ES6
## a. ES5
- Là phiên bản thứ 5
- Phát hành năm 2009
## b. ES6
- Là phiên bản thứ 6
- Phát hành năm 2015
- Có thêm một kiểu dữ liệu nguyên thủy là "symbol" 
- Có thêm hai cách khai báo là "let" và "const"
- Có các khai báo hàm không cần dùng keyword "function là arrow function
- Có thêm vòng lặp for...of để lặp giá trị
# 3. Variable và constant
## a. Variable
- Có 4 cách khai báo biến
    1. Khai báo tự động
    ``````
    x = 5;
    y = 6;
    ``````
    2. Sử dụng var
    ``````
    var x = 5;
    var y = 6;
    ``````
    3. Sử dụng let
    ``````
    let x = 5;
    let y = 6;
    ``````
    4. Sử dụng const
    ``````
    const x = 5;
    const y = 6;
    ``````
## b. Constant
- Dùng để khai báo một tham chiếu không đổi đến giá trị ( không khai báo lại được, không gán lại được )
- Có block scope
- Sử dụng keyword "const" để khai báo
- Sử dụng const khi khai báo:
    1. Một giá trị
        - Khai báo đúng
        ``````
        const PI = 3.14159265359;
        ``````
        - Khai báo sai
        ``````
        const PI;
        PI = 3.14159265359;
        ``````
    2. Một mảng
        - Có thể thay đổi những phần tử nhưng không thể gán lại mảng
            - Đúng
            ``````
            const cars = ["Saab", "Volvo", "BMW"];
            cars[0] = "Toyota";
            cars.push("Audi");    
            -> Toyota,Volvo,BMW,Audi
            ``````
            - Sai
            ``````
            const cars = ["Saab", "Volvo", "BMW"];
            cars = ["Toyota", "Volvo", "Audi"];
            -> Error    
            ``````
    3. Một đối tượng
        - Tương tự mảng
            - Đúng
            ``````
            const car = {
                type:"Fiat", 
                model:"500", 
                color:"white"
                };
            car.color = "red";
            car.owner = "Johnson";
            ``````
            - Sai
            ``````
            const car = {
                type:"Fiat", 
                model:"500", 
                color:"white"
                };
            car = {
                type:"Volvo", 
                model:"EX60", 
                color:"red"
                };
            ->Error
    4. Một function
# 4. Data type & Data structure, Type conversions
## a. Data type
- Kiểu dữ liệu nguyên thủy : Là dữ liệu không phải là đối tượng và không có phương thức hoặc thuộc tính
    - Có 7 kiểu dữ liệu nguyên thủy :
        - string
        - number
        - bigint : sử dụng để biểu diễn các số nguyên có độ dài lớn nằm ngoài phạm vi của kiểu dữ liệu 'number'
        - boolean
        - undefined
        - symbol
        - null
- Kiểu dữ liệu Đối tượng : Là kiểu dữ liệu phức tạp
    - Có 3 kiểu dư liệu
        - object
        - array
        - date
## b. Type conversions
- Biến có thể chuyển đổi thành một kiểu dữ liệu khác
- Chuyển đổi từ string sang number bằng phương thức: Number(), parseFloat(), parseInt()
``````
Number("3.14") -> 3.14
ParseFloat("3.14")  -> 3.14
ParseInt("3.14") -> 3
``````
- Chuyển từ number sang string bằng phương thức: String(), toString()
``````
String(123) -> "123"
(123).toString -> "123"
``````
# 5. Operators, Comparisons, Maths
## a. Operatoers
- Có những kiểu toán tử khác nhau:
    1. Toán tử số học ( +, -, *, **, /, %, ++, -- )
    2. Toán tử gán ( =, +=, -=, *=, /=, %=, **=)
    3. Toán tử so sánh ( ==, ===, !==, !===, >, <, >=, <=, ?)
    4. Toán tử chuỗi
    ``````
    let text1 = "John";
    let text2 = "Doe";
    let text3 = text1 + " " + text2;
    -> John Doe
    ``````
    5. Toán tử logic ( &&, ||, !)
## b. Maths
- Cho phép thực hiện các tác vụ trên số
    - Các phương thức hay dùng:
        1. Math.round(x): Trả về x được làm tròn về số nguyên gần nhất
        ``````
        Math.round(4.6);
        -> 5
        Math.round(4.4);
        -> 4
        ``````
        2. Math.ceil(x): Trả về x được làm tròn lên số nguyên gần nhất
        ``````
        Math.ceil(4.6);
        -> 5
        Math.ceil(4.4);
        -> 5
        ``````
        3. Math.floor(x): Trả về x được làm tròn xuống số nguyên gần nhất
        ``````
        Math.floor(4.6);
        -> 4
        Math.floor(4.4);
        -> 4
        ``````
        4. Math.trunc(x): Trả về phần nguyên của x (mới trong ES6)
# 6. Nullish coalescing operator
- Là toán tử logic, trả ra kết quả bên phải khi bên trái trả ra falsy
- Ví dụ:
``````
const foo = null ?? 'default string';
-> 'default string'
``````
# 7. Functions & Arrow functions
## a. Function
- Function là một khối code được thiết kế để thực hiện một tác vụ cụ thể
    - Các cách khai báo function
        1. Function declaration
            ``````
            function myFunction(p1, p2) {
                return p1 * p2;
            }
            ``````
        2. Function expression
            ``````
            var count = function(array) { 
                // Function expression  
                return array.length;
            }
            ``````
        3. Arrow function
            ``````
            var absValue = (number) => {  
                if (number < 0) {
                    return -number;
                }
                return number;
            }
            ``````
# 8. Pure functions, Side effects, State mutation, Event propagation
## a. Pure functions
- Luôn trả về kết quả giống nhau khi tham số truyền vào giống nhau
- Không bị phụ thuộc bởi bát cứ trạng thái, đữ liệu hay thay đổi nào khi chương trình chạy mà chỉ phụ thuộc vào duy nhất vào tham số truyền vào.
- Ví dụ:
    - Hàm không thuần khiết
    ``````
    let tax = Math.random();
        function calculateGST(productPrice) {          
            return productPrice * (tax / 100) + productPrice;
        }
    console.log(calculateGST(15))
    ``````        
    - Hàm thuần khuyết
    ``````
    function calculateGST(productPrice) {
        return productPrice * 0.05;
    }
    console.log(calculateGST(15))
    ``````

## b. Side effects
- Thường xẩy ra khi một hàm thực hiện một hành động không chỉ là việc tính toán giá trị trả về, mà còn làm thay đổi trạng thái của ứng dụng hoặc môi trường xung quanh.
- Một số trường hợp:
    1. Thay đổi giá trị biến toàn cục hoặc biến bên ngoài phạm vi
    ``````
    let count = 0;
    function increment() {
        count++; // Thay đổi biến count bên ngoài phạm vi hàm
    }
    increment();
    console.log(count);
    -> 1
    ``````
    2. Thay đổi DOM
    ``````
    function updateTitle() {
        document.title = 'New Title'; // Thay đổi nội dung của thẻ <title> trong DOM
        }
    updateTitle();
    ``````
    3. Gọi API và xử lý dữ liệu
    ``````
    function fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                    // Xử lý dữ liệu nhận được từ API
            });
    }
    fetchData('https://api.example.com/data');
    ``````
## c. State mutation
- Xảy ra khi giá trị của một biến hay một đối tượng được thay đổi trực tiếp
``````
let count = 1;
count = count + 1; // Mutation: Thay đổi giá trị của     biến "count"
``````
## d. Event propagation
- Là quá trình diễn ra khi một sự kiện xảy ra trong môi trường DOM của trình duyệt web. Trong DOM, sự kiện có thể xảy ra trên các phần tử khác nhau và sau đó lan truyền qua các phần tử cha hoặc con của chúng.

# 9. High order functions
- Là môt hàm hoạt động trên hàm khác
- Nhận một hoặc nhiều hàm khác làm đối số, hoặc trả về một hàm khác
``````
function highOrderFunction(callback) {
    // Thực hiện một số công việc
    callback();
}
``````
# 10. Callback
- Là một hàm được truyền vào hàm khác như một đối số và được gọi trong thân hàm đó
- Thường được sử dụng để thực hiện các tác vụ không đồng bộ
- Ví dụ:
``````
function highOrderFunction(callback) {
    // Thực hiện một số công việc
    callback();
}

function callbackFunction() {
    console.log('Đây là một hàm callback.');
}
``````
# 11. Promises
- Đại diện cho một giá trị ở thời điểm hiện tại có thể chưa tồn tại, nhưng sẽ được xử lý và có giá trị vào một thời điểm đó trong tương lai.
- Một promise có 3 trạng thái :
    1. Pending: Là trạng thái Promise mới được tạo
    2. Resolve: Là trạng thái Promise thực hiện thành công
    3. Reject: Là trạng thái Promise thực hiện thất bại
- Ví dụ:
``````
const myPromise = new Promise((resolve, reject) => {
    // Thực hiện công việc không đồng bộ ở đây
    // Nếu thành công, gọi hàm resolve với giá trị mong muốn
    // Nếu thất bại, gọi hàm reject với lý do (error)
});
    // Sử dụng then để xử lý kết quả khi Promise thực hiện thành công
myPromise
    .then((result) => {
        console.log('Thành công:', result);
    })
    .catch((error) => {
        console.error('Thất bại:', error);
    });
``````
# 12. async / await
- Để viết mã bất đồng bộ một các đồng bộ
- Các tác vụ không đồng bộ thường được thực hiện bằng cách sử dụng Promises hoặc callbacks. Tuy nhiên, việc sử dụng Promises và callbacks có thể dẫn đến việc lồng nhau nhiều mức độ và gây ra hiện tượng "callback hell"
- Async/await giúp giải quyết vấn đề này bằng cách sử dụng từ khóa async và await để định nghĩa và điều khiển quá trình thực thi mã không đồng bộ
    - sync: Từ khóa async được sử dụng để định nghĩa một hàm bất đồng bộ. Một hàm được khai báo với từ khóa async sẽ luôn trả về một Promise.
    - await: Từ khóa await chỉ được sử dụng bên trong một hàm được khai báo là async. Nó dùng để đợi cho đến khi một Promise được giải quyết (resolved) và trả về kết quả. Trong khi chờ, luồng thực thi của hàm sẽ tạm dừng, nhưng không chặn luồng chính (main thread) của trình duyệt.
- Ví dụ:
``````
async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
        resolve("I love You !!");
    });
    document.getElementById("demo").innerHTML = await myPromise;
    }

myDisplay();
``````
# 13. Control flow & Error handling
## a. Control flow
- Control flow là cách mà luồng thực thi của một chương trình được quản lý. Nó mô tả cách các câu lệnh trong chương trình được thực hiện theo thứ tự, từ trên xuống dưới. Luồng kiểm soát quyết định thứ tự các câu lệnh được thực hiện, giúp kiểm soát việc chạy chương trình.
## b. Error handling
- Error handling là quá trình quản lý và xử lý lỗi trong chương trình. Khi một lỗi xảy ra trong quá trình thực thi, quá trình xử lý lỗi đảm bảo rằng chương trình không bị crash và người dùng nhận được thông báo hoặc quay lại trạng thái ổn định.
- Sử dụng try và catch
``````
try {
    // Mã có thể gây ra ngoại lệ
    const result = 10 / 0; // Gây ra lỗi chia cho 0
    console.log(result); // Không được thực thi
}
catch (error) {
    // Xử lý ngoại lệ
    console.error('Đã xảy ra lỗi:',error);
}
``````
# 14. Arrays, Array methods, Array iteration, Array const, Sorting arrays
## a. Array
- Tạo array
``````
// Cách 1
const cars = ["Saab", "Volvo", "BMW"];
// Cách 2
const cars = new Array("Saab", "Volvo", "BMW");
``````    
## b. Array methods
- Phương thức toString() chuyển đổi một mảng thành một chuỗi các giá trị mảng (được phân tách bằng dấu phẩy).
``````
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
-> Banana,Orange,Apple,Mango
``````
- Phương thức join() cũng nối tất cả các phần tử mảng thành một chuỗi. Nó hoạt động giống như toString(), nhưng ngoài ra bạn có thể chỉ định dấu phân cách
``````
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
-> Banana * Orange * Apple * Mango
``````
- Phương thức pop() xóa một phần tử cuối cùng của mảng
``````
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
-> ["Banana", "Orange", "Apple"]
``````
- Phương thức push() thêm một phần tử mới vào mảng (ở cuối)
``````
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
-> ["Banana", "Orange", "Apple", "Mango", "kiwi"]
``````
- Phương thức shift() xóa phần tử đầu tiên của mảng
``````
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
-> ["Orange", "Apple", "Mango"]
``````
- Phương thúc unshift() thêm phần tử đầu tiên của mảng
``````
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon")
-> ["Lemon", "Banana", "Orange", "Apple", "Mango"]
``````
- Thuộc tính length cung cấp một cách dễ dàng để nối thêm một phần tử mới vào một mảng
``````
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
-> ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
``````
- Phương thức concat() tạo một mảng mới bằng cách hợp nhất (nối) các mảng hiện có
- Phương thức concat() không thay đổi các mảng hiện có. Nó luôn trả về một mảng mới.
``````
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
-> ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]
``````
## c. Array iteration
- Phương thức forEach() được sử dụng để duyệt qua từng phần tử trong một mảng và thực hiện một hàm callback trên mỗi phần tử đó.
- Phương thức forEach() không thay đổi mảng gốc và không trả ra mảng mới.
``````
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number, index) {
        console.log(`Phần tử thứ ${index} có giá trị là ${number}`);
});
->  Phần tử thứ 0 có giá trị là 1
    Phần tử thứ 1 có giá trị là 2
    Phần tử thứ 2 có giá trị là 3
    Phần tử thứ 3 có giá trị là 4
    Phần tử thứ 4 có giá trị là 5
``````
- Phương thức map() dùng để duyệt qua từng phần tử trong một mảng và tạo ra một mảng mới với các giá trị được biến đổi từ các phần tử gốc.
- Trả về một mảng mới có cùng độ dài như mảng gốc, với các giá trị đã được biến đổi hoặc không biến đổi.
- Thường được sử dụng khi bạn muốn biến đổi mỗi phần tử trong mảng gốc và tạo một mảng mới từ các giá trị đã biến đổi.
``````
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function(number) {
    return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
``````
- Phương thức filter() tạo ra một mảng mới với các phần tử pass điều kiện
``````
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
``````
- Phương thức reduce() được sử dụng để tích lũy các phần tử của một mảng thành một giá trị duy nhất. Nó thực hiện một hàm callback trên mỗi phần tử của mảng và tích lũy kết quả từ trái sang phải.
- Cú pháp:
``````
array.reduce(callback(accumulator, currentValue, index, array), initialValue);
``````
- Trong đó:
    - accumulator: Giá trị tích lũy (initialValue trong lần lặp đầu tiên, sau đó là giá trị trả về từ lần lặp trước đó).
    - currentValue: Giá trị hiện tại của phần tử mảng.
    - index (tùy chọn): Chỉ số của phần tử hiện tại trong mảng.
    - array (tùy chọn): Mảng được duyệt qua.
    - initialValue (tùy chọn): Giá trị khởi đầu của biến tích lũy (accumulator). Nếu không được cung cấp, phần tử đầu tiên của mảng sẽ được sử dụng làm giá trị khởi đầu.
    ``````
    let numbers = [1, 2, 3, 4, 5];
    let sum = numbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    console.log(sum); // Output: 15
    ``````
- Phương thức every() kiểm tra tất cả phần tử có thỏa điều kiện không
- Trả ra
    + true: nếu tất cả các phần tử đều thỏa điều kiện
    + fale: nếu chỉ cần có 1 phần tử không thỏa điều kiện
    ``````
    const numbers = [45, 4, 9, 16, 25];
    let allOver18 = numbers.every(myFunction);
    function myFunction(value, index, array) {
        return value > 18;
    } // False
    ``````
- Phương thức some() kiểm tra xem có phần tử nào thỏa điều kiện không
    - Trả ra
        + true: nếu có ít nhất 1 phần tử thỏa điều kiện
        + false: nếu không có phần tử nào thóa điều kiện
        ``````
        const numbers = [45, 4, 9, 16, 25];
        let someOver18 = numbers.some(myFunction);
        function myFunction(value, index, array) {
            return value > 18;
        } // True
        ``````
## e. Sorting arrays
- Là quá trình sắp xếp các phần tử trong một mảng theo một thứ tự nhất định.
- Phương thức sort() sắp xếp mảng theo bảng chữ cái, số từ nhỏ đến lớn
``````
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
-> Apple,Banana,Mango,Orange
``````
- Phương thức revert() đảo ngược các phần tử trong array
``````
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse()
-> Mango,Apple,Orange,Banana
``````
# 15. Loops & iteration
- Loop là một cấu trúc điều khiển cho phép thực hiện một khối mã lệnh lặp đi lặp lại một số lần nhất định hoặc cho đến khi một điều kiện được thỏa mãn.
- Các câu lệnh cho vòng lặp được cung cấp trong JS:
    1. Câu lệnh for
    ``````
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    ``````
    2. Câu lệnh for...in : lặp index đối với mảng và lặp key đối với object
    ``````
    let person = {
        name: 'John',
        age: 30,
        city: 'New York'
    };

    for (let key in person) {
        console.log(key + ': ' + person[key]);
    }
    ->  name: John
        age: 30
        city: New York
    ``````
    3. Câu lệnh for...of : lặp giá trị
    ``````
    let numbers = [1, 2, 3, 4, 5];
    for (let number of numbers) {
        console.log(number);
    }
    ->  1
        2
        3
        4
        5
    ``````
    4. Câu lệnh do...while
    ``````
    let number;
    do {
        number = parseInt(prompt('Nhập một số từ 1 đến 5:'));
    }
    while (number < 1 || number > 5);
    console.log('Số bạn đã nhập là: ' + number);
    ``````
    5. Câu lệnh while
    ``````
    let count = 1;
    while (count <= 5) {
        console.log(count);
        count++;
    }
    ``````
# 16.Objects
- Trong JavaScript, object (đối tượng) là một kiểu dữ liệu phức tạp, cho phép lưu trữ và truy cập thông tin dưới dạng cặp khóa-giá trị.
- Đối tượng trong JavaScript được tạo ra bằng cách sử dụng cặp dấu ngoặc nhọn {} và có thể chứa các thuộc tính và phương thức.
``````
    const person = {
        firstName:"John", 
        lastName:"Doe", 
        age:50, 
        eyeColor:"blue"
        };
``````
# 17.Rest & Spread
## a. Rest
- Rest parameters cho phép đại diện cho một số lượng tham số không xác định trong một hàm và biểu diễn chúng dưới dạng một mảng.
- Được ký hiệu bằng ba dấu chấm (...) và được đặt trước tên tham số cuối cùng trong khai báo hàm.
``````
    function rest(...rest){
        console.log(rest) // [1, 2, 3, 4]
    }
    rest(1, 2, 3, 4)
``````
## b. Spread
- Spread đại diện lấy tất cả các phần tử của mảng hoặc object
- Được ký hiệu bằng ba dấu chấm (...)
``````
// Mở rộng mảng
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8];
console.log(newNumbers);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]
// Mở rộng đối tượng
const person = { name: 'John', age: 30 };
const newPerson = { ...person, profession: 'Developer' };
console.log(newPerson);  // Output: { name: 'John', age: 30, profession: 'Developer' }
``````
# 18. Classes
- Sử dụng keyword class để tạo class
- Phương thức constructor() để khai báo các thuộc tính
``````
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
``````
> Class ES11
- Field riêng tư
``````
class Smartphones {
    #phone_color = "silver";
    designer(name) {
        this.name = name;
    }
    get_color() {
        return this.#phone_color;
    }
}
const iPhone = new Smartphones("iPhone");
console.log(iPhone.get_color()); // output is: silver
console.log(iPhone.#phone_color) // output is: Private field '#phone_color' must be declared in an enclosing class
``````
# 19. this, call, apply, bind
## a. this
- This trong phương thức object: Khi được sử dụng trong một phương thức đối tượng, this đề cập đến đối tượng.
``````
const test = {
    prop: 42,
    func: function () {
        return this.prop;
    },
};
console.log(test.func());
// Expected output: 42
``````
-This một mình :
## b. call
- Phương thức call() được sử dụng để gọi một hàm và thiết lập giá trị this cho hàm đó, cùng với các đối số (arguments) được truyền vào dưới dạng danh sách các tham số.
``````
const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName:"John",
    lastName: "Doe"
}
const person2 = {
    firstName:"Mary",
    lastName: "Doe"
}
person.fullName.call(person1);
// This will return "John Doe":
``````
``````    
const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
}
const person1 = {
    firstName:"John",
    lastName: "Doe"
}
person.fullName.call(person1, "Oslo", "Norway");
``````
## c. apply
- Tương tự call
- chỉ khác với call : lấy các đối số dưới dạng một mảng
``````
const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
const person1 = {
    firstName:"John",
    lastName: "Doe"
}
person.fullName.apply(person1, ["Oslo", "Norway"]);
``````
## d. bind
- Phương thức bind(), một đối tượng có thể mượn một phương thức từ một đối tượng khác.
- Ví dụ: member mượn phương thức của person
``````
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const member = {
    firstName:"Hege",
    lastName: "Nilsen",
}
let fullName = person.fullName.bind(member); // Hege Nilsen
``````
# 20. Map & Set
## a. Map
- Là một cấu trúc dữ liệu khóa-giá trị, trong đó mỗi giá trị được liên kết với một khóa duy nhất.
- Một Map không chứa các khóa trùng lặp, và mỗi khóa chỉ liên kết với duy nhất một giá trị.
- Thêm phần tử đến Map() bằng phương thức set()
``````
const fruits = new Map();
// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
``````
- Phương thức set() cũng làm thay đổi giá trị hiện tại
- Phương thức get() lấy giá trị của khóa trong Map()
``````
fruits.get("apples");    // Returns 500
``````
- Thuộc tính size trả về số phần tử trong Map()
``````
fruits.size;
``````
- Phương thức delete() dùng để xóa một phần tử bằng key
``````
fruits.delete("apples");
``````
- phương thức clear() dùng để xóa tất cả các phần tử
``````
fruits.clear();
``````
- Phương thức has() dùng để check xem key có tồn tại trog Map() không
``````
fruits.has("apples");
``````
## b. Set
- Là một cấu trúc dữ liệu không trùng lặp, trong đó mỗi giá trị là duy nhất.
- Một Set có thể chứa bất kỳ kiểu dữ liệu nào và sẽ tự động loại bỏ bất kỳ giá trị trùng lặp nào
- Phương thức set() dùng để thêm phần tử
- Nếu thêm phần tử trùng lặp thì sẽ lưu phần tử đầu tiên
# 21. Prototypes & Inheritance
- Thuôc tính prototype cho phép thêm các thuộc tính mới vào hàm tạo đối tượng
``````
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";
``````
# 22. Scope & Closure
## a. Scope
- Có 3 loại scope
    - Block scope: Các biến được khai báo bên trong khối { } không thể được truy cập từ bên ngoài khối
    > Có 2 keyword có block scope : let và const
    ``````
    {
        let x = 2;
    }
    // x can NOT be used here
    ``````
    - Function scope: Các biến được xác định bên trong hàm không thể truy cập được (hiển thị) từ bên ngoài hàm.
    - Global Scope: Một biến được khai báo bên ngoài hàm sẽ trở thành GLOBAL.
    ``````
    let carName = "Volvo";
    // code here can use carName
    function myFunction() {
        // code here can also use carName
    }
    ``````

## b. Closure
- Cho phép một hàm truy cập và sử dụng các biến từ phạm vi ngoài của nó
# 23. Call stack & Hoisting
## a. Call stack
- Vào sau ra trước
## b. Hoisting
- Hoisting (nâng cao) là một khái niệm trong JavaScript mô tả cách mà khai báo biến và khai báo hàm được di chuyển lên trên đầu phạm vi của chúng trước khi mã JavaScript được thực thi. Điều này cho phép bạn sử dụng biến và hàm trước khi chúng được khai báo trong mã.
- Tuy nhiên, giá trị gán cho biến không được di chuyển lên trên đầu phạm vi, chỉ có phần khai báo được di chuyển. Do đó, khi sử dụng biến trước khi gán giá trị, nó sẽ có giá trị là undefined.
    - Đúng:
    ``````
    a = 10;
    console.log(a)
    var a
    ``````
    - Sai:
    ``````
    console.log(hoist);
    var hoist = 500; //undefined
    ``````
# 24. Modules, Export, Import, Dynamic imports
## a. Modules
- Là một tệp ( file ) độc lập chứa mã Javascript, có thể chứa biến, hàm, lớp và các khối mã khác. 
``````
index.html
main.js
modules/
    canvas.js
    square.js
``````
## b. Export 
- Dùng để xuất các function, biến từ module để module khác sử dụng nó trong module khác
# 25. Regular Expression
# 26. HTML DOM
# 27. BOM
# 28. Repaint & Reflow








