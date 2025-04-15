import { Player, RsvpEntry, RsvpStatus } from "../models/RsvpModels";
import { Logger } from "../utils/Logger";

export class RsvpService {
    private rsvpMap: Map<string, RsvpEntry> = new Map();

    constructor(private logger: Logger) { }

    addOrUpdateRsvp(player: Player, status: RsvpStatus): void {
        const entry: RsvpEntry = { player, status };
        this.rsvpMap.set(player.id, entry);
        this.logger.log(`RSVP updated for ${player.name}: ${status}`);
    }

    getConfirmedAttendees(): Player[] {
        return Array.from(this.rsvpMap.values())
            .filter(entry => entry.status === "Yes")
            .map(entry => entry.player);
    }

    getCounts(): {
        total: number;
        confirmed: number;
        declined: number;
    } {
        let confirmed = 0;
        let declined = 0;

        for (const entry of this.rsvpMap.values()) {
            if (entry.status === "Yes") confirmed++;
            if (entry.status === "No") declined++;
        }

        return {
            total: this.rsvpMap.size,
            confirmed,
            declined
        };
    }
}
