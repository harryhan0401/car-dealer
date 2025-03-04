import { useQueryState } from "nuqs";

export const useRangeQueryParams = (queryParam: string, minAmount: number, maxAmount: number) => {
    const [query, setQuery] = useQueryState(queryParam, {
        defaultValue: `${minAmount}-${maxAmount}`,
        parse: (value) => {
            try {
                const [min, max] = value.split("-").map(Number);
                if (isNaN(min) || isNaN(max)) {
                    throw new Error("Invalid range values");
                }
                return `${Math.max(min, minAmount)}-${Math.min(max, maxAmount)}`;
            } catch (error) {
                console.error("Error parsing amount range:", error);
                return `${minAmount}-${maxAmount}`;
            }
        },
        serialize: (value) => value,
    });

    return { query, setQuery }
}


export const useRadioQueryParams = (queryParam: string, defaultValue: string, validValues: string[]) => {
    const [query, setQuery] = useQueryState(queryParam, {
        defaultValue: defaultValue,
        parse: (value) => {
            try {
                const values = value.trim().split(",");
                for (const val of values) {
                    if (!validValues.includes(val)) {
                        return defaultValue;
                    }
                }
                return value;
            } catch (error) {
                console.error(`Error parsing ${queryParam}:`, error);
                return defaultValue;
            }
        },
        serialize: (value) => value,
    });

    return { query, setQuery }
}

export const useAmountRangeParam = (queryParam: string): [number, number] | [undefined, undefined] => {
    const [amountRange] = useQueryState(queryParam);

    if (typeof amountRange === "string" && amountRange) {
        const [minValue, maxValue] = amountRange.split("-").map(Number);
        return [minValue, maxValue];
    }

    return [undefined, undefined];
};

export const useSelectParam = (queryParam: string): "" | string[] => {
    const [select] = useQueryState(queryParam);

    if (typeof select === "string" && select) {
        return select.trim().split(",")
    }

    return "";
}