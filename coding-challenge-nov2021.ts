// enums
enum Direction {
    //% block="forward"
    Forward,
    //% block="back"
    Back,
    //% block="left"
    Left,
    //% block="right"
    Right,
    //% block="up"
    Up,
    //% block="down"
    Down
}

// global variables
const bookshelf = 47;
const laundry = 724;

const directions = [
    FORWARD,
    BACK,
    LEFT,
    RIGHT,
    UP,
    DOWN
];

//% block="LPC" weight=200 color=#3296BC icon="\uf57e"
namespace lpc {
    /**
     * Pick up books in the d direction
     */
    //% block="Pick up books %d"
    export function pickupBooks(d: Direction): void {
        const direction = directions[d];
        if (agent.inspect(AgentInspection.Block, direction) == bookshelf) {
            agent.destroy(d);
            const count = agent.getItemCount(1);
            agent.setItem(bookshelf, count + 1, 1)
        }
    }

    /**
     * Place books in the d direction
     */
    //% block="Place down books %d"
    export function placeBooks(d: Direction): void {
        const direction = directions[d];
        if (agent.getItemCount(1) > 0 && agent.getItemDetail(1) == bookshelf) {
            agent.place(direction);
        }
    }

    /**
     * Agent walks upstairs
     */
    //% block="Agent walks upstairs"
    export function walkUpstairs() {
        agent.move(directions[Direction.Up], 1);
        agent.move(directions[Direction.Down], 1);
    }

    /**
     * Pick up laundry in the d direction
     */
    //% block="Pick up laundry %d"
    export function pickupLaundry(d: Direction): void {
        const direction = directions[d];
        if (agent.inspect(AgentInspection.Block, direction) == laundry) {
            agent.destroy(direction);
            const count = agent.getItemCount(2);
            agent.setItem(laundry, count + 1, 2)
        }
    }

    /**
     * Place laundry in the d direction
     */
    //% block="Place down laundry %d"
    export function placeLaundry(d: Direction): void {
        const direction = directions[d];
        if (agent.getItemCount(2) > 0 && agent.getItemDetail(2) == laundry) {
            agent.place(direction);
        }
    }
}
