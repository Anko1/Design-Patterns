var templateString = 'Hello, {{city}} {{age}}! #{{name}}';

var user1 = {id: 1, name: 'john', age: 123, city: 'kyiv'};
var user2 = {id: 2, name: 'alex', age: 55, city: 'lviv'};

var compile = function (template) {
    return function (obj) {
        var t = template.replace(/{{\w+}}/g, function (word) {
            word = word.substring(2, word.length - 2);

            return obj[word];
        });


        return t;
    };
};

var template = compile(templateString);

console.log(template(user1)); // => Hello, john!
console.log(template(user2)); // => Hello, alex!

