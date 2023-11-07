interface Printer {
  print: (message: string) => void
}

class ConsolePrinter implements Printer {
  print(message: string) {
    console.log('Вывод в консоль', message)
  }
}

class FilePrinter implements Printer {
  print(message: string) {
    console.log('Вывод в файл', message)
  }
}

class ServerPrinter implements Printer {
  print(message: string) {
    console.log('Вывод на сервер', message)
  }
}

class MathClass {
  protected printer: Printer

  constructor(_printer: Printer) {
    this.printer = _printer
  }

  private sum(a: number, b: number) {
    return a + b
  }

  private minus(a: number, b: number) {
    return a - b
  }

  public log(method: 'sum' | 'minus', a: number, b: number) {
    this.printer.print(String(this[method](a,b)))
  }

  // public printToFile() {}
  // public printToServer() {}
  // public sendToUser()
}

const plusMinusOperations = new MathClass(new ConsolePrinter())

plusMinusOperations.log('sum', 2,3)
plusMinusOperations.log('minus', 5,3)

class MultiplyDivision extends MathClass {
  constructor(_printer: Printer) {
    super(_printer);
    this.printer = _printer
  }


  private multiply(a: number, b: number) {
    return a * b
  }

   public divide(a: number, b: number) {
    return a / b
  }

  log(method: 'sum' | 'minus' | 'divide' | 'multiply', a: number, b: number) {
    this.printer.print(String(this[method](a,b)))
  }
}

const plusMinusDivideMultiplyOperations = new MultiplyDivision(new ServerPrinter())

plusMinusOperations.log('sum', 2,3)
plusMinusDivideMultiplyOperations.log('multiply', 2,3)




