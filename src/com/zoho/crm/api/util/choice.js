/**
 * Common Class to provide or obtain a value, when there are multiple supported values.
 */
class Choice {
    constructor(value) {
        this._value = value;
    }

    getValue() {
        return this._value;
    }
}