// имплементируем интерфейс это будет который будет содержать конкретные реализации продукта
interface Product {
    doOperate(): string
}

class ConcreteProductA implements Product {
    doOperate(): string {
        return 'ConcreteProductA'
    }
}

class ConcreteProductB implements Product {
    doOperate(): string {
        return 'ConcreteProductB'
    }
}

// Создаем абстракный класс с методами реализации конкретного класса 
abstract class Creator {
    
    doSomething(): void {
        console.log('something +++ ' + this.createProduct().doOperate())
    }
    // фабричный метод который будет отнаследован в суб классах
   public abstract createProduct():Product
}

//Конкретнай реализация суб класса
class ConcreteCreator1 extends Creator {
    public createProduct(): Product{
        return new ConcreteProductA()
    }
}
//Конкретнай реализация суб класса
class ConcreteCreator2 extends Creator {
    public createProduct(): Product{
        return new ConcreteProductB()
    }
}




function clientCode(prod:any):any{
    prod.doSomething()
} 
console.log('launch creator 1')
clientCode( new ConcreteCreator1());
console.log('launch creator 2')
clientCode( new ConcreteCreator2());