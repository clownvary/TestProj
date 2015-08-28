class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.obj={
            x:'sds',
            [go()]:true
        };
    }

    getName() {
        return '名字是' + this.name;
    }

}
function go()
{
    return 'last';
}


