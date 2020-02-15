interface Hash {
    [details: string]: Player;
}

interface Player {
    assignWeapon(weapon: string): void;
    mission(): void;
}

class Terrorist implements Player {
    private task: string;
    private weapon: string;

    constructor() {
        this.task = 'PLANT A BOMB';
    }

    public assignWeapon(weapon: string) {
        this.weapon = weapon;
    }

    public mission() {
        console.log(
            'Terrorist with weapon ' +
                this.weapon +
                '|' +
                ' Task is ' +
                this.task
        );
    }
}

class CounterTerrorist implements Player {
    private task: string;
    private weapon: string;

    constructor() {
        this.task = 'DIFFUSE BOMB';
    }

    public assignWeapon(weapon: string) {
        this.weapon = weapon;
    }

    public mission() {
        console.log(
            'Counter Terrorist with weapon ' +
                this.weapon +
                '|' +
                ' Task is ' +
                this.task
        );
    }
}

class PlayerFactory {
    private static hm: Hash = {};

    public static getPlayer(type: string): Player {
        let p: Player = null;

        if (this.hm[type]) {
            p = this.hm[type];
        } else {
            switch (type) {
                case 'Terrorist':
                    console.log('Terrorist Created');
                    p = new Terrorist();
                    break;
                case 'CounterTerrorist':
                    console.log('Counter Terrorist Created');
                    p = new CounterTerrorist();
                    break;
                default:
                    console.log('Unreachable code!');
            }

            this.hm['type'] = p;
        }
        return p;
    }
}

class CounterStrike {
    private static playerType: string[] = ['Terrorist', 'CounterTerrorist'];
    private static weapons: string[] = [
        'AK-47',
        'Maverick',
        'Gut Knife',
        'Desert Eagle',
    ];

    public static setup() {
        for (let i = 0; i < 10; i++) {
            let p: Player = PlayerFactory.getPlayer(this.getRandPlayerType());
            p.assignWeapon(this.getRandWeapon());
            p.mission();
        }
    }

    public static getRandPlayerType(): string {
        const randInt: number = Math.floor(
            Math.random() * this.playerType.length
        );
        return this.playerType[randInt];
    }

    public static getRandWeapon(): string {
        const randInt: number = Math.floor(Math.random() * this.weapons.length);
        return this.weapons[randInt];
    }
}

CounterStrike.setup();
