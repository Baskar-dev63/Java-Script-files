export default function earnMoney() {
    return "Earn Money by learning high demand skills";
};

const growMoney = () => {
    return "Grow Money by investing";
};

const giveMoney = () => {
    return "Give Money for Education free world!";
}

export { growMoney, giveMoney }


class Subscriber {

    constructor(name) {
        this.name = name
    }

    email() {
        return `Hi I'm ${this.name}`;
    }
}

export { Subscriber };
