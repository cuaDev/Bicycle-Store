# Code structure
## ES5 và ES6
### ES5
- Là phiên bản thứ 5
- Phát hành năm 2009
### ES6
- Là phiên bản thứ 6
- Phát hành năm 2015
- Có thêm một kiểu dữ liệu nguyên thủy là "symbol" 
- Có thêm hai cách khai báo là "let" và "const"
- Có các khai báo hàm không cần dùng keyword "function là arrow function
- Có thêm vòng lặp for...of để lặp giá trị
## Variable và constant
### Variable
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


## Constant
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
