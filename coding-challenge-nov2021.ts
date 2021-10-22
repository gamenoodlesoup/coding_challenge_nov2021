// enums
enum Direction {
    //% block="forward"
    Forward,
    //% block="back"
    Back,
    //% block="left"
    Left,
    //% block="right"
    Right
}

const bookshelf = 47;
const laundry = 724;

const directions = [
    FORWARD,
    BACK,
    LEFT,
    RIGHT
];

//%  block="Innovation Day" weight=200 color=#3296BC icon="\u1f30e"
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
            agent.setItem(bookshelfItem, count++, 1)
        }
    }

    /**
     * Place books in the d direction
     */
    //% block="Place down books %d"
    export function placeBooks(d: Direction): void {
        const direction = directions[d];
        if (agent.getItemCount(1) > 0 && agent.get_item_detail(1) == bookshelf) {
            agent.place(direction);
        }
    }

    /**
     * Agent walks upstairs
     */
    //% block="Agent walks upstairs"
    export function walkUpstairs() {
        agent.move(UP, 1);
        agent.move(FORWARD, 1);
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
            agent.setItem(bookshelfItem, count++, 2)
        }
    }

    /**
     * Place laundry in the d direction
     */
    //% block="Place down laundry %d"
    export function placeLaundry(): void {
        const direction = directions[d];
        if (agent.getItemCount(2) > 0 && agent.get_item_detail(2) == laundry) {
            agent.place(direction);
        }
    }
}
