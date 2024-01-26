# 1. Code structure
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
- Dùng để khai báo một tham chiếu không đổi đến giá trị ( không khai báo lại được, không gán lại được)
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
        - Ví dụ:
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
        - Ví dụ:
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
            Math.round(4.6);
            -> 5
            Math.round(4.4);
            -> 5
        ``````
        3. Math.floor(x): Trả về x được làm tròn xuống số nguyên gần nhất
        ``````
            Math.round(4.6);
            -> 4
            Math.round(4.4);
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
            - Ví dụ:
            ``````
                function myFunction(p1, p2) {
                    return p1 * p2;
                }
            ``````
        2. Function expression
            - Ví dụ:
            ``````
                var count = function(array) { 
                    // Function expression  
                    return array.length;
                }
            ``````
        3. Arrow function
            - Ví dụ:
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
- Ví dụ:
``````
    let count = 1;
    count = count + 1; // Mutation: Thay đổi giá trị của     biến "count"
``````
## d. Event propagation
- Là quá trình diễn ra khi một sự kiện xảy ra trong môi trường DOM của trình duyệt web. Trong DOM, sự kiện có thể xảy ra trên các phần tử khác nhau và sau đó lan truyền qua các phần tử cha hoặc con của chúng.

# 9. High order functions
- Là môt hàm hoạt động trên hàm khác
- Nhận một hoặc nhiều hàm khác làm đối số, hoặc trả về một hàm khác
- Ví dụ:
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



