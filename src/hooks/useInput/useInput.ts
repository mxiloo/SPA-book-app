import {useEffect, useState} from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [minYearError, setMinYearError] = useState(false);
    const [isNumberError, setIsNumberError] = useState(false);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;

                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
                    break;

                case 'minYear':
                    value < 1800 ? setMinYearError(true) : setMinYearError(false);
                    break;

                case 'isNumber':
                    (value >= 1 && value <= 10) ? setIsNumberError(false) : setIsNumberError(true);
                    break;
            }
        }
    }, [value])


    useEffect(() => {
        if (isEmpty) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }, [isEmpty, maxLengthError, minYearError, isNumberError]) // Проверяем инпуты на валидацию (в if добавляем стейты ошибок)

    return {isEmpty, maxLengthError, minYearError, isNumberError, isValid}
};

export const useInput = <T>(initialValue: T , validations: object) => {
    const [value, setValue] = useState<T>(initialValue)
    const valid = useValidation(value, validations)
    // console.log(value)
    const onChange = (e) => {
        setValue(e.target.value)
    }

    return {value, onChange, ...valid, setValue}
};