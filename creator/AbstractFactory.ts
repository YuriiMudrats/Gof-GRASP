//Создаем интерфейс семейства продуктов
interface WindowP {
	onOpen(): string
}

interface Button{
  onClick(): string
}

// Имплеменируем конкретный продукт
class MacWindow implements WindowP {
	onOpen() : string{
	return 'Window Mac OPEN'
}
}

class WinWindow implements WindowP {
	onOpen() : string{
	return 'Window Win OPEN'
}
}

class MacButton implements Button {
	onClick() : string{
	return 'Button Mac Click'
}
}

class WinButton implements Button {
	onClick() : string{
	return 'Button Win Click'
}
}

// СОздаем абстрактную фабрику которая имплементирует методы создания 
abstract class AbstractF {
  abstract createWindow(): WindowP;
  abstract createButton(): Button;
}
// СОздания конкретного продукта
class WindowAbstractF extends AbstractF {
	createWindow(): WindowP{
	return new WinWindow();
}
	createButton(): Button {
	return new WinButton();
}
}

class MacAbstractF extends AbstractF {
	createWindow(): WindowP{
	return new MacWindow();
}
	createButton(): Button {
	return new MacButton();
}
}
// КЛИЕНСКИЙ КОД

function clientCode(factory: AbstractF) {
    const productA = factory.createWindow();
    const productB = factory.createButton();

    console.log(productA.onOpen());
    console.log(productB.onClick());
}
console.log('launch Window')
clientCode(new WindowAbstractF())

console.log('launch Mac')
clientCode(new MacAbstractF())