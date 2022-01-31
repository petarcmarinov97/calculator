const defaultWidth = 40;
const biggerstWidth = defaultWidth * 2 + 2;

export const buttonsConfig = [
    {
        position: [3, 0],
        label: "1",
        value: 1,
        type: "digit",
        width: `${defaultWidth}px`,
    },
    {
        position: [0, 0],
        label: "AC",
        value: "AC",
        width: `${biggerstWidth}px`,
    },
    {
        position: [0, 1],
        label: "DEL",
        value: "DEL",
        width: `${defaultWidth}px`,
    },
    {
        position: [0, 2],
        label: "/",
        value: "/",
        type: "action",
        width: `${defaultWidth}px`,
    },

    {
        position: [1, 0],
        label: "7",
        value: 7,
        type: "digit",
        width: `${defaultWidth}px`,
    },
    {
        position: [1, 1],
        label: "8",
        value: 8,
        type: "digit",
        width: `${defaultWidth}px`,
    },
    {
        position: [1, 2],
        label: "9",
        value: 9,
        type: "digit",
        width: `${defaultWidth}px`,
    },
    {
        position: [1, 3],
        label: "*",
        value: "*",
        type: "action",
        width: `${defaultWidth}px`,
    },
    {
        position: [2, 0],
        label: "4",
        value: 4,
        type: "digit",
        width: `${defaultWidth}px`,
    },
    {
        position: [2, 1],
        label: "5",
        value: 5,
        type: "digit",
        width: `${defaultWidth}px`,
    },
    {
        position: [2, 2],
        label: "6",
        value: 6,
        type: "digit",
        width: `${defaultWidth}px`,
    },
    {
        position: [2, 3],
        label: "+",
        value: "+",
        type: "action",
        width: `${defaultWidth}px`,
        onClickHandler: "sum"
    },
    {
        position: [4, 2],
        label: "=",
        value: "=",
        width: `${biggerstWidth}px`,
    },

    {
        position: [3, 1],
        label: "2",
        value: 2,
        type: "digit",
        width: `${defaultWidth}px`,
    },
    {
        position: [3, 2],
        label: "3",
        value: 3,
        type: "digit",
        width: `${defaultWidth}px`,
    },
    {
        position: [3, 3],
        label: "-",
        value: "-",
        type: "action",
        width: `${defaultWidth}px`,
    },
    {
        position: [4, 0],
        label: ".",
        value: ".",
        width: `${defaultWidth}px`,
    },
    {
        position: [4, 1],
        label: "0",
        value: 0,
        type: "digit",
        width: `${defaultWidth}px`,
    },

]