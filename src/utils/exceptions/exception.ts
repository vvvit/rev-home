/* Базовый класс для всех кастомных исключений
 *
 * Он решает проблему неработающего `instanceof` для наследников встроенных классов, включая `Error`.
 * Описание проблемы тут: https://github.com/Microsoft/TypeScript/issues/15875.
 */

export class Exception extends Error {
    // @ts-ignore
    // пробрасываем в capturedError сообщения об ошибке,
    // чтобы сохранить в стэктрэйсе текст сообщения об ошибке
    constructor(message?: string, capturedError: Error = new Error(message)) {
        // @ts-ignore
        // tslint:disable-next-line:no-this-assignment
        const self = this;

        self.name = new.target.name;

        if (typeof message === 'string') {
            self.message = message;
        }

        if (capturedError.stack) {
            // Сохраняем стектрейс, заменив в нём имя класса на актуальное
            self.stack = capturedError.stack.replace(capturedError.constructor.name, self.name);
        }
    }
}
