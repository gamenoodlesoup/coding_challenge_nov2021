// global variables
const bookshelf = 47;
const laundry = 724;

//% block="LPC" weight=200 color=#3296BC icon="\uf0c9"
namespace lpc {
    /**
     * Pick up books in the d direction
     */
    //% block="Pick up books %d"
    export function pickupBooks(direction: SixDirection): void {
        if (agent.inspect(AgentInspection.Block, direction) == bookshelf) {
            agent.destroy(direction);
            const count = agent.getItemCount(1);
            agent.setItem(bookshelf, count + 1, 1)
        }
    }
    
    /**
     * Detect whether there are books in the d direction
     */
    //% block="Detect books %d"
    export function detectBooks(direction: SixDirection): boolean {
        return agent.inspect(AgentInspection.Block, direction) == bookshelf

    /**
     * Place books in the d direction
     */
    //% block="Place down books %d"
    export function placeBooks(direction: SixDirection): void {
        if (agent.getItemCount(1) > 0 && agent.getItemDetail(1) == bookshelf) {
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
     * Agent walks downstairs
     */
    //% block="Agent walks downstairs"
    export function walkUpstairs() {
        agent.move(FORWARD, 1);
        agent.move(DOWN, 1);
    }


    /**
     * Pick up laundry in the d direction
     */
    //% block="Pick up laundry %d"
    export function pickupLaundry(direction: SixDirection): void {
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
    export function placeLaundry(direction: SixDirection): void {
        if (agent.getItemCount(2) > 0 && agent.getItemDetail(2) == laundry) {
            agent.place(direction);
        }
    }
        
    /**
     * Detect whether there are laundry in the d direction
     */
    //% block="Detect laundry %d"
    export function detectBooks(direction: SixDirection): boolean {
        return agent.inspect(AgentInspection.Block, direction) == laundry
}
